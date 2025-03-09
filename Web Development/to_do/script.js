// Select elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Event listener for adding todos
addTodoBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', () => li.remove()); // Remove on click
    todoList.appendChild(li);
    todoInput.value = ''; // Clear input
  }
});