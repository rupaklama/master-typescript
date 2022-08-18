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
}

const me: Person = { name: "rupak", age: 21, id: 1 };
