import axios, { AxiosRequestConfig } from "axios";

import qs from "qs";

function devPrefix() {
  return window.location.href.includes("index_dev.php") ? "/index_dev.php" : "";
}

export const ApiInstance = axios.create({
  baseURL: `${devPrefix()}/open_api`,
  paramsSerializer: (params) => {
    return qs.stringify(params, { encode: false });
  },
});

export default function fetcher(url: string, config?: AxiosRequestConfig) {
  return ApiInstance(url, config);
}
