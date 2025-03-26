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

