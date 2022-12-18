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
