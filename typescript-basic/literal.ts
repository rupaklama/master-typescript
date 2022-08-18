/* Literal types are not just types but also a value  */

// function with a literal + union type params
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return `The answer is ${answer}`;
};

// one of the literals in the union
giveAnswer("no");

// variable
const mood: "Happy" | "Sad" = "Happy";
