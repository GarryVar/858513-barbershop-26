(()=> {

  window.addEventListener('resize', e => {
    if (window.innerWidth < 760) {
        console.log('Событие ресайз сработало');
    }

  });

})();
