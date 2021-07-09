"use strict";
exports.__esModule = true;
exports.logout = void 0;
var fetcher_1 = require("../../fetcher");
function logout() {
    return fetcher_1["default"]("/logout", {
        method: "POST"
    });
}
exports.logout = logout;
