import * as features from 'features';
import { Api } from 'services/api/api';

import { Features } from './featureProvider';

function initFeatures(api: Api): Features {
  return {
    clients: features.clients.makeFeature(api),
  };
}

export { initFeatures };
