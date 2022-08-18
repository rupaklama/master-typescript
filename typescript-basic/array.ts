/* ARRAY */
// strings
const activeUsers: string[] = [];

// numbers
const ageList: number[] = [1, 2, 3];

// note - Alternate Syntax with Generic
const names: Array<string> = [];
const ages: Array<number> = [];

// Custom type
type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 1, y: 2 });

// Multidimensional - Nested Arrays
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
