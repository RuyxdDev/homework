const openBtn = document.querySelector('.burger-icon')
const burgerMenu = document.querySelector('.body')

const closeMenu = () => {
    burgerMenu.classList.remove('body--opened-menu')
}


openBtn.addEventListener('click', () => {     
    burgerMenu.classList.add('body--opened-menu')
})

burgerMenu.addEventListener('click', event => {
    const target  = event.target
    console.log(target)
    if (target.classList.contains('burger-icon') || target.classList.contains('nav__link')){
        closeMenu()
    }
})

document.addEventListener('keydown', event => {
    if (event.code == 'Escape' && burgerMenu.classList.contains('body--opened-menu')){
        closeMenu()
    }
})