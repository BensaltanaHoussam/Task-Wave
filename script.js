
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.classList.remove("hidden");
}


span.onclick = function() {
        modal.classList.add("hidden");
    }


