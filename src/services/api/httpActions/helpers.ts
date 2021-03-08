import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { Observable, Subscriber } from 'rxjs';

import { getEnvParams } from 'core';

import { isErrorStatus, makeApiError } from '../error';
import { DomainType } from '../model';

function getBaseUrl(domain: DomainType | undefined = 'baseApi') {
  const baseURL = getEnvParams().baseAPI!;
  const urls: Record<DomainType, string> = {
    baseApi: baseURL,
  };
  return urls[domain];
}

function makeHandleResponse<T>(subscriber: Subscriber<AxiosResponse<T>>) {
  return (response: AxiosResponse<T>) => {
    if (isErrorStatus(response.status)) {
      subscriber.error(makeApiError(response));
      return;
    }
    subscriber.next(response);
  }
}

export function getAxiosInstance(domain: DomainType | undefined = 'baseApi') {
  const axiosConfig = {
    validateStatus: (status: number) => status <= 526,
    withCredentials: false,
  };
  return axios.create({ ...axiosConfig, baseURL: getBaseUrl(domain) });
}

export function makeObservableHttpAction<T>(axiosPromise: AxiosPromise<T>): Observable<AxiosResponse<T>> {
  return new Observable(subscriber => {
    axiosPromise
      .then(makeHandleResponse<T>(subscriber))
      .catch(error => subscriber.error(error));
  });
}
