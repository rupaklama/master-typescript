/* '|' gives a value of few different types like with OR operator */

// can pass a number or string
const guessAge = (age: number | string) => {
  return "Your age is: " + age;
};

guessAge(30);
guessAge("30");

// array of string & number - multiple types in a same array
const stuff: (string | number)[] = [1, "cool"];

// either one
const stuff2: string[] | number[] = [1];
