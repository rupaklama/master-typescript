// const btn = document.getElementById("btn");

// '?' - js way with Optional Chaining  operator
// btn?.addEventListener("click", () => {
//   alert("Clicked");
// });

// '!' - ts way with Non-Null Assertion operator
// note - telling ts to turn off the check since we know it is not going to be Null
// this is riskier to do as we have to be very sure
const btn = document.getElementById("btn")!;
// btn.addEventListener("click", () => {
//   alert("Clicked");
// });

// 'Type Assertion' is assigning a Specific Type to provide more information
let mystery: unknown = "hello world";

// telling ts i now more than you using 'as' keyword followed by Type
// Note - only here it is treated as a String
const numChars = (mystery as string).length;
console.log(numChars);

// still type unknown here
// mystery;

// 'Type Assertion' in DOM demo
// NOTE - overriding default generic type with the correct type
const input = document.getElementById("todo-input")! as HTMLInputElement;
// const input = document.getElementById("todo")!;

// alternate generic syntax for 'as'
// same as above but does not work with JSX
// btn.addEventListener("click", () => {
//   alert((<HTMLInputElement>input).value);
//   (<HTMLInputElement>input).value = " ";
// });

// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = " ";
// });

const form = document.querySelector("form")!;
const list = document.querySelector("#todo-list")!;

interface Todo {
  text: string;
  completed: boolean;
}

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");

  if (todosJSON === null) return [];

  // now ts knows it is going to be string on here,
  // this process is known as Type Narrowing
  return JSON.parse(todosJSON);
}

const todos: Todo[] = readTodos();

// create todos to display
todos.forEach(todo => createTodo(todo));

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodo(newTodo);

  todos.push(newTodo);

  // localStorage.setItem("todos", JSON.stringify(todos));
  saveTodos();

  input.value = "";
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodo(todo: Todo) {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input")!;
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    saveTodos();
  });

  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
}

form.addEventListener("submit", handleSubmit);
