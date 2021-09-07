import { fetcher } from '../../fetcher';

// COUPON
export function couponCreate(code: string) {
  return fetcher(`/coupon`, {
    method: 'POST',
    data: {
      code,
    },
  });
}
