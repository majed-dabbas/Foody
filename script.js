let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.nav-menu')
let nav = document.querySelector('nav')
toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
    nav.classList.toggle('active')
})