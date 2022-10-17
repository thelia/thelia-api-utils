// PRODUCT
// ----------------

import { fetcher } from '../../fetcher';

export function searchCategories(params = { limit: 10 }) {
  const { limit } = params;

  return fetcher(`/category/search`, {
    params: {
      ...params,
      limit,
    },
  });
}
