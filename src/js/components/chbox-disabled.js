document.querySelectorAll('input[type="checkbox"]').forEach(el => {
  const btn = el.closest('label').nextElementSibling;

  el.addEventListener('change', evt => btn.disabled = !evt.target.checked);
});
