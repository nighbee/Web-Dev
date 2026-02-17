const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const taskCounter = document.getElementById('task-counter');

// Update task counter function
function updateTaskCount() {
    const totalTasks = todoList.querySelectorAll('li').length;
    const completedTasks = todoList.querySelectorAll('li.completed').length;
    taskCounter.textContent = `Total: ${totalTasks} | Completed: ${completedTasks}`;
}

// Add task function
function addTask() {
    const taskText = input.value.trim();
    
    if (!taskText) {
        alert("Please enter a task!");
        return;
    }

    // Create task item using li 
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
    todoList.appendChild(li);
    input.value = "";
    updateTaskCount();
}

todoList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    
    if (e.target.type === 'checkbox') {
        li.classList.toggle('completed');
        updateTaskCount();
    } else if (e.target.classList.contains('delete-btn')) {
        li.remove();
        updateTaskCount();
    }
});


addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => e.key === 'Enter' && addTask());

// Initialize counter on page load
updateTaskCount();