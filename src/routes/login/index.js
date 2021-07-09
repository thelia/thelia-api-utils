"use strict";
exports.__esModule = true;
exports.login = void 0;
var fetcher_1 = require("../../fetcher");
// LOGIN
function login(data) {
    if (data === void 0) { data = {}; }
    return fetcher_1["default"]("/login", {
        method: "POST",
        data: data
    });
}
exports.login = login;
