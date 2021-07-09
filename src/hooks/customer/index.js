"use strict";
exports.__esModule = true;
exports.useCustomer = void 0;
var customer_1 = require("../../routes/customer");
var react_query_1 = require("react-query");
// CUSTOMER
function useCustomer() {
    return react_query_1.useQuery("customer", function () { return customer_1.getCustomer(); });
}
exports.useCustomer = useCustomer;
