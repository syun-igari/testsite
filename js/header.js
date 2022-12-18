let mobilebtn = document.querySelector('.mobile-menu');
let navMenu = document.querySelector('.nav__wrapper');
let logoMenu = document.querySelector('.header-log');

mobilebtn.addEventListener('click', function () {
  mobilebtn.classList.toggle('action');
  navMenu.classList.toggle('active');
  logoMenu.classList.toggle('active');
})


