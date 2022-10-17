"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 400] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 3] = "IN_PROGRESS";
    StatusCode["FAILURE"] = "failure";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'pay success',
    status: 300,
};
if (res.status === StatusCode.SUCCESS) {
    console.log(StatusCode.SUCCESS);
    console.log('xdsdsdsd');
}
// 13 success
// 2 pending
// 3 failure
