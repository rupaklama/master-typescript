"use strict";
// On tsx, you have to add 'trailing comma' in generics with arrow function
const getRanElement = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    // console.log(randIdx);
    return list[randIdx];
};
console.log(getRanElement(["a", "b", "c"]));
console.log(getRanElement([1, 2, 3]));
