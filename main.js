let todos = ['Get Groceries', 'Wash Car', 'Make Dinner', 'hello'];

let inputEL = document.getElementById("input-el");
let BtnPress = document.getElementById("pressBtn");

BtnPress.addEventListener("click", function () {
  let newText = inputEL.value;
  inputEL.value = '';
  todos.push(newText);
});

todos.forEach(function (todoTitle) {
  let element = document.createElement('div');
  element.innerText = todoTitle;
  document.body.appendChild(element)
});

function addTodo(todoTitle) {

}


// for (let i = 0; i < todos.length; i++) {
//   addTodo(todos[i])
//   console.log(todos)
// }