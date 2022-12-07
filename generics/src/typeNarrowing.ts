// Type Narrowing is the process of refining types to more specific types than declared

// typeof - Type Guards is a type checking before working with a value since Unions allow multiple types
// note - use 'typeof' when dealing with the Primitives to narrow down the type
function triple(value: number | string) {
  // type guard
  if (typeof value === "string") {
    return value.repeat(3);
  }

  // note - typescript knows that it is a number if we get here
  return value * 3;
}

// Truthiness Type Guard - to check a value for being truthy or falsy before working on it
// const printLetters = (word: string | undefined) => {
const printLetters = (word?: string) => {
  // checking for truthy just like with javaScript
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("No word has inputted");
  }
};

// Equality Type Guard - it involves comparing types before doing certain operations
function someDemo(x: string | number, y: string | boolean) {
  // checking strict equality just like with javaScript
  if (x === y) {
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}
