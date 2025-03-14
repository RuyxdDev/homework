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
    if (target.classList.contains('burger-icon') || target.classList.contains('nav__link')){
        closeMenu()
    }
})

document.addEventListener('keydown', event => {
    if (event.code == 'Escape' && burgerMenu.classList.contains('body--opened-menu')){
        closeMenu()
    }
})

const openModal = document.querySelector('.gift__img-button');
const modalWindow = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close-btn'); 
const modalFormBtn = document.querySelector('.modal .button'); 

const closeModal = () => {
    console.log('Закрываю модалку'); 
    document.body.classList.remove('body-modal--opened');
};

openModal.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Модалка открыта'); 
    document.body.classList.add('body-modal--opened');
});


if (closeBtn) {
    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        closeModal();
    });
}


if (modalFormBtn) {
    modalFormBtn.addEventListener('click', (event) => {
        event.preventDefault();
        closeModal();
    });
}


modalWindow.addEventListener('click', (event) => {
    if (event.target === modalWindow) {
        closeModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.code == 'Escape' && document.body.classList.contains('body-modal--opened')){
        closeModal()
    }
})