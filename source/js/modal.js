(() => {

  function formInput() {
    let input = modalWindow().querySelector('[type=text]');
    return input;
  };

   function formPassword() {
    let password = modalWindow().querySelector('[type=password]');
    return password;
  };

  function modalWindow() {
    const modal = document.querySelector('.modal');

    return modal;
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


  window.addEventListener('click', e => {
    let targetElement = e.target;
    console.log(targetElement);

    if (targetElement.dataset.action === 'openModal') {
      e.preventDefault();
      showModalWindow();
      modalWindowAnimation();
      formInput().focus();
      modalWindow().classList.remove('modal--error');

    } else if (targetElement.dataset.action === 'closeModal') {
      hideModalWindow();
      modalWindowRemoveAnimation();
    }
  });


  window.addEventListener('keydown', e => {
    if (e.keyCode === '27') {
      hideModalWindow();
      modalWindowRemoveAnimation()
    }
  });

  modalWindow().addEventListener('submit', e => {

    if (!formPassword().value || !formInput().value) {
      e.preventDefault();
      modalWindow().classList.remove('modal--error');
      modalWindow().offsetWidth = modalWindow().offsetWidth;
      modalWindow().classList.add('modal--error');
      modalWindow().offsetWidth = modalWindow().offsetWidth;
    }
  })

})();
