let responsiveMenu = document.querySelector('.navMenu-mobile')
let hamburgerIcon = document.querySelector('.iconOpen')
let fullscreenoverlay = document.querySelector('.fullscreen-overlay')

function toggleMenu() {
    if (responsiveMenu.classList.contains('openMenu')) {
        closeMenu()
    } else {
        openMenu()
    }
}

function openMenu() {
    responsiveMenu.classList.add('openMenu')
    fullscreenoverlay.style.display = 'block'
    hamburgerIcon.style.transition = '1s'
    hamburgerIcon.style.transform = `rotate(90deg)`
}

function closeMenu() {
    responsiveMenu.classList.remove('openMenu')
    fullscreenoverlay.style.display = 'none'
    hamburgerIcon.style.transition = '1s'
    hamburgerIcon.style.transform = `rotate(0deg)`
}
