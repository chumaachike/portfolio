const hamburger = document.getElementById("hambuger")
const hhh = document.getElementById("nav-list")
const header = document.getElementById("header-1")

function toggleMenu() {
    hhh.classList.toggle('vvv')
    header.classList.toggle('hide-logo')
}

hamburger.addEventListener("click", toggleMenu);