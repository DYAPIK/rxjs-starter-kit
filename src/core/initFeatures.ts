import * as features from 'features';
import { Services } from 'services';

import { Features } from './featureProvider';

function initFeatures(services: Services): Features {
  return {
    clients: features.clients.clientsStoreFactory(services),
  };
}

export { initFeatures };
