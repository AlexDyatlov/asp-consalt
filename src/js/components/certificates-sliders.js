const analystsSlider = new Swiper('.analysts-slider', {
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true
  },
  autoplay: {
    delay: 3000,
  },
});

const programmersSlider = new Swiper('.programmers-slider', {
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true
  },
  autoplay: {
    delay: 4000,
  },
});
