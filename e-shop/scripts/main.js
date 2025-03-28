const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 9000, // автоматическая смена слайдов каждые 5 секунд
  },
  speed: 2000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".hero__button-next",
    prevEl: ".hero__button-prev",
  },
});

// Бургер меню
const burgerIcon = document.querySelector('.burger-icon');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');
const menuItems = document.querySelectorAll('.header__menu-link'); // Получаем все пункты меню

burgerIcon.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  burgerIcon.classList.toggle('burger-icon--active');
  body.classList.toggle('body--opened-menu');
});

// Закрываем меню при клике на пункт меню
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('nav--active');
    burgerIcon.classList.remove('burger-icon--active');
    body.classList.remove('body--opened-menu');
  });
});

// Закрываем меню при нажатии клавиши Esc
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    nav.classList.remove('nav--active');
    burgerIcon.classList.remove('burger-icon--active');
    body.classList.remove('body--opened-menu');
  }
});

