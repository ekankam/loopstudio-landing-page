const menu = document.querySelector('#mobile-menu')
const hamburgerMenu = document.querySelector('#hamburger-menu')
const closeIcon = document.querySelector('#close-icon')

hamburgerMenu.addEventListener('click', () => {
    menu.classList.add('show')
})

closeIcon.addEventListener('click', () => {
    menu.classList.remove('show')
})
