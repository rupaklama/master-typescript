/* Interface describes Shape of an Object which is modular and reusable */

// It is similar to Type Alias.
// Note - Interface can only describe Object Shapes but not for anything else
// We can reopen Interface and add new properties
// Interface can extend another Interface Type

// Type Alias can describe any sort of object types and also variables
// We use Intersection Type to extend in Type Alias

interface Person {
  name: string;
  age: number;
  nickname?: string; // optional
  readonly id: number; // read only

  // method
  // sayHi: () => void;
  // sayHi(address: string): string;
}

// opening interface to add new property
interface Person {
  nickName: string;
}

const me: Person = {
  name: "rupak",
  nickName: "dhoke",
  age: 21,
  id: 1,
  // sayHi: address => {
  //   return `address`;
  // },
};

// Extending interface
interface newMe extends Person {
  address: string;
}

const person: newMe = {
  id: 2,
  name: "indira",
  nickName: "nakali",
  age: 22,
  address: "NJ",
};
