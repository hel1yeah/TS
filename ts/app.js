"use strict";
const skills = ['Front', 'Js', '1'];
for (const skill of skills) {
    console.log(skill);
}
console.log(skills.filter((s) => s !== 'Front').map((s) => s + '!!!!').reduce((a, b) => a + b));
