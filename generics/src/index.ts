// 'Type Assertion' in DOM demo with "AS"
// 'Type Assertion' is assigning a Specific Type to provide more information
// NOTE - overriding default generic type with the correct type

// const inputEl = document.querySelector("#username") as HTMLInputElement;

// note - Using default DOM Generic Function
// note - same as above but with Generic
// '!' - ts way with Non-Null Assertion operator to turn off the check since we know it is not going to be Null
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);

inputEl.value = "hacked!";

// button
const btnEl = document.querySelector<HTMLButtonElement>(".btn")!;

// note - Using our CUSTOM Generic Function/Type

// separate functions for different types
function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

// Generic Function - one function for all types

// bad approach
function identityBad(item: any): any {
  return item;
}

// Good Approach with Generic Function Type
// function identityGood<T>(item: T): T {
// same as above, Convention is to use letter T but this can be anything
function identityGood<Type>(item: Type): Type {
  return item;
}

// Generics allow us to define reusable functions and classes that work with
// multiple types rather than a single type
identityGood<string>("string");
identityGood<number>(7);

// note - works with Interface also
interface Cat {
  name: string;
}

identityGood<Cat>({ name: "Ring Tail" });
