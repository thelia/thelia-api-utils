"use strict";
exports.__esModule = true;
exports.queryClient = void 0;
var react_query_1 = require("react-query");
exports.queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchInterval: false,
            suspense: true
        }
    }
});
