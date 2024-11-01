const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
let form = document.getElementById("taskForm")
let addTaskForm = document.getElementById("addTask")
let title = document.getElementById("title");
let dueDate =document.getElementById("dueDate");
let description =document.getElementById("description");
const status = document.getElementById("status");
const priority = document.getElementById("priority");
let msg =document.getElementById("msg");
let todoContainer =document.getElementById("todoContainer");
let inProgressContainair =document.getElementById("inProgressContainair");
let doneContainer =document.getElementById("doneContainer"); 




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
        msg.innerHTML="Title cannot be blank"
    } else {
        console.log('Success');
      msg.innerHTML=""
      acceptData();
    }
}


//store data

let data={

};

let acceptData = () => {
data["text"]=title.value;
data["date"]=dueDate.value;
data["description"]=description.value;

creatTasks();
};


//affiche data

let creatTasks = ()=>{
    
  if(priority.value=="P1"){
    if(status.value=="to-do"){

      
 todoContainer.innerHTML += `
    <div class="bg-[#16171B] text-xs border-2 border-red-500 p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                    <span class="text-lg font-bold">${data.text}</span>
                    <span>${data.date}</span>
                    <p>${data.description}</p>
                    <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    
                        <i class="fa-solid fa-trash hover:text-pink-400"></i>
                        <i class="fa-solid fa-pen-to-square hover:text-pink-400"></i>

                    </span>
                </div>
    `;}
    if(status.value=="doing"){
    inProgressContainair.innerHTML += `
    <div class="bg-[#16171B] text-xs border-2 border-red-500 p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                    <span class="text-lg font-bold">${data.text}</span>
                    <span>${data.date}</span>
                    <p>${data.description}</p>
                    <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    
                        <i class="fa-solid fa-trash hover:text-pink-400"></i>
                        <i class="fa-solid fa-pen-to-square hover:text-pink-400"></i>

                    </span>
                </div>
    `;}
    if(status.value=="done"){
    doneContainer.innerHTML += `
    <div class="bg-[#16171B] text-xs border-2 border-red-500 p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                    <span class="text-lg font-bold">${data.text}</span>
                    <span>${data.date}</span>
                    <p>${data.description}</p>
                    <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    
                        <i class="fa-solid fa-trash hover:text-pink-400"></i>
                        <i class="fa-solid fa-pen-to-square hover:text-pink-400"></i>

                    </span>
                </div>
    `;}
}

if(priority.value=="P2"){
    if(status.value=="to-do"){

      
 todoContainer.innerHTML += `
    <div class="bg-[#16171B] text-xs border-2 border-orange-500 p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                    <span class="text-lg font-bold">${data.text}</span>
                    <span>${data.date}</span>
                    <p>${data.description}</p>
                    <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    
                        <i class="fa-solid fa-trash hover:text-pink-400"></i>
                        <i class="fa-solid fa-pen-to-square hover:text-pink-400"></i>

                    </span>
                </div>
    `;}
    if(status.value=="doing"){
    inProgressContainair.innerHTML += `
    <div class="bg-[#16171B] text-xs border-2 border-orange-500 p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                    <span class="text-lg font-bold">${data.text}</span>
                    <span>${data.date}</span>
                    <p>${data.description}</p>
                    <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    
                        <i class="fa-solid fa-trash hover:text-pink-400"></i>
                        <i class="fa-solid fa-pen-to-square hover:text-pink-400"></i>

                    </span>
                </div>
    `;}
    if(status.value=="done"){
    doneContainer.innerHTML += `
    <div class="bg-[#16171B] text-xs border-2 border-orange-500 p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                    <span class="text-lg font-bold">${data.text}</span>
                    <span>${data.date}</span>
                    <p>${data.description}</p>
                    <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    
                        <i class="fa-solid fa-trash hover:text-pink-400"></i>
                        <i class="fa-solid fa-pen-to-square hover:text-pink-400"></i>

                    </span>
                </div>
    `;}
}


if(priority.value=="P3"){
    if(status.value=="to-do"){

      
 todoContainer.innerHTML += `
    <div class="bg-[#16171B] text-xs border-2 border-green-500 p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                    <span class="text-lg font-bold">${data.text}</span>
                    <span>${data.date}</span>
                    <p>${data.description}</p>
                    <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    
                        <i class="fa-solid fa-trash hover:text-pink-400"></i>
                        <i class="fa-solid fa-pen-to-square hover:text-pink-400"></i>

                    </span>
                </div>
    `;}
    if(status.value=="doing"){
    inProgressContainair.innerHTML += `
    <div class="bg-[#16171B] text-xs border-2 border-green-500 p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                    <span class="text-lg font-bold">${data.text}</span>
                    <span>${data.date}</span>
                    <p>${data.description}</p>
                    <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    
                        <i class="fa-solid fa-trash hover:text-pink-400"></i>
                        <i class="fa-solid fa-pen-to-square hover:text-pink-400"></i>

                    </span>
                </div>
    `;}
    if(status.value=="done"){
    doneContainer.innerHTML += `
    <div class="bg-[#16171B] text-xs border-2 border-green-500 p-4 ml-2 mr-2 flex flex-col gap-2 text-white rounded-2xl transition-transform duration-300 hover:scale-105">
                    <span class="text-lg font-bold">${data.text}</span>
                    <span>${data.date}</span>
                    <p>${data.description}</p>
                    <span class="options flex justify-end gap-4 hover:cursor-pointer ">
                    
                        <i class="fa-solid fa-trash hover:text-pink-400"></i>
                        <i class="fa-solid fa-pen-to-square hover:text-pink-400"></i>

                    </span>
                </div>
    `;}
}
   
    resetForm();
   

};

//reset fonction

let resetForm = ()=>{
    title.value ="";
    dueDate.value ="";
    description.value ="";
}






