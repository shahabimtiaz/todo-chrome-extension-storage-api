let editIndex = null;

// View tasks from Chrome storage
const viewTasks = () => {
    let todoList = document.getElementsByClassName("todo-list")[0];
    todoList.innerHTML = ""; 

    chrome.storage.sync.get("tasks", (data) => {
        let tasks = data.tasks ? JSON.parse(data.tasks) : [];

        tasks.forEach((item, index) => {
            const node = document.createElement("li");
            node.className = "todo-item";
            
            
            const innerNode = document.createElement("div");
            innerNode.className = "task-content"; 
            node.appendChild(innerNode);
            
      
            innerNode.textContent = item;
            
           
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn"; // For styling
            deleteBtn.addEventListener("click", () => onDelete(index));
          
            const updateBtn = document.createElement("button");
            updateBtn.textContent = "Update";
            updateBtn.className = "update-btn"; 
            updateBtn.addEventListener("click", () => onEdit(index));
            
          
            innerNode.appendChild(deleteBtn);
            innerNode.appendChild(updateBtn);
            
          
            todoList.appendChild(node);
            
        });
    });
};

// Add a new task
const onAdd = () => {
    let taskInput = document.getElementById("task_input");
    let task = taskInput.value;

    if (task) {
        chrome.storage.sync.get("tasks", (data) => {
            let tasks = data.tasks ? JSON.parse(data.tasks) : [];
            tasks.push(task);

            chrome.storage.sync.set({ tasks: JSON.stringify(tasks) }, () => {
                console.log("Task added to storage.");
                taskInput.value = ""; 
                viewTasks(); 
            });
        });
    }
};

// Edit an existing task (triggered by Update button)
const onEdit = (index) => {
    chrome.storage.sync.get("tasks", (data) => {
        let tasks = data.tasks ? JSON.parse(data.tasks) : [];
        let taskInput = document.getElementById("task_input");

       
        taskInput.value = tasks[index];

       
        document.getElementById("add_task").style.display = "none";
        document.getElementById("save_task").style.display = "inline";

        editIndex = index; 
    });
};

// Save the edited task
const onSave = () => {
    let taskInput = document.getElementById("task_input");
    let updatedTask = taskInput.value;

    if (updatedTask && editIndex !== null) {
        chrome.storage.sync.get("tasks", (data) => {
            let tasks = data.tasks ? JSON.parse(data.tasks) : [];

         
            tasks[editIndex] = updatedTask;

            chrome.storage.sync.set({ tasks: JSON.stringify(tasks) }, () => {
                console.log("Task updated in storage.");
                taskInput.value = ""; 
                editIndex = null;

             
                document.getElementById("add_task").style.display = "inline";
                document.getElementById("save_task").style.display = "none";

                viewTasks(); 
            });
        });
    }
};

// Delete a task
const onDelete = (index) => {
    chrome.storage.sync.get("tasks", (data) => {
        let tasks = data.tasks ? JSON.parse(data.tasks) : [];

        
        tasks.splice(index, 1);

        chrome.storage.sync.set({ tasks: JSON.stringify(tasks) }, () => {
            console.log("Task deleted from storage.");
            viewTasks(); 
        });
    });
};


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add_task").addEventListener("click", onAdd);
    document.getElementById("save_task").addEventListener("click", onSave);

    viewTasks(); // Display tasks on load
});
