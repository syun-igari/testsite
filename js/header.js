let mobilebtn = document.querySelector('.mobile-menu');
let navMenu = document.querySelector('.nav__wrapper');
let logoMenu = document.querySelector('.header-log');
let trigger = [...document.querySelectorAll('.bgLRextendTrigger')];
let trigger2 = [...document.querySelectorAll('.bgappearTrigger')];

mobilebtn.addEventListener('click', function () {
  mobilebtn.classList.toggle('action');
  navMenu.classList.toggle('active');
  logoMenu.classList.toggle('active');
})

window.addEventListener('load', function () {
  trigger.map((item, index) => {
    item.classList.add('bgLRextend');
  })
  trigger2.map((item, index) => {
    item.classList.add('bgappear');
  })
})
