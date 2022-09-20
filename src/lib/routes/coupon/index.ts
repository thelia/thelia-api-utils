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

export function couponClear(id: string) {
  return fetcher(`/coupon/clear/${id}`);
}

export function couponClearAll() {
    return fetcher(`/coupon/clear_all`);
}
