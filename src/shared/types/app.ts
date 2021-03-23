import { Services } from 'services';

export type FeatureDeps<Model> = {
  services: Services
  model: Model;
};
