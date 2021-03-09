import { HttpActions } from './httpActions';
import { Auth } from './resources/auth/auth';

export type ResourceApiArgs = {
  httpActions: HttpActions;
  auth: Auth;
};

export type DomainType = 'baseApi';
