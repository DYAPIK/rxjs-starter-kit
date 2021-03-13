import { Api } from 'services/api/api';

import * as view from './view';
import { createClientController } from './controller';
import { createModel } from './model';

function makeFeature(api: Api) {
  const model = createModel();
  return {
    model,
    controller: createClientController({ api, model }),
  };
}

export type ClientFeature = ReturnType<typeof makeFeature>;

export { view, makeFeature };
