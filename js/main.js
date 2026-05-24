var hamburger = document.getElementById('hamburger')
var navMenu = document.getElementById('nav-menu')

function toggleMenu() {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active')
        navMenu.classList.remove('open')
    } else {
        hamburger.classList.add('active')
        navMenu.classList.add('open')
    }
}

function fecharMenu() {
    hamburger.classList.remove('active')
    navMenu.classList.remove('open')
}
