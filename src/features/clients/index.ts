import { makeFeatureStoreFactory } from 'shared/featureFactory';

import * as view from './view';
import { createClientController } from './controller';
import { createModel } from './model';

const clientsStoreFactory = makeFeatureStoreFactory(createModel, createClientController);

export type ClientFeatureStore = ReturnType<typeof clientsStoreFactory>;

export { view, clientsStoreFactory };
