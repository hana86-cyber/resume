const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function renderTask(text) {

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm";
  deleteBtn.textContent = "حذف";
deleteBtn.addEventListener("click", function () {
  li.remove();
   tasks = tasks.filter(function (t) {
    return t !== text;
});
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("لطفاً یک کار بنویس!");
    return;
  }
  renderTask(text);

  tasks.push(text);
  console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
tasks.forEach(function (text) {
  renderTask(text);
});
