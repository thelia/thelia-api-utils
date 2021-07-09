"use strict";
// DELIVERY MODULES
exports.__esModule = true;
exports.useDeliveryModes = exports.useDeliveryModulessQuery = void 0;
var delivery_1 = require("../../routes/delivery");
var react_query_1 = require("react-query");
function useDeliveryModulessQuery(addressId) {
    var data = useDeliveryModes().data;
    return react_query_1.useQuery(["delivery_modules", addressId], function () { return delivery_1.getDeliveryModules(addressId); }, {
        enabled: !!data
    });
}
exports.useDeliveryModulessQuery = useDeliveryModulessQuery;
function useDeliveryModes() {
    return react_query_1.useQuery(["delivery_modes"], function () { return delivery_1.getDeliveryModes(); });
}
exports.useDeliveryModes = useDeliveryModes;
