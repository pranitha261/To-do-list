const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskColor = document.getElementById("colorSelect"); // Matched with HTML id="colorSelect"
const taskDate = document.getElementById("taskDate");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const selectedColor = taskColor.value;
  const selectedDate = taskDate.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";
  li.style.backgroundColor = selectedColor;

  // Create text container
  const span = document.createElement("span");
  span.className = "task-text";
  
  // Store dynamic current text separately so editing works iteratively
  let currentTaskText = taskText;

  function updateTaskContent(text, date) {
    span.innerHTML = ""; // Clear existing content safely
    
    const textNode = document.createTextNode(text);
    span.appendChild(textNode);

    if (date) {
      span.appendChild(document.createElement("br"));
      const dateEl = document.createElement("small");
      dateEl.className = "task-date";
      dateEl.textContent = date;
      span.appendChild(dateEl);
    }
  }

  updateTaskContent(currentTaskText, selectedDate);

  const buttonBox = document.createElement("div");
  buttonBox.className = "task-buttons";

  // Complete Button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = function () {
    span.classList.toggle("completed");
  };

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = function () {
    // Prompt shows current text, not original text
    const updatedTask = prompt("Edit task", currentTaskText);

    if (updatedTask !== null && updatedTask.trim() !== "") {
      currentTaskText = updatedTask.trim();
      updateTaskContent(currentTaskText, selectedDate);
    }
  };

  // Delete Button
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

  // Clear inputs after adding
  taskInput.value = "";
  taskDate.value = "";
}

  
