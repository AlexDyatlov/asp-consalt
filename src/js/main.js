const btns = document.querySelectorAll('.btn'),
      modalOverlay = document.querySelector('.modal-overlay'),
      closeBtn = document.querySelectorAll('.modal-close'),
      modals = document.querySelectorAll('.modal'),
      element = document.getElementById('phone'),
      maskOptions = {mask: '+{7}(000)000-00-00'},
      chBox = document.getElementById('checkbox'),
      sendForm = document.getElementById('form-send'),
      chBoxModal = document.getElementById('checkbox-modal'),
      modalFormSend = document.getElementById('modal__form-send');



const servicesSlider = new Swiper('.services-slider', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.service-btn',
    type: 'bullets',
    clickable: true
  },
});

// start modalsWindow
btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal-overlay--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible')
    modalOverlay.classList.add('modal-overlay--visible');
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

// start imaskjs
const mask = IMask(element, maskOptions);

const clientsSlider = new Swiper('.clients-slider', {
  loop: true,
  slidesPerView: 4,
  autoplay: {
    delay: 3000,
  },
});

// start checkbox-disabled
chBox.onchange = function(){
  if(chBox.checked){
    sendForm.disabled = false;
  } else{
    sendForm.disabled = true;
  }
};

chBoxModal.onchange = function(){
  if(chBoxModal.checked){
    modalFormSend.disabled = false;
  } else{
    modalFormSend.disabled = true;
  }
};
