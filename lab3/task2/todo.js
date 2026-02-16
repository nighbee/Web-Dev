const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task function
function addTask() {
    const taskText = input.value.trim();
    
    if (!taskText) {
        alert("Please enter a task!");
        return;
    }

    // Create task item using template literal
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
    todoList.appendChild(li);
    input.value = "";
}

// Event delegation for checkbox and delete button
todoList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    
    if (e.target.type === 'checkbox') {
        li.classList.toggle('completed');
    } else if (e.target.classList.contains('delete-btn')) {
        li.remove();
    }
});

// Add task on button click or Enter key
addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => e.key === 'Enter' && addTask());