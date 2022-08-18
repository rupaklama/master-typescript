/* FUNCTION */

// Arg annotation with Return Type
const square = (num: number): number => num * num;

// default arg
function greet(person: string = "stranger"): string {
  return `Hi there, ${person}`;
}

// void type
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}
