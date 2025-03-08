const openBtn = document.querySelector('.btn-open')
const modalWindow = document.querySelector('.modal')

const closeModal = () => {
    modalWindow.classList.remove('open')
}


openBtn.addEventListener('click', () => {     
    modalWindow.classList.add('open')
})

modalWindow.addEventListener('click', event => {
    const target  = event.target
    if (target.classList.contains('modal') || target.classList.contains('modal__close-btn')){
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code == 'Escape' && modalWindow.classList.contains('open')){
        closeModal()
    }
})
