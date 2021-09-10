import { getCustomer, patchCustomer, createCustomer } from '../../routes/customer';
import { useMutation, useQuery } from 'react-query';

import { queryClient } from '../../queryClient';

// CUSTOMER
export function useCustomer() {
  return useQuery('customer', () => getCustomer());
}

export function useCustomerUpdate() {
  return useMutation((data) => patchCustomer(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('customer');
    },
  });
}

export function useCustomerCreate() {
  return useMutation((data) => createCustomer(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('customer');
    },
  });
}
