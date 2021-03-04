document.querySelectorAll('.accordion-item__toggle').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordion-item--active');
  });
});
