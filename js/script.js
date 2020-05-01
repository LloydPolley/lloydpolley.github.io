(function () {
  var boxes = document.querySelectorAll('.adi__box');

  boxes.forEach(function (box) {
    box.addEventListener('click', function () {
      // console.log('run')
      handleBoxClick(box);
    })
  })


  function handleBoxClick(box) {
    // box.classList.toggle('full')
    // boxes[1].classList.add('hide');
    // boxes[0].classList.add('full');
    // boxes[2].classList.add('hide');
  }



})();



