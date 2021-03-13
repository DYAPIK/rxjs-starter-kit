import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { Observable, Subscriber } from 'rxjs';

import { getEnvParams } from 'core';

import { isErrorStatus, makeApiError } from '../error';
import { DomainType } from '../model';
import { axiosConfig } from './defaultAxiosConfig';

function getAxiosInstance(domain: DomainType | undefined = 'baseApi') {
  return axios.create({ ...axiosConfig, baseURL: getBaseUrl(domain) });
}

function getBaseUrl(domain: DomainType | undefined = 'baseApi') {
  const baseURL = getEnvParams().baseAPI!;
  const urls: Record<DomainType, string> = {
    baseApi: baseURL,
  };
  return urls[domain];
}

function makeObservableHttpAction<T>(axiosPromise: AxiosPromise<T>): Observable<AxiosResponse<T>> {
  return new Observable(subscriber => {
    axiosPromise
      .then(makeHandleResponse<T>(subscriber))
      .catch(error => subscriber.error(error));
  });
}

function makeHandleResponse<T>(subscriber: Subscriber<AxiosResponse<T>>) {
  return (response: AxiosResponse<T>) => {
    if (isErrorStatus(response.status)) {
      subscriber.error(makeApiError(response));
      return;
    }
    subscriber.next(response);
  };
}

export { makeObservableHttpAction, getAxiosInstance };
