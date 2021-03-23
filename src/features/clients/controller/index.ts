import { Observable } from 'rxjs';

import { Services } from 'services';

import { ClientsModel } from '../model';

function createClientController(services: Services, model: ClientsModel) {
  return {

    loadWorkspaces() {
      onEmit(
        services.api.workspace.loadWorkspaces(),
        workspaces => {
          model.data.workspaces$.next(workspaces);
          model.edit.clients$.next([1, 2, 3]);
        },
      );
    },

  };
}

export type ClientController = ReturnType<typeof createClientController>;

export { createClientController };
