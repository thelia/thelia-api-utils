import { getCustomer } from "../../routes/customer";
import { useQuery } from "react-query";

// CUSTOMER
export function useCustomer() {
  return useQuery("customer", () => getCustomer());
}
