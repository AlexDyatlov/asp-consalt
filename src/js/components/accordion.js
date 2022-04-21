document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(function (dropDownWrapper) {
		dropDownWrapper.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

      const calculationBtns = dropDownWrapper.querySelectorAll('.calculation__btn');
      const dropDownBtn = dropDownWrapper.querySelector('.calculation__control');
      const dropDownInput = dropDownWrapper.querySelector('.calculation__value');


			self.classList.toggle('_open');

			if (self.classList.contains('_open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}

      calculationBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            dropDownBtn.textContent = el.textContent;
            dropDownInput.value = el.textContent;
        })
      })

		});

	});
});
