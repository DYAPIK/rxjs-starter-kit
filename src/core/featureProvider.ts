import { useContext, createContext } from 'react';

import { ClientFeatureStore } from 'features/clients';

export type Features = {
  readonly clients: ClientFeatureStore;
};

const featuresContext = createContext<Features | null>(null);
const FeaturesProvider = featuresContext.Provider;

function useFeature<T extends keyof Features>(featureName: T) {
  const context = useContext(featuresContext);
  if (context) {
    return context[featureName];
  }
  throw Error('Feature Provider or features in Feature Provider are not provided!');
}

export { useFeature, FeaturesProvider, featuresContext };
