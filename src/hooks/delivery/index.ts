// DELIVERY MODULES

import { getDeliveryModes, getDeliveryModules } from "../../routes/delivery";

import { useQuery } from "react-query";

export function useDeliveryModulessQuery(addressId: number) {
  const { data } = useDeliveryModes();
  return useQuery(
    ["delivery_modules", addressId],
    () => getDeliveryModules(addressId),
    {
      enabled: !!data,
    }
  );
}

export function useDeliveryModes() {
  return useQuery(["delivery_modes"], () => getDeliveryModes());
}
