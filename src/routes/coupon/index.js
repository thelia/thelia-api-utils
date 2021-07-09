"use strict";
exports.__esModule = true;
exports.couponCreate = void 0;
var fetcher_1 = require("../../fetcher");
// COUPON
function couponCreate(code) {
    return fetcher_1["default"]("/coupon", {
        method: "POST",
        data: {
            code: code
        }
    });
}
exports.couponCreate = couponCreate;
