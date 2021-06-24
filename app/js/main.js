"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordion');
  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var self = e.currentTarget;
      var control = self.querySelector('.accordion__control');
      var content = self.querySelector('.accordion__content');
      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});
AOS.init({
  once: true,
  delay: 400
});
"use strict";

if (document.querySelector('.to-top')) {
  var trackScroll = function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      document.querySelector('.to-top').classList.add('to-top-show');
    }

    if (scrolled < coords) {
      document.querySelector('.to-top').classList.remove('to-top-show');
    }
  };

  var backToTop = function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  };

  ;
  ;
  window.addEventListener('scroll', trackScroll);
  document.querySelector('.to-top').addEventListener('click', backToTop);
}

;
"use strict";

var bitrixSlider = new Swiper('.bitrix-slider', {
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
    delay: 2000
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
var analystsSlider = new Swiper('.analysts-slider', {
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
    delay: 3000
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
var programmersSlider = new Swiper('.programmers-slider', {
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
    delay: 4000
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
"use strict";

document.querySelectorAll('input[type="checkbox"]').forEach(function (el) {
  var btn = el.closest('label').nextElementSibling;
  el.addEventListener('change', function (evt) {
    return btn.disabled = !evt.target.checked;
  });
});
"use strict";

var clientsSlider = new Swiper('.clients-slider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000
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
"use strict";

var burgerBtn = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    itemDropDown = document.querySelectorAll('.menu__list-item.drop__down');
burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('menu--visible');
});
itemDropDown.forEach(function (buttonItem) {
  var itemList = buttonItem.querySelector('.drop__down-list');
  var dropDownLink = buttonItem.querySelector('.menu__list-link');
  dropDownLink.addEventListener('click', function () {
    itemList.classList.toggle('active');
  });
});
"use strict";

var element = document.querySelectorAll('input[type="tel"]');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

for (var i = 0; i < element.length; i++) {
  var mask = IMask(element[i], maskOptions);
}

;
"use strict";

var servicesSlider = new Swiper('.services-slider', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});
"use strict";

var btns = document.querySelectorAll('.modal-btn'),
    modalOverlay = document.querySelector('.modal-overlay'),
    closeBtn = document.querySelectorAll('.modal-close'),
    modals = document.querySelectorAll('.modal');
btns.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var path = e.currentTarget.getAttribute('data-path');
    modals.forEach(function (el) {
      el.classList.remove('modal-overlay--visible');
    });
    document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});
modalOverlay.addEventListener('click', function (e) {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach(function (el) {
      el.classList.remove('modal--visible');
    });
  }
});

for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', function (e) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach(function (el) {
      el.classList.remove('modal--visible');
    });
  });
}

;
"use strict";

var validateForms = function validateForms(selector, rules, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    messages: {
      name: {
        required: 'Поле обязательно для заполнения.'
      },
      email: {
        required: 'Поле обязательно для заполнения.',
        email: 'Адрес электронной почты должен содержать символ "@".'
      },
      phone: {
        required: 'Поле обязательно для заполнения.'
      }
    },
    submitHandler: function submitHandler(form) {
      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert('Сообщение успешно отправлено!');
          }
        }
      };

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      form.reset();
    }
  });
};

validateForms('.form', {
  email: {
    required: true,
    email: true
  },
  name: {
    required: true
  }
}, '.thanks-popup', 'send goal');
validateForms('.modal__form--header', {
  email: {
    required: true,
    email: true
  },
  name: {
    required: true
  },
  phone: {
    required: true
  }
}, '.thanks-popup', 'send goal');
validateForms('.modal__form--product', {
  email: {
    required: true,
    email: true
  },
  name: {
    required: true
  },
  phone: {
    required: true
  }
}, '.thanks-popup', 'send goal');
validateForms('.modal__form--large', {
  email: {
    required: true,
    email: true
  },
  name: {
    required: true
  }
}, '.thanks-popup', 'send goal');
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelector('.tabs');
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  var tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', function (e) {
      if (e.target.classList.contains('tabs__btn')) {
        var tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    });
  }

  ;

  var tabsHandler = function tabsHandler(path) {
    tabsBtn.forEach(function (el) {
      el.classList.remove('tabs__btn--active');
    });
    document.querySelector("[data-tabs-path=\"".concat(path, "\"]")).classList.add('tabs__btn--active');
    tabsContent.forEach(function (el) {
      el.classList.remove('tabs__content--active');
    });
    document.querySelector("[data-tabs-target=\"".concat(path, "\"]")).classList.add('tabs__content--active');
  };
});
"use strict";
//# sourceMappingURL=main.js.map
