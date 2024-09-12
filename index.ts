// Select necessary Html element
let taskInput = document.querySelector("#inp") as HTMLInputElement;
let addbtn = document.querySelector(".btn") as HTMLButtonElement;
let userlist = document.querySelector(".task") as HTMLElement;

// Add an event listener to the "Add" button
addbtn.addEventListener("click", (evt: Event) => {
  evt.preventDefault(); // Prevent form submission
  if (taskInput.value.trim()) {
    let tasks = document.createElement("div") as HTMLElement;
    tasks.innerHTML = `${taskInput.value} <i class="fa-solid fa-trash"></i>`; // Set the task text and add a trash icon

    tasks.querySelector("i")?.addEventListener("click", () => {
      tasks.remove(); // remove the task when the trash icon is clicked
    });
    // Append the new task to the task list
    userlist.appendChild(tasks);
    // Clear the input field
    taskInput.value = "";
  } else {
    alert("Please enter a task");
  }
});
