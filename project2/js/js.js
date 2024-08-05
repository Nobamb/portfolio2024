$(document).ready(function () {



  // 기본설정 













  // 마우스 설정


  // 마우스를 움직일 때 몬스터볼이 따라옴


  $(window).mousemove(function (e) {

    let x = e.pageX;

    let y = e.pageY;

    $('.pocketMouse').css({ 'left': x - 15, 'top': y - 15 });

  })



  // 화면을 클릭하면 모습이 변했다가 원래대로 돌아옴


  $(window).click(function () {


    $('.pocketMouse').addClass('click');

    setTimeout(() => {

      $('.pocketMouse').removeClass('click');

    }, 100)


  })





















  // 데스크탑 사이즈 미리 지정
  const desktop = 1280;





  // 초기 가로, 세로값 전역변수로 지정
  let winW = 0;

  let winH = 0;





  // 윈도우 크기에 맞는 가로 세로크기 함수
  function size() {

    winW = $(window).width();
    winH = $(window).height();



    $('.box1').width(winW);
    $('.box1').height(winH);

    $('.hero').width(winW);
    $('.hero').height(winH);

    // $('.hero .listBox').width(winW);
    // $('.hero .listBox').height(winH);

    $('.hero .listBox li').width(winW);
    $('.hero .listBox li').height(winH);


    // 연혁 부분의 세대별 포켓몬들의 영역을 설정
    // 전체 세로 길이에 맞게 세로 화면 너비가 꽉차게 하기


    $('.years .yearsZone .gene').height(winH * 9);

    $('.years .yearsZone .gene ul').height(winH);

    $('.years .yearsZone .gene li').height(winH);



    $('.years .yearsZone .history').height(winH * 9);


    $('.years .yearsZone .history ul').height(winH * 9);


    $('.years .yearsZone .history li').height(winH);

    // // $('.listBox').width(winW * 5);
    // $('.listBox').height(winH);

    // // $('.listBox li').width(winW);

    // $('.listBox li').height(winH);


    // // $('.hero.on').width(1280 + 'px');
    // $('.hero.on').height(760 + 'px');

    // // $('hero.on .listBox').width(1280 + 'px');
    // $('hero.on .listBox').height(760 + 'px');

    // // $('hero.on .listBox li').width(1280 + 'px');

    // $('hero.on .listBox li').height(760 + 'px');


  }


  size();




  // 리자이징 이벤트
  $(window).resize(function () {


    // 리사이징 전 히어로 가로 크기 구함
    let winNw = $('.hero').width();
    // 리사이징을 해도 윈도우 크기에 맞는 가로 세로크기
    size();


    // 리사이징 전,후 크기가 다르면
    // if(winNw !== winW){
    //   // top값을 0으로 변경
    //   $('.hero').css({'top':0});

    // }

  })



























  // 헤더 설정







  // 히어로 화면 변경 이벤트





  // 히어로 변경 상태

  function heroResizeOn() {

    // hero영역과 그 리스트들이 작아지고
    $('.hero').stop().animate({ 'height': '760px', 'width': '1280px', 'margin': '0 auto', 'border-radius': '20px' }, 1000);

    $('.hero .listBox li').stop().animate({ 'height': '760px', 'width': '1280px', 'top': '100px', 'margin': '0 auto', 'border-radius': '20px' }, 1000);
    // 마우스 스크롤 표시가 사라지면서
    $('.mouseZone').fadeOut();
    // 헤더 부분의 색깔들이 변화
    $('header').addClass('on');


  }



  // 히어로 원래상태

  function heroResizeOff() {

    $('.hero').stop().animate({ 'height': winH, 'width': winW, 'margin': 'none', 'border-radius': '0' }, 1000);

    $('.hero .listBox li').stop().animate({ 'height': winH, 'width': winW, 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

    $('.mouseZone').fadeIn();

    $('header').removeClass('on');


  }











  // 처음 화면으로


  function home() {


    // 스크롤 최상단 이동
    $('html,body').scrollTop(0);


    // 무조건 연혁 부분의 포켓몬 안보이게

    $('.years .yearsZone .gene li').removeClass('on');


    // 메인은 스크롤 이벤트가 가능하게, 그리고 화면에 보이게
    $('#wrap').addClass('scrollevent');
    $('#wrap').removeClass('off');

    // 로그인과 서브페이지는 안보이게
    $('#login_main').removeClass('on');
    $('#sub_main').removeClass('on');

  }




  function goMain() {

    // 로고 클릭시엔 원상복구
    $('header h1').click(function (e) {

      e.preventDefault();

      // 처음화면으로

      home();


      heroResizeOff();



    })
  }











  $('.review .review_list .write .login_btn').click(function () {


    $('html,body').scrollTop(0);

    // wrap의 off클래스 부여(display none)
    // 서브페이지에 on클래스 부여(display block)
    // 그리고 scrollevent class를 제거하여 스크롤 이벤트가 발생하지 않게 함
    $('#wrap').removeClass('scrollevent');
    $('#wrap').addClass('off');
    $('#login_main').addClass('on');

    $('#sub_main').removeClass('on');

    $('header').addClass('on');
    $('.mouseZone').fadeOut();



    goMain();




  })






  $('.sub .reviews .write .login_btn').click(function () {

    $('html,body').scrollTop(0);

    // wrap의 off클래스 부여(display none)
    // 서브페이지에 on클래스 부여(display block)
    // 그리고 scrollevent class를 제거하여 스크롤 이벤트가 발생하지 않게 함
    $('#wrap').removeClass('scrollevent');
    $('#wrap').addClass('off');
    $('#login_main').addClass('on');

    $('#sub_main').removeClass('on');

    $('header').addClass('on');
    $('.mouseZone').fadeOut();


    goMain();




  })


























  // nav 설정









  // 뎁스 호버 이벤트
  // 메뉴를 호버했을 때 뎁스 등장
  $('header nav>ul>li:nth-child(1) a').mouseenter(function () {


    $('header ul').removeClass('on');
    $('header ul .game').addClass('on');



    // 메뉴를 떠났을 때 뎁스 사라짐
    $('header').mouseleave(function () {



      $('header ul').removeClass('on');



      $('header ul .game li a').css({ 'opacity': 1, 'color': '#58585B' });
      $('header ul .product li a').css({ 'opacity': 1, 'color': '#58585B' });

      // 2뎁스의 썸네일 사진들도 onclass를 삭제하면서 안보이게 됨
      for (let sumb1 = 0; sumb1 <= 2; sumb1++) {
        $('header nav ul ul .sumbnail').removeClass(`on${sumb1}`);
      }


    })



  })


  $('header nav>ul>li:nth-child(2) a').mouseenter(function () {



    $('header ul').removeClass('on');
    $('header ul .product').addClass('on');




    $('header').mouseleave(function () {

      $('header ul').removeClass('on');

      $('header ul .game li a').css({ 'opacity': 1, 'color': '#58585B' });
      $('header ul .product li a').css({ 'opacity': 1, 'color': '#58585B' });
      for (let sumb1 = 0; sumb1 <= 2; sumb1++) {
        $('header nav ul ul .sumbnail').removeClass(`on${sumb1}`);
      }


    })



  })





  // 1뎁스를 올려둘 때


  $('header nav>ul>li>a').mouseenter(function () {


    // 기존 1뎁스와 올려둔 1뎁스를 비교,

    let onDepth = $('header nav>ul>li>a.on');

    let thisDepth = $(this);


    if (onDepth !== thisDepth) {

      //  서로 다르면 2뎁스 초기화

      $('header ul ul>li a').css({ 'opacity': 1, 'color': '#58585B' });


      // 썸네일도 안보이게 함

      for (let rm = 0; rm < 3; rm++) {

        $('header ul ul .sumbnail').removeClass(`on${rm}`);

      }

    }



    // 마우스를 올려둔 1뎁스는 활성화 처리
    $('header nav>ul>li>a').removeClass('on');

    $(this).addClass('on');

    // 마우스에 헤더를 떼면 비활성화 처리

    $('header').mouseleave(function () {

      $('header nav>ul>li>a').removeClass('on');

    })







  })














  // 2뎁스 메뉴에 마우스를 대었을때


  $('header ul ul>li a').mouseenter(function () {

    let comp = 0;
    let dex = $(this);
    // 마우스를 올려댄건 색깔 변화 그외에것은 검은색+투명도 약화
    $('header ul ul>li a').css({ 'opacity': 0.4, 'color': '#58585B' });

    $(dex).css({ 'opacity': 1, 'color': '#E83E34' });


  })











  // nav 썸네일 변경



  for (let head1 = 0; head1 < 3; head1++) {





    // 게임 썸네일


    // 각 썸네일의 메뉴 호버시
    $('header ul .game li').eq(head1).mouseenter(function () {

      // 호버한 메뉴 기준으로
      let headi1 = $(this).index();

      // 모든 on클래스 제거
      for (let headoff1 = 0; headoff1 < 3; headoff1++) {
        $('header ul ul .gameImg').removeClass(`on${headoff1}`);
      }

      // 호버한 메뉴에 클래스 부여(사진 보여주기)
      $('header ul ul .gameImg').addClass(`on${headi1}`);

    })




    // 상품 썸네일


    $('header ul .product li').eq(head1).mouseenter(function () {

      let headi2 = $(this).index();

      for (let headoff2 = 0; headoff2 < 3; headoff2++) {
        $('header ul ul .productImg').removeClass(`on${headoff2}`);
      }

      $('header ul ul .productImg').addClass(`on${headi2}`);

    })




  }







  // nav 영역 클릭시 그에 해당하는 서브페이지 이동


  $('header nav>ul>li>a').click(function (e) {

    e.preventDefault();


    if($('header nav>ul>li:nth-child(1)>a').hasClass('on')){

      $('.goods .gList .listZone>.gameList ul li:nth-child(1)').trigger('click');


    }

   
    if($('header nav>ul>li:nth-child(2)>a').hasClass('on')){
      $('.goods .gList .listZone>.proList ul li:nth-child(1)').trigger('click');

    }

    

  })



  $('header nav>ul ul li a').click(function (e) {
    e.preventDefault();


    if($('header nav>ul>li:nth-child(1)>a').hasClass('on')){

      $('.goods .gList .listZone>.gameList ul li:nth-child(1)').trigger('click');


    }

   
    if($('header nav>ul>li:nth-child(2)>a').hasClass('on')){
      $('.goods .gList .listZone>.proList ul li:nth-child(1)').trigger('click');

    }

    

  })































  // 스크롤에 따른 이벤트(header + hero)













  $(window).scroll(function () {






    // 스크롤 이벤트 클래스가 존재시
    // 이 클래스는 서브페이지로 가게 될시에만 적용이 안됨
    // 서브페이지로 가게 될땐 scrollevent 제거
    if ($('#wrap').hasClass('scrollevent')) {

      let winW2 = $(window).width();



      // 데스크톱 환경일 때 적용
      if (winW2 > desktop) {


        let scroll = $(this).scrollTop();
        // 스크롤을 내렸을 때
        if (scroll > 0) {

          // 히어로 변경
          heroResizeOn();

        }
        // 히어로가 맨위로 올라올때
        if (scroll === 0) {

          // 히어로 원래상태로 초기화

          heroResizeOff();

        }

      }


    }









  })

















  // hero 설정




















  // 히어로 내의 리스트 위치값 설정

  for (let he = 0; he <= 4; he++) {

    $('.hero .listBox li').eq(he).css({ 'left': `${he * 100}%` });

  }


  let heroCount = 0;


  // 자동넘김

  let autoSlide = setInterval(() => {




    // 더이상 넘길 수 없을 때
    if ($('.hero .buttonZone .next').hasClass('off')) {


      // 처음으로 되돌아감
      $('.hero .slidebar li').eq(0).trigger('click');
      $('.pocketMouse').removeClass('click');


    }

    // 그외는 앞으로 이동
    else {
      $('.hero .buttonZone .next').trigger('click');
      $('.pocketMouse').removeClass('click');

    }




  }, 5000);






  // 다음 버튼 클릭시
  $('.hero .buttonZone .next').click(function () {

    // 최대치 도달전까진 1씩 더함
    // 그리고 next에 있는 off클래스 제거
    if (heroCount < 4) {

      heroCount++;
      $('.hero .buttonZone .next').removeClass('off');
      $('.hero .buttonZone .prev').removeClass('off');
    }


    // 최대치 도달시엔 next 버튼 off 클래스 부여
    if (heroCount >= 4) {
      $('.hero .buttonZone .next').addClass('off');
      $('.hero .buttonZone .prev').removeClass('off');
    }


    $('.hero .listBox').stop().animate({ 'left': `${heroCount * -100}%` }, 300);

    $('.hero .slidebar .slide').stop().animate({ 'left': `${heroCount * 20}%` }, 300);



    // 자동 슬라이드 초기화 후
    clearInterval(autoSlide);



    // 기존에 자동슬라이드를 적용시킨 변수에
    // 다시 똑같은 setinterval값을 적용
    // 이거 안하면 화면전환후 바로 다음 화면으로 넘어갈 상황이 생김

    autoSlide = setInterval(() => {




      // 더이상 넘길 수 없을 때
      if ($('.hero .buttonZone .next').hasClass('off')) {


        // 처음으로 되돌아감
        $('.hero .slidebar li').eq(0).trigger('click');
        $('.pocketMouse').removeClass('click');


      }

      // 그외는 앞으로 이동
      else {
        $('.hero .buttonZone .next').trigger('click');
        $('.pocketMouse').removeClass('click');

      }




    }, 5000);

  })




  // 이전 버튼 클릭시
  $('.hero .buttonZone .prev').click(function () {

    // 최소치 도달전까진 1씩 더함
    // 그리고 next에 있는 off클래스 제거
    if (heroCount > 0) {

      heroCount--;
      $('.hero .buttonZone .prev').removeClass('off');
      $('.hero .buttonZone .next').removeClass('off');
    }


    // 최소치 도달시엔 next 버튼 off 클래스 부여
    if (heroCount <= 0) {
      $('.hero .buttonZone .prev').addClass('off');
      $('.hero .buttonZone .next').removeClass('off');
    }


    $('.hero .listBox').stop().animate({ 'left': `${heroCount * -100}%` }, 300);

    $('.hero .slidebar .slide').stop().animate({ 'left': `${heroCount * 20}%` }, 300);

    clearInterval(autoSlide);


    autoSlide = setInterval(() => {




      // 더이상 넘길 수 없을 때
      if ($('.hero .buttonZone .next').hasClass('off')) {


        // 처음으로 되돌아감
        $('.hero .slidebar li').eq(0).trigger('click');
        $('.pocketMouse').removeClass('click');


      }

      // 그외는 앞으로 이동
      else {
        $('.hero .buttonZone .next').trigger('click');
        $('.pocketMouse').removeClass('click');

      }




    }, 5000);




  })



  // 슬라이드 버튼 클릭시




  $('.hero .slidebar li').click(function () {

    let slide = $(this).index();

    heroCount = slide;


    if (slide !== 5) {

      $('.hero .slidebar .slide').stop().animate({ 'left': `${slide * 20}%` }, 300);

      $('.hero .listBox').stop().animate({ 'left': `${slide * -100}%` }, 300);


    }

    // 첫번째 슬라이드 부분을 클릭시에
    if (slide === 0) {

      // 왼쪽버튼 off
      $('.hero .buttonZone .prev').addClass('off');

      // 오른쪽버튼 활성화
      $('.hero .buttonZone .next').removeClass('off');
    }


    // 마지막 슬라이드 부분을 클릭시에
    else if (slide === 4) {

      // 오른쪽버튼 off
      $('.hero .buttonZone .next').addClass('off');

      // 왼쪽버튼 활성화
      $('.hero .buttonZone .prev').removeClass('off');
    }

    // 그 외의 슬라이드 부분 클릭시
    else {
      // 오른쪽버튼 활성화
      $('.hero .buttonZone .next').removeClass('off');
      // 왼쪽버튼 활성화
      $('.hero .buttonZone .prev').removeClass('off');

    }


    clearInterval(autoSlide);


    autoSlide = setInterval(() => {




      // 더이상 넘길 수 없을 때
      if ($('.hero .buttonZone .next').hasClass('off')) {


        // 처음으로 되돌아감
        $('.hero .slidebar li').eq(0).trigger('click');
        $('.pocketMouse').removeClass('click');


      }

      // 그외는 앞으로 이동
      else {
        $('.hero .buttonZone .next').trigger('click');
        $('.pocketMouse').removeClass('click');

      }




    }, 5000);



  })



























  // 제품 설정

















  // 제품 영역 내의 버튼에 마우스를 갖다대면
  $('.goods .gMenu .menu .mButtonzone').mouseenter(function () {

    // 첫번째 리스트(게임)가 on일때

    if ($('.goods .gMenu .menu .mButtonzone:hover .mButton li:nth-child(1)').hasClass('on')) {


      // 버튼 색깔과 글자 및 화살표의 색깔 변경

      $(this).stop().animate({ 'background-color': '#fff' }, 300);

      $('.goods .gMenu .menu .mButtonzone .mButton li:nth-child(1)').stop().animate({ 'color': '#F5D022' }, 300);


      $('.goods .gMenu .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#F5D022' }, 300);



    }




    if ($('.goods .gMenu .menu .mButtonzone:hover .mButton li:nth-child(2)').hasClass('on')) {


      // 버튼 색깔과 글자 및 화살표의 색깔 변경

      $(this).stop().animate({ 'background-color': '#fff' }, 300);

      $('.goods .gMenu .menu .mButtonzone .mButton li:nth-child(2)').stop().animate({ 'color': '#C08C5A' }, 300);


      $('.goods .gMenu .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#C08C5A' }, 300);



    }


  })










  // 버튼에 마우스를 떼면 원상복귀

  $('.goods .gMenu .menu .mButtonzone').mouseleave(function () {


    $(this).stop().animate({ 'background-color': 'transparent' }, 300);

    $('.goods .gMenu .menu .mButtonzone .mButton li').stop().animate({ 'color': '#fff' }, 300);


    $('.goods .gMenu .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#fff' }, 300);


  })























  // 제품 리스트 버튼 클릭시 아래로 제품 종류들이 나오는 목록 나오게 하기
  // 제품 버튼에 있던 화살표도 움직이기

  $('.goods .gMenu .menu .mButtonzone').click(function () {


    $('.goods .gMenu .menu .mList').toggleClass('on');


    $('.goods .gMenu .menu .mButtonzone .mButtonArrow').toggleClass('on');




  })















  // 첫번째 리스트 클릭시에 게임부분 모두 on class 부여
  // 두번째 리스트 클릭시에 상품부분 모두 on class 부여


  $('.goods .gMenu .menu .mList ul li:nth-child(1)').click(function () {


    $('.goods .gMenu .menu .mButton li').removeClass('on');


    $('.goods .intro ul li').removeClass('on');


    $('.goods .gZone .gMenu .char li').removeClass('on');


    $('.goods .gList .listZone>li').removeClass('on');


    $('.goods .gMenu .menu .mButton li:nth-child(1)').addClass('on');


    $('.goods .intro ul li:nth-child(1)').addClass('on');


    $('.goods .gZone .gMenu .char li:nth-child(1)').addClass('on');


    $('.goods .gList .listZone>li:nth-child(1)').addClass('on');


    // 화살표도 원래대로 돌아오고 목록창도 사라짐

    $('.goods .gMenu .menu .mList').removeClass('on');


    $('.goods .gMenu .menu .mButtonzone .mButtonArrow').removeClass('on');

  })




  $('.goods .gMenu .menu .mList ul li:nth-child(2)').click(function () {


    $('.goods .gMenu .menu .mButton li').removeClass('on');

    $('.goods .intro ul li').removeClass('on');


    $('.goods .gZone .gMenu .char li').removeClass('on');


    $('.goods .gList .listZone>li').removeClass('on');


    $('.goods .gMenu .menu .mButton li:nth-child(2)').addClass('on');

    $('.goods .intro ul li:nth-child(2)').addClass('on');


    $('.goods .gZone .gMenu .char li:nth-child(2)').addClass('on');


    $('.goods .gList .listZone>li:nth-child(2)').addClass('on');
    $('.goods .gMenu .menu .mList').removeClass('on');


    $('.goods .gMenu .menu .mButtonzone .mButtonArrow').removeClass('on');

  })
















  // 마우스를 갖다대면 애니메이션이 멈추고
  // 마우스를 떼면 애니메이션이 다시 작동함



  $('.goods .gList .listZone>li ul:nth-child(1)').mouseenter(function () {

    $(this).css({ 'animation-play-state': 'paused' });

    $(this).next().css({ 'animation-play-state': 'paused' });


    $(this).mouseleave(function () {

      $(this).css({ 'animation': 'list1 linear 30s infinite' });

      $(this).next().css({ 'animation': 'list2 linear 30s infinite' });


    })

  })



  $('.goods .gList .listZone>li ul:nth-child(2)').mouseenter(function () {

    $(this).css({ 'animation-play-state': 'paused' });

    $(this).prev().css({ 'animation-play-state': 'paused' });


    $(this).mouseleave(function () {

      $(this).css({ 'animation': 'list2 linear 30s infinite' });

      $(this).prev().css({ 'animation': 'list1 linear 30s infinite' });


    })

  })













  // 제품들 클릭시에 상세페이지 이동

  $('.goods .gList .listZone>li ul li').click(function (e) {

    // 다른 링크로 이동하는 효과 없앰
    // 현재페이지에서 이동할거이기에
    e.preventDefault();

    $('html,body').scrollTop(0);




    // wrap의 off클래스 부여(display none)
    // 서브페이지에 on클래스 부여(display block)
    // 그리고 scrollevent class를 제거하여 스크롤 이벤트가 발생하지 않게 함
    $('#wrap').removeClass('scrollevent');
    $('#wrap').addClass('off');
    $('#sub_main').addClass('on');
    $('header').addClass('on');
    $('.mouseZone').fadeOut();


    // 해당 인덱스를 가져옴


    let listI = $(this).index();


    // 게임 리스트일때 연관리스트에 그 리스트를 지운 후에
    // 게임 관련 리스트를 모두 연관리스트에 넣음


    if ($('.goods .gList .listZone>.gameList').hasClass('on')) {


      $('.sub .others .others_list .listZone>li').removeClass('on');

      $('.sub .others .others_list .listZone>.gameList').addClass('on');

      $('.sub .others .others_list .listZone>.gameList ul li').removeClass('this');

      $('.sub .others .others_list .listZone>.gameList ul li').eq(listI).addClass('this');
    }

    // 상품 리스트일때 연관리스트에 그 리스트를 지운 후에
    // 상품 관련 리스트를 모두 연관리스트에 넣음


    else {

      $('.sub .others .others_list .listZone>li').removeClass('on');

      $('.sub .others .others_list .listZone>.proList').addClass('on');

      $('.sub .others .others_list .listZone>.proList ul li').removeClass('this');

      $('.sub .others .others_list .listZone>.proList ul li').eq(listI).addClass('this');

    }






    // 리뷰 초기 위치값 지정


    // 서브페이지가 아니면 서브페이지 리뷰 위치를 원위치
    subReviewC = 0;

    $('.sub .reviews .review_list .review_zone').css({ 'left': `0%` });

    // 왼쪽으로는 갈수 없음   
    $('.sub .reviews .review_list .left').addClass('off');


    // 오른쪽으로 갈수있음
    $('.sub .reviews .review_list .right').removeClass('off');



    subOtherC = 0;



    $('.sub .others .others_list .listZone>li ul').css({ 'left': `0%` });

    // 왼쪽으로는 갈수 없음   
    $('.sub .others .others_list .left').addClass('off');


    // 오른쪽으로 갈수있음
    $('.sub .others .others_list .right').removeClass('off');








    goMain();


  })
























  // 제품쪽 장바구니 버튼 클릭시 상단의 장바구니 버튼에 숫자가 발생


  let shop = 0;







  // 서브페이지에서 리뷰 이동시킬 카운터
  let subReviewC = 0;



  // 서브페이지에서 연관리스트 이동시킬 카운터
  let subOtherC = 0;





  setInterval(() => {

    // 장바구니에 담은 수가 0보단 크지만 3보단 작을 때
    // 장바구니 팝업의 장바구니가 조금만 담기는 연출
    if (shop > 0 && shop < 3) {

      $('.popUp .popUp_bg>ul>li').removeClass('on');

      $('.popUp .popUp_bg>ul>li:nth-child(2)').addClass('on');

    }



    // 장바구니에 담은 수가 3이상일때
    // 장바구니 팝업의 장바구니가 많이 담기는 연출

    else if (shop >= 3) {

      $('.popUp .popUp_bg>ul>li').removeClass('on');

      $('.popUp .popUp_bg>ul>li:nth-child(3)').addClass('on');

    }

    // 장바구니가 없을때
    // 장바구니가 텅텅 비어있는 연출
    else {

      $('.popUp .popUp_bg>ul>li').removeClass('on');

      $('.popUp .popUp_bg>ul>li:nth-child(1)').addClass('on');

    }


    // 장바구니 양이 스크롤이 필요할 정도로 될 때 flex 서식 변경
    if ($('.popUp .popUp_bg .payment_box .goods_all p').length >= 2) {

      $('.popUp .popUp_bg .payment_box .goods_all').css({ 'justify-content': 'space-between' });

    }








  }, 500);













  function shopEvent() {


    // 장바구니 담으면 장바구니를 담았다는 팝업창이 생겼다가 사라짐


    $('.shopping_popUp').css({ 'display': 'flex', 'z-index': 1000 });

    $('.shopping_popUp').stop().animate({ 'opacity': 1, 'top': '50%' }, 400, function () {

      $('.shopping_popUp').stop().animate({ 'opacity': 0, 'top': '52%' }, 300, function () {


        $('.shopping_popUp').css({ 'display': 'none', 'z-index': -1 });
      })

    });




    // 장바구니가 담긴 수가 1이상일때 장바구니 버튼 옆에 표시

    if (shop >= 1) {


      $('header .util li.shopMain a i .shop_number').css({ 'display': 'flex' })


    }




    // 장바구니쪽에 표시된 숫자도 변수 shop의 숫자를 반영하여 1씩 증가 
    $('header .util li.shopMain a i .shop_number').text(shop);


  }



















  // 장바구니 추가 이벤트

  function shopIn() {

    // 상품 장바구니를 클릭했기에 숫자가 1 증가
    shop++;

    shopEvent();

  }








  $('.goods .gList .listZone>li ul li a .shop').click(function (e) {
    // 다른 링크로 가는 것을 막음 html 버블링 방지
    e.preventDefault();
    // 다른 이벤트 발생을 막음 자바스크립트 버블링 방지
    // 원래 이벤트는 쇼핑 아이콘의 부모자인 li를 클릭하면 서브페이지로 갔음
    // 하지만 부모자의 이벤트를 막고자 stopPropagation을 사용하여 버블링 방지
    e.stopPropagation()

    shopIn()

  })













  // 각 물건들 장바구니 클릭시 장바구니 팝업 리스트에 추가




  // 팝업 리스트의 갯수에 활용할 변수 생성(초기값은 모두 0으로)



  // 게임



  let game = [0, 0, 0, 0, 0];



  // 게임 가격(초기변수)


  let gp = [0, 0, 0, 0, 0];


  // 게임 기본 가격


  let gp_origin = [129600, 69800, 34800, 64800, 129600];



  // 상품



  let product = [0, 0, 0, 0, 0];


  // 가격


  let pp = [0, 0, 0, 0, 0];



  // 상품 기본 가격


  let pp_origin = [800, 9800, 5400, 37400, 25000];








  // 팝업 리스트의 갯수에 따른 금액 변수 생성



  function Update() {

    for (let g = 0; g < game.length; g++) {
      gp[g] = game[g] * gp_origin[g];
    }



    for (let p = 0; p < product.length; p++) {
      pp[p] = product[p] * pp_origin[p];
    }
  }














  // 기존 선택한 리스트 외의 리스트의 개수 및 가격





  // 게임 개수

  let gameSp = [];

  // 게임 가격

  let gameSpPrice = [];



  let gamelen = $(`.goods .gList .listZone>.gameList ul:nth-child(1) li`).length;



  gameSp.length = gamelen;

  gameSpPrice.length = gamelen;


  for (let i = 0; i < gamelen; i++) {

    gameSp[i] = [];

    gameSp[i].length = i;

    gameSpPrice[i] = [];

    gameSpPrice[i].length = i;

    for (let ii = 0; ii < gamelen; ii++) {

      gameSp[i][ii] = 0;

      gameSpPrice[i][ii] = 0;

    }

  }




  let productSp = [];

  let productSpPrice = [];

  let prolen = $(`.goods .gList .listZone>.proList ul:nth-child(1) li`).length;


  productSp.length = prolen;

  productSpPrice.length = prolen;


  for (let i = 0; i < prolen; i++) {

    productSp[i] = [];

    productSp[i].length = i;

    productSpPrice[i] = [];

    productSpPrice[i].length = i;


    for (let ii = 0; ii < prolen; ii++) {

      productSp[i][ii] = 0;

      productSpPrice[i][ii] = 0;

    }

  }





  let fullgp = 0;

  let fullpp = 0;



  let fullgpSp = 0;

  let fullgpSp1 = 0;

  let fullgpSp2 = 0;

  let fullgpSp3 = 0;

  let fullgpSp4 = 0;

  let fullgpSp5 = 0;



  let fullppSp = 0;


  let fullppSp1 = 0;

  let fullppSp2 = 0;

  let fullppSp3 = 0;

  let fullppSp4 = 0;

  let fullppSp5 = 0;









  // 총 가격



  let fullPrice = 0;










  // 제품들 제목

  let txtArr1 = ['포켓몬스터 스칼렛・바이올렛 1세트', 'Pokémon LEGENDS 아르세우스', '스칼렛・바이올렛 DLC 제로의 비보', '포켓몬스터 돌아온 명탐정 피카츄', '포켓몬스터 소드・실드 1세트']

  let txtArr2 = ['얼려먹는 야쿠르트', '포켓몬 콤푸차', '포켓몬빵', '포켓피스', '포켓몬 퍼펙트휩']






  // 제품 관련 이벤트


  for (let shopI = 0; shopI < 5; shopI++) {




    // 게임을 장바구니에 담았을 때

    $(`.goods .gList .listZone>.gameList ul li:nth-child(${shopI + 1}) a .shop`).click(function () {

      // 이전 리스트는 제거하고

      $(`.popUp .popUp_bg .payment_box .goods_all`).find(`.game_${shopI + 1}-${game[shopI]}`).remove();

      // 수량을 추가하고

      game[shopI]++;

      Update();

      // 리스트에 수량이 증가됨을 표시함

      $('.popUp .popUp_bg .payment_box .goods_all').append(`<p class ="game_${shopI + 1}-${game[shopI]}"><span class="ch_goods">${txtArr1[shopI]}</span><span class="number">x${game[shopI]}</span><span class="price">${gp[shopI]}원</span><span class="cancel"><i class="fa-solid fa-x"></i></span></p>`);

    })














    // 상품을 장바구니에 담았을 때

    $(`.goods .gList .listZone>.proList ul li:nth-child(${shopI + 1}) a .shop`).click(function () {



      // 이전 리스트는 제거하고

      $(`.popUp .popUp_bg .payment_box`).find(`.product_${shopI + 1}-${product[shopI]}`).remove();

      // 수량을 추가하고

      product[shopI]++;

      Update();

      // 리스트에 수량이 증가됨을 표시함

      $('.popUp .popUp_bg .payment_box .goods_all').append(`<p class ="product_${shopI + 1}-${product[shopI]}"><span class="ch_goods">${txtArr2[shopI]}</span><span class="number">x${product[shopI]}</span><span class="price">${pp[shopI]}원</span><span class="cancel"><i class="fa-solid fa-x"></i></span></p>`);


    })






  }



  // 장바구니 버튼을 누를때마다 가격 변경

  $('.shop').click(function () {



    fullgp = gp.reduce((acc, curr) => acc + curr, 0);
    fullpp = pp.reduce((acc, curr) => acc + curr, 0);


    fullgpSp1 = gameSpPrice[0];
    fullgpSp2 = gameSpPrice[1];
    fullgpSp3 = gameSpPrice[2];
    fullgpSp4 = gameSpPrice[3];
    fullgpSp5 = gameSpPrice[4];

    fullppSp1 = productSpPrice[0];
    fullppSp2 = productSpPrice[1];
    fullppSp3 = productSpPrice[2];
    fullppSp4 = productSpPrice[3];
    fullppSp5 = productSpPrice[4];


    fullgpSp = fullgpSp1.reduce((acc, curr) => acc + curr, 0) + fullgpSp2.reduce((acc, curr) => acc + curr, 0) + fullgpSp3.reduce((acc, curr) => acc + curr, 0) + fullgpSp4.reduce((acc, curr) => acc + curr, 0) + fullgpSp5.reduce((acc, curr) => acc + curr, 0);
    fullppSp = fullppSp1.reduce((acc, curr) => acc + curr, 0) + fullppSp2.reduce((acc, curr) => acc + curr, 0) + fullppSp3.reduce((acc, curr) => acc + curr, 0) + fullppSp4.reduce((acc, curr) => acc + curr, 0) + fullppSp5.reduce((acc, curr) => acc + curr, 0);


    fullPrice = fullgp + fullpp + fullgpSp + fullppSp;

    $('.popUp .total_pay .pay').text(`${fullPrice}원`);


  })













  // 삭제시 금액변경



  // 동적으로 추가된 요소에 이벤트 핸들러 바인딩


  $(document).on('click', '.popUp .popUp_bg .payment_box .goods_all p span.cancel', function () {


    // 삭제버튼의 부모자 지정

    let p = $(this).parent('p');

    // 부모자의 클래스 추출

    let pClass = p.attr('class');

    // 클래스를 -를 기준으로 나눠놓음
    // - 앞은 게임 또는 상품 번호, 뒤는 개수

    let spClass = pClass.split('-');

    // 각각 나눈 문자열들을 지정


    // 카테고리명 및 종류
    let arrClass1 = spClass[0];


    // 개수
    let arrClass2 = spClass[1];


    // 기존 리스트 외의 리스트번호

    let arrClass3 = spClass[2];


    // arrClass1에서 제품명을 확인, game일 경우 game 배열과 gp배열, 
    // product일 경우 product 배열과 pp배열,
    // 바로 뒤의 숫자로 해당 카테고리의 몇번째 제품인지 확인


    // _을 기점으로 제품명과 제품 순서 확인
    let category = arrClass1.split('_');



    // 제품명
    let category1 = category[0];

    // 제품 순서
    let category2 = category[1];




    // game일 경우 

    if (category1 === 'game' && !arrClass3) {


      // gp배열에서 해당 가격을 가져옴

      fullPrice -= gp[category2 - 1];

      // 게임 개수 초기화

      game[category2 - 1] = 0;

      // 게임가격 초기화

      gp[category2 - 1] = 0;





    }




    if (category1 === 'game' && arrClass3) {

      let spI = sp;

      if (sp === -1) {
        spI = sp + 1;
      }


      // 기본 리스트 외의 것을 먼저 누른 뒤에
      // 제거를 진행하면 gameSpPrice의 배열값이 undifind로 해석함(이유는 모르겠음->확인해보기)

      fullPrice -= gameSpPrice[(gI - 1)][spI];

      gameSp[(gI - 1)][spI] = 0;

      gameSpPrice[(gI - 1)][spI] = 0;


    }








    // product일 경우 


    if (category1 === 'product' && !arrClass3) {

      // pp배열에서 해당 가격을 가져옴

      fullPrice -= pp[category2 - 6];


      product[category2 - 6] = 0;

      pp[category2 - 6] = 0;

    }



    if (category1 === 'product' && arrClass3) {

      let spI = sp;

      if (sp === -1) {
        spI = sp + 1;
      }

      console.log(productSpPrice[(gI - 6)][spI])


      // pp배열에서 해당 가격을 가져옴

      fullPrice -= productSpPrice[(gI - 6)][spI];

      productSp[(gI - 6)][sp] = 0;

      productSpPrice[(gI - 6)][spI] = 0;


    }





    // 금액 변경 및 태그 삭제
    $('.popUp .total_pay .pay').text(`${fullPrice}원`);


    $(`.${pClass}`).remove();



    // 장바구니의 수를 바꿈
    shop -= arrClass2




    // 장바구니 개수 표시 변경
    $('header .util li.shopMain a i .shop_number').text(shop);



    if (shop <= 0) {
      $('header .util li.shopMain a i .shop_number').css({ 'display': 'none' })
    }


    // 장바구니 양이 스크롤이 필요할 정도로 될 때 flex 서식 변경
    if ($('.popUp .popUp_bg .payment_box .goods_all p').length <= 1) {

      $('.popUp .popUp_bg .payment_box .goods_all').css({ 'justify-content': 'center' });

    }

  });


















































  // 마우스 갖다대면 애니메이션이 멈추는 효과 구현



  $('.goods .gList .listZone>li ul').mouseenter(function () {




    //   $('.goods .gList .listZone>li.on').css({ 'animation-play-state': 'paused' });


    //   $('.goods .gList .listZone>li.on ul li').mouseleave(function () {

    //     $('.goods .gList .listZone>li.on').css({ 'animation-play-state': 'running' });


    //   })


    $('.goods .gList .arrows').css({ 'animation-play-state': 'paused' });


    $('.goods .gList .listZone>li').mouseleave(function () {

      $('.goods .gList .arrows').css({ 'animation-play-state': 'running' });

    })

  })























  // 연혁













  // 현재 페이지 경로 확인
  var pathname = window.location.pathname;

  // 특정 페이지에서만 실행
  if (pathname === '/index.html') {



    window.addEventListener('scroll', function () {

      // 시작점
      let topYear = $('.years .yearsZone .gene').offset().top;

      // 끝나는 지점
      let bottomYear = $('.box4').offset().top;

      // 총길이
      let fullYear = bottomYear - topYear;


      // 각 구간별 높이(윈도우 크기에 맞춰 설정)

      $('.years .yearsZone .gene ul li').height(winH);


      const yearsNum = $('.years .yearsZone .gene ul li').length;


      // 개당 높이값

      let piece = fullYear / yearsNum;





      // 스크롤 값(히스토리 영역부터 시작)

      let scroll = $(window).scrollTop() - topYear + 100;

      // 높이값이 h일때
      // 스크롤값이 0~h면 나머지 다 꺼지고 0번째 켜짐





      for (let scIndex = 0; scIndex < yearsNum; scIndex++) {

        if (scroll > ((0 + scIndex) * piece) && scroll <= ((1 + scIndex) * piece)) {



          // 왼쪽 세대 이벤트





          // 나머지는 다 안보이게
          $('.years .yearsZone .gene li').removeClass('on');

          // 지금꺼는 보이게
          $('.years .yearsZone .gene li').eq(scIndex).addClass('on');








          // 오른쪽 역사 이벤트




          // 전체 인덱스 설정

          // 닫힌 모습의 img1은 보이게
          $('.years .yearsZone .history li .img1').stop().animate({ 'opacity': 1 }, 300);

          // 열린 모습의 img2는 안보이게
          $('.years .yearsZone .history li .img2').stop().animate({ 'opacity': 0 }, 300, function () {

            $('.years .yearsZone .history li .txt').removeClass('on');


          });

          // 타이핑 효과 초기화

          $('.years .yearsZone .history li .txt .textHide').removeClass('off');



          // 지정 인덱스 설정


          $('.years .yearsZone .history li').eq(scIndex).find('.img1').stop().animate({ 'opacity': 0 }, 300);
          // 열린 모습의 img2는 보이게
          $('.years .yearsZone .history li').eq(scIndex).find('.img2').stop().animate({ 'opacity': 1 }, 300, function () {


            // 텍스트창 표시


            $('.years .yearsZone .history li').eq(scIndex).find('.txt').addClass('on');



            // 타이핑 효과


            $('.years .yearsZone .history li').eq(scIndex).find('.txt .textHide1').addClass('off');



            setTimeout(function () {

              $('.years .yearsZone .history li').eq(scIndex).find('.txt .textHide2').addClass('off');

            }, 300)



          })




        }











      }










    })










  }













  // 이벤트/공지사항



  // 이벤트 카운트

  let eventCount = 0;


  // 공지사항 카운트

  let notifiedCount = 0;



  // 이벤트 영역


  // 오른쪽 버튼 클릭시 오른쪽으로 이동
  $('.notices .noticesZone .event .right').click(function () {


    // 반응형에 따른 이동값 변경
    if (winW > 1280) {
      // 1보다 작을때만 더할수있음(최댓값 설정)
      if (eventCount < 1) {
        eventCount++;
      }



      // 오른쪽 끝일때
      if (eventCount >= 1) {

        // 오른쪽으로 더 못감
        $('.notices .noticesZone .event .left').removeClass('off');


        // 왼쪽으로 갈수 있음
        $('.notices .noticesZone .event .right').addClass('off');

      }



      // noticecount가 1 미만일땐 갈수잇음(최대 갈수있는 조건)

      $('.notices .noticesZone .event .listZone ul').stop().animate({ 'left': `${eventCount * -25}%` }, 300);


    }

    else if (winW >= 769 && winW <= 1280) {


      // 3보다 작을때만 더할수있음(최댓값 설정)
      if (eventCount < 3) {
        eventCount++;
      }



      // 오른쪽 끝일때
      if (eventCount >= 3) {

        // 오른쪽으로 더 못감
        $('.notices .noticesZone .event .left').removeClass('off');


        // 왼쪽으로 갈수 있음
        $('.notices .noticesZone .event .right').addClass('off');

      }



      // noticecount가 3 미만일땐 갈수잇음(최대 갈수있는 조건)

      $('.notices .noticesZone .event .listZone ul').stop().animate({ 'left': `${eventCount * -50}%` }, 300);

    }





  })


  // 왼쪽 버튼 클릭시 왼쪽으로 이동
  $('.notices .noticesZone .event .left').click(function () {



    // 반응형에 따른 이동값 변경
    if (winW > 1280) {
      // 0보다 클때만 뺄수 있음
      if (eventCount > 0) {

        eventCount--;

      }



      // 왼쪽 끝일때
      if (eventCount <= 0) {

        $('.notices .noticesZone .event .left').addClass('off');

        $('.notices .noticesZone .event .right').removeClass('off');

      }



      // noticecount가 1 미만일땐 갈수잇음(최대 갈수있는 조건)

      $('.notices .noticesZone .event .listZone ul').stop().animate({ 'left': `${eventCount * -25}%` }, 300);


    }

    else if (winW >= 769 && winW <= 1280) {





      // 0보다 클때만 뺄수 있음
      if (eventCount > 0) {

        eventCount--;

      }



      // 왼쪽 끝일때
      if (eventCount <= 0) {

        $('.notices .noticesZone .event .left').addClass('off');

        $('.notices .noticesZone .event .right').removeClass('off');

      }





      $('.notices .noticesZone .event .listZone ul').stop().animate({ 'left': `${eventCount * -50}%` }, 300);

    }



  })






  // 공지사항 영역






  // 오른쪽 버튼 클릭시 오른쪽으로 이동
  $('.notices .noticesZone .notified .right').click(function () {


    if (winW > 1280) {
      // 1보다 작을때만 더할수있음(최댓값 설정)
      if (notifiedCount < 1) {
        notifiedCount++;
      }



      // 오른쪽 끝일때
      if (notifiedCount >= 1) {

        // 오른쪽으로 더 못감
        $('.notices .noticesZone .notified .left').removeClass('off');


        // 왼쪽으로 갈수 있음
        $('.notices .noticesZone .notified .right').addClass('off');

      }

      // noticecount가 1 미만일땐 갈수잇음(최대 갈수있는 조건)

      $('.notices .noticesZone .notified .listZone ul').stop().animate({ 'left': `${notifiedCount * -25}%` }, 300);

    }



    // 반응형에 따른 이동값 변경
    else if (winW >= 769 && winW <= 1280) {

      // 1보다 작을때만 더할수있음(최댓값 설정)
      if (notifiedCount < 3) {
        notifiedCount++;
      }



      // 오른쪽 끝일때
      if (notifiedCount >= 3) {

        // 오른쪽으로 더 못감
        $('.notices .noticesZone .notified .left').removeClass('off');


        // 왼쪽으로 갈수 있음
        $('.notices .noticesZone .notified .right').addClass('off');

      }



      // noticecount가 1 미만일땐 갈수잇음(최대 갈수있는 조건)

      $('.notices .noticesZone .notified .listZone ul').stop().animate({ 'left': `${notifiedCount * -50}%` }, 300);

    }



  })


  // 왼쪽 버튼 클릭시 왼쪽으로 이동
  $('.notices .noticesZone .notified .left').click(function () {



    if (winW > 1280) {
      // 0보다 클때만 뺄수 있음
      if (notifiedCount > 0) {

        notifiedCount--;

      }



      // 왼쪽 끝일때
      if (notifiedCount <= 0) {

        $('.notices .noticesZone .notified .left').addClass('off');

        $('.notices .noticesZone .notified .right').removeClass('off');

      }

      $('.notices .noticesZone .notified .listZone ul').stop().animate({ 'left': `${notifiedCount * -25}%` }, 300);


    }


    // 반응형에 따른 이동값 변경
    else if (winW >= 769 && winW <= 1280) {

      // 0보다 클때만 뺄수 있음
      if (notifiedCount > 0) {

        notifiedCount--;

      }



      // 왼쪽 끝일때
      if (notifiedCount <= 0) {

        $('.notices .noticesZone .notified .left').addClass('off');

        $('.notices .noticesZone .notified .right').removeClass('off');

      }


      // noticecount가 1 미만일땐 갈수잇음(최대 갈수있는 조건)

      $('.notices .noticesZone .notified .listZone ul').stop().animate({ 'left': `${notifiedCount * -50}%` }, 300);

    }



  })































  // 리뷰















  // 제품 영역 내의 버튼에 마우스를 갖다대면
  $('.review .menu .mButtonzone').mouseenter(function () {

    // 첫번째 리스트(게임)가 on일때

    if ($('.review .menu .mButtonzone .mButton li:nth-child(1)').hasClass('on')) {


      // 버튼 색깔과 글자 및 화살표의 색깔 변경

      $(this).stop().animate({ 'background-color': '#fff' }, 300);

      $('.review .menu .mButtonzone .mButton li:nth-child(1)').stop().animate({ 'color': '#F5D022' }, 300);


      $('.review .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#F5D022' }, 300);



    }




    if ($('.review .menu .mButtonzone .mButton li:nth-child(2)').hasClass('on')) {


      // 버튼 색깔과 글자 및 화살표의 색깔 변경

      $(this).stop().animate({ 'background-color': '#fff' }, 300);

      $('.review .menu .mButtonzone .mButton li:nth-child(2)').stop().animate({ 'color': '#C08C5A' }, 300);


      $('.review .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#C08C5A' }, 300);



    }


  })










  // 버튼에 마우스를 떼면 원상복귀

  $('.review .menu .mButtonzone').mouseleave(function () {


    $(this).stop().animate({ 'background-color': 'transparent' }, 300);

    $('.review .menu .mButtonzone .mButton li').stop().animate({ 'color': '#fff' }, 300);


    $('.review .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#fff' }, 300);


  })




  // 제품 리스트 버튼 클릭시 아래로 제품 종류들이 나오는 목록 나오게 하기
  // 제품 버튼에 있던 화살표도 움직이기

  $('.review .menu .mButtonzone').click(function () {


    $('.review .menu .mList').toggleClass('on');


    $('.review .menu .mButtonzone .mButtonArrow').toggleClass('on');




  })










  // 첫번째 리스트 클릭시에 게임부분 모두 on class 부여
  // 두번째 리스트 클릭시에 상품부분 모두 on class 부여

  $('.review .menu .mList ul li:nth-child(1)').click(function (e) {

    $('.review .menu .mButton li').removeClass('on');


    $('.review .goods_zone ul').removeClass('on');



    $('.review .menu .mButton li:nth-child(1)').addClass('on');


    $('.review .goods_zone ul:nth-child(1)').addClass('on');



    // 화살표도 원래대로 돌아오고 목록창도 사라짐

    $('.review .menu .mList').removeClass('on');

    $('.review .menu .mButtonzone .mButtonArrow').removeClass('on');
  })






  $('.review .menu .mList ul li:nth-child(2)').click(function () {


    $('.review .menu .mButton li').removeClass('on');


    $('.review .goods_zone ul').removeClass('on');



    $('.review .menu .mButton li:nth-child(2)').addClass('on');


    $('.review .goods_zone ul:nth-child(2)').addClass('on');




    $('.review .menu .mList').removeClass('on');


    $('.review .menu .mButtonzone .mButtonArrow').removeClass('on');
  })
















  // 리뷰 제품들

  for (let pro = 0; pro <= 4; pro++) {
    // 0번째 사진은 left0,
    // 1번째사진은 left100%
    $('.review .goods_zone .game li').eq(pro).css({ 'left': pro * 100 + '%' });
    $('.review .goods_zone .product li').eq(pro).css({ 'left': pro * 100 + '%' });

  }











  // 리뷰영역의 오른쪽버튼 클릭시



  // 리뷰 카운트
  let reviewCount = 0;



  // 게임 영역




  // 오른쪽버튼 클릭시에
  $('.review .intro_list .right').click(function () {

    // count가 4가될때까지만 1씩 더함(최댓값 부여)
    if (reviewCount < 4) {

      reviewCount++;

    }


    // 오른쪽 끝일때
    if (reviewCount >= 4) {

      // 왼쪽으로는 갈수 있음   
      $('.review .intro_list .left').removeClass('off');


      // 오른쪽으로 더 못감   
      $('.review .intro_list .right').addClass('off');

    }


    else {
      $('.review .intro_list .left').removeClass('off');


      // 오른쪽으로 더 못감   
      $('.review .intro_list .right').removeClass('off');


    }

    // 게임 리뷰쪽에 on클래스가 있을때
    if ($('.review .goods_zone .game').hasClass('on')) {


      $('.review .goods_zone .game').stop().animate({ 'left': `${reviewCount * -100}%` }, 300);


    }


    // 게임 리뷰쪽에 on클래스가 있을때
    if ($('.review .goods_zone .product').hasClass('on')) {


      $('.review .goods_zone .product').stop().animate({ 'left': `${reviewCount * -100}%` }, 300);


    }


  }

  )




  // 왼쪽버튼 클릭시에


  $('.review .intro_list .left').click(function () {

    // count가 4가될때까지만 1씩 더함(최댓값 부여)
    if (reviewCount > 0) {

      reviewCount--;

    }



    // 왼쪽 끝일때
    if (reviewCount <= 0) {

      // 왼쪽으로는 갈수 없음   
      $('.review .intro_list .left').addClass('off');


      // 오른쪽으로 갈수있음
      $('.review .intro_list .right').removeClass('off');

    }

    else {
      $('.review .intro_list .left').removeClass('off');


      // 오른쪽으로 더 못감   
      $('.review .intro_list .right').removeClass('off');
    }



    // 게임 리뷰쪽에 on클래스가 있을때
    if ($('.review .goods_zone .game').hasClass('on')) {


      $('.review .goods_zone .game').stop().animate({ 'left': `${reviewCount * -100}%` }, 300);


    }


    // 게임 리뷰쪽에 on클래스가 있을때
    if ($('.review .goods_zone .product').hasClass('on')) {


      $('.review .goods_zone .product').stop().animate({ 'left': `${reviewCount * -100}%` }, 300);


    }







  }

  )
















  // 리스트 목록을 바꾸면
  $('.review .menu .mList ul li').click(function () {

    // 다시 처음 순번(왼쪽 끝)으로 되돌아감
    reviewCount = 0;

    // 왼쪽 끝으로 오기에 변경

    // 왼쪽으로는 갈수 없음   
    $('.review .intro_list .left').addClass('off');



    // 처음으로 되돌아오기에 처음 순번도 첫번째로 오게 left값 변경


    // 오른쪽으로 갈수있음
    $('.review .intro_list .right').removeClass('off');



    if ($('.review .goods_zone .product').hasClass('on')) {


      $('.review .goods_zone .product').stop().css({ 'left': `0%` });


    }


    // 게임 리뷰쪽에 on클래스가 있을때
    if ($('.review .goods_zone .game').hasClass('on')) {


      $('.review .goods_zone .game').stop().css({ 'left': `0%` });


    }

  })












  // 구매창에서 제품 종류 바꾸기





  $('.sub .intro .infor .purchase_zone .choice .choice_goods .select').click(function () {

    // 제품 목록에 on클래스 toggle, select의 화살표 아이콘을 변형

    $('.sub .intro .infor .purchase_zone .choice .choice_goods ul').toggleClass('on');

    $(this).find('i').toggleClass('on');


    // on클래스가 있을 시에, 등장

    if ($('.sub .intro .infor .purchase_zone .choice .choice_goods ul').hasClass('on')) {

      $('.sub .intro .infor .purchase_zone .choice .choice_goods ul').css({ 'display': 'flex' });

      $('.sub .intro .infor .purchase_zone .choice .choice_goods ul').stop().animate({ 'top': '100%', 'opacity': '1' }, 500);

    }

    // 없을 시에, 퇴장
    else {


      $('.sub .intro .infor .purchase_zone .choice .choice_goods ul').stop().animate({ 'top': '0%', 'opacity': '0' }, 500, function () {

        $('.sub .intro .infor .purchase_zone .choice .choice_goods ul').css({ 'display': 'none' });


      });



    }




  })

















































































  // 로그인 영역











  let loginCount = 0;










  // 로그인 버튼을 눌렀을 때


  $('#login_main .login_zone .login_button button').click(function (e) {



    // 임시로 로그인 성공 효과 적용
    e.preventDefault();
    e.stopPropagation();




    // 입력한 아이디와 비밀번호 추출



    let id = $('#login_infor .id input').val();
    let password = $('#login_infor .password input').val();


    // 아이디, 비밀번호 검사


    // 아이디는 이메일 서식을 만족해야함
    function validateEmail(email) {
      let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }


    // 최소 8자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 기호를 포함해야 함
    function validatePassword(password) {
      let re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      return re.test(password);
    }




    // 아이디, 비밀번호 검사 변수

    let idCheck = validateEmail(id);


    let passwordCheck = validatePassword(password);




    // 올바른 서식이 아닐 경우 표시

    if (!idCheck) {

      alert('올바른 이메일을 입력해주세요');

    }




    if (!passwordCheck) {

      alert('올바른 패스워드를 입력해주세요 패스워드는 문자, 숫자, 특수기호를 포함하여 총 8글자 이상이어야 합니다.');

    }



    // 서식에 맞고 아이디, 비밀번호를 조건에 맞게 적었으면서, count가 5회 이하일 때

    if ((id === 'jsh12345644@gmail.com') && (password === 'pocketmonmaster!3953') && idCheck && passwordCheck && (loginCount < 5)) {




      // // 홈화면으로 이동
      window.location.href = 'index.html?highlight=true';


    }




    // 로그인에 실패하였을 때
    else {

      // 아이디, 비밀번호 서식도 맞추었을 때
      if (idCheck && passwordCheck) {


        // 로그인 횟수 카운팅

        loginCount++;


        // 로그인 횟수가 0~4회일때

        if (loginCount >= 0 && loginCount < 5) {

          // 로그인 남은 횟수 표시

          alert(`아이디 또는 비밀번호가 맞지 않습니다. 앞으로 ${5 - loginCount}번 남았습니다.`);

        }

        // 5회 이상일때

        else {

          // 로그인을 못함

          alert(`로그인 횟수를 초과하셨기에 더이상 로그인이 불가합니다. 다시 로그인을 하고싶으시면 고객센터로 본인인증 후에 진행하시거나 회원가입을 진행해주시기 바랍니다.`);

        }


      }



      // 실패를 하더라도 메인으로 이동시 정상적으로 동작
      // 로그인 실패된 상태
      // 이거 적용 안하면 헤더랑 히어로 페이지가 비정상적으로 작동

      $('h1').click(function () {


        home();


        // 만약에 스크롤을 내리면 다시 풀림
        $(window).scroll(function () {




          if ($(window).scrollTop() > 0) {

            clearInterval(inter);

          }

        })



      })

    }












  })













































  // 팝업 영역





  // 장바구니 누르면 팝업 생성


  $('header .util li.shopMain').click(function (e) {


    e.preventDefault();


    $('.popUp_main').show();


    $('.popUp').show();


    $('.popUp_main').css({ 'background-color': 'rgba(0,0,0,0.6)' });

  })




  $('.popUp .closed').click(function () {


    $('.popUp_main').hide();

    $('.popUp').hide();


    $('.popUp_main').css({ 'background-color': 'transparent' });

  })





















































































  // 서브 영역






















  // 제품을 고를 개수


  let selectNum = 1;




  // 순번
  let gI = 0;



  // 선택한 리스트의 이름


  let goodsNames;




  // 리스트로 선택한 가격

  let arrPrice = 0;




  // 리스트로 선택한 가격의 총 가격


  let fullSelect = 0;




  // 상세페이지에서의 기존 제품 외의 리스트


  let sp = -1;











  // 초기 설정값



  function changeNum() {

    $('.sub .intro .infor .number').find('span').text(selectNum);

  }



  // 초기부터 개수 1 적용

  changeNum();




  // 가격 변동 함수

  function changePrice() {


    if ($(`.goods .gList .listZone>.gameList`).hasClass('on')) {

      $('.sub .intro .infor .purchase_zone .choice .price').text(`${gp_origin[gI - 1] * selectNum}원`);

    }

    else {


      $('.sub .intro .infor .purchase_zone .choice .price').text(`${pp_origin[gI - 6] * selectNum}원`);

    }


  }






  function checkPrice() {



    // 리스트가 바뀌었음을 알리기 위해 클래스 부여


    if ($('.sub .intro .infor .purchase_zone .choice .price').hasClass('change')) {
      // 기존 가격 외의 가격 배열에서 가격을 추출하여 값을 출력

      $('.sub .intro .infor .purchase_zone .choice .price').text(`${arrPrice[sp] * selectNum}원`);

    }



    else {

      changePrice();

    }


  }





















  // 플러스 버튼 누를때 개수 증가


  $('.sub .intro .infor .purchase_zone .get_number').find('.plus').click(function () {

    selectNum++;

    changeNum();



    checkPrice();

  })


  // 마이너스 버튼 누를때 개수 감소(최소 1이상이어야 됨)

  $('.sub .intro .infor .purchase_zone .get_number').find('.minus').click(function () {

    if (selectNum > 1) {

      selectNum--;

      changeNum();

      checkPrice();


    }


  })



  // 서브페이지 초기값(서브페이지가 on이 없을때 트루)


  let subBool = !$('#sub_main').hasClass('on');


  // 서브페이지에서 나가면 숫자 초기화

  setInterval(function () {


    // 서브페이지가 on이 없으면
    if (subBool) {


      // 초기 숫자를 1로 바꿈
      selectNum = 1;

      changeNum();

      changePrice();


    }

    // subBool값은 0.1초동안 on이 없는지를 확인함(있으면 적용 x)

    subBool = !$('#sub_main').hasClass('on');




    // li가 2개 이상인 것의 배열 추출

    switch (gI) {


      case 1:
        arrPrice = [64800, 64800];
        break;

      case 5:
        arrPrice = [64800, 64800];
        break;

      case 6:
        arrPrice = [16000];
        break;


      case 7:
        arrPrice = [29400, 49000];
        break;

      case 8:
        arrPrice = [1800, 1800, 1800];
        break;

      default:
        0;



    }




  }, 100)



















  // 리스트 초기 함수 지정
  let goodsList = null;



  let selectgoodsList = null;



















  // 하위 리스트 5개 선정
  for (let list = 0; list < 5; list++) {



    function listAppend() {

      // 기존 선택제품 및 리스트 삭제

      $('.sub .intro .infor .purchase_zone .choice .choice_goods .this_choice').remove();

      $('.sub .intro .infor .purchase_zone .choice .choice_goods ul').empty();


      // 클릭했던 리스트 추가


      $('.sub .intro .infor .purchase_zone .choice .choice_goods').append(`<div class="this_choice">${goodsList[0]}</div>`);

      for (let gLi = 0; gLi < goodsList.length; gLi++) {

        selectgoodsList = goodsList[gLi];

        $('.sub .intro .infor .purchase_zone .choice .choice_goods ul').append(`<li>${selectgoodsList}</li>`);

      }





    }














    // 게임


    // 상세 페이지 이동시 클릭했던 제품명을 토대로 제품 설명과 정보, 가격 등이 나오게 하기




    $(`.goods .gList .listZone>.gameList ul li:nth-child(${list + 1})`).click(function () {






      // 순번 추출

      gI = $(this).index() + 1;



      // 제목 추출
      goodsNames = $(this).find('p').text();


      // 썸네일 추출

      let goodsPic1 = $(`.goods .gList .gameList .sumb${list + 1}`).css('background-image');


      $('.sub .intro .infor .name_infor .sumb').css({ 'background-image': goodsPic1 });




      switch (list) {

        // 스칼렛 바이올렛
        case 0:


          // 소개 정보 변경

          $('.sub .intro .txt').html('<h3>아이부터 어른까지 즐길 수 있는 포켓몬스터, <br>오픈 월드로 펼쳐지는 자유로운 모험을 떠나다</h3><p>「포켓몬스터 스칼렛・바이올렛」은, <br>「포켓몬스터」 시리즈 최초의 오픈 월드 RPG입니다. <br>포켓몬을 만나, 동료가 되고, 배틀하고, 육성하며, <br>교환하는 기존 시리즈의 재미 요소는 그대로 유지한 채, <br>더욱 진화한 모험을 마음껏 경험할 수 있습니다.</p>');



          // 상세정보 변경
          $('.sub .intro .infor .about_infor ul li>p').eq(0).text('2022년 11월');
          $('.sub .intro .infor .about_infor ul li>p').eq(1).text('Nintendo Switch');
          $('.sub .intro .infor .about_infor ul li>p').eq(2).text('RPG');
          $('.sub .intro .infor .about_infor ul li>p').eq(3).text('개당 64800원');



          // 클릭한 리스트로만 채우기
          goodsList = ['포켓몬스터 스칼렛・바이올렛 2종', '포켓몬스터 스칼렛', '포켓몬스터 바이올렛'];


          // 선택 제품 및 리스트 변경


          listAppend();


          break;


        // LEGENDS 아르세우스
        case 1:



          $('.sub .intro .txt').html('<h3>이야기의 열쇠를 쥐고 있는 포켓몬, <br>아르세우스의 수수께끼란?</h3><p>모든 세계를 창조했다고 전해지는 창조포켓몬 아르세우스.<br>주인공은 금강단의 찬석, 진주단의 주혜와 인연을 맺으며 히스이지방을 조사하게 됩니다.<br>아무래도 아르세우스에 관한 비밀은,<br> 히스이지방에 우뚝 솟은 「천관산」에 숨겨져 있는 듯합니다.<br>과연, 주인공 일행은 그 비밀의 진상을 밝혀낼 수 있을까요…?</p>');

          $('.sub .intro .infor .about_infor ul li>p').eq(0).text('2022년 1월 ');
          $('.sub .intro .infor .about_infor ul li>p').eq(1).text('Nintendo Switch');
          $('.sub .intro .infor .about_infor ul li>p').eq(2).text('액션 RPG');
          $('.sub .intro .infor .about_infor ul li>p').eq(3).text('개당 64800원');


          // 클릭한 리스트로만 채우기
          goodsList = ['Pokémon LEGENDS 아르세우스'];


          // 선택 제품 및 리스트 변경


          listAppend();


          break;


        // 제로의 비보
        case 2:


          $('.sub .intro .txt').html('<h3>자연 학교의 거점 「스이록마을」,<br>다양한 자연 환경을 재현한 수중 정원 「테라리움 돔」</h3><p> 전편: 벽록의 가면에서 자연 학교의 거점이 되는「스이록마을」.<br>지역 사람들이 모여서 이야기를 나누는 등, 마을의 교류를 위한 장소로 이용되고 있습니다. <br>후편: 남청의 원반에서 유학을 떠나게 되는 블루베리 아카데미 교내에는,<br>포켓몬에게 편한 환경을 인공적으로 재현한 「테라리움 돔」이라 불리는 시설이 있습니다.<br>테라리움 돔은, 트레이너를 육성하는 환경을 강화하고자 만들어졌습니다.</p>');



          $('.sub .intro .infor .about_infor ul li>p').eq(0).text('2023년 2월 ');
          $('.sub .intro .infor .about_infor ul li>p').eq(1).text('Nintendo Switch');
          $('.sub .intro .infor .about_infor ul li>p').eq(2).text('RPG');
          $('.sub .intro .infor .about_infor ul li>p').eq(3).text('개당 34800원');



          // 클릭한 리스트로만 채우기
          goodsList = ['스칼렛・바이올렛 DLC 제로의 비보'];

          // 선택 제품 및 리스트 변경


          listAppend();


          break;



        // 돌아온 명탐정 피카츄
        case 3:


          $('.sub .intro .txt').html('<h3>사람과 포켓몬이 공생하는 도시<br>「라임시티」</h3><p>주인공 팀과 피카츄는 실종된 팀의 아버지 해리를 찾으면서<br>마을에서 일어나는 다양한 사건에 도전합니다.<br> 사건 현장을 조사하고<br>사람과 포켓몬들을 탐문 조사해서<br>사건 해결의 열쇠가 되는 증언과 증거를 모아 봅시다!</p>');


          $('.sub .intro .infor .about_infor ul li>p').eq(0).text('2023년 10월');
          $('.sub .intro .infor .about_infor ul li>p').eq(1).text('Nintendo Switch');
          $('.sub .intro .infor .about_infor ul li>p').eq(2).text('시네마틱 어드벤처');
          $('.sub .intro .infor .about_infor ul li>p').eq(3).text('개당 64,800원');



          // 클릭한 리스트로만 채우기
          goodsList = ['돌아온 명탐정 피카츄'];


          // 선택 제품 및 리스트 변경


          listAppend();



          break;



        // 소드 실드
        default:


          $('.sub .intro .txt').html('<h3>모험의 무대는 가라르지방!<br>꿈에 그리던 챔피언이 되자!</h3><p> 새로운 모험의 무대는 광대한 「가라르지방」! <br>온화한 전원 풍경과 도시, 초원과 설산 등, 다양한 모습을 가진 지방입니다.<br>주인공 일행은 챔피언에 대한 도전권을 획득하기 위해<br> 포켓몬체육관의 최고 트레이너인 체육관 관장에게 도전합니다.<br>체육관 관장과의 배틀에서는 다이맥스한 포켓몬 간의 포켓몬 배틀이 펼쳐집니다.</p>');


          $('.sub .intro .infor .about_infor ul li>p').eq(0).text('2019년 11월');
          $('.sub .intro .infor .about_infor ul li>p').eq(1).text('Nintendo Switch');
          $('.sub .intro .infor .about_infor ul li>p').eq(2).text('RPG');
          $('.sub .intro .infor .about_infor ul li>p').eq(3).text('개당 64,800원');



          // 클릭한 리스트로만 채우기
          goodsList = ['포켓몬스터 소드・실드 2종', '포켓몬스터 소드', '포켓몬스터 실드'];


          // 선택 제품 및 리스트 변경


          listAppend();





      }







      // 제목에 쓸 내용 적기

      $('.sub .intro .infor .name_infor .name h4').html(`No.${gI}<br>${goodsNames}`);





    })


































    // 상품











    // 상세 페이지 이동시 클릭했던 제품명을 토대로 제품 설명과 정보, 가격 등이 나오게 하기

    $(`.goods .gList .listZone>.proList ul li:nth-child(${list + 1})`).click(function () {


      // 순번 추출

      gI = $(this).index() + 6;



      // 제목 추출
      goodsNames = $(this).find('p').text();


      // 썸네일 추출

      let goodsPic2 = $(`.goods .gList .proList .sumb${list + 1}`).css('background-image');


      $('.sub .intro .infor .name_infor .sumb').css({ 'background-image': goodsPic2 });




      switch (list) {

        // 포켓몬 야쿠르트
        case 0:


          // 소개 정보 변경

          $('.sub .intro .txt').html('<h3>납작복숭아 맛으로 맛있게 챙기는<br>우리 아이 건강 간식!</h3><p>유럽여행 가면 꼭 먹어야하는 그 과일!<br>납작복숭아가 얼려먹는 야쿠르트로 나왔어요. <br>남녀노소 모두 맛있고 건강하게 마시는 간식.<br>얼려먹고, 거꾸로 먹고 건강은 기본!<br>맛과 먹는 재미까지!</p>');



          // 상세정보 변경
          $('.sub .intro .infor .about_infor ul li>p').eq(0).text('2022년 11월');
          $('.sub .intro .infor .about_infor ul li>p').eq(1).text('한국야쿠르트');
          $('.sub .intro .infor .about_infor ul li>p').eq(2).text('야쿠르트');
          $('.sub .intro .infor .about_infor ul li>p').eq(3).text('개당 800원');



          // 클릭한 리스트로만 채우기
          goodsList = ['야쿠르트 1개', '야쿠르트 20개'];


          // 선택 제품 및 리스트 변경


          listAppend();






          break;


        // 포켓몬 콤푸차
        case 1:



          $('.sub .intro .txt').html('<h3>발효로 가볍게, <br>탄산으로 산뜻하게!</h3><p>180년 전통 글로벌 식품회사인 돌러사의 노하우로 만든 담터 콤푸차 원액은<br>2번의 발효 과정을 거쳐 더욱 깔끔하고 부드러운 풍미를 자랑합니다.<br>탄산음료의 부담스러운 칼로리가 걱정되는 분들을 위해<br> 한 포 5g 기준 당류 0g 콤푸차를 준비했습니다.<br>각종 유산균들과 비타민c를 더해 누구나 즐길수 있습니다.</p>');

          $('.sub .intro .infor .about_infor ul li>p').eq(0).text('2022년 1월');
          $('.sub .intro .infor .about_infor ul li>p').eq(1).text('담터');
          $('.sub .intro .infor .about_infor ul li>p').eq(2).text('콤푸차');
          $('.sub .intro .infor .about_infor ul li>p').eq(3).text('개당 9,800원');


          // 클릭한 리스트로만 채우기
          goodsList = ['콤푸차 1박스', '콤푸차 3박스', '콤푸차 5박스'];


          // 선택 제품 및 리스트 변경


          listAppend();



          break;


        // 포켓몬빵
        case 2:


          $('.sub .intro .txt').html('<h3>오랜기간 사랑받던 빵인 포켓몬빵,<br>이번엔 픽셀로 돌아오다!</h3><p>오랫동안 많은 사람들에게 사랑을 받았던<br>포켓몬스터 빵 시리즈가 이번엔 픽셀로 찾아왔습니다!<br>픽셀이 된 나옹, 꼬마돌, 토게피와 함께<br>포켓몬빵만의 맛있는 빵과<br>포켓몬 스티커를 함께 즐겨주세요!</p>');



          $('.sub .intro .infor .about_infor ul li>p').eq(0).text('2023년 2월 ');
          $('.sub .intro .infor .about_infor ul li>p').eq(1).text('삼립');
          $('.sub .intro .infor .about_infor ul li>p').eq(2).text('빵');
          $('.sub .intro .infor .about_infor ul li>p').eq(3).text('개당 1,800원');



          // 클릭한 리스트로만 채우기
          goodsList = ['포켓몬 빵 3종', '나옹의 밀크후레시팡', '꼬마돌의 꼬마밀크마들렌', '토게피의 쫀득요구르트'];


          // 선택 제품 및 리스트 변경


          listAppend();



          break;



        // 포켓피스 하우스
        case 3:


          $('.sub .intro .txt').html('<h3>각종 귀여운 포켓몬들을 통해<br>아기자기한 집을 조립해보세요!<p>많은 사랑을 받아온 귀여운 포켓몬들이 이번에는<br>본인들의 집을 갖고싶어해요!<br>아이들 선물에 안성맞춤인<br>포켓피스 하우스를 조립해서<br>아이들이랑 포켓몬과의 소중한 추억을 갖게해주세요!</p>');


          $('.sub .intro .infor .about_infor ul li>p').eq(0).text('2023년 10월');
          $('.sub .intro .infor .about_infor ul li>p').eq(1).text('타카라토미');
          $('.sub .intro .infor .about_infor ul li>p').eq(2).text('피규어');
          $('.sub .intro .infor .about_infor ul li>p').eq(3).text('개당 37,400원');



          // 클릭한 리스트로만 채우기
          goodsList = ['포켓피스 하우스'];


          // 선택 제품 및 리스트 변경


          listAppend();




          break;



        // 포켓몬 퍼펙트휩
        default:


          $('.sub .intro .txt').html('<h3>귀여운 포켓몬들과 함께<br>건강하게 피부를 지켜주세요!</h3><p>보다 쫀쫀해진 거품으로 피부를 부드럽게 감싸줍니다.<br>또한, 블랙헤드를 확실하게 제거해주고<br>저자극 클렌징을 통해 민감한 피부도 편안한 클렌징을 하도록 해줍니다.<br>수분만 남기는 퍼펙트 클렌징을 통해<br>모든 잔여물을 싹 제거해줍니다.</p>');


          $('.sub .intro .infor .about_infor ul li>p').eq(0).text('2019년 11월');
          $('.sub .intro .infor .about_infor ul li>p').eq(1).text('센카');
          $('.sub .intro .infor .about_infor ul li>p').eq(2).text('클랜징폼');
          $('.sub .intro .infor .about_infor ul li>p').eq(3).text('개당 25,800원');


          // 클릭한 리스트로만 채우기
          goodsList = ['포켓몬 퍼펙트휩'];


          // 선택 제품 및 리스트 변경


          listAppend();






      }










      // 제목에 쓸 내용 적기

      $('.sub .intro .infor .name_infor .name h4').html(`No.${gI}<br>${goodsNames}`);






    })

















  }














  // 동적으로 생성한 리스트를 클릭했을 때


  $(document).on('click', '.sub .intro .infor .purchase_zone .choice .choice_goods ul li', function () {





    // 클릭한 리스트의 텍스트 추출

    let this_choice = $(this).text();

    // 클릭한 텍스트를 선택한 리스트로 지정하여 표시

    $('.sub .intro .infor .purchase_zone .choice .choice_goods .this_choice').text(this_choice);

    // 선택창을 닫음

    $(this).parent('ul').removeClass('on');


    // 만약에 제품의 li가 2개 이상일 경우, 그 리스트의 값에 따른 금액 변경

    if ($('.sub .intro .infor .purchase_zone .choice .choice_goods ul li').length > 1) {


      // 인덱스값 추출

      // 변경할 때마다 문제생김

      sp = $(this).index() - 1;



      selectNum = 1;




      // sp가 0 이상일때(즉, 기본값 외의 리스트 선택시)

      if (sp >= 0) {


        // 리스트가 바뀌었음을 알리기 위해 클래스 부여


        $('.sub .intro .infor .purchase_zone .choice .price').addClass('change');


        fullSelect = arrPrice[sp] * selectNum;


        changeNum();


        // 기존 가격 외의 가격 배열에서 가격을 추출하여 값을 출력

        $('.sub .intro .infor .purchase_zone .choice .price').text(`${fullSelect}원`);




      }

      // 그외는 고정값 출력

      else {



        changeNum();

        // 기존 리스트로 돌아갔음을 알리기 위해 클래스 삭제

        $('.sub .intro .infor .purchase_zone .choice .price').removeClass('change');

        changePrice();

      }





    }



    // 제품 목록에 on클래스 toggle, select의 화살표 아이콘을 변형


    $('.sub .intro .infor .purchase_zone .choice .choice_goods .select').find('i').toggleClass('on');





    $('.sub .intro .infor .purchase_zone .choice .choice_goods ul').stop().animate({ 'top': '0%', 'opacity': '0' }, 500, function () {

      $('.sub .intro .infor .purchase_zone .choice .choice_goods ul').css({ 'display': 'none' });


    });












  })









































  // 서브페이지의 최상단 컨텐츠의 장바구니 버튼 클릭
















  $('.sub .intro .infor .purchase_zone .purchase_button ul .shop').click(function (e) {




    e.preventDefault();
    e.stopPropagation();





    // 장바구니에 고른 개수만큼 담아짐


    shop += selectNum;




    shopEvent();


    Update();






    let listBull = $('.goods .gList .listZone .gameList').hasClass('on');







    // 게임




    if (sp >= 0 && listBull) {



      // 총금액은 기본 리스트 외의 금액 * 개수로 추출

      fullSelect = arrPrice[sp] * selectNum;

      $(`.popUp .popUp_bg .payment_box .goods_all`).find(`.game_${gI}-${gameSp[(gI - 1)][sp]}-${sp}`).remove();
      // 개수배열에서 selectnum만큼의 숫자를 추가, 


      gameSp[(gI - 1)][sp] += selectNum;


      // 가격은 가격배열에서 fullselect원만큼을 추가


      gameSpPrice[(gI - 1)][sp] += fullSelect;


      // 클래스 부여는 순번 - 개수 - 기존리스트외의 리스트의 순번

      $('.popUp .popUp_bg .payment_box .goods_all').append(`<p class ="game_${gI}-${gameSp[(gI - 1)][sp]}-${sp}"><span class="ch_goods">${goodsList[sp + 1]}</span><span class="number">x${gameSp[(gI - 1)][sp]}</span><span class="price">${gameSpPrice[(gI - 1)][sp]}원</span><span class="cancel"><i class="fa-solid fa-x"></i></span></p>`);


      // 모든 리스트들의 합을 구함

      fullgp = gp.reduce((acc, curr) => acc + curr, 0);
      fullpp = pp.reduce((acc, curr) => acc + curr, 0);


      fullgpSp1 = gameSpPrice[0];
      fullgpSp2 = gameSpPrice[1];
      fullgpSp3 = gameSpPrice[2];
      fullgpSp4 = gameSpPrice[3];
      fullgpSp5 = gameSpPrice[4];

      fullppSp1 = productSpPrice[0];
      fullppSp2 = productSpPrice[1];
      fullppSp3 = productSpPrice[2];
      fullppSp4 = productSpPrice[3];
      fullppSp5 = productSpPrice[4];


      fullgpSp = fullgpSp1.reduce((acc, curr) => acc + curr, 0) + fullgpSp2.reduce((acc, curr) => acc + curr, 0) + fullgpSp3.reduce((acc, curr) => acc + curr, 0) + fullgpSp4.reduce((acc, curr) => acc + curr, 0) + fullgpSp5.reduce((acc, curr) => acc + curr, 0);
      fullppSp = fullppSp1.reduce((acc, curr) => acc + curr, 0) + fullppSp2.reduce((acc, curr) => acc + curr, 0) + fullppSp3.reduce((acc, curr) => acc + curr, 0) + fullppSp4.reduce((acc, curr) => acc + curr, 0) + fullppSp5.reduce((acc, curr) => acc + curr, 0);


      fullPrice = fullgp + fullpp + fullgpSp + fullppSp;

      $('.popUp .total_pay .pay').text(`${fullPrice}원`);




    }






    // 원본 리스트 선택시


    if (sp < 0 && listBull) {


      $(`.popUp .popUp_bg .payment_box .goods_all`).find(`.game_${gI}-${game[(gI - 1)]}`).remove();

      // $('.popUp .popUp_bg .payment_box .goods_all p').remove();


      // 개수배열에서 selectnum만큼의 숫자를 추가, 


      game[(gI - 1)] += selectNum;


      gp[(gI - 1)] = game[(gI - 1)] * gp_origin[gI - 1];




      $('.popUp .popUp_bg .payment_box .goods_all').append(`<p class ="game_${gI}-${game[(gI - 1)]}"><span class="ch_goods">${goodsList[0]}</span><span class="number">x${game[(gI - 1)]}</span><span class="price">${gp[(gI - 1)]}원</span><span class="cancel"><i class="fa-solid fa-x"></i></span></p>`);



      fullgp = gp.reduce((acc, curr) => acc + curr, 0);
      fullpp = pp.reduce((acc, curr) => acc + curr, 0);


      fullgpSp1 = gameSpPrice[0];
      fullgpSp2 = gameSpPrice[1];
      fullgpSp3 = gameSpPrice[2];
      fullgpSp4 = gameSpPrice[3];
      fullgpSp5 = gameSpPrice[4];

      fullppSp1 = productSpPrice[0];
      fullppSp2 = productSpPrice[1];
      fullppSp3 = productSpPrice[2];
      fullppSp4 = productSpPrice[3];
      fullppSp5 = productSpPrice[4];


      fullgpSp = fullgpSp1.reduce((acc, curr) => acc + curr, 0) + fullgpSp2.reduce((acc, curr) => acc + curr, 0) + fullgpSp3.reduce((acc, curr) => acc + curr, 0) + fullgpSp4.reduce((acc, curr) => acc + curr, 0) + fullgpSp5.reduce((acc, curr) => acc + curr, 0);
      fullppSp = fullppSp1.reduce((acc, curr) => acc + curr, 0) + fullppSp2.reduce((acc, curr) => acc + curr, 0) + fullppSp3.reduce((acc, curr) => acc + curr, 0) + fullppSp4.reduce((acc, curr) => acc + curr, 0) + fullppSp5.reduce((acc, curr) => acc + curr, 0);


      fullPrice = fullgp + fullpp + fullgpSp + fullppSp;

      $('.popUp .total_pay .pay').text(`${fullPrice}원`);





    }







    // 상품






    if (sp >= 0 && !(listBull)) {

      // 총금액은 기본 리스트 외의 금액 * 개수로 추출

      fullSelect = arrPrice[sp] * selectNum;


      $(`.popUp .popUp_bg .payment_box .goods_all`).find(`.product_${gI}-${productSp[(gI - 6)][sp]}-${sp}`).remove();
      // 개수배열에서 selectnum만큼의 숫자를 추가, 


      productSp[(gI - 6)][sp] += selectNum;


      console.log(selectNum);


      // 가격은 가격배열에서 fullselect원만큼을 추가


      productSpPrice[(gI - 6)][sp] += fullSelect;

      // 클래스 부여는 순번 - 개수 - 기존리스트외의 리스트의 순번

      $('.popUp .popUp_bg .payment_box .goods_all').append(`<p class ="product_${gI}-${productSp[(gI - 6)][sp]}-${sp}"><span class="ch_goods">${goodsList[sp + 1]}</span><span class="number">x${productSp[(gI - 6)][sp]}</span><span class="price">${productSpPrice[(gI - 6)][sp]}원</span><span class="cancel"><i class="fa-solid fa-x"></i></span></p>`);


      // 모든 리스트들의 합을 구함

      fullgp = gp.reduce((acc, curr) => acc + curr, 0);
      fullpp = pp.reduce((acc, curr) => acc + curr, 0);


      fullgpSp1 = gameSpPrice[0];
      fullgpSp2 = gameSpPrice[1];
      fullgpSp3 = gameSpPrice[2];
      fullgpSp4 = gameSpPrice[3];
      fullgpSp5 = gameSpPrice[4];

      fullppSp1 = productSpPrice[0];
      fullppSp2 = productSpPrice[1];
      fullppSp3 = productSpPrice[2];
      fullppSp4 = productSpPrice[3];
      fullppSp5 = productSpPrice[4];


      fullgpSp = fullgpSp1.reduce((acc, curr) => acc + curr, 0) + fullgpSp2.reduce((acc, curr) => acc + curr, 0) + fullgpSp3.reduce((acc, curr) => acc + curr, 0) + fullgpSp4.reduce((acc, curr) => acc + curr, 0) + fullgpSp5.reduce((acc, curr) => acc + curr, 0);
      fullppSp = fullppSp1.reduce((acc, curr) => acc + curr, 0) + fullppSp2.reduce((acc, curr) => acc + curr, 0) + fullppSp3.reduce((acc, curr) => acc + curr, 0) + fullppSp4.reduce((acc, curr) => acc + curr, 0) + fullppSp5.reduce((acc, curr) => acc + curr, 0);


      fullPrice = fullgp + fullpp + fullgpSp + fullppSp;

      $('.popUp .total_pay .pay').text(`${fullPrice}원`);


    }






    // 원본 리스트 선택시


    if (sp < 0 && !(listBull)) {


      $(`.popUp .popUp_bg .payment_box .goods_all`).find(`.product_${gI}-${product[(gI - 6)]}`).remove();

      // $('.popUp .popUp_bg .payment_box .goods_all p').remove();


      // 개수배열에서 selectnum만큼의 숫자를 추가, 


      product[(gI - 6)] += selectNum;


      pp[(gI - 6)] = product[(gI - 6)] * pp_origin[gI - 6];

      $('.popUp .popUp_bg .payment_box .goods_all').append(`<p class ="product_${gI}-${product[(gI - 6)]}"><span class="ch_goods">${goodsList[0]}</span><span class="number">x${product[(gI - 6)]}</span><span class="price">${pp[(gI - 6)]}원</span><span class="cancel"><i class="fa-solid fa-x"></i></span></p>`);



      fullgp = gp.reduce((acc, curr) => acc + curr, 0);
      fullpp = pp.reduce((acc, curr) => acc + curr, 0);


      fullgpSp1 = gameSpPrice[0];
      fullgpSp2 = gameSpPrice[1];
      fullgpSp3 = gameSpPrice[2];
      fullgpSp4 = gameSpPrice[3];
      fullgpSp5 = gameSpPrice[4];

      fullppSp1 = productSpPrice[0];
      fullppSp2 = productSpPrice[1];
      fullppSp3 = productSpPrice[2];
      fullppSp4 = productSpPrice[3];
      fullppSp5 = productSpPrice[4];


      fullgpSp = fullgpSp1.reduce((acc, curr) => acc + curr, 0) + fullgpSp2.reduce((acc, curr) => acc + curr, 0) + fullgpSp3.reduce((acc, curr) => acc + curr, 0) + fullgpSp4.reduce((acc, curr) => acc + curr, 0) + fullgpSp5.reduce((acc, curr) => acc + curr, 0);
      fullppSp = fullppSp1.reduce((acc, curr) => acc + curr, 0) + fullppSp2.reduce((acc, curr) => acc + curr, 0) + fullppSp3.reduce((acc, curr) => acc + curr, 0) + fullppSp4.reduce((acc, curr) => acc + curr, 0) + fullppSp5.reduce((acc, curr) => acc + curr, 0);


      fullPrice = fullgp + fullpp + fullgpSp + fullppSp;

      $('.popUp .total_pay .pay').text(`${fullPrice}원`);





    }





































  })











  // 연관 리스트를 클릭했을 때


  $('.sub .others .others_list .listZone>li ul li').click(function (e) {


    e.preventDefault();


    let otherI = $(this).index();


    // 게임쪽일 때


    if ($('.sub .others .others_list .listZone>.gameList').hasClass('on')) {

      $('.goods .gList .listZone>.gameList ul li').eq(otherI).trigger('click');

      selectNum = 1;

      changeNum();

      changePrice();

    }

    // 상품쪽일 때

    else {

      $('.goods .gList .listZone>.proList ul li').eq(otherI).trigger('click');
      selectNum = 1;

      changeNum();

      changePrice();

    }


    // 리뷰 초기 위치값 지정


    // 서브페이지가 아니면 서브페이지 리뷰 위치를 원위치
    subReviewC = 0;

    $('.sub .reviews .review_list .review_zone').css({ 'left': `0%` });

    // 왼쪽으로는 갈수 없음   
    $('.sub .reviews .review_list .left').addClass('off');


    // 오른쪽으로 갈수있음
    $('.sub .reviews .review_list .right').removeClass('off');



    subOtherC = 0;


    $('.sub .others .others_list .listZone>li ul').css({ 'left': `0%` });

    // 왼쪽으로는 갈수 없음   
    $('.sub .others .others_list .left').addClass('off');


    // 오른쪽으로 갈수있음
    $('.sub .others .others_list .right').removeClass('off');



  })






  // 연관 리스트의 장바구니를 클릭했을 때


  $('.sub .others .others_list .listZone>li ul li .shop').click(function (e) {


    e.preventDefault();

    e.stopPropagation();


    let otherI = $(this).parents('li ul li').index();



    if ($('.sub .others .others_list .listZone>.gameList').hasClass('on')) {

      $('.goods .gList .listZone>.gameList ul li').eq(otherI).find('.shop').trigger('click');

    }

    else {

      $('.goods .gList .listZone>.proList ul li').eq(otherI).find('.shop').trigger('click');


    }








  })






























  // 서브페이지 리뷰 오른쪽버튼 클릭시에
  $('.sub .reviews .review_list .right').click(function () {

    // count가 4가될때까지만 1씩 더함(최댓값 부여)
    if (subReviewC < 3) {

      subReviewC++;

    }


    // 오른쪽 끝일때
    if (subReviewC >= 3) {

      // 왼쪽으로는 갈수 있음   
      $('.sub .reviews .review_list .left').removeClass('off');


      // 오른쪽으로 더 못감   
      $(this).addClass('off');

    }


    else {
      $('.sub .reviews .review_list .left').removeClass('off');


      // 오른쪽으로 더 못감   
      $(this).removeClass('off');


    }




    $('.sub .reviews .review_list .review_zone').stop().animate({ 'left': `${subReviewC * -50}%` }, 300);




  }

  )




  // 서브페이지 리뷰 왼쪽버튼 클릭시에


  $('.sub .reviews .review_list .left').click(function () {

    // count가 4가될때까지만 1씩 더함(최댓값 부여)
    if (subReviewC > 0) {

      subReviewC--;

    }



    // 왼쪽 끝일때
    if (subReviewC <= 0) {

      // 왼쪽으로는 갈수 없음   
      $(this).addClass('off');


      // 오른쪽으로 갈수있음
      $('.sub .reviews .review_list .right').removeClass('off');

    }

    else {
      $(this).removeClass('off');


      // 오른쪽으로 더 못감   
      $('.sub .reviews .review_list .right').removeClass('off');
    }



    $('.sub .reviews .review_list .review_zone').stop().animate({ 'left': `${subReviewC * -50}%` }, 300);






  }

  )
















  // 서브페이지 연관리스트 오른쪽버튼 클릭시에


  $('.sub .others .others_list .right').click(function () {

    // count가 4가될때까지만 1씩 더함(최댓값 부여)
    if (subOtherC < 2) {

      subOtherC++;

    }


    // 오른쪽 끝일때
    if (subOtherC >= 2) {

      // 왼쪽으로는 갈수 있음   
      $('.sub .others .others_list .left').removeClass('off');


      // 오른쪽으로 더 못감   
      $(this).addClass('off');

    }


    else {
      $('.sub .others .others_list .left').removeClass('off');


      // 오른쪽으로 더 못감   
      $(this).removeClass('off');


    }



    $('.sub .others .others_list .listZone>li ul').stop().animate({ 'left': `${subOtherC * -50}%` }, 300);


  }

  )




  // 서브페이지 연관리스트 왼쪽버튼 클릭시에


  $('.sub .others .others_list .left').click(function () {

    // count가 4가될때까지만 1씩 더함(최댓값 부여)
    if (subOtherC > 0) {

      subOtherC--;

    }



    // 왼쪽 끝일때
    if (subOtherC <= 0) {

      // 왼쪽으로는 갈수 없음   
      $(this).addClass('off');


      // 오른쪽으로 갈수있음
      $('.sub .others .others_list .right').removeClass('off');

    }

    else {
      $(this).removeClass('off');


      // 오른쪽으로 더 못감   
      $('.sub .others .others_list .right').removeClass('off');
    }



    $('.sub .others .others_list .listZone>li ul').stop().animate({ 'left': `${subOtherC * -50}%` }, 300);






  }

  )




























})
// 제이쿼리 끝