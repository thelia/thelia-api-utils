import { fetcher } from '../../fetcher';

// PICKUP LOCATIONS
export function getPickupLocations(params = {}) {
  return fetcher(`/delivery/pickup-locations`, {
    method: 'GET',
    params,
  });
}
