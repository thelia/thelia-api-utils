"use strict";
exports.__esModule = true;
exports.checkoutCreate = void 0;
var fetcher_1 = require("../../fetcher");
function checkoutCreate(data) {
    if (data === void 0) { data = {}; }
    return fetcher_1["default"]("/checkout", {
        method: "POST",
        data: data
    });
}
exports.checkoutCreate = checkoutCreate;
