import { HttpActions } from '../httpActions';
import { Auth } from './auth/auth';

export type ResourceApiArgs = {
  httpActions: HttpActions;
  auth: Auth;
};
