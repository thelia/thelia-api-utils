"use strict";
exports.__esModule = true;
exports.ApiInstance = void 0;
var axios_1 = require("axios");
var qs_1 = require("qs");
function devPrefix() {
    return window.location.href.includes("index_dev.php") ? "/index_dev.php" : "";
}
exports.ApiInstance = axios_1["default"].create({
    baseURL: devPrefix() + "/open_api",
    paramsSerializer: function (params) {
        return qs_1["default"].stringify(params, { encode: false });
    }
});
function fetcher(url, config) {
    return exports.ApiInstance(url, config);
}
exports["default"] = fetcher;
