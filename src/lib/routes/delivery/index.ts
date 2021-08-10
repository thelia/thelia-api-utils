// DELIVERY MODULES

import fetcher from '../../fetcher';

export function getDeliveryModules(addressId: number | null) {
  return fetcher(`/delivery/modules`, {
    params: {
      addressId,
    },
  });
}

export async function getDeliveryModes() {
  const response = await fetcher(`/delivery/modules`);
  if (response.data) {
    return {
      ...response,
      data: [
        ...new Set(
          response.data.map(
            (m: { readonly deliveryMode: string }) => m.deliveryMode
          )
        ),
      ],
    };
  }
  return undefined;
}
