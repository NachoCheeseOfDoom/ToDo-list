let todos = [];
let todo1 = 'Get Groceries';
let todo2 = 'Wash Car';
let todo3 = 'Make Dinner';
todos.push('hi');

let inputEL = document.getElementById("input-el");
let BtnPress = document.getElementById("pressBtn");

BtnPress.addEventListener("click", function () {
  let newText = inputEL.value;
  inputEL.value = '';
  todos.push(newText);
  addTodo(todos);
});

function addTodo(todoTitle) {
  let element = document.createElement('div');
  element.innerText = todoTitle;
  document.body.appendChild(element)
}


for (let i = 0; i < todos.length; i++) {
  addTodo(todos[i])
  console.log(todos)
}