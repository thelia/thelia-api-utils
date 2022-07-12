import { couponClearAll,couponCreate  } from '../../routes/coupon';
import { queryClient } from '../../queryClient';
import { useMutation } from 'react-query';

// COUPON
export function useCouponCreate() {
  return useMutation((code: string) => couponCreate(code), {
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
    },
  });
}

export function useCouponClearAll() {
  return useMutation(() => couponClearAll(), {
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
    },
  });
}
