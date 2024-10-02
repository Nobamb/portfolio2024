$(document).ready(function () {



  $('html, body').scrollTop(0);


  // 위 아래 선의 길이 증가


  $('header .header-border').stop().animate({ 'width': '100%' }, 700);





  /** 히어로페이지의 첫번째 텍스트 애니메이션을 동작시키는 함수
   * 파라미터 값으로 파라미터에 시간만 넣으면 첫번째의 글자 동작 타이밍을 정함
   */


  const heroAni1 = (time) => {

    // 히어로 첫번재 인트로 글씨3 올라옴
    const heroAnimation2 = () => {

      setTimeout(function () {

        $('.hero ul li.hero1 .intro span').addClass('on');

      }, 200)

    }
    // 히어로 첫번재 인트로 글씨2 올라옴

    const heroAnimation1 = () => {

      setTimeout(function () {

        $('.hero ul li.hero1 .intro h2').addClass('on');

        heroAnimation2()

      }, 200)

    }




    // 히어로 첫번재 인트로 글씨1 올라옴

    setTimeout(function () {

      $('.hero ul li.hero1 .intro h3').addClass('on');

      heroAnimation1()


    }, time)




  }



  // 초기 실행(0.7초 = 헤더의 테두리 길이 변화시간)


  heroAni1(700)





  // 1뎁스 갯수 지정



  const navNum = $('nav ul li').length;





  // 1뎁스 호버

  for (let i = 0; i < navNum; i++) {
    $('nav>ul>li').eq(i).mouseenter(function () {

      // 1뎁스의 하단 테두리가 보이게 됨

      $('nav>.nav_border').addClass('on');

      // 1뎁스 하단 테두리의 길이는 호버한 1뎁스의 길이와 동일

      const navBorderWidth = $(this).width();

      $('nav>.nav_border').width(navBorderWidth);



      // 하단 테두리 위치 지정용 변수

      let left = 0;

      // left 기준으로 호버한 뎁스의 길이의 합 + 15(1뎁스 간격)씩 위치 변화시킴

      for (let w = 0; w < i; w++) {

        left += $('nav>ul>li').eq(w).width() + 15;

      }

      $('nav>.nav_border').css({ 'left': left });


      // 1뎁스의 인덱스를 추출하여 2뎁스를 보이게 함

      const I = $(this).index();

      $('nav>ul>li ul').stop().animate({ 'opacity': 0 }, 500).css({ 'display': 'none' });

      $('nav>ul>li ul').eq(I).css({ 'display': 'flex' }).stop().animate({ 'opacity': 1 }, 500);




    })
  }


  // 1뎁스의 호버 중지시에

  $('nav>ul>li').mouseleave(function () {


    // 1뎁스 하단 테두리 지우고 2뎁스 메뉴창 지움

    $('nav>.nav_border').removeClass('on');


    $('nav>ul>li ul').stop().animate({ 'opacity': 0 }, 500).css({ 'display': 'none' });

  })






  $('.non_desktop_menu').click(function () {


    $('.non_desktop_menu_list').addClass('on');



  })



  $('.non_desktop_menu_list>.closed').click(function () {


    $(this).parents('.non_desktop_menu_list').removeClass('on');



  })



  $('.non_desktop_menu_list>ul>li').mouseenter(function () {


    $(this).find('a').addClass('on');

  })


  $('.non_desktop_menu_list>ul>li').mouseleave(function () {


    $(this).find('a').removeClass('on');

  })








  // 두번째 히어로의 단계 개수

  const herolevel = $('.hero ul li.hero2 .mainLine ul li').length;


  // 히어로의 버튼 클릭시

  $('.hero .heroBtns span').click(function () {


    // 인덱스 추출

    const I = $(this).index();


    // 클릭한 인덱스에 맞는 히어로만 보이게 하고
    // 클릭한 버튼이 활성화됨

    $('.hero>ul>li').removeClass('on');

    $('.hero>ul>li').eq(I).addClass('on');


    $('.hero .heroBtns span').removeClass('on');


    $(this).addClass('on');


    // 첫번째 버튼 클릭하면 첫번째 인트로의 글자 등장
    // 두번째 버튼 클릭하면 퇴장

    switch (I) {
      case 0:

        heroAni1(200);

        setTimeout(() => {

          $('.hero ul li.hero2>h2').removeClass('on');

          $('.hero ul li.hero2 .mainLine').removeClass('on');

          $('.hero ul li.hero2 .mainLine ul li').removeClass('on');



        }, 300);


        break;

      case 1:

        $('.hero ul li.hero1 .intro span').removeClass('on');
        $('.hero ul li.hero1 .intro h2').removeClass('on');
        $('.hero ul li.hero1 .intro h3').removeClass('on');



        $('.hero ul li.hero2>h2').addClass('on');



        setTimeout(() => {

          $('.hero ul li.hero2 .mainLine').addClass('on');


          for (let hero = 0; hero < herolevel; hero++) {

            setTimeout(() => {

              $('.hero ul li.hero2 .mainLine ul li').eq(hero).addClass('on');

            }, 500 * (hero + 1));

          }


        }, 500);



        break;
    }


  })




  let move = 0;

  $('.button .prev').click(function () {

    if (move <= -1) {
      move++;

      $('.hero>.hero_box>.hero_boxBottom .hero_list ul').stop().animate({ 'left': `${move * 33.3333}%` }, 300);
    }

    console.log(move);

  })



  $('.button .next').click(function () {

    if (move >= -1) {
      move--;

      $('.hero>.hero_box>.hero_boxBottom .hero_list ul').stop().animate({ 'left': `${move * 33.3333}%` }, 300);



    }



  })









  $('.hero>.hero_box>.hero_boxBottom>ul li').click(function () {


    const I = $(this).index();

    $('.hero>.hero_box>.hero_boxBottom>ul li').removeClass('on');


    $(this).addClass('on');


    $('.hero>.hero_box>.hero_boxBottom .hero_list ul').removeClass('on');

    $('.hero>.hero_box>.hero_boxBottom .hero_list ul').eq(I).addClass('on');
  })


























  const circle = $('.connect ul li').length;




  const circleFadeOut = $('.event').offset().top;



  const center = $(window).height() / 2;






  const noticeFade = $('.notice').offset().top;






  const menuLen = $('.menu_list span').length;





  const exampleFade = $('.example').offset().top;

  const exampleLen = $('.example ul li').length;






  // 스크롤했을 때


  $(window).scroll(function () {

    // 스크롤값 지정

    const scroll = $('html, body').scrollTop();

    if (scroll >= 0 && scroll < circleFadeOut) {

      for (let c = 0; c < circle; c++) {

        setTimeout(() => {

          $('.connect ul li>.circle').eq(c).addClass('on');

        }, c * 300);

      }

    }


    if (scroll >= circleFadeOut) {

      $('.connect ul li>.circle').removeClass('on');

    }






    if (noticeFade - center < scroll) {


      for (let ml = 0; ml < menuLen; ml++) {


        setTimeout(() => {

          $('.menu_list span').eq(ml).addClass('show');

        }, 300 * ml);



      }


    }



    else {

      $('.menu_list').removeClass('on');

      $('.menu_list span').removeClass('show');

    }








    if (exampleFade - center < scroll) {


      for (let ex = 0; ex < exampleLen; ex++) {


        setTimeout(() => {

          $('.example ul li').eq(ex).stop().addClass('on');

        }, 300 * ex);

      }


    }



    else {

      $('.example ul li').stop().removeClass('on');

    }










  })


















  const slide = $('.event>.allEvent>.slide ul li').length;

  for (let s = 0; s < slide; s++) {

    $('.event>.allEvent>.slide ul li').eq(s).css({ 'left': `${s * 100}%` });

    $('.event>.allEvent>.slide ul li').eq(s).find('a').css({ 'background-image': `url(img/slide${s + 1}.png)` });
  }




  let slideCount = 0;


  let progress = 0;



  const slideTime = 3000;


  let changeSlide = setInterval(() => {

    slideCount++;

    if (slideCount === slide) {

      slideCount = 0;

    }


    $('.event>.allEvent>.slide ul').stop().animate({ 'left': `${slideCount * -100}%` });



  }, slideTime);





  let progressAnimation = setInterval(() => {

    progress++;

    $('.event>.allEvent>.slide .progress .progress_now').css({ 'width': `${progress}%` })

    if (progress >= 100) {

      progress = 0;

    }

  }, slideTime / 100);




  $('.event>.allEvent>.slide .progress>span').click(function () {

    $('.event>.allEvent>.slide .progress>span').addClass('state');

    $(this).removeClass('state');





    if ($(this).hasClass('run')) {


      progress = 0;


      changeSlide = setInterval(() => {

        slideCount++;

        if (slideCount === slide) {

          slideCount = 0;

        }


        $('.event>.allEvent>.slide ul').stop().animate({ 'left': `${slideCount * -100}%` });



      }, slideTime);


      progressAnimation = setInterval(() => {

        progress++;

        $('.event>.allEvent>.slide .progress .progress_now').css({ 'width': `${progress}%` })

        if (progress >= 100) {

          progress = 0;

        }

      }, slideTime / 100);


    }




    if ($(this).hasClass('stop')) {

      clearInterval(changeSlide);

      clearInterval(progressAnimation);

    }






  })


















  $('.menu_list span').click(function () {



    const I = $(this).index();


    $('.menu_list span').removeClass('on');


    $(this).addClass('on');


    $('.noticeAll>ul>li').removeClass('on');


    $('.noticeAll>ul>li').eq(I).addClass('on');


  })





  $('.gallery_box>.gallery1 ul').mouseenter(function () {

    $(this).parents('.gallery1').find('ul').css({ 'animation-play-state': 'paused' });


  })





  $('.gallery_box>.gallery1 ul').mouseleave(function () {

    $(this).parents('.gallery1').find('ul').css({ 'animation-play-state': 'running' });


  })





  $('.gallery_box>.gallery2 ul').mouseenter(function () {

    $(this).parents('.gallery2').find('ul').css({ 'animation-play-state': 'paused' });


  })





  $('.gallery_box>.gallery2 ul').mouseleave(function () {

    $(this).parents('.gallery2').find('ul').css({ 'animation-play-state': 'running' });


  })





  let winW = $(window).width();

  $(window).resize(function () {

    winW = $(window).width();

    console.log(winW)


  })





  if (winW <= 768) {

    $('.non_desktop_menu_list>ul>li>a').click(function () {

      $('.non_desktop_menu_list>ul>li>ul').removeClass('on');

      $(this).siblings('ul').addClass('on');

    })
  }


})