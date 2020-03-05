(() => {
  let leftNumber = 0;

  function findSlider() {
    let slider = document.querySelector('.gallery__list');

      return slider;
  }


  function backMove(slide) {
    if (leftNumber != 0) {
        leftNumber = leftNumber + 100;
        slide.style.left = `${leftNumber}%`;

    } else leftNumber = false;
  }


  function forwardMove(slide) {
    if (leftNumber > -300) {
        leftNumber = leftNumber - 100;
        slide.style.left = `${leftNumber}%`;

      } else leftNumber = -200;
  }


  window.addEventListener('click', e => {
    let elementTarget = e.target;

    if (elementTarget.dataset.action === 'forward') {
        e.preventDefault();
        forwardMove(findSlider());

    } else if (elementTarget.dataset.action === 'back') {
        e.preventDefault();
        backMove(findSlider());
    }

  });

})();
