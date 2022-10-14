"use strict";
// 'Type Assertion' in DOM demo with "AS"
// 'Type Assertion' is assigning a Specific Type to provide more information
// NOTE - overriding default generic type with the correct type
// const inputEl = document.querySelector("#username") as HTMLInputElement;
// note - Using default DOM Generic Function
// note - same as above but with Generic
// '!' - ts way with Non-Null Assertion operator to turn off the check since we know it is not going to be Null
var inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "hacked!";
// button
var btnEl = document.querySelector(".btn");
// note - Using our CUSTOM Generic Function/Type
// separate functions for different types
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
// Generic Function - one function for all types
// bad approach
function identityBad(item) {
    return item;
}
// Good Approach with Generic Function Type
// function identityGood<T>(item: T): T {
// same as above, Convention is to use letter T but this can be anything
function identityGood(item) {
    return item;
}
// Generics allow us to define reusable functions and classes that work with
// multiple types rather than a single type
identityGood("string");
identityGood(7);
identityGood({ name: "Ring Tail" });
