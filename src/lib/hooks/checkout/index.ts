import { checkoutCreate } from '../../routes/checkout';
import { useMutation } from 'react-query';

export function useCheckoutCreate() {
  return useMutation((data: any) => checkoutCreate(data), {
    onSuccess: (response) => {
      if (response.isComplete) {
        window.location.assign(`${window.location.origin}/order/pay`);
      }
    },
  });
}
