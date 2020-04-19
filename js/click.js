(function () {
  

  var countryDescription = 'Where in the world is a React app which fetches data from the restcountries.eu/ API. ';
  var rockDescription = 'This is a React app of the game rock paper scissors in which you play against a computer opponent. The score is recorded per session';
  var tracksDescription = 'Soundport is a React app with redux for state managament. The files are stored on a Firebase database which enables the user to upload music and the data to be persistant. The idea behind this app was to create a music streaming service with user uploads';


  var countriesObj = { title: 'Where in the world?', desc: countryDescription, link: 'https://lwp-country-app.netlify.app/', image: './files/imgs/maps.jpg', github: 'https://github.com/LloydPolley/Rest-Countries-API' };
  var rockObj = { title: 'Rock Paper Scissors', desc: rockDescription, link: 'https://lwp-rock-paper-scissors.netlify.app/', image: './files/imgs/rock.jpg', github: 'https://github.com/LloydPolley/Rock-Paper-Scissors' };
  var tracksObj = { title: 'Soundport', desc: tracksDescription, link: 'https://music-store-project-61ddd.firebaseapp.com/', image: './files/imgs/music.jpg', github: 'https://github.com/LloydPolley/Music-store' };

  var clickableWork = document.querySelectorAll(".work-piece");
  var closeModalButton = document.querySelectorAll(".close-modal--js")[0];
  var modal = document.querySelectorAll(".modal")[0];


  var modalTitle = modal.querySelectorAll('h2')[0];
  var modalImage = modal.querySelectorAll('img')[0];
  var modalText = modal.querySelectorAll('p')[0];
  var modalLink = modal.querySelectorAll('.webpage')[0];
  var modalGithub = modal.querySelectorAll('.github')[0];
  console.log(modal)

  clickableWork.forEach(function (work) {
    work.addEventListener("click", function (e) {
      var modalInfo = loadModalInfo(e.target.dataset.work);
      modalTitle.innerHTML = modalInfo.title;
      modalImage.src = modalInfo.image;
      modalText.innerHTML = modalInfo.desc;
      modalLink.href = modalInfo.link;
      modalGithub.src = modalInfo.github;
      toggleModal();
      scrollToMid(e.target);
    });
  });

  closeModalButton.addEventListener("click", function () {
    toggleModal();
  });

  function loadModalInfo(work) {
    if (work === 'country') {
      return countriesObj;
    } else if (work === 'rock') {
      return rockObj;
    } else {
      return tracksObj;
    }
  }

  function toggleModal() {
    modal.classList.toggle('toggleModal');
    document.body.classList.toggle('fixed');
  }

  function scrollToMid(element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

})();
