"use strict";
exports.__esModule = true;
exports.getPickupLocations = void 0;
var fetcher_1 = require("../../fetcher");
// PICKUP LOCATIONS
function getPickupLocations(params) {
    if (params === void 0) { params = {}; }
    return fetcher_1["default"]("/delivery/pickup-locations", {
        method: "GET",
        params: params
    });
}
exports.getPickupLocations = getPickupLocations;
