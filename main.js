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


// for (let i = 0; i < todos.length; i++) {
//   addTodo(todos[i])
//   console.log(todos)
// }

function toUpper(stringArr) {
  let newArray = []
  stringArr.forEach(function (str) {
    newArray.push(str.toUpperCase());
  });
  console.log(newArray);
}

toUpper(['hi', 'there', 'fsd']);