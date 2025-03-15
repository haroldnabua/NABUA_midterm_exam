let tasks = [];

function addTask(id, name, description) {
    tasks.push({ id, name, description });
    console.log(`Task added: ${name}`);
}


function viewTasks() {
    console.log("List of tasks:");
    tasks.forEach((task) => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
}

function updateTask(id, newName, newDescription) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task updated: ${newName}`);
    } else {
        console.log("Task not found.");
    }
}


function deleteTask(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1)[0];
        console.log(`Task deleted: ${deletedTask.name}`);
    } else {
        console.log("Task not found.");
    }
}

addTask(1, "Buy groceries", "Milk, Pan de Sal, Eggs");
addTask(2, "Study", "INTPROG Midterm Examination");
viewTasks();
updateTask(1, "Buy more groceries", "Milk, Pan de Sal, Eggs, Butter");
deleteTask(2);
viewTasks();
