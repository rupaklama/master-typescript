/* Variables */
// default to type 'any'
var movieTitle;
/* Function */
var square = function (num) { return num * num; };
// default arg
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person);
}
// void type
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// note - apply Type Annotation even if type inference occurs to avoid unusual issues
/* Object */
var printName = function (person) { return console.log(person.first, person.last); };
printName({ first: "Rupak", last: "Lama" });
