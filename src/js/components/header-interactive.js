const burgerBtn = document.querySelector('.burger'),
      menu = document.querySelector('.menu'),
      itemDropDown = document.querySelectorAll('.menu__list-item.drop__down');

burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('menu--visible');
});

itemDropDown.forEach((buttonItem) => {
  const itemList = buttonItem.querySelector('.drop__down-list');
  const dropDownLink = buttonItem.querySelector('.menu__list-link');
  dropDownLink.addEventListener('click', () => {
    itemList.classList.toggle('active');
  });
});

