// PRODUCT
// ----------------

import { searchProducts } from '../../routes/product';
import { useQuery } from 'react-query';

export function useSearchProductsQuery(params = { limit: 10 }) {
  const { limit, ...query } = params;

  return useQuery(['search-products', params], () => searchProducts(params), {
    enabled: Object.values(query).some((val) => !!val),
  });
}
