const menu_btn = document.querySelector(".menu_btn");
const menu = document.querySelector("nav ul");

function buttonHandler() {
    this.classList.toggle("open");
    menu.classList.toggle("open_menu");
}

menu_btn.addEventListener("click", buttonHandler)