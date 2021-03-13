import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { DomainType } from '../model';
import { getAxiosInstance, makeObservableHttpAction } from './helpers';

type HttpActionParams = {
  url: string;
  options?: AxiosRequestConfig;
  data?: any;
  domainType?: DomainType;
};

export function makeHttpActions() {
  return {
    get<T>(args: HttpActionParams): Observable<AxiosResponse<T>> {
      const { url, options, data, domainType } = args;
      const axiosInstance = getAxiosInstance(domainType);
      const axiosPromise = axiosInstance.get<T>(url, { ...options, params: data });

      return makeObservableHttpAction<T>(axiosPromise);
    },
    post<T>(args: HttpActionParams): Observable<AxiosResponse<T>> {
      const { url, options, data, domainType } = args;
      const axiosInstance = getAxiosInstance(domainType);
      const axiosPromise = axiosInstance.post(url, data, options);

      return makeObservableHttpAction<T>(axiosPromise);
    },
    del<T>(args: HttpActionParams): Observable<AxiosResponse<T>> {
      const { url, options, data, domainType } = args;
      const axiosInstance = getAxiosInstance(domainType);
      const axiosPromise = axiosInstance.delete(url, { ...options, data });

      return makeObservableHttpAction<T>(axiosPromise);
    },
    put<T>(args: HttpActionParams): Observable<AxiosResponse<T>> {
      const { url, options, data, domainType } = args;
      const axiosInstance = getAxiosInstance(domainType);
      const axiosPromise = axiosInstance.put(url, data, options);

      return makeObservableHttpAction<T>(axiosPromise);
    },
  };
}

export type HttpActions = ReturnType<typeof makeHttpActions>;
