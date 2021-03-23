import { Services } from 'services';
import { getApi } from 'services/api';

function initServices(): Services {
  return {
    api: getApi(),
  };
}

export { initServices };
