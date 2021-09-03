import { CheckoutRequest, CheckoutResponse } from '../../../types';
import { getCheckout, setCheckout } from '../../routes/checkout';
import { useMutation, useQuery } from 'react-query';

import { queryClient } from '../../queryClient';

export function useFinalCheckout() {
  return useMutation(
    (data: CheckoutRequest) => setCheckout({ ...data, needValidate: true }),
    {
      onSuccess: (response: CheckoutResponse) => {
        if (response.isComplete) {
          window.location.assign(`${window.location.origin}/order/pay`);
        }
      },
    }
  );
}

export function useGetCheckout() {
  return useQuery(['checkout'], () => getCheckout(), {
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
    },
  });
}

export function useSetCheckout() {
  return useMutation(
    (data: CheckoutRequest) => setCheckout({ ...data, needValidate: false }),
    {
      onSuccess: (response: CheckoutResponse) => {
        queryClient.setQueryData('checkout', response);
        queryClient.invalidateQueries('cart');
      },
    }
  );
}
