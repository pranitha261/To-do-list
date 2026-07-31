const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskColor = document.getElementById("taskColor");
const taskDate = document.getElementById("taskDate");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const selectedColor = taskColor.value;
  const selectedDate = taskDate.value || "No Date";

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";
  li.style.backgroundColor = selectedColor;

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerHTML = `
    ${taskText}
    <br>
    <small class="task-date">${selectedDate}</small>
  `;

  const buttonBox = document.createElement("div");
  buttonBox.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = function () {
    span.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = function () {
    const updatedTask = prompt("Edit Task", taskText);

    if (updatedTask && updatedTask.trim() !== "") {
      span.innerHTML = `
        ${updatedTask}
        <br>
        <small class="task-date">${selectedDate}</small>
      `;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
  };

  buttonBox.appendChild(completeBtn);
  buttonBox.appendChild(editBtn);
  buttonBox.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonBox);

  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";
}
