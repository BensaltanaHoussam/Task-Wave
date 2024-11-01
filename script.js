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
        acceptData();
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
            <div class="bg-[#16171B] text-xs border-2 ${getPriorityClass(task.priority)} p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                <span class="text-lg font-bold">${task.text}</span>
                <span>${task.date}</span>
                <p>${task.description}</p>
                <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    <i id="deleteButton" class="fa-solid fa-trash hover:text-pink-400" onclick="deleteTask(${index})"></i>
                    <i class="fa-solid fa-pen-to-square hover:text-pink-400"></i>
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
};



// Reset form function
let resetForm = () => {
    title.value = "";
    dueDate.value = "";
    description.value = "";
};


