// DELIVERY MODULES

import { fetcher } from '../../fetcher';

export function getDeliveryModules(addressId: number | null) {
  return fetcher(`/delivery/modules`, {
    method: 'GET',
    params: {
      addressId,
    },
  });
}

export async function getDeliveryModes() {
  const response = await fetcher(`/delivery/modules`);
  if (response && Array.isArray(response)) {
    return [
      ...new Set(
        response.map((m: { readonly deliveryMode: string }) => m.deliveryMode)
      ),
    ];
  }
  return undefined;
}

export function getSimpleDeliveryModules() {
  return fetcher(`/delivery/simple-modules`, {
    method: 'GET'
  });
}
