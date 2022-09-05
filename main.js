let todo1 = 'Get Groceries';
let todo2 = 'Wash Car';
let todo3 = 'Make Dinner';

function addTodo(todoTitle) {
  let element = document.createElement('div');
  element.innerText = todoTitle;
  document.body.appendChild(element)
}

addTodo(todo1);
addTodo(todo2);
addTodo(todo3);

function greeting(firstName) {
  console.log(`Hello ${firstName}`)
}

greeting("Ignacio")

function toUpper(aString) {
  console.log(aString.toUpperCase())
}

toUpper("ignacio")

function convert(length) {
  let resolt = length * 2.54;
  return resolt;
}

console.log(convert(4))