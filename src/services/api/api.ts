import { makeHttpActions } from './httpActions';
import { Auth, makeAuthApi } from './resources/auth/auth';
import { Client, makeClientApi } from './resources/client/client';
import { Workspace, makeWorkspaceApi } from './resources/workspace/workspace';

export type Api = {
  client: Client;
  auth: Auth;
  workspace: Workspace;
};

type MakerApi = () => Api;

function makeApiFactory(): MakerApi {
  let instance: Api | null = null;
  const httpActions = makeHttpActions();
  return () => {
    if (!instance) {
      const auth = makeAuthApi();
      instance = {
        auth,
        client: makeClientApi({ httpActions, auth }),
        workspace: makeWorkspaceApi({ httpActions, auth }),
      };
      return instance;
    }
    return instance;
  };
}

export const getApi = makeApiFactory();
