let sections = document.querySelectorAll('.section');
let controlBtnContainer = document.getElementsByClassName(
  'control-btn-container'
);
let controlBtns = document.querySelectorAll('.control-btn');
let sectionContainer = document.getElementsByClassName('section-container');

function changePage() {
  for (let i = 0; i < controlBtns.length; i++) {
    controlBtns[i].addEventListener('click', function () {
      let curBtn = document.querySelectorAll('.control-btn.active');
      curBtn[0].classList.remove('active');
      this.classList.add('active');

      for (let j = 0; j < sectionContainer.length; j++) {
        let curSection = document.querySelectorAll('.section.active');
        curSection[0].classList.remove('active');
      }

      document.getElementById(this.dataset.id).classList.add('active');
    });
  }
}
changePage();
