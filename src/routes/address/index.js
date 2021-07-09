"use strict";
exports.__esModule = true;
exports.addressDelete = exports.addressUpdate = exports.addressCreate = exports.addressQuery = void 0;
var fetcher_1 = require("../../fetcher");
// ADDRESS
function addressQuery() {
    return fetcher_1["default"]("/address", {
        method: "GET"
    });
}
exports.addressQuery = addressQuery;
function addressCreate(data) {
    if (data === void 0) { data = {}; }
    return fetcher_1["default"]("/address", {
        method: "POST",
        data: data
    });
}
exports.addressCreate = addressCreate;
function addressUpdate(id, data) {
    if (data === void 0) { data = {}; }
    return fetcher_1["default"]("/address/" + id, {
        method: "PATCH",
        data: data
    });
}
exports.addressUpdate = addressUpdate;
function addressDelete(id) {
    return fetcher_1["default"]("/address/" + id, {
        method: "DELETE"
    });
}
exports.addressDelete = addressDelete;
