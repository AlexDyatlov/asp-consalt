const clientsSlider = new Swiper('.clients-slider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
