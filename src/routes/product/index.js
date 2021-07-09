"use strict";
// PRODUCT
// ----------------
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.searchProducts = void 0;
var fetcher_1 = require("../../fetcher");
function searchProducts(params) {
    if (params === void 0) { params = { limit: 10 }; }
    var limit = params.limit;
    return fetcher_1["default"]("/product/search", {
        params: __assign(__assign({}, params), { limit: limit })
    });
}
exports.searchProducts = searchProducts;
