import { AxiosResponse } from 'axios';

export type ApiError = {
  message: string;
  status: number;
};

export function isErrorStatus(status: number): boolean {
  return status >= 400 && status <= 526;
}

export function makeApiError(response: AxiosResponse): ApiError {
  return {
    message: response.data.message,
    status: response.status,
  };
}

export function isApiError(arg: any): arg is ApiError {
  return typeof arg.message === 'string' && typeof arg.status === 'number';
}
