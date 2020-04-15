(function () {
  var countriesObj = {title: 'Countries', desc: 'React app fetching info from API', link: 'https://lwp-country-app.netlify.app/'};
  var rockObj = {title: 'Rock Paper Scissors', desc: 'React game', link: 'https://lwp-rock-paper-scissors.netlify.app/'};
  var tracksObj = {title: 'Tracks', desc: 'React app streaming service', link: 'https://music-store-project-61ddd.firebaseapp.com/'};


  var clickableWork = document.querySelectorAll(".work-piece");
  var closeModalButton = document.querySelectorAll(".close-modal--js")[0];
  var modal = document.querySelectorAll(".modal")[0];

  clickableWork.forEach(function (work) {
    work.addEventListener("click", function (e) {
      toggleModal();
      // window.scrollTo(300, 500)
      // document.getElementById('title1').scrollIntoView({block: 'start', behavior: 'smooth'});

    });
  });

  closeModalButton.addEventListener("click", function(){
    toggleModal();
    console.log('close')
  });

  function toggleModal() {
    modal.classList.toggle('toggleModal');
  }



})();
