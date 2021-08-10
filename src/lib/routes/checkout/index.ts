import fetcher from "../../fetcher";

export function checkoutCreate(data = {}) {
  return fetcher(`/checkout`, {
    method: "POST",
    data,
  });
}
