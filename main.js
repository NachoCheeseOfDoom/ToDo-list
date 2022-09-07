let todos = ['Get Groceries', 'Wash Car', 'Make Dinner'];
let todo1 = 'Get Groceries';
let todo2 = 'Wash Car';
let todo3 = 'Make Dinner';

let inputEL = document.getElementById("input-el");
let BtnPress = document.getElementById("pressBtn");

BtnPress.addEventListener("click", function () {
  todos.push(inputEL.value);
  //todoTitle();
});

function addTodo(todoTitle) {
  let element = document.createElement('div');
  element.innerText = todoTitle;
  document.body.appendChild(element)
}

console.log(todos)

for (let i = 0; i < todos.length; i++) {
  addTodo(todos[i])
}