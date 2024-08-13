$(document).ready(function () {




  $('.mobileMenu').click(function(){

    $(this).find('li').toggleClass('on');

    $('.mobileMenuList').toggleClass('on');

  })





  // 히어로 위치 선정


  const liNum = $('.heroarea .hero_inner ul li').length;




  for (let li = 0; li < liNum; li++) {
    $('.heroarea .hero_inner .heroList li').eq(li).css({ 'left': `${100 * li}%` })
  }



  let heroCount = 0;




  let heroAnimate = setInterval(() => {


    heroCount++;

    if (heroCount === 3) {

      heroCount = 0;

    }


    $('.heroarea .hero_inner .heroButton li').eq(heroCount).trigger('click');




  }, 5000);





  // 히어로 부분 아래의 버튼 클릭시 히어로 이미지 이동



  $('.heroarea .hero_inner .heroButton li').click(function () {

    let liI = $(this).index();

    $('.heroarea .hero_inner .heroList').animate({ 'left': `${liI * -100}%` })


    $('.heroarea .hero_inner .heroButton li').removeClass('on');

    $(this).addClass('on');

    clearInterval(heroAnimate);

    heroCount = liI;

    heroAnimate = setInterval(() => {


      heroCount++;

      if (heroCount === 3) {

        heroCount = 0;

      }


      $('.heroarea .hero_inner .heroButton li').eq(heroCount).trigger('click');




    }, 5000);



  })




  // 스크롤을 했을 때



  $(window).scroll(function () {

    // 시설안내의 중간영역 값

    const guideTop = $('.guide').offset().top - 485;

    // 스크롤값이 중간영역 값에 도달했을 때

    if ($(window).scrollTop() >= guideTop) {

      $('.guide .imgEffect').addClass('on');

    }

  })




  // 홍보갤러리 애니메이션



  $('.galleryarea .map ul').mouseenter(function () {


    $('.galleryarea .map ul').css({ 'animation-play-state': 'paused' });

  })

  $('.galleryarea .map ul').mouseleave(function () {


    $('.galleryarea .map ul:nth-child(1)').css({ 'animation': 'gallery1 120s infinite linear' })

    $('.galleryarea .map ul:nth-child(2)').css({ 'animation': 'gallery2 120s infinite linear' })

    $('.galleryarea .map ul li').removeClass('on');
    $('.galleryarea .map ul li').css({'filter': 'blur(0px)' });


  })




  $('.galleryarea .map ul li').click(function () {

    $('.galleryarea .map ul').css({'z-index': 0});

    $(this).parents('ul').css({'z-index': 600});

    $('.galleryarea .map ul li').removeClass('on');

    $('.galleryarea .map ul li').css({'filter': 'blur(3px)' });

    $(this).addClass('on');

    $(this).css({'filter': 'blur(0px)' });



  })




})