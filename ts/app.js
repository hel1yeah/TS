"use strict";
function getFullName(user) {
    return `${user.fN} ${user.city}`;
}
const user = {
    fN: 'Yuri',
    city: 'Brovary',
    age: 33
};
console.log(getFullName(user));
