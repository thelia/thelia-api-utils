import fetcher from "../../fetcher";

// LOGIN
export function login(data = {}) {
  return fetcher(`/login`, {
    method: "POST",
    data,
  });
}
