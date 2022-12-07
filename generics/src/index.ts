// Generics is to create a reusable code and it works with many Types instead of a Single Type.
// Generic can be use with Type Assertion, Function, Interface and Class etc

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

// another generic function
function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  console.log("randIdx", randIdx);

  return list[randIdx];
}

console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([1, 2, 3]));

// multiple types with Type Constraints
// 'extends object' is to make sure the arg is the Object Type
// note - convention is to follow alphabetical order in generic for multiple types - T U V W X
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

const comboObj = merge({ name: "pak" }, { pet: "mama" });

// Type Constraints with interface
interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// string primitive has a length property that satisfies the interface, while number does not
console.log(printDoubleLength("adfdfd"));
// console.log(printDoubleLength(234));

// Default Type Parameters - <T = number>
function makeEmptyArray<T = number>(): T[] {
  return [];
}

const nums = makeEmptyArray();
// overriding above default type
const bools = makeEmptyArray<boolean>();

// Generic Classes
interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class PlayList<T> {
  public queue: T[] = [];

  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new PlayList<Song>();
const videos = new PlayList<Video>();
videos.add({ title: "me", creator: "you", resolution: "hd" });
