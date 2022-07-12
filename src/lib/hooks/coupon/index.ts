import { couponClearAll,couponCreate  } from '../../routes/coupon';
import { queryClient } from '../../queryClient';
import { useMutation, useQuery } from 'react-query';

// COUPON
export function useCouponCreate() {
  return useMutation((code: string) => couponCreate(code), {
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
    },
  });
}

export function useCouponClearAll(id : number) {
  return useQuery(`couponClearAll_${id}`, () => couponClearAll(), {
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
    },
  });
}
