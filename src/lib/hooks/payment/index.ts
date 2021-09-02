import { getPaymentModules } from '../../routes/payment';
import { useQuery } from 'react-query';

// PAYMENT MODULES
export function usePaymentModulessQuery() {
  return useQuery(['payment_modules'], () => getPaymentModules());
}
