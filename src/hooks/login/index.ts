import { login } from "../../routes/login";
import { queryClient } from "../../queryClient";
import { useMutation } from "react-query";

// LOGIN
export function useLogin(reload = true) {
  return useMutation(
    ({
      email,
      password,
      rememberMe = true,
    }: {
      email: string;
      password: string;
      rememberMe: boolean;
    }) =>
      login({
        email,
        password,
        rememberMe,
      }),
    {
      onSuccess: () => {
        if (reload) {
          window.location.reload();
        } else {
          queryClient.invalidateQueries("customer");
        }
      },
    }
  );
}
