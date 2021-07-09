"use strict";
exports.__esModule = true;
exports.usePickupLocations = void 0;
var pickup_1 = require("../../routes/pickup");
var react_query_1 = require("react-query");
// PICKUP LOCATIONS
function usePickupLocations(params) {
    if (params === void 0) { params = { address: null, city: null, zipCode: null }; }
    var res = react_query_1.useQuery(["pickup_locations", params], function () { return pickup_1.getPickupLocations(params); }, {
        enabled: !!params.address && !!params.city && !!params.zipCode && true,
        suspense: false
    });
    return res;
}
exports.usePickupLocations = usePickupLocations;
