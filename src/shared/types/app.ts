import { Api } from 'services/api';

export type FeatureDeps<Model> = {
  api: Api;
  model: Model;
};
