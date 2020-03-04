(() => {

  function formInput() {
    let input = modalWindow().querySelector('[type=text]');

    console.log(input);
    return input;
  }

  function modalWindow() {
    const modal = document.querySelector('.modal');

    return modal;
  };

  function modalWindowAnimation() {
    modalWindow().classList.add('modal--show-window-anim');
  }

  function hideModalWindow () {
    modalWindow().classList.add('modal--hidden');
  };

  function showModalWindow() {
    modalWindow().classList.remove('modal--hidden');
  };

  hideModalWindow();

  window.addEventListener('click', e => {
    e.preventDefault();
    let targetElement = e.target;
    console.log(targetElement);

    if (targetElement.dataset.action === 'openModal') {
      showModalWindow();
      modalWindowAnimation();
      formInput().focus();

    } else if (targetElement.dataset.action === 'closeModal') {
      hideModalWindow();
    }
  });

  window.addEventListener('keydown', e => {
    if (e.keyCode === '27') {
      hideModalWindow();
    }
  })

})();
