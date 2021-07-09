"use strict";
// PRODUCT
// ----------------
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.useSearchQuery = void 0;
var product_1 = require("../../routes/product");
var react_query_1 = require("react-query");
function useSearchQuery(params) {
    if (params === void 0) { params = { limit: 10 }; }
    var limit = params.limit, query = __rest(params, ["limit"]);
    return react_query_1.useQuery(["search", params], function () { return product_1.searchProducts(params); }, {
        enabled: Object.values(query).some(function (val) { return !!val; })
    });
}
exports.useSearchQuery = useSearchQuery;
