import { Services } from 'services';

import { FeatureStore } from './types';

function makeFeatureStoreFactory<M, C>(
  createModel: () => M,
  createController: (services: Services, model: M) => C,
) {
  return (services: Services): FeatureStore<M, C> => {
    const model = createModel();
    return { model, controller: createController(services, model) };
  };
}

export { makeFeatureStoreFactory };
