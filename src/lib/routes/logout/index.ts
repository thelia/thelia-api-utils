import { fetcher } from '../../fetcher';

export function logout() {
  return fetcher(`/logout`, {
    method: 'POST',
  });
}
