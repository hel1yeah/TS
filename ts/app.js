"use strict";
var requestType;
(function (requestType) {
    requestType["GET"] = "get";
    requestType["POST"] = "post";
    requestType["PUT"] = "put";
    requestType["DELETE"] = "delete";
})(requestType || (requestType = {}));
function fetchRequestAuth(url, method) {
    return url.toUpperCase();
}
fetchRequestAuth('s', 'put');
