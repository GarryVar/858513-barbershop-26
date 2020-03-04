(() => {

  function modalWindow() {
    const modalWindow = document.querySelector('.modal');

    return modalWindow;
  };

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

    if (targetElement.dataset.action === 'openModal') {
      showModalWindow();
    }
  })

})();
