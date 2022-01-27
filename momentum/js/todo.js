const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //로컬스토리지에는 배열로 저장이 안되기 때문에 json.stringify를 사용해서 배열은 아니지만 배열처럼 생긴 구조로 저장한다.
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //filter은 true값만을 반환해준다 false값은 삭제하고 새로운 구조를 생성한다.
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //로컬스토리지에 저장 돼 있는 정보들을 json.parse를 사용해 배열로 만들어준다.
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  //parsedToDos.forEach((item) => console.log("this is the turn of", item)); //foreach는 배열의 각각 모두 한번씩 실행하게해준다.
}
// 참고로 parsedToDos.forEach((item) => console.log("this is the turn of", item)) 이처럼 => 를 사용하는것은 arrow function이라고 한다.
