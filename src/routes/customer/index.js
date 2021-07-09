"use strict";
exports.__esModule = true;
exports.getCustomer = void 0;
var fetcher_1 = require("../../fetcher");
// CUSTOMER
function getCustomer() {
    return fetcher_1["default"]("/customer");
}
exports.getCustomer = getCustomer;
