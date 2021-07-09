"use strict";
exports.__esModule = true;
exports.useCheckoutCreate = void 0;
var checkout_1 = require("../../routes/checkout");
var react_query_1 = require("react-query");
function useCheckoutCreate() {
    return react_query_1.useMutation(function (data) { return checkout_1.checkoutCreate(data); }, {
        onSuccess: function (response) {
            if (response.data.isComplete) {
                window.location.assign(window.location.origin + "/order/pay");
            }
        }
    });
}
exports.useCheckoutCreate = useCheckoutCreate;
