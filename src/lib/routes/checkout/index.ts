import { fetcher } from '../../fetcher';

export function getCheckout(params = {}) {
  return fetcher(`/checkout`, {
    method: 'GET',
    params,
  });
}

export function setCheckout(data = {}) {
  return fetcher(`/checkout`, {
    method: 'POST',
    data,
  });
}
