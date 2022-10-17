"use strict";
function getFullName(user) {
    return `${user.first} ${user.city}`;
}
const user = {
    first: 'Yuri',
    city: 'Brovary',
    age: 33,
    red: 'red',
};
console.log(getFullName(user));
