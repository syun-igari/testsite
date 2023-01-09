//headerの背景画像アニメーション
let windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用
				{ src: 'img/main.jpg'},
				{ src: 'img/wallspace.jpg'},
				{ src: 'img/bgc.webp'}
			];
		} else {
			var responsiveImage = [//タブレット（768px）以下用の画像
				{ src: 'img/main-sp4.jpg'},
				{ src: 'img/main-sp5.jpg'},
				{ src: 'img/main-sp6.jpg'}
			];
		}

//Vegas全体の設定
$('#slider').vegas({
		overlay: false,//画像の上に網線やドットのオーバーレイパターン画像を指定しない。
		transition: 'blur',//切り替わりのアニメーション
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 6000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		slides: responsiveImage,//画像設定を読む
    timer:false,//プログレスバー非表示
});

let imagesItems = [...document.querySelectorAll('.img-wrap')];
let imgWrapper = document.querySelector('.img-wrapper');
let sectionWrapper = document.querySelector('.section-top__wrapper');
let phraseWrapper = document.querySelector('.phrase');
let leftAnimeInner = [...document.querySelectorAll('.leftAnimeInner')];
let leftAnime = [...document.querySelectorAll('.leftAnime')];
let fadeUpTarget = [...document.querySelectorAll('.fadeTarget')];
let sectionService = document.querySelector('.service');
let sectionTopTitle = document.querySelector('.section-top__title');
let sectionTop = document.querySelector('.section-top');
let sliders = document.querySelector('.slider');

//監視対象が画面に入ったらactiveをつける
let setItemActive = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  })
}

//optionsで要素がどのくらい入ったら実行するかを調整できる（threshold)
let options = {
  rootMargin: '0px',
  threshold: 0.5,
}; 
let options2 = {
  rootMargin: '5px',
  threshold: 0.5,
}; 

let observer = new IntersectionObserver(setItemActive, options);

//画像を表示させる処理
observer.observe(imgWrapper);
imagesItems.map((item, index) => {
  item.children[0].style.backgroundImage = `url(./img/home${index+1}.webp)`
  observer.observe(item);
})

let slideAnimeLeftRight = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      leftAnime[0].classList.add('slideAnimeLeftRight');
      leftAnime[1].classList.add('slideAnimeLeftRight');
    }
  })
}
let slideAnimeRightLeft = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      leftAnimeInner[0].classList.add('slideAnimeRightLeft');
      leftAnimeInner[1].classList.add('slideAnimeRightLeft');
    }
  })
}

let servicetitle1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      leftAnime[2].classList.add('slideAnimeLeftRight');
    }
  })
}
let servicetitle2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      leftAnimeInner[2].classList.add('slideAnimeRightLeft');
    }
  })
}
let fadeUp = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fadeUpTarget[0].classList.add('fadeUp');
      fadeUpTarget[1].classList.add('fadeUp');
    }
  })
}
let serviceFade = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fadeUpTarget[2].classList.add('fadeUp');
      fadeUpTarget[3].classList.add('fadeUp');
      sectionService.style.background = '#000060';
      sectionService.style.transition = '0.5s';
    }
  })
}



let LeftRightObserver = new IntersectionObserver(slideAnimeLeftRight, options);
let RightLeftObserver = new IntersectionObserver(slideAnimeRightLeft, options);
let fadeUpObserver = new IntersectionObserver(fadeUp, options);
let servicetitle1Observer = new IntersectionObserver(servicetitle1, options);
let servicetitle2Observer = new IntersectionObserver(servicetitle2, options);
let serviceFadeObserver = new IntersectionObserver(serviceFade, options);
let serviceBackObserver = new IntersectionObserver(serviceFade, options2);
LeftRightObserver.observe(phraseWrapper);
RightLeftObserver.observe(phraseWrapper);
servicetitle1Observer.observe(sectionService);
servicetitle2Observer.observe(sectionService);
serviceFadeObserver.observe(sectionService);
serviceBackObserver.observe(sectionService);
fadeUpObserver.observe(phraseWrapper);


$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1,//スライドを画面に1枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
  }
]
});
