import {
  addToCart,
  cartItemDelete,
  cartItemUpdate,
  cartQuery,
} from "../../routes/cart";
import { useMutation, useQuery } from "react-query";

import { queryClient } from "../../queryClient";

// CART
export function useCartQuery() {
  return useQuery("cart", () => cartQuery(), {
    onSuccess: () => {
      queryClient.invalidateQueries("delivery_modules");
      queryClient.invalidateQueries("payment_modules");
    },
  });
}

export function useCartItemCreate() {
  return useMutation(
    ({
      pseId,
      quantity,
      append = true,
    }: {
      pseId: number;
      quantity: number;
      append: boolean;
    }) => addToCart({ pseId, quantity, append }),
    {
      onSuccess: (response) => {
        if (response.data.cart) {
          queryClient.setQueryData("cart", response.data.cart);
        }
      },
    }
  );
}

export function useCartItemUpdate(id: number) {
  return useMutation((quantity: number) => cartItemUpdate(id, quantity), {
    onSuccess: (response) => {
      if (response.data.cart) {
        queryClient.setQueryData("cart", response.data.cart);
      }
    },
  });
}

export function useCartItemDelete(id: number) {
  return useMutation(() => cartItemDelete(id), {
    onSuccess: (response) => {
      queryClient.setQueryData("cart", response.data);
    },
  });
}
