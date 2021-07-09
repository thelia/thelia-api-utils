"use strict";
exports.__esModule = true;
exports.useLogout = void 0;
var logout_1 = require("../../routes/logout");
var queryClient_1 = require("../../queryClient");
var react_query_1 = require("react-query");
function useLogout() {
    return react_query_1.useMutation(function () { return logout_1.logout(); }, {
        onSuccess: function () {
            queryClient_1.queryClient.setQueryData("customer", undefined);
        }
    });
}
exports.useLogout = useLogout;
