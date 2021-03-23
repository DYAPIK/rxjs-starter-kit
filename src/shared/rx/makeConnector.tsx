import React, { useEffect, useState, useCallback } from 'react';
import { Observable } from 'rxjs';

import { Features, useFeature } from 'core/featureProvider';
import { FeatureStore } from 'shared/featureFactory';

export type MakeConnectorProps = {
  featureName: keyof Features
};

export type ContainerProps<T> = {
  getFeatureStore: () => T;
};

export function makeConnector<FS extends FeatureStore<unknown, unknown>>(args: MakeConnectorProps) {
  return function connect<ComponentProps>(
    handleModel: (model: FS['model']) => Observable<ComponentProps>,
    initialProps: ComponentProps,
    Component: React.FunctionComponent<ComponentProps & ContainerProps<FS>>,
  ): React.ComponentType {
    return () => {
      const [state, setState] = useState<ComponentProps>(initialProps);
      const featureStore = useFeature(args.featureName);
      const getFeatureStore = useCallback(() => featureStore, []);
      useEffect(() => {
        const combined$ = handleModel(featureStore.model);
        const subscription = combined$.subscribe(setState);
        return () => subscription.unsubscribe();
      }, []);

      return <Component {...state} getFeatureStore={getFeatureStore as any} />;
    };
  };
}
