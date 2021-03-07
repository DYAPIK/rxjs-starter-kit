import { makeHttpActions } from './httpActions';

import { Auth, makeAuthApi } from './resources/auth/auth';
import { User, makeUserApi } from './resources/user/user';

type Api = {
  user: User;
  auth: Auth;
};

type MakerApi = () => Api;

function getMakerApi(): MakerApi {
  let instance: Api | null = null;
  const httpActions = makeHttpActions();
  return () => {
    if (!instance) {
      const auth = makeAuthApi();
      instance = {
        auth,
        user: makeUserApi({ httpActions, auth }),
      };
      return instance;
    }
    return instance;
  }
}

export const makeApi = getMakerApi();
