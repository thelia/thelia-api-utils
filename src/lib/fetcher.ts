import axios, { AxiosRequestConfig } from 'axios';

import { stringify } from 'qs';

function devPrefix() {
  return window.location.href.includes('index_dev.php') ? '/index_dev.php' : '';
}

export const ApiInstance = axios.create({
  baseURL: `${devPrefix()}/open_api`,
  paramsSerializer: (params) => {
    return stringify(params, { encode: false });
  },
});

export default async function fetcher(
  url: string,
  config?: AxiosRequestConfig,
  onlyData = true
) {
  try {
    const response = await ApiInstance(url, config);
    if (onlyData) {
      return response.data;
    }
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
