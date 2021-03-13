import { FeatureDeps } from 'shared/types';

import { ClientsModel } from '../model';

function createClientController({ api, model }: FeatureDeps<ClientsModel>) {
  return {
    loadWorkspaces() {
      api.workspace.loadWorkspaces().subscribe(x => {
        model.workspaces$.next(x);
      });
    },
  };
}

export type ClientController = ReturnType<typeof createClientController>;

export { createClientController };
