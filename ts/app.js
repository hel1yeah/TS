"use strict";
function getFullName(fN, sN) {
    if (typeof fN !== 'string') {
        throw new Error('!!!!!');
    }
    return `${fN} ${sN}`;
}
const arrFunctions = (one, twoo) => {
    return `${one} ${twoo} Arrow`;
};
arrFunctions('Yuri', 'Larsen');
getFullName('Yuri', 'Larsen');
console.log(arrFunctions('Yuri', 'Larsen'));
console.log(getFullName('true', 'false'));
