import { ResourceApiArgs } from '../model';

export function makeUserApi({ httpActions, auth }: ResourceApiArgs) {
  return {
    loadUser() {
      return httpActions.get({
        url: '/test',
        options: { headers: auth.getClockifyHeader() },
      });
    },
  };
}

export type User = ReturnType<typeof makeUserApi>;
