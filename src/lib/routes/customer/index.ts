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
