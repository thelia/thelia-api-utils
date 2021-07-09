import fetcher from "../../fetcher";
// CART
export function cartQuery() {
    return fetcher(`/cart`);
}
export async function addToCart({ pseId, quantity, append = true, }) {
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
    }
    catch (error) {
        throw error;
    }
}
export function cartItemUpdate(id, quantity) {
    return fetcher(`/cart/${id}`, {
        method: "PATCH",
        data: {
            quantity,
        },
    });
}
export function cartItemDelete(id) {
    return fetcher(`/cart/${id}`, {
        method: "DELETE",
    });
}
