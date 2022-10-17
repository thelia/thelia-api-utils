// PRODUCT
// ----------------

import { searchCategories } from '../../routes/category';
import { useQuery } from 'react-query';

export function useSearchCategoriesQuery(params = { limit: 10 }, options = {}) {
  const { limit, ...query } = params;

  return useQuery(
    ['search-categories', params],
    () => searchCategories(params),
    {
      enabled: Object.values(query).some((val) => !!val),
      ...options,
    }
  );
}
