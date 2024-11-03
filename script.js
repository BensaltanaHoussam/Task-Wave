const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
let form = document.getElementById("taskForm");
let title = document.getElementById("title");
let dueDate = document.getElementById("dueDate");
let description = document.getElementById("description");
const status = document.getElementById("status");
const priority = document.getElementById("priority");
let msg = document.getElementById("msg");
let todoContainer = document.getElementById("todoContainer");
let inProgressContainer = document.getElementById("inProgressContainair");
let doneContainer = document.getElementById("doneContainer"); 
let deleteButton = document.getElementById("deleteButton");

let tasks = [];
let currentEditIndex = null;

const todoCount = document.getElementById("todoCount");
const inProgressCount = document.getElementById("inProgressCount");
const doneCount = document.getElementById("doneCount");


btn.onclick = function() {
    modal.classList.remove("hidden");
}

span.onclick = function() {
    modal.classList.add("hidden");
} 




// Form submit event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});





// Form validation function
let formValidation = () => {
    if (title.value === "") {
        console.log('Failure');
        msg.innerHTML = "Title cannot be blank";
    } else {
        console.log('Success');
        msg.innerHTML = ""; 
        if (currentEditIndex !== null) {
            updateTask();
        } else {
            acceptData();
        }
    }
}




// Accept and store data
let acceptData = () => {
    const task = {
        text: title.value,
        date: dueDate.value,
        description: description.value,
        status: status.value,
        priority: priority.value
    };
    
    tasks.push(task);
    console.log(tasks);
    createTasks();
   
};




// Create and display tasks
let createTasks = () => {
    // Clear containers before displaying tasks
     todoContainer.innerHTML = '';
     inProgressContainer.innerHTML = '';
     doneContainer.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskHTML = `
            <div class=" bg-gradient-to-b from-[#16171B] to-[#2c3144] w-60 text-xs  border-2 ${getPriorityClass(task.priority)} p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                <span class="text-lg font-bold text-ellipsis whitespace-normal break-words">${task.text}</span>
                <span>${task.date}</span>
                <p class "overflow-hidden text-ellipsis whitespace-normal break-words">${task.description}</p>
                <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    <i id="deleteButton" class="fa-solid fa-trash hover:text-pink-400" onclick="deleteTask(${index})"></i>
                    <i class="fa-solid fa-pen-to-square hover:text-pink-400" onclick="editTask(${index})" ></i>
                </span>
            </div>
        `;

        if (task.status === "to-do") {
            todoContainer.innerHTML += taskHTML;
        } else if (task.status === "doing") {
            inProgressContainer.innerHTML += taskHTML;
        } else {
            doneContainer.innerHTML += taskHTML;
        }
    });

    resetForm();
    modal.classList.add("hidden");
    updateCounters();
    
    
};


// Get CSS class based on priority
const getPriorityClass = (priority) => {
    switch (priority) {
        case "P1":
            return "border-red-500";
        case "P2":
            return "border-orange-500";
        case "P3":
            return "border-green-500";
    }
};


// Delete task function
let deleteTask = (index) => {
    console.log(index);
    tasks.splice(index, 1); // Remove the task at the specified index
    createTasks(); // Re-render tasks after deletion
    updateCounters();
};




// edit task fonction 
let editTask = (index) => {
    currentEditIndex = index; 
    const task = tasks[index];

    title.value = task.text;
    dueDate.value = task.date;
    description.value = task.description;
    status.value = task.status;
    priority.value = task.priority;

    
    modal.classList.remove("hidden"); 
};

// update task fonction
let updateTask = () => {
    tasks[currentEditIndex] = {
        text: title.value,
        date: dueDate.value,
        description: description.value,
        status: status.value,
        priority: priority.value
    };

    createTasks();
    resetForm(); 
    modal.classList.add("hidden");
    currentEditIndex = null;

    updateCounters();
};





// Reset form function
let resetForm = () => {
    title.value = "";
    dueDate.value = "";
    description.value = "";
    currentEditIndex = null;
};


//add counter

const updateCounters = () => {
    const todoTasks = tasks.filter(task => task.status === "to-do").length;
    const inProgressTasks = tasks.filter(task => task.status === "doing").length;
    const doneTasks = tasks.filter(task => task.status === "done").length;

    todoCount.innerText = `(${todoTasks})`;
    inProgressCount.innerText = `(${inProgressTasks})`;
    doneCount.innerText = `(${doneTasks})`;
};

