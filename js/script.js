const menu_btn = document.querySelector(".menu_btn");

function buttonHandler() {
    this.classList.toggle("open");
}

menu_btn.addEventListener("click", buttonHandler)