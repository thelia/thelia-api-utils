"use strict";
exports.__esModule = true;
exports.useLogin = void 0;
var login_1 = require("../../routes/login");
var queryClient_1 = require("../../queryClient");
var react_query_1 = require("react-query");
// LOGIN
function useLogin(reload) {
    if (reload === void 0) { reload = true; }
    return react_query_1.useMutation(function (_a) {
        var email = _a.email, password = _a.password, _b = _a.rememberMe, rememberMe = _b === void 0 ? true : _b;
        return login_1.login({
            email: email,
            password: password,
            rememberMe: rememberMe
        });
    }, {
        onSuccess: function () {
            if (reload) {
                window.location.reload();
            }
            else {
                queryClient_1.queryClient.invalidateQueries("customer");
            }
        }
    });
}
exports.useLogin = useLogin;
