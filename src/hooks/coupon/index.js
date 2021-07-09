"use strict";
exports.__esModule = true;
exports.useCouponCreate = void 0;
var coupon_1 = require("../../routes/coupon");
var queryClient_1 = require("../../queryClient");
var react_query_1 = require("react-query");
// COUPON
function useCouponCreate() {
    return react_query_1.useMutation(function (code) { return coupon_1.couponCreate(code); }, {
        onSuccess: function () {
            queryClient_1.queryClient.invalidateQueries("cart");
        }
    });
}
exports.useCouponCreate = useCouponCreate;
