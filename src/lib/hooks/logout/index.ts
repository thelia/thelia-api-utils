import { logout } from '../../routes/logout';
import { queryClient } from '../../queryClient';
import { useMutation } from 'react-query';

export function useLogout() {
  return useMutation(() => logout(), {
    onSuccess: () => {
      queryClient.setQueryData('customer', undefined);
    },
  });
}
