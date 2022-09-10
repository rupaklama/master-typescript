"use strict";
// const btn = document.getElementById("btn");
// '?' - js way with Optional Chaining  operator
// btn?.addEventListener("click", () => {
//   alert("Clicked");
// });
// '!' - ts way with Non-Null Assertion operator
// note - telling ts to turn off the check since we know it is not going to be Null
// this is riskier to do as we have to be very sure
const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   alert("Clicked");
// });
// 'Type Assertion' is assigning a Specific Type to provide more information
let mystery = "hello world";
// telling ts i now more than you using 'as' keyword followed by Type
// Note - only here it is treated as a String
const numChars = mystery.length;
console.log(numChars);
// still type unknown here
// mystery;
// 'Type Assertion' in DOM demo
// NOTE - overriding default generic type with the correct type
const input = document.getElementById("todo");
// const input = document.getElementById("todo")!;
btn.addEventListener("click", () => {
    alert(input.value);
    input.value = " ";
});
// alternate generic syntax for 'as'
// same as above but does not work with JSX
// btn.addEventListener("click", () => {
//   alert((<HTMLInputElement>input).value);
//   (<HTMLInputElement>input).value = " ";
// });
