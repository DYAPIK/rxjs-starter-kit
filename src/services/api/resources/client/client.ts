import { ResourceApiArgs } from '../../model';

export function makeClientApi({ httpActions, auth }: ResourceApiArgs) {
  return {
    loadClients(workspaceId: number) {
      return httpActions.get({
        url: `/workspaces/${workspaceId}/clients`,
        options: { headers: auth.getClockifyHeader() },
      });
    },
  };
}

export type Client = ReturnType<typeof makeClientApi>;

// 5f8f06da43b3c47f688296d9
