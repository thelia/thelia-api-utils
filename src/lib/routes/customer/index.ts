import fetcher from "../../fetcher";

// CUSTOMER
export function getCustomer() {
  return fetcher(`/customer`);
}
