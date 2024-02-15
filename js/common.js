$(document).ready(function() {



  $(".item-question__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
    $(this).parent().siblings(".item-question").removeClass("active");
    $(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
  });

  /*input file*/
$("input[type='file']").change(function(){
	var filename_text = $(this).parent().siblings(".name-upload");
	var filename = $(this).val().replace(/.*\\/, "");
	filename_text.html(filename);
});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".sandwich").click(function() {
		$(this).toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
	});
	

	//слайдер

	$('.slider-images').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
	});

	

	$('.slider-offers').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
			]
		});

	

	$('.slider-tabs').each(function () {
		$(this).slick({
			arrows: false,
			dots: false,
			infinite: false,
			variableWidth: true,
			focusOnSelect: true,
			touchThreshold: 1000,
			asNavFor: $(this).parents("section").find('.slider-tab-container'),
			slidesToShow: 6,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						infinite: true,
					}
				}
				]
			});
	  });


	$('.slider-tab-container').each(function () {
		$(this).slick({
			arrows: false,
			dots: false,
			infinite: false,
			fade: true,
			swipe: false,
			asNavFor: $(this).parents("section").find('.slider-tabs'),
			touchThreshold: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						infinite: true,
					}
				}
				]
			});
	  });

	  $('.slider-nav-rooms').each(function () {
		$(this).slick({
			arrows: false,
			dots: false,
			infinite: false,
			variableWidth: true,
			focusOnSelect: true,
			touchThreshold: 1000,
			asNavFor: $(this).parents("section").find('.slider-for-rooms'),
			slidesToShow: 5,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						infinite: true,
						slidesToShow: 1,
					}
				}
				]
			});
	  });


	$('.slider-for-rooms').each(function () {
		$(this).slick({
			arrows: false,
			dots: false,
			infinite: false,
			fade: true,
			asNavFor: $(this).parents("section").find('.slider-nav-rooms'),
			touchThreshold: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						fade: false,
						centerMode: true,
						infinite: true,
						variableWidth: true
					}
				}
				]
			});
	  });


	  $('.slider-photo').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
	});

	$('.slider-gallery').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});
	
	$('.slider-catalog').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.slider-service').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.slider-for-gallery').each(function () {
		$(this).slick({
		arrows: false,
		dots: false,
		infinite: false,
		asNavFor: $(this).siblings('.slider-nav-gallery'),
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
	});
});

$('.slider-nav-gallery').each(function () {
	$(this).slick({
	arrows: false,
	dots: false,
	infinite: false,
	focusOnSelect: true,
	asNavFor: $(this).siblings('.slider-for-gallery'),
	touchThreshold: 1000,
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
	nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
});
});

	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents("section").find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);

		$(this).parents("section").find(".slider-photo").slick('setPosition');
		$(this).parents("section").find(".slider-balloon").slick('setPosition');
		$(this).parents("section").find(".slider-for-gallery").slick('setPosition');
		$(this).parents("section").find(".slider-nav-gallery").slick('setPosition');
	});

	$('.tabs-page li a').click(function(event) {
		event.preventDefault();
		var textTab = $(this).html();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents(".row").find(".tab-pane-page").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);
		$(this).parents(".row").find(".slider-images").slick('setPosition');

		$(this).parent().parent().siblings(".btn-tab").html(textTab);
		$(this).parent().parent().siblings(".btn-tab").removeClass("active");
	});


	$('.infrastructure .tabs-page li a').click(function() {
		$(this).parents(".infrastructure").find(".content-tab").fadeIn(0);
	});

	$('.tab-mobile').click(function(event) {
		event.preventDefault();
		$(this).parent().siblings().find(".tab-mobile").removeClass("active")
		$(this).parent().siblings().find(".tab-container-mobile").slideUp(200);
		$(this).toggleClass("active")
		$(this).siblings(".tab-container-mobile").slideToggle(200);
	});

	jQuery('.tabs-wrap').each(function() {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".active a").html();
		currentTab.find(".btn-tab").html(initalTextTab);
}); 
$('.btn-tab').click(function() {
	$(this).toggleClass("active");
	$(this).siblings(".tabs-page").slideToggle(200);
	$('.tabs-page li a').click(function(event) {
		$(this).parent().parent().slideUp(200);
	}); 
}); 


	$('.close-tab').click(function(event) {
		event.preventDefault();
		$(this).parents(".content-tab").fadeOut(0);

	});


	{
		if ($(window).width() < 992) { 
			$("div.footer__title").click(function() {
				$(this).toggleClass("active");
				$(this).next(".footer__content").slideToggle(200);
			}); 

		}
	}

	$(".input-phone").mask("+7 (999) 999-99-99");


	new fullpage('#fullpage', {

	});
	
	
	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

