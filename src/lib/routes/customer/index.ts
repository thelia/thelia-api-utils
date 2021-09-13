import { fetcher } from '../../fetcher';

// CUSTOMER
export function getCustomer() {
  return fetcher(`/customer`);
}

export function patchCustomer(data) {
  return fetcher(`/customer`, {
    method: 'PATCH',
    data,
  });
}

export function createCustomer(data) {
  return fetcher(`/customer`, {
    method: 'POST',
    data,
  });
}
