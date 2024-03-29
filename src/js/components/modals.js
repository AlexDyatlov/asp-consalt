const btns = document.querySelectorAll('.modal-btn'),
      modalOverlay = document.querySelector('.modal-overlay'),
      closeBtn = document.querySelectorAll('.modal-close'),
      modals = document.querySelectorAll('.modal'),
      fieldProduct = document.querySelector('.modal__form-field--product');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal-overlay--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible')
    modalOverlay.classList.add('modal-overlay--visible');

    if (el.dataset.name) {
      const productName = el.dataset.name;
      fieldProduct.placeholder = productName;
    }
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', (e) => {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
          el.classList.remove('modal--visible');
      });
  });
};
