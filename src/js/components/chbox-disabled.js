const chBox = document.getElementById('checkbox'),
      sendForm = document.getElementById('form-send'),
      chBoxModal = document.getElementById('checkbox-modal'),
      modalFormSend = document.getElementById('modal__form-send');

if (chBox) {
  chBox.onchange = function(){
    if(chBox.checked){
      sendForm.disabled = false;
    } else{
      sendForm.disabled = true;
    }
  };
};

chBoxModal.onchange = function(){
  if(chBoxModal.checked){
    modalFormSend.disabled = false;
  } else{
    modalFormSend.disabled = true;
  }
};
