import { fetcher } from '../../fetcher';

// PAYMENT MODULES
export function getPaymentModules() {
  return fetcher(`/payment/modules`);
}
