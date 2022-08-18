/* Tuples is an array type of fixed lengths & ordered with specific type 
  like first element is string, second element is number & third element is boolean
*/

// creating a Tuple with its type definition & defining a specific order to be
let myTuple: [number, string];

// can assign its values per specified order
// first element has to be number & second one is string
myTuple = [10, "cool"];

// can't assign values in a different order
myTuple = ["cool", 10];

// rgba values
const color: [number, number, number] = [255, 0, 45];
