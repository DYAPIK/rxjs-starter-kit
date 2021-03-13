import { BehaviorSubject } from 'rxjs';

export function createModel() {
  return {
    workspaces$: new BehaviorSubject<any[]>([]),
  };
}

export type ClientsModel = ReturnType<typeof createModel>;
