const taskForm = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
const taskCount = document.querySelector('#taskCount');
const clearButton = document.querySelector('#clearButton');

function updateTaskCount() {
  const count = taskList.children.length;
  taskCount.textContent = `${count} task${count === 1 ? '' : 's'}`;
}

function addTask(text) {
  const item = document.createElement('li');
  const label = document.createElement('span');
  const deleteButton = document.createElement('button');

  label.textContent = text;
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';

  label.addEventListener('click', () => label.classList.toggle('done'));
  deleteButton.addEventListener('click', () => {
    item.remove();
    updateTaskCount();
  });

  item.append(label, deleteButton);
  taskList.append(item);
  updateTaskCount();
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(taskInput.value.trim());
  taskInput.value = '';
  taskInput.focus();
});
const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', () => {
  taskList.replaceChildren();
  updateTaskCount();
});

addTask('Learn git status');
addTask('Create the first commit');
