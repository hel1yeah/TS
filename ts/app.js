"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 300] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 200] = "IN_PROGRESS";
    StatusCode[StatusCode["FAILURE"] = 220] = "FAILURE";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Success message',
    statusCode: 1,
};
if (res.statusCode === StatusCode.SUCCESS) {
    console.log('SUCCESS');
}
const response = "RED" /* testing.red */;
console.log(response);
