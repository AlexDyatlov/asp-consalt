const analystsSlider = new Swiper('.analysts-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
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
  breakpoints: {
    410: {
      slidesPerView: 1.5,
      spaceBetween: 15
    },
    610: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    820: {
      slidesPerView: 2.3
    }
  }
});

const programmersSlider = new Swiper('.programmers-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
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
  breakpoints: {
    410: {
      slidesPerView: 1.5,
      spaceBetween: 15
    },
    610: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    820: {
      slidesPerView: 2.3
    }
  }
});
