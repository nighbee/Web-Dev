const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a task
function addTask() {
    const taskText = input.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 1. Create the <li> element
    const li = document.createElement('li');

    // 2. Create the checkbox (Mark as Done)
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    // 3. Create a span for the text
    const span = document.createElement('span');
    span.textContent = taskText;

    // 4. Create the Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', () => {
        todoList.removeChild(li); // DOM removal
    });

    // 5. Append everything (Assemble the item)
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    // 6. Add the <li> to the <ul>
    todoList.appendChild(li);

    // Clear input
    input.value = "";
}

// Event Listeners
addBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add tasks
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});