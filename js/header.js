let mobilebtn = document.querySelector('.mobile-menu');
let navMenu = document.querySelector('.nav__wrapper');
let logoMenu = document.querySelector('.header-log');
let trigger = [...document.querySelectorAll('.bgLRextendTrigger')];
let trigger2 = [...document.querySelectorAll('.bgappearTrigger')];
let slider = document.querySelector('#slider');
let topContent = document.querySelector('.top-content');
let header = document.querySelector('header');
// let header_wrapper = document.querySelector('.header-wrapper');
let getHeight = window.innerHeight - 100;
let getScrollHeight = window.innerHeight - 100;


slider.style.height = getHeight + 'px';
topContent.style.height = getScrollHeight + 'px';
// scroll_bar.style.bottom = getScrollHeight + 'px'
mobilebtn.addEventListener('click', function () {
  mobilebtn.classList.toggle('action');
  navMenu.classList.toggle('active');
  logoMenu.classList.toggle('active');
})

window.addEventListener('load', function () {
  setTimeout('triggers();', 2200);
  setTimeout('headerActive();', 3000);
  setTimeout('sliderAnimation();', 1000);
})



function triggers() {
  trigger.map((item, index) => {
    item.classList.add('bgLRextend');
  })
  trigger2.map((item, index) => {
    item.classList.add('bgappear');
  })
}

function headerActive() {
  header.classList.add('active')
}

function sliderAnimation() {
  slider.classList.add('isPlay');
}
