import { handleHttpObservable } from 'services/api/httpActions';

import { ResourceApiArgs } from '../../model';

export function makeWorkspaceApi({ httpActions, auth }: ResourceApiArgs) {
  return {
    loadWorkspaces() {
      const response$ = httpActions.get<string[]>({
        url: '/workspaces',
        options: { headers: auth.getClockifyHeader() },
      });
      return handleHttpObservable(response$);
    },
  };
}

export type Workspace = ReturnType<typeof makeWorkspaceApi>;

// 5f8f06da43b3c47f688296d9
