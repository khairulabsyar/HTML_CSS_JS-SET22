const todo = document.getElementById("todo");
const needToDo = document.getElementById("needtodo");
const needtodoList = document.getElementsByClassName("needtodo-list");
const completedToDo = document.getElementById("completedtodo");
const completedToDoList = document.getElementsByClassName("completedtodo-list");

todo.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    newToDoList();
    e.preventDefault();
    todo.value = "";
  }
});
function newToDoList() {
  needToDo.appendChild(needtodoList[0].cloneNode(true));
  let updateText = needtodoList[needtodoList.length - 1].querySelector("h3");
  needtodoList[needtodoList.length - 1].style.display = "flex";
  updateText.textContent = todo.value;
  todo.textContents = "";
}
function complete(e) {
  completedToDo.appendChild(completedToDoList[0].cloneNode(true));
  let updateText =
    completedToDoList[completedToDoList.length - 1].querySelector("strike");
  completedToDoList[completedToDoList.length - 1].style.display = "flex";
  updateText.textContent = e.parentElement.querySelector("h3").textContent;
  e.parentElement.remove();
}
function undoToDo(e) {
  needToDo.appendChild(needtodoList[0].cloneNode(true));
  let updateText = needtodoList[needtodoList.length - 1].querySelector("h3");
  needtodoList[needtodoList.length - 1].style.display = "flex";
  updateText.textContent = e.parentElement.querySelector("strike").innerText;
  e.parentElement.remove();
}
function deleteToDo(e) {
  e.parentElement.remove();
}
