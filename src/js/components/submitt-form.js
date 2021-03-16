let validateForms = function(selector, rules, successModal, yaGoal) {
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
      },
    },
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						alert('Сообщение успешно отправлено!');
					}
				}
			}

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

validateForms('.modal__form--services', {
  email: {
    required: true,
    email: true
  },
  name: {
    required: true
  }
}, '.thanks-popup', 'send goal');
