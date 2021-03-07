import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

import { getEnvParams } from 'core';

type HttpActionParams = {
  url: string;
  options?: AxiosRequestConfig;
  data?: any;
  domainType?: DomainType;
}

type DomainType = 'baseApi';

export function makeHttpActions() {  
  return {
    get<T>(args: HttpActionParams): AxiosPromise<T> {
      const { url, options, data, domainType } = args;

      const axiosInstance = getAxiosInstance(domainType);
      return axiosInstance.get(url, { ...options, params: data });
    },
    post<T>(args: HttpActionParams): AxiosPromise<T> {
      const { url, options, data, domainType } = args;

      const axiosInstance = getAxiosInstance(domainType);
      return axiosInstance.post(url, data, options)
    },
    del<T>(args: HttpActionParams): AxiosPromise<T> {
      const { url, options, data, domainType } = args;

      const axiosInstance = getAxiosInstance(domainType);
      return axiosInstance.delete(url, { ...options, data } as any);
    },
    put<T>(args: HttpActionParams): AxiosPromise<T> {
      const { url, options, data, domainType } = args;

      const axiosInstance = getAxiosInstance(domainType);
      return axiosInstance.put(url, data, options);
    },
  };
}

export type HttpActions = ReturnType<typeof makeHttpActions>;

function getAxiosInstance(domain: DomainType | undefined = 'baseApi') {
  const axiosConfig = {
    validateStatus: (status: number) => status <= 526,
    withCredentials: false,
  };
  return axios.create({ ...axiosConfig, baseURL: getBaseUrl(domain) });
}

function getBaseUrl(domain: DomainType | undefined = 'baseApi') {
  const baseURL = getEnvParams().baseAPI!;
  const urls: Record<DomainType, string> = {
    baseApi: baseURL,
  };
  return urls[domain];
}
