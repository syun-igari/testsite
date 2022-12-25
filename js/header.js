let mobilebtn = document.querySelector('.mobile-menu');
let navMenu = document.querySelector('.nav__wrapper');
let logoMenu = document.querySelector('.header-log');
let trigger = [...document.querySelectorAll('.bgLRextendTrigger')];
let trigger2 = [...document.querySelectorAll('.bgappearTrigger')];
let getscroll = document.querySelector('.scrolldown2');
let header = document.querySelector('header');
let header_wrapper = document.querySelector('.header-wrapper');
let getheight = window.innerHeight;


header.style.height = getheight + 'px';
header_wrapper.style.height = getheight + 'px';
mobilebtn.addEventListener('click', function () {
  mobilebtn.classList.toggle('action');
  navMenu.classList.toggle('active');
  logoMenu.classList.toggle('active');
})

window.addEventListener('load', function () {
  // trigger.map((item, index) => {
  //   item.classList.add('bgLRextend');
  // })
  // trigger2.map((item, index) => {
  //   item.classList.add('bgappear');
  // })
  setTimeout('triggers();', 1500)
  getscroll.classList.add('blur');
})



function triggers() {
  trigger.map((item, index) => {
    item.classList.add('bgLRextend');
  })
  trigger2.map((item, index) => {
    item.classList.add('bgappear');
  })
}
