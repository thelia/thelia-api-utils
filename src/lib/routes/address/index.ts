import { fetcher } from '../../fetcher';

// ADDRESS
export function addressQuery() {
  return fetcher(`/address`, {
    method: 'GET',
  });
}

export function addressCreate(data = {}) {
  return fetcher(`/address`, {
    method: 'POST',
    data,
  });
}

export function addressUpdate(id: number, data = {}) {
  return fetcher(`/address/${id}`, {
    method: 'PATCH',
    data,
  });
}

export function addressDelete(id: number) {
  return fetcher(`/address/${id}`, {
    method: 'DELETE',
  });
}
