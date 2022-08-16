import {
  showTodoBTN,
  todoApp,
  body,
  todoInput,
  todoList,
  emptyTodo,
} from "./CONSTANTS.js";

let qty = getTodoQty() || 0;
const itemsStore = {};
let index = getTodoIndex() || 0;

//make object of todoslist
function addToItems() {
  const items = document.querySelectorAll(".todo-item-checkbox");
  items.forEach((el) => {
    index++;
    itemsStore[index] = [];
    itemsStore[index].push(el.checked);
    itemsStore[index].push(el.parentNode.parentNode.children[1].textContent);
  });
}
// save-get to lacal storage
export function setTodosLocalStore() {
  addToItems();
  localStorage.setItem("indexTodo", index);
  localStorage.setItem("qtyTodo", qty);
  localStorage.setItem("todoList", JSON.stringify(itemsStore));
}

function getTodoIndex() {
  localStorage.getItem("indexTodo");
}
function getTodoQty() {
  localStorage.getItem("qtyTodo");
}

export function getTodosLocalStore() {
  let itemsListJSON = localStorage.getItem("todoList");
  let itemsList = JSON.parse(itemsListJSON);
  if (itemsListJSON && !isEmpty(itemsList)) {
    for (let key in itemsList) {
      loadTodosList(itemsList[key]);
    }
  }
}

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

function loadTodosList(arr) {
  function isTrue(arr) {
    return arr[0] == true ? "checked" : "";
  }
  let ins = `<span class="todo-item-wrapper">
        <label>
          <input type="checkbox" class="todo-item-checkbox" value='${
            arr[1]
          }' ${isTrue(arr)}/>
        </label>
        <span class="todo-item-title" contenteditable="true">${arr[1]}</span>
        <div class="more active">
          <div
            class="icon-wrapper more-toggle"
            data-test="todo-item-dropdown-toggle"
          >
            <img
              class="icon icon-ellipsis more-icon"
              src="./assets/svg/trash-can.svg"
            ></img>
          </div>
        </div>
      </span>`;
  qty++;
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.innerHTML = ins;
  let box = li.children[0].children[0].children[0];
  crossItem(box);
  box.addEventListener("change", () => crossItem(box));
  let delBTN = li.children[0].children[2];
  delBTN.addEventListener("click", () => {
    delBTN.parentNode.parentNode.remove();
    qty--;
    checkTodosQty();
  });
  todoList.append(li);
  todoInput.value = "";
  checkTodosQty();
}

// add line-through
function crossItem(el) {
  if (el.checked) {
    el.parentNode.parentNode.style.textDecoration = "line-through";
  } else {
    el.parentNode.parentNode.style.textDecoration = "none";
  }
}
//show-hide todo
export function showTodoApp() {
  todoApp.classList.toggle("hide-with-opacity");
}

export function hideTodoApp(e) {
  if (
    !e.composedPath().includes(todoApp) &&
    !e.composedPath().includes(showTodoBTN)
  ) {
    todoApp.classList.add("hide-with-opacity");
  }
}
//
export function createNewTodo() {
  if (todoInput.value) {
    let ins = `<span class="todo-item-wrapper">
      <label>
        <input type="checkbox" class="todo-item-checkbox" value='${todoInput.value}'/>
      </label>
      <span class="todo-item-title" contenteditable="true">${todoInput.value}</span>
      <div class="more active">
        <div
          class="icon-wrapper more-toggle"
          data-test="todo-item-dropdown-toggle"
        >
          <img
            class="icon icon-ellipsis more-icon"
            src="./assets/svg/trash-can.svg"
          ></img>
        </div>
      </div>
    </span>`;
    qty++;
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML = ins;
    let box = li.children[0].children[0].children[0];
    box.addEventListener("change", () => crossItem(box));
    let delBTN = li.children[0].children[2];
    delBTN.addEventListener("click", () => {
      delBTN.parentNode.parentNode.remove();
      qty--;
      checkTodosQty();
    });
    todoList.append(li);
    todoInput.value = "";
    checkTodosQty();
  }
}

export function checkTodosQty() {
  if (qty != 0) {
    emptyTodo.style.display = "none";
  } else {
    emptyTodo.style.display = "flex";
  }
}
