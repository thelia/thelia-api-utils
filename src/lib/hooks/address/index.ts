import {
  addressCreate,
  addressDelete,
  addressQuery,
  addressUpdate,
} from '../../routes/address';
import { useMutation, useQuery } from 'react-query';

import { queryClient } from '../../queryClient';

// ADDRESS
export function useAddressQuery() {
  return useQuery('addresses', () => addressQuery());
}

export function useAddressCreate() {
  return useMutation((data: any) => addressCreate(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('addresses');
    },
  });
}

export function useAddressUpdate() {
  return useMutation(
    ({ id, data }: { readonly id: number; readonly data: any }) =>
      addressUpdate(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('addresses');
      },
    }
  );
}

export function useAddressDelete() {
  return useMutation((id: number) => addressDelete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('addresses');
    },
  });
}
