var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

Date.prototype.toDateString = function() {
 return [this.getDate() < 10 ? '0' + this.getDate() : this.getDate(), this.getMonth() < 9 ? '0' + (this.getMonth() + 1) : this.getMonth() + 1, this.getFullYear()].join('/')
}

if (document.getElementById) onload = function() {
 document.getElementById('dateDefault').value = new Date().toDateString()
}