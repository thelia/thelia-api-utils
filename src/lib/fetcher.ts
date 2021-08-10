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

export default function fetcher(url: string, config?: AxiosRequestConfig) {
  return ApiInstance(url, config);
}
