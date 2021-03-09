import { AxiosRequestConfig } from 'axios';

export const axiosConfig: AxiosRequestConfig = {
  validateStatus: (status: number) => status <= 526,
  withCredentials: false,
};
