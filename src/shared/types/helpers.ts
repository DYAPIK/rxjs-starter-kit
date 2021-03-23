import { Observable } from 'rxjs';

export type GetModelState<T> = {
  [Key in keyof T]: T[Key] extends Observable<infer R> ? R : GetModelState<T[Key]>;
};
