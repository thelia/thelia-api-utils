"use strict";
exports.__esModule = true;
exports.usePaymentModulessQuery = void 0;
var payment_1 = require("../../routes/payment");
var react_query_1 = require("react-query");
// PAYMENT MODULES
function usePaymentModulessQuery() {
    return react_query_1.useQuery(["payment_modules"], function () { return payment_1.getPaymentModules(); });
}
exports.usePaymentModulessQuery = usePaymentModulessQuery;
