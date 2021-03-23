import { BehaviorSubject } from 'rxjs';

export function createModel() {
  return {
    data: {
      workspaces$: new BehaviorSubject<string[]>([]),
    },
    edit: {
      clients$: new BehaviorSubject<number[]>([]),
    },
  };
}

export type ClientsModel = ReturnType<typeof createModel>;
