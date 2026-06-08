function addTask() {
  const taskInput = document.getElementById("task");
  const priorityInput = document.getElementById("priority");
  const list = document.getElementById("list");

  if (taskInput.value === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    ${taskInput.value} - ${priorityInput.value}

    <button onclick="completeTask(this)">Done</button>

    <button onclick="deleteTask(this)">Delete</button>
  `;

  list.appendChild(li);

  taskInput.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}

function completeTask(button) {
  const li = button.parentElement;

  if (li.style.textDecoration === "line-through") {
    li.style.textDecoration = "none";
  } else {
    li.style.textDecoration = "line-through";
  }
}