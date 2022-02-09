const menu = document.querySelector('#mobile-menu')
const hamburgerMenu = document.querySelector('#hamburger-menu')
const closeIcon = document.querySelector('#close-icon')
const footerDate = document.querySelector('#footer-date')

hamburgerMenu.addEventListener('click', () => {
    menu.classList.add('show')
})

closeIcon.addEventListener('click', () => {
    menu.classList.remove('show')
})

function getCurrentFooterDate() {
    const currentYear = new Date().getFullYear()
    footerDate.innerHTML = `&copy; ${currentYear} Loopstudios. All rights reserved.`
}

getCurrentFooterDate()
