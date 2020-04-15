(function () {
  var countriesObj = {title: 'Countries', desc: 'React app fetching info from API', link: 'https://lwp-country-app.netlify.app/'};
  var rockObj = {title: 'Rock Paper Scissors', desc: 'React game', link: 'https://lwp-rock-paper-scissors.netlify.app/'};
  var tracksObj = {title: 'Tracks', desc: 'React app streaming service', link: 'https://music-store-project-61ddd.firebaseapp.com/'};


  var clickableWork = document.querySelectorAll(".work-piece");
  var closeModalButton = document.querySelectorAll(".close-modal--js")[0];
  var modal = document.querySelectorAll(".modal")[0];

  clickableWork.forEach(function (work) {
    work.addEventListener("click", function (e) {
    //   var div = e.target;
     
    //   console.log(img);
      showModal();
    });
  });

  closeModalButton.addEventListener("click", closeModal);

  function showModal() {
    modal.style.cssText = "opacity: 1; z-index: 2";
  }

  function closeModal() {
    modal.style.cssText = "opacity: 0; z-index: 0";
  }
})();
