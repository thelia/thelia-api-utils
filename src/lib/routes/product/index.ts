// PRODUCT
// ----------------

import { fetcher } from '../../fetcher';

export function searchProducts(params = { limit: 10 }) {
  const { limit } = params;

  return fetcher(`/product/search`, {
    params: {
      ...params,
      limit,
    },
  });
}
