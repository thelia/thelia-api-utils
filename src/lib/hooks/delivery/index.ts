// DELIVERY MODULES

import { getDeliveryModes, getDeliveryModules, getSimpleDeliveryModules } from '../../routes/delivery';

import { useQuery } from 'react-query';

export function useDeliveryModulessQuery(addressId: number) {
  const { data } = useDeliveryModes();
  return useQuery(
    ['delivery_modules', addressId],
    () => getDeliveryModules(addressId),
    {
      enabled: !!data,
    }
  );
}

export function useDeliveryModes() {
  return useQuery(['delivery_modes'], () => getDeliveryModes());
}

export function useSimpleDeliveryModulessQuery() {
  return useQuery(
    ['simple_delivery_modules'],
    () => getSimpleDeliveryModules()
  );
}
