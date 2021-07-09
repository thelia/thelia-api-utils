"use strict";
exports.__esModule = true;
exports.getPaymentModules = void 0;
var fetcher_1 = require("../../fetcher");
// PAYMENT MODULES
function getPaymentModules() {
    return fetcher_1["default"]("/payment/modules");
}
exports.getPaymentModules = getPaymentModules;
