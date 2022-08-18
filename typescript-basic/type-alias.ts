/* OBJECT */
const printName = (person: { first: string; last: string }): void => console.log(person.first, person.last);

printName({ first: "Rupak", last: "Lama" });

// TYPE ALIAS - custom type with new name
type MyCoordinate = {
  x: number;
  y: number;
  z?: number; // optional
  readonly id?: number; // readonly modifier is to make it Immutable
};

// const coordinate: { x: number; y: number } = { x: 1, y: 2 };

// Using Type Alias instead defining object inline like above
// note - Type Alias makes our code more readable and reuse the Types elsewhere in our code
const coordinate: MyCoordinate = { x: 1, y: 2 };

function randomCoordinate(): MyCoordinate {
  return { x: 2, y: 3 };
}

// Intersection Type - An Intersection Type combines multiple types into one.
// This allows you to add together existing types to get a single type that has all the features you need
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

// note - combining above two types into one with Intersection type
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "blue",
};

// to add New Property in Intersection Type
type ColorfulCircleNew = Circle & Colorful & { height: number };
