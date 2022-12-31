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
				{ src: 'img/main-sp1.webp'},
				{ src: 'img/main-sp2.webp'},
				{ src: 'img/main-sp3.webp'}
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
let imgWrapper = document.querySelector('.section-top__wrapper');
let leftAnimeInner = [...document.querySelectorAll('.leftAnimeInner')];
let leftAnime = [...document.querySelectorAll('.leftAnime')];
let fadeUpTarget = [...document.querySelectorAll('.fadeTarget')];

//監視対象が画面に入ったらactiveをつける
let setItemActive = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
    // } else{
    //   entry.target.classList.remove('active');
    // }
  })
}

//optionsで要素がどのくらい入ったら実行するかを調整できる（threshold)
let options = {
  rootMargin: '0px',
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
let fadeUp = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fadeUpTarget[0].classList.add('fadeUp');
      fadeUpTarget[1].classList.add('fadeUp');
    }
  })
}

let LeftRightObserver = new IntersectionObserver(slideAnimeLeftRight, options);
let RightLeftObserver = new IntersectionObserver(slideAnimeRightLeft, options);
let fadeUpObserver = new IntersectionObserver(fadeUp, options);
LeftRightObserver.observe(imgWrapper);
RightLeftObserver.observe(imgWrapper);
fadeUpObserver.observe(imgWrapper);
