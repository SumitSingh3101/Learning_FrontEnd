// Get the add button
const add = document.getElementById("add");
// Add an onClick event listener
add.addEventListener("click", addTask);

// Create a function to add task to the list
function addTask() {
  // Get the input
  const input = document.getElementById("taskInput");
  // Get the taskList
  const taskList = document.getElementById("taskList");

  // Create li element and add class
  const li = document.createElement("li");
  li.className = "taskItem";

  // Create a p tag to store the value of task
  const p = document.createElement("p");
  p.className = "task";
  p.innerHTML = input.value;

  const dltBtn = document.createElement("button");
  dltBtn.type = "submit";
  dltBtn.className = "dlt";
  dltBtn.innerHTML = "Delete";
  dltBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(p);
  li.appendChild(dltBtn);

  // Add the task to the ul
  taskList.appendChild(li);
  // Clear the input value
  input.value = "";
}