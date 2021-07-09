"use strict";
exports.__esModule = true;
exports.useAddressDelete = exports.useAddressUpdate = exports.useAddressCreate = exports.useAddressQuery = void 0;
var address_1 = require("../../routes/address");
var react_query_1 = require("react-query");
var queryClient_1 = require("../../queryClient");
// ADDRESS
function useAddressQuery() {
    return react_query_1.useQuery("addresses", function () { return address_1.addressQuery(); });
}
exports.useAddressQuery = useAddressQuery;
function useAddressCreate() {
    return react_query_1.useMutation(function (data) { return address_1.addressCreate(data); }, {
        onSuccess: function () {
            queryClient_1.queryClient.invalidateQueries("addresses");
        }
    });
}
exports.useAddressCreate = useAddressCreate;
function useAddressUpdate() {
    return react_query_1.useMutation(function (_a) {
        var id = _a.id, data = _a.data;
        return address_1.addressUpdate(id, data);
    }, {
        onSuccess: function () {
            queryClient_1.queryClient.invalidateQueries("addresses");
        }
    });
}
exports.useAddressUpdate = useAddressUpdate;
function useAddressDelete() {
    return react_query_1.useMutation(function (id) { return address_1.addressDelete(id); }, {
        onSuccess: function () {
            queryClient_1.queryClient.invalidateQueries("addresses");
        }
    });
}
exports.useAddressDelete = useAddressDelete;
