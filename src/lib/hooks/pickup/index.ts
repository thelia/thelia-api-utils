import { getPickupLocations } from '../../routes/pickup';
import { useQuery } from 'react-query';

// PICKUP LOCATIONS
export function usePickupLocations(
  params = { address: null, city: null, zipCode: null }
) {
  const res = useQuery(
    ['pickup_locations', params],
    () => getPickupLocations(params),
    {
      enabled: !!params.address && !!params.city && !!params.zipCode && true,
      suspense: false,
    }
  );

  return res;
}
