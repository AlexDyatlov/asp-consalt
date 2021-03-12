const chBox = document.getElementById('checkbox'),
      sendForm = document.getElementById('form-send'),
      chBoxHeader = document.getElementById('checkbox-header'),
      headerFormSend = document.getElementById('header__form-send'),
      chBoxPrice = document.getElementById('checkbox-price'),
      priceFormSend = document.getElementById('price__form-send');

if (chBox) {
  chBox.onchange = function(){
    if(chBox.checked){
      sendForm.disabled = false;
    } else{
      sendForm.disabled = true;
    }
  };
};

chBoxHeader.onchange = function(){
  if(chBoxHeader.checked){
    headerFormSend.disabled = false;
  } else{
    headerFormSend.disabled = true;
  }
};

chBoxPrice.onchange = function(){
  if(chBoxPrice.checked){
    priceFormSend.disabled = false;
  } else{
    priceFormSend.disabled = true;
  }
};
