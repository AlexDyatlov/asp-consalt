if (document.querySelector('.to-top')) {
  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      document.querySelector('.to-top').classList.add('to-top-show');
    }
    if (scrolled < coords) {
      document.querySelector('.to-top').classList.remove('to-top-show');
    }
  };

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  };

  window.addEventListener('scroll', trackScroll);
  document.querySelector('.to-top').addEventListener('click', backToTop);
};
