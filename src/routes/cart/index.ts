import fetcher from "../../fetcher";

// CART
export function cartQuery() {
  return fetcher(`/cart`);
}

export async function addToCart({
  pseId,
  quantity,
  append = true,
}: {
  pseId: number;
  quantity: number;
  append: boolean;
}) {
  try {
    const cartResponse = await fetcher(`/cart/add`, {
      method: "POST",
      data: {
        pseId,
        quantity,
        append,
      },
    });
    return cartResponse;
  } catch (error) {
    throw error;
  }
}

export function cartItemUpdate(id: number, quantity: number) {
  return fetcher(`/cart/${id}`, {
    method: "PATCH",
    data: {
      quantity,
    },
  });
}

export function cartItemDelete(id: number) {
  return fetcher(`/cart/${id}`, {
    method: "DELETE",
  });
}
