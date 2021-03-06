const servicesSlider = new Swiper('.services-slider', {
  loop: true,
  slidesPerView: 1,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
});
