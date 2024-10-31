const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
let form = document.getElementById("taskForm")
let addTaskForm = document.getElementById("addTask")
let title = document.getElementById("title");
let dueDate =document.getElementById("dueDate");
let description =document.getElementById("description");
let msg =document.getElementById("msg");



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
console.log(data);
};





