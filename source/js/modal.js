(() => {

  function modalWindow() {
    return document.querySelector('.modal');
  };


  function modalWindowAnimation() {
    modalWindow().classList.add('modal--show-window-anim');
  };



  function modalWindowRemoveAnimation() {
    modalWindow().classList.remove('modal--show-window-anim');
  };


  function hideModalWindow () {
    modalWindow().classList.add('modal--hidden');
  };


  function showModalWindow() {
    modalWindow().classList.remove('modal--hidden');
  };

  hideModalWindow();

  function form() {
    return modalWindow().querySelector('.modal__form');
  }


  function formLogin() {
    return form().querySelector('[name=login]');
  }

   function formPassword() {
    return form().querySelector('[name=password]');
  };


  window.addEventListener('click', e => {
    let targetElement = e.target;

    if (targetElement.dataset.action === 'openModal') {
      e.preventDefault();
      showModalWindow();
      modalWindowAnimation();
      formLogin().focus();
      modalWindow().classList.remove('modal--error');

    } else if (targetElement.dataset.action === 'closeModal') {
      hideModalWindow();
      modalWindowRemoveAnimation();
    }
  });


  window.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      hideModalWindow();
      modalWindowRemoveAnimation();
      modalWindow().classList.remove('modal--error');
    }
  });


  form().addEventListener('submit', e => {
    if (!formPassword().value || !formLogin().value) {
      e.preventDefault();
      // modalWindow().classList.remove('modal--error');
      modalWindow().offsetWidth =  modalWindow().offsetWidth;
      modalWindow().classList.add('modal--error');
    }
  });

})();
