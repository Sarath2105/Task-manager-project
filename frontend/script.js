const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const API_URL = 'http://localhost:5000/api/tasks';

// Fetch and render tasks on page load
window.onload = () => {
  fetch(API_URL)
    .then(res => res.json())
    .then(tasks => {
      tasks.forEach(addTaskToDOM);
    })
    .catch(err => console.error('Error fetching tasks:', err));
};

function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.innerText = task.title;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = () => deleteTask(task._id, li);

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function addTask() {
  const task = taskInput.value.trim();
  if (!task) return;

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: task })
  })
    .then(res => res.json())
    .then(newTask => {
      addTaskToDOM(newTask);
      taskInput.value = '';
    })
    .catch(err => console.error('Error adding task:', err));
}

function deleteTask(id, listItem) {
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(() => listItem.remove())
    .catch(err => console.error('Error deleting task:', err));
}
