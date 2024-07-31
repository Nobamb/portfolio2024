$(document).ready(function () {











  // 로고 클릭시에
  $('h1').click(function () {

    // 프로필 화면이 토글된다.(화면이 커지고 작아짐)

    $('section.profile').toggleClass('on');

    $('section.wrap article').toggleClass('blind');

  })







  // 로고 span 마우스를 갖다댈 시에
  $('h1>span').mouseenter(function () {

    // 로고 span에 off줌(그림자 제거)
    $(this).addClass('off');


    // 로고 span에 마우스를 뗄 시에
    $(this).mouseleave(function () {

      // off를 없앰(그림자 생김)
      $(this).removeClass('off');

    })

  })




  // 로고 time 호버 시에도 동일한 이벤트
  $('h1 .time').mouseenter(function () {

    $('h1>span').addClass('off');

    $('h1 .time').mouseleave(function () {

      $('h1>span').removeClass('off');

    })

  })











  // 시, 분을 전역변수로 나타냄


  // setinterval을 바깥에서 작동시키고자



  let eHour = 0;

  let eMin = 0;






  // setinterval 나중에 함수 외부로 옮기기(clear 해도 바로 생김)




  // 노래 관련 시간 이벤트




  // 시작하자마자 재생


  let play_start = setInterval(() => {

    if ($('.audio li').hasClass('on') && $('.main .record_box').hasClass('on')) {

      $(this).find('audio').get(0).play();

    }



  }, 1000)





  let stop = 0;



  let zero_time = setInterval(() => {
    // 12시가 되고 1시간동안은
    if (eHour === 0 && (eMin >= 0 && eMin <= 59)) {

      // if (eHour === 9 && (eMin >= 8 && eMin <= 9)) {


      // 기존 자동재생 초기화
      clearInterval(play_start);

      clearInterval(one_time);

      // stop은 0으로 초기화(한번 시간 넘어가고 또 넘어갈때 작동안될수 있으니)
      stop = 0;

      // stop이 0일때(처음 동작시킬때) 
      if (stop === 0) {

        // 모든 비디오 초기화후
        $('audio').each(function () {

          this.pause();
          this.currentTime = 0;

        })

        // stop을 1로 지정(무한반복 방지)
        stop = 1;
      }






      // 기본 노래로 12:00 노래가 재생

      $('.main .record_box .music_box>ul>li').removeClass('on');
      $('.main .record_box .player>.play_this').text('12 : 00');


      // 일곱번째 음악 재생
      music_index = 6;


      if ($('.main .record_box').hasClass('on')) {

        $('.audio li').eq(6).find('audio').get(0).play();
      }




    }
  }, 1000);



  let one_time = setInterval(() => {


    // 1시가 되고 1시간동안은
    if (eHour === 1 && (eMin >= 0 && eMin <= 59)) {

      // if (eHour > 0) {

      // 기본 노래로 1:00 노래가 재생


      // 기존 자동재생 초기화
      clearInterval(play_start);

      clearInterval(one_time);

      // stop은 0으로 초기화(한번 시간 넘어가고 또 넘어갈때 작동안될수 있으니)
      stop = 0;


      // stop이 0일때(처음 동작시킬때)
      if (stop === 0) {


        // 모든 비디오 초기화후
        $('audio').each(function () {

          this.pause();
          this.currentTime = 0;

        })


        // stop을 1로 지정(무한반복 방지)
        stop = 1;
      }




      

      $('.main .record_box .music_box>ul>li').removeClass('on');
      $('.main .record_box .player>.play_this').text('1 : 00');

      // 일곱번째 음악 재생
      music_index = 7;


      if ($('.main .record_box').hasClass('on')) {

        $('.audio li').eq(7).find('audio').get(0).play();
      }

    }

  }, 1000)











  setInterval(function () {


    // 현재 날짜의 시, 분, 초 변수 생성
    let time = new Date();

    let hour = time.getHours();

    let min = time.getMinutes();

    let sec = time.getSeconds();




    // 전역변수용 시, 분 변수에 할당


    eHour = hour;

    eMin = min;




    // 표시할 시, 분, 초(9이하일땐 앞에 0이 붙게 함)
    let thisHour = 0;

    let thisMin = 0;

    let thisSec = 0;



    // 시, 분, 초가 9 이하일때 앞에 0이 붙은 채로 표시,
    // 10 이상일땐 그대로 표시


    if (hour <= 9) {

      thisHour = '0' + hour;

    }


    else {

      thisHour = hour;

    }




    if (min <= 9) {

      thisMin = '0' + min;

    }


    else {

      thisMin = min;
    }





    if (sec <= 9) {

      thisSec = '0' + sec;

    }


    else {

      thisSec = sec;

    }




    $('h1 .time span').eq(0).text(thisHour);

    $('h1 .time span').eq(1).text(thisMin);

    $('h1 .time span').eq(2).text(thisSec);





    // 시간 관련 이벤트들
























    // 다시 레코드 내의 음악 리스트들을 누르면 setinreval해제
    // 해제해야 다른 노래들을 재생 가능

    $('.main .record_box .music_box>ul>li').click(function () {

      clearInterval(zero_time);

      clearInterval(one_time);


    })








    // 메인 배경 색 변경










    // 06~11시, 18~23시 일때 중간 어두움

    if ((hour >= 6 && hour <= 11) || (hour >= 18 && hour <= 23)) {

      $('.main #time_shadow').removeClass().addClass('shadowMiddle');

    }





    // 12~17시 일때 안 어두움


    else if (hour >= 12 && hour <= 17) {

      $('.main #time_shadow').removeClass().addClass('shadowLow');

    }





    // 00~05시 일때 많이 어두움

    else {
      $('.main #time_shadow').removeClass().addClass('shadowHigh');

    }











    // 특정 커맨드를 입력시 관련 노래 재생



    $(window).keydown(function (e) {


      clearInterval(play_start);

      clearInterval(zero_time);

      clearInterval(one_time);










      // esc 키를 누를시에
      if (e.key === 'Escape') {


        // 컨트롤 c 클래스와 현재 재생중인 음악의 on 클래스를 제거후
        // esc키를 누르고 다시 ctrl c ctrl v를 눌러야 재생하게 하도록함
        $('.main .record_box .player>.play_this').removeClass('ctrlC');
        $('.main .record_box .music_box>ul>li').removeClass('on');


        // esc 음악이 재생함
        $('.main .record_box .player>.play_this').text('ESC');


        music_index = 9;



        $('audio').each(function () {
          this.pause();
          this.currentTime = 0;
        });



        $('.audio li').eq(9).find('audio').get(0).play();


      }









      // ctrl c를 누르고(ctrlC 클래스 부여)
      if ((e.key === 'c' || e.key === 'C') && e.ctrlKey) {

        $('.main .record_box .player>.play_this').addClass('ctrlC');

      }


      // ctrl v를 누르면 ctrl c ctrl v 재생(ctrlC클래스가 있는지 검사하여 확인)
      if ((e.key === 'v' || e.key === 'V') && e.ctrlKey && $('.main .record_box .player>.play_this').hasClass('ctrlC')) {

        $('.main .record_box .music_box>ul>li').removeClass('on');
        $('.main .record_box .player>.play_this').text('ctrl c + ctrl v');


        music_index = 8;


        $('audio').each(function () {
          this.pause();
          this.currentTime = 0;
        });





        $('.audio li').eq(8).find('audio').get(0).play();


      }


    })





    // 앨범 재생중일 땐 음악 재생 중지

    if ($('.album_play .play_buttons li:nth-child(1)').hasClass('on')) {

      clearInterval(play_start);

      clearInterval(one_time);

      clearInterval(zero_time);



      $('.album_click li.on .play').find('i:nth-child(2)').removeClass('on');

      $('.album_click li.on .play').find('i:nth-child(1)').addClass('on');



      $('audio').each(function () {
        this.pause();
      });


      $('.main .record_box .player>.play i:nth-child(1)').removeClass('on');

      $('.main .record_box .player>.play i:nth-child(2)').addClass('on');

    }





  }, 100);













  // menu버튼을 누르면 들어가게 하고
  // 들어간 상태에서 다시 menu버튼을 누르면 돌아오게 하라


  $('nav>span').click(function () {


    // on클래스를 toggle시켜서 접고 여는 행위가 가능하게 함
    $('nav').toggleClass('on');

    // 히스토리 마지막 시그니쳐 사운드가 버튼을 가리지 않게하여 움직임
    $('.history_zone .years .years_info .signiture_deco.sign2').toggleClass('move');

  })













  // 메뉴의 리스트 클릭시에

  $('nav li').click(function () {

    // 리스트 클릭하면 프로필대신 본문이 다시 보여짐 

    $('section.profile').removeClass('on');

    $('section.wrap article').removeClass('blind');

    // 해당 순번 기억
    let i = $(this).index();


    // .wrap이 움직이면서 화면이 전환됨
    $('.wrap').stop().animate({ 'top': `${i * -100}%` })


    // 이전의 리스트는 지우고
    $('nav li').removeClass('on');


    // 현재 리스트의 이벤트 적용
    $(this).addClass('on');




  })








  // 인트로





  // 자동차 사진 내의 숫자 생성



  // 숫자 카운트
  let count = 0;


  // 시그니쳐 사운드 카운트
  let signCount = 0;



  let persent = setInterval(() => {


    // 0.03초마다 1씩 추가
    count++;


    // 시그니쳐 카운트 = 카운트 수에서 25를 나눈 값
    signCount = count / 25;


    // 시그니쳐 사운드 수는 총 4개니까 4번 반복
    for (let sign = 0; sign < 4; sign++) {

      // 시그니쳐 카운트가 25가 될때마다(정수가 될때만 작동함)
      if (sign === signCount) {
        // 이전 시그니쳐 사운드는 현재 화면에서 올라가서 없어지고,
        $('.signiture li').eq(sign - 1).css({ 'top': '0%' }).stop().animate({ 'top': '-100%' }), 10;

        // 현재 시그니쳐 사운드가 밑에서 올라와서 등장함
        $('.signiture li').eq(sign).css({ 'top': '100%' }).stop().animate({ 'top': '0%' }), 10;

      }

    }


    // 0.03초마다 span에 숫자를 적어줌
    $('section.intro>.intro_area>span').text(count);


    // 0.03초마다 바늘이 오른쪽으로 움직임
    $('section.intro .niddle').css({ 'transform': `rotate(${(count / 100) * 98}deg)` })


    // 숫자가 100이 되면 off클래스를 줌
    if (count >= 100) {

      $('section.intro>.intro_area>span').addClass('off');

      clearInterval(persent);

    }

  }, 30);













  // off 클래스가 생길 시에 깜빡거리는 연출 발생


  let overCount = 0;



  let over = setInterval(() => {

    // off클래스가 발생시에만 작동(숫자가 100이 될때)

    if ($('section.intro>.intro_area>span').hasClass('off')) {

      // 0.3초마다 1씩 증가
      overCount++

      // overCount가 짝수면 보임(0.1초 후에)
      if (overCount % 2 === 0) {

        $('section.intro>.intro_area>span').stop().animate({ 'opacity': '1' }, 100);

      }

      // overCount가 홀수면 안보임(0.1초 후에)
      if (overCount % 2 === 1) {

        $('section.intro>.intro_area>span').stop().animate({ 'opacity': '0' }, 100);

      }


      // overCount가 3이면 아예 안보이게 clearinterval 적용
      if (overCount === 3) {


        clearInterval(over);

        $('section.intro .slush').addClass('on');

      }



    }

  }, 300);





  // 자르는 연출



  let slush = setInterval(() => {


    // slush에 on적용시(검은 화면생성)

    if ($('section.intro .slush').hasClass('on')) {

      // 자르는 연출들 생성
      // 애니메이션 시간은 무조건 setinteval 시간보다 적게 줘야함(안그러면 애니메이션 멈춤)

      $('section.intro .slush>img:nth-child(1)').stop().animate({ 'opacity': 1, 'top': '50%', 'left': '50%' }, 300, function () {

        $('section.intro .slush>img:nth-child(2)').stop().animate({ 'opacity': 1, 'left': '50%', 'top': '50%' }, 300, function () {

          // 생성후엔 setinterval 종료
          clearInterval(slush);

          // slush 종료
          $('section.intro .slush').removeClass('on');

          // 조각내기 시작

          $('section.intro .intro_break').addClass('on');

          // 기존 

          $('section.intro .intro_area').hide();

        })

      })

    }
    // 애니메이션이 0.5초이므로 0.6초로 생성
  }, 600);







  setInterval(() => {

    // break on클래스 적용시

    if ($('section.intro .intro_break').hasClass('on')) {

      // 각 조각들이 날라감

      $('section.intro .intro_break img').addClass('on');

    }

    // 조각들이 날아가게 되면

    if ($('section.intro .intro_break img').hasClass('on')) {

      // 2초동안 opacity값 변경









      $('section.intro').animate({ 'opacity': 0 }, 1000, function () {

        // opaicity 변경후에 display none(메인화면들 클릭하기 위해)

        $('section.intro').hide();


        $('.main .record_box').addClass('on');

      })












    }
  }, 300);























  // 메인 이벤트




  // 각 리스트 개수


  // 일반 재생 리스트

  const audioLength1 = $('.audio .audio1').length;


  // 시간 재생 리스트
  const audioLength2 = $('.audio .audio2').length;


  // 커맨드 재생 리스트

  const audioLength3 = $('.audio .audio3').length;





  // 각 재생 리스트에 대한 출처 적용



  for (let audio1 = 0; audio1 < audioLength1; audio1++) {
    const src = `audio/audio1-${audio1 + 1}.mp3`;
    $(`.audio .audio1`).eq(audio1).find('audio').attr('src', src);

  }




  for (let audio2 = 0; audio2 < audioLength2; audio2++) {
    const src = `audio/audio2-${audio2 + 1}.mp3`;
    $(`.audio .audio2`).eq(audio2).find('audio').attr('src', src);

  }




  for (let audio3 = 0; audio3 < audioLength3; audio3++) {
    const src = `audio/audio3-${audio3 + 1}.mp3`;
    $(`.audio .audio3`).eq(audio3).find('audio').attr('src', src);

  }











  // 레코드 안의 앨범 리스트 클릭시



  // 클릭한 리스트의 순번을 전역변수로 설정하여

  // 전반적으로 해당 순번을 통한 오디오 제어





  // 오디오 순서를 전역변수로 함

  let music_index = 0;



  setInterval(() => {

    console.log(music_index)

  }, 1000);





  $('.main .record_box .music_box>ul>li').click(function () {


    // on클래스가 있던 인덱스

    let music_origin_index = $('.main .record_box .music_box>ul>li.on').index();

    // 클릭한 인덱스

    music_index = $(this).index();


    // 시작하자마자 재생하는거 멈춤

    clearInterval(play_start);

    clearInterval(one_time);

    clearInterval(zero_time);

    // on클래스가 있던 인덱스가 클릭한 인덱스와 다를때
    // 조건문 지정안하면 기존꺼 클릭해도 초기화

    if (music_origin_index !== music_index) {

      // 모든 음악 초기화 및 0부터 시작
      $('audio').each(function () {
        this.pause();
        this.currentTime = 0;
      });

      // 클릭한 리스트 부분의 음악 재생 시작



      $('.audio .audio1').eq(music_index).find('audio').get(0).play();

    }



    // 12:00노래가 나올때













  })











































  // 레코드에 마우스를 올려두면


  $('.main .record_box .record').mouseenter(function () {


    // 레코드 내의 박스가 오른쪽으로 나옴

    $('.main .record_box .music_box').addClass('on');


    // 마우스를 떼면(레코드 박스의 영역을 포함한 부모 영역)

    $('.main .record_box').mouseleave(function () {

      // 레코드 내의 박스가 다시 들어감
      $('.main .record_box .music_box').removeClass('on');

    })


  })








  // 레코드 내의 음악 리스트 클릭시


  $('.main .record_box .music_box>ul>li').click(function () {

    // 음악리스트에 있던 on 클래스 제거

    $('.main .record_box .music_box>ul>li').removeClass('on');

    // 클릭한 리스트는 on(강조 효과)

    $(this).addClass('on');

    // 클릭한 리스트의 글자 지정

    let music_text = $(this).text();


    // ctrl c ctrl v 이스터에그 해제(지정 안해주면 ctrl v만 눌러도 작동)
    $('.main .record_box .player>.play_this').removeClass('ctrlC');


    // 지정한 글자를 플레이중인 노래명에 갖다 붙임

    $('.main .record_box .player>.play_this').text(music_text);

  })


















  // play/pause 버튼 클릭시

  $('.main .record_box .player>.play').click(function () {



    // 멈춤 또는 재생 아이콘 변경

    $('.main .record_box .player>.play i').toggleClass('on');



    // 시작하자마자 재생하는거 멈춤

    clearInterval(play_start);

    clearInterval(one_time);

    clearInterval(zero_time);


    // 오디오 요소
    let audioElement = $('.audio li').eq(music_index).find('audio').get(0);

    if ($(this).find('i:nth-child(1)').hasClass('on')) {
      // 'on' 클래스가 있는 경우 오디오 재생
      audioElement.play();
    } else {
      // 'on' 클래스가 없는 경우 오디오 정지
      audioElement.pause();
    }



    // 앨범 재생 종료 및 메인의 음악재생

    $('.album_play .play_buttons li:nth-child(1)').removeClass('on');
    $('.album_play .play_buttons li:nth-child(2)').addClass('on');





    // 모든 비디오를 정지
    $('.album_vid li video').each(function () {
      this.pause();
    });




    // 노래 클릭시에 앨범 플레이어 부분 정지표시


    $('.album_click li.on .play').find('i:nth-child(1)').removeClass('on');

    $('.album_click li.on .play').find('i:nth-child(2)').addClass('on');





  })










  setInterval(() => {


    if ($('.main .record_box .player>.play .fa-play').hasClass('on')) {

      $('.main .record_box .record').css({ 'animation-play-state': 'paused' });

    }

    else {

      $('.main .record_box .record').css({ 'animation-play-state': 'running' });

    }


  }, 300)







































































  // sns 이벤트






  // 아이콘이 도는 효과


  $('.sns .sns_all li a').mouseenter(function () {

    let sns1 = $(this).parent('li').index();

    $('.sns .sns_all li .sns_app').removeClass('on');

    $('.sns .sns_all li .sns_app').eq(sns1).addClass('on');



  })





  $('.sns .sns_all li a').mouseleave(function () {

    let sns2 = $(this).parent('li').index();

    $('.sns .sns_all li .sns_app').removeClass('on');


  })




























  // 히스토리



  // 히스토리들의 기본 left값 지정


  for (let history = 1; history <= 10; history++) {

    $(`.history_inner .history_zone_${history}`).css({ 'left': `${(history - 1) * 100}%` })

  }




  // 카운트 값만큼 움직이게 함

  let historyCount = 0;



  // 마우스 휠 이벤트를 사용하였을 때


  $(window).mousewheel(function (e, x) {




    if ($('nav ul>li:nth-child(3)').hasClass('on')) {


      // 스크롤을 내렸을 때

      if (x < 0) {

        // 9미만일때(left -900px이 마지막 구간)
        if (historyCount < 9) {

          // 카운트를 올린후 왼쪽으로 이동
          historyCount++;



          $('.history_inner').stop().animate({ 'left': `${historyCount * -100}%` }, 500);
        }



      }

      // 스크롤을 올렸을 때

      if (x > 0) {
        // 0 초과일때(left 0px이 첫번째 구간)
        if (historyCount > 0) {

          // 카운트를 내린후 오쪽으로 이동
          historyCount--;
          $('.history_inner').stop().animate({ 'left': `${historyCount * -100}%` }, 500)
        }




      }


      // 스크롤에 의해 화면전환했을 때 해당 화면에 맞는 on클래스를 상단의 li에 적용


      $('.history_bar li').removeClass('on');

      $('.history_bar li').eq(historyCount).addClass('on');

    }


  })







  // 상단의 리스트르르 클릭했을 때 클릭한 부분만큼 화면이 전환되게 함

  $('.history_bar li').click(function () {

    let his = $(this).index();

    historyCount = his;

    $('.history_bar li').removeClass('on');

    $(this).addClass('on');

    $('.history_inner').stop().animate({ 'left': `${historyCount * -100}%` }, 500);

  })






































  // 앨범 이벤트





  // 앨범을 이동시킬 변수 선언

  let ac = 0;







  $('album_vid li:nth-child(5)').volume = 2.0;











  // 영상 관련 이벤트
















  // 재생 이벤트




  // 재생시간 표시하는거

  // 이거 구현해보기



  let videoMinutes = 0;

  let videoSeconds = 0;



  let playingVideo = setInterval(function () {


    videoSeconds++;


    if (videoSeconds === 60) {

      videoSeconds = 0;

      videoMinutes++;

    }

    $('this this_minutes').text(videoMinutes);


    $('this this_seconds').text(videoSeconds);

  }, 1000)










  // 재생바의 정지버튼 누르면 영상 정지
  $('.album_play .play_buttons li:nth-child(2)').click(function () {


    // 색깔 표시 및 정지 활성화 표시

    $('.album_play .play_buttons li').removeClass('on');

    $(this).addClass('on');

    $('.album_vid li.on video').get(0).pause();


    clearInterval(playingVideo);

  });












  // 재생바의 재생버튼 누르면 영상 재생
  $('.album_play .play_buttons li:nth-child(1)').click(function () {

    // 색깔 표시 및 재생 활성화 표시

    $('.album_play .play_buttons li').removeClass('on');

    $(this).addClass('on');


    $('.album_vid li.on video').get(0).play();

    playingVideo;
  });


















  // 앨범 리스트에서의 재생/멈춤


  $('.album_click li span').click(function (e) {

    // 부모요소의 이벤트 버블링을 막음

    // 부모 클래스를 클릭했을 때 
    // 앨범 이름을 클릭하면 해당 부분의 재생 표시가 나고
    // 나머지 이름들은 정지 표시가 나는 이벤트와 충돌함

    e.stopPropagation();

    // 클릭한 리스트가 on클래스가 존재할경우,
    // 재생상태일땐 정지, 정지상태일땐 재생함


    if ($(this).parent('li').hasClass('on')) {



      if ($(this).find('i:nth-child(1)').hasClass('on')) {



        $('.album_play .play_buttons li').removeClass('on');

        $('.album_play .play_buttons li:nth-child(2)').addClass('on');


        $('.album_vid li.on video').get(0).pause();


      }





      if ($(this).find('i:nth-child(2)').hasClass('on')) {


        $('.album_play .play_buttons li').removeClass('on');

        $('.album_play .play_buttons li:nth-child(1)').addClass('on');


        $('.album_vid li.on video').get(0).play();
      }

    }


  })











  let vt = 0;


  let vc = 0;


  let vp = 0;

  // 재생시간에 따른 재생바 표시


  let playing = setInterval(() => {
    // 총 재생 시간
    let vt = $('.album_vid li.on video').get(0).duration;

    // 현재 재생시간
    let vc = $('.album_vid li.on video').get(0).currentTime;

    // 퍼센트로 변환(픽셀로 빼기 전의 width값)
    let vp = (vc / vt) * 100;

    // play_bar_this의 부모 요소(재생바인 play_bar) 너비(만약에 width가 1200px이면)
    let conWidth = $('.album_play .play_bar').width();

    // 퍼센트를 픽셀 값으로 변환(vp가 1당 12px, 30이면 360px이 된다.)
    let barWidth = (vp / 100) * conWidth;

    // 빼야 할 픽셀 값
    // 20px(볼 가로 크기)
    let pixels = 20;

    // 새로운 너비 계산(픽셀값으로 변환한 값 - 빼야 될 픽셀값)
    // 예를 들어 360px에서 30을 빼면 330px이다.
    let newWidthPx = barWidth - pixels;

    // 새로운 너비를 퍼센트로 변환
    // 330에서 부모요소 너비를 나누고 100을 곱하면 px에서 퍼센트로 다시 변환된다.
    let newWidthPer = (newWidthPx / conWidth) * 100;

    // 새로운 너비 설정
    $('.album_play .play_bar_this').width(newWidthPer + '%');

  }, 300);












  // 제생바의 특정 구간을 클릭하면 그 구간으로 이동




  $('.album_play .play_bar').click(function (e) {





    $('.album_click li.on .play').find('i:nth-child(2)').removeClass('on');

    $('.album_click li.on .play').find('i:nth-child(1)').addClass('on');


    // 재생바의 시작과 끝점 지정



    // 시작점

    // 재생바 맨 왼쪽 + 20(재생바의 볼)

    let startPlay = $(this).offset().left + 20;





    // 끝점

    // 재생바 맨 오른쪽(재생바 맨 왼쪽 + 재생바 길이)

    let finishPlay = $(this).offset().left + $(this).width();






    // 총길이(끝점 - 시작점)

    let playWidth = finishPlay - startPlay;







    // 클릭한 부분의 좌표값을 구함

    // 전체화면에서 클릭한 부분의 x값 - 재생바에서의 최소 x값

    let x = e.pageX - startPlay;









    // 클릭한 부분의 비율을 구함

    // (클릭 좌표 / 총 길이) * 100




    let xPersent = ((x - 20) / playWidth) * 100;






    // 총길이의 일점 비율을 클릭하면 그 비율만큼 play_bar_this가 움직이고,

    // 총 길이에서 30%를 클릭하면 play_bar_this는 길이가 30%가됨


    if (e.pageX < finishPlay) {

      $('.album_play .play_bar_this').width(xPersent + '%');

    }




    // currentTime도 전체 재생시간중에 클릭한 비율만큼 표시됨



    let playTime = ((x + 20) / $(this).width()) * 100;


    let curPlayTime = 0;


    let duPlayTime = $('.album_vid li.on video').get(0).duration;


    curPlayTime = playTime * duPlayTime / 100;



    $('.album_vid li.on video').get(0).currentTime = curPlayTime;



    // 시간대 이동시 멈춤처리

    $('.album_vid li.on video').get(0).pause();



    $('.album_play .play_buttons li').removeClass('on');

    $('.album_play .play_buttons li:nth-child(2)').addClass('on');

    $('.album_click li.on .play i').removeClass('on');

    $('.album_click li.on .play i').eq(1).addClass('on');

  })

































  // 재생 버튼



  $('.album_play .play_buttons li:nth-child(1)').click(function () {




    $('.album_click li .play').find('i:nth-child(1)').removeClass('on');

    $('.album_click li .play').find('i:nth-child(2)').addClass('on');

    $('.album_click li.on .play').find('i:nth-child(2)').removeClass('on');

    $('.album_click li.on .play').find('i:nth-child(1)').addClass('on');

  })

















  // 정지버튼




  $('.album_play .play_buttons li:nth-child(2)').click(function () {

    $('.album_click li .play').find('i:nth-child(2)').removeClass('on');

    $('.album_click li .play').find('i:nth-child(1)').addClass('on');

    $('.album_click li.on .play').find('i:nth-child(1)').removeClass('on');

    $('.album_click li.on .play').find('i:nth-child(2)').addClass('on');

  })
















  // 이전 버튼



  $('.album_play .play_buttons li:nth-child(3)').click(function () {

    if (ac > -1) {

      // 변수 1씩 감소
      // ac 3 기준, 1이 left 0, 2가 33.3333%기준으로 끝점에 있었기에
      // ac -1 기준  0이 left 0, 1이 33.3333%에 있어야 됨
      ac--;


      // 변수에 따라 앨범을 움직임


      $('.album_list ul').stop().animate({ 'left': `${ac * -33.3333}%` }, 1000);


      // 기존 가운데에 있던 리스트의 on클래스 제거후

      $('.album_list li').removeClass();


      // 새로 가운데로 오게 될 리스트에 on클래스를 줌

      $('.album_list li').eq(ac + 1).addClass('on');



      // 상단의 리스트들도 바뀐 앨범에 따라 on값 변경


      $('.album_click li').removeClass('on');


      $('.album_click li').eq(ac + 1).addClass('on');



      // 기존 음악이 재생되면 다른 음악들은 정지


      $('.album_vid li.on video').get(0).pause();

      // 모든 비디오를 초기화
      $('.album_vid li video').each(function () {


        this.currentTime = 0;
        this.pause();
      });


      $('.album_vid li').removeClass('on');


      $('.album_vid li').eq(ac + 1).addClass('on');



    }


    $('.album_click li .play i:nth-child(1)').removeClass('on');
    $('.album_click li .play i:nth-child(2)').addClass('on');
    $('.album_play .play_buttons li:nth-child(1)').removeClass('on');
    $('.album_play .play_buttons li:nth-child(2)').addClass('on');

  })









  // 다음 버튼

  $('.album_play .play_buttons li:nth-child(4)').click(function () {


    // ac가 3미만일 때
    if (ac < 3) {

      // 변수 1씩 추가
      // ac 0 기준, 1이 left 0, 2가 33.3333%기준으로 시작점에 있었기에
      // ac 3 기준  4(ac(3) + 1)가 left 0, 5(ac(3) + 2)가 33.3333%에 있어야 됨

      ac++;


      // 변수에 따라 앨범을 움직임


      $('.album_list ul').stop().animate({ 'left': `${ac * -33.3333}%` }, 1000);


      // 기존 가운데에 있던 리스트의 on클래스 제거후

      $('.album_list li').removeClass();


      // 새로 가운데로 오게 될 리스트에 on클래스를 줌

      $('.album_list li').eq(ac + 1).addClass('on');



      // 상단의 리스트들도 바뀐 앨범에 따라 on값 변경
      $('.album_click li').removeClass('on');


      $('.album_click li').eq(ac + 1).addClass('on');




      // 기존 음악이 재생되면 다른 음악들은 정지





      $('.album_vid li.on video').get(0).pause();

      // 모든 비디오를 초기화
      $('.album_vid li video').each(function () {


        this.currentTime = 0;
        this.pause();
      });



      $('.album_vid li').removeClass('on');


      $('.album_vid li').eq(ac + 1).addClass('on');


    }




    $('.album_click li .play i:nth-child(1)').removeClass('on');
    $('.album_click li .play i:nth-child(2)').addClass('on');
    $('.album_play .play_buttons li:nth-child(1)').removeClass('on');
    $('.album_play .play_buttons li:nth-child(2)').addClass('on');



  })













  // 상부의 리스트를 클릭하면 해당 앨범으로 이동

  $('.album_click li').click(function () {


    let albumI = $(this).index();

    $('.album_click li').removeClass();

    $(this).addClass('on');


    ac = albumI - 1;


    $('.album_list ul').stop().animate({ 'left': `${(ac) * -33.3333}%` }, 1000);


    // 기존 가운데에 있던 리스트의 on클래스 제거후

    $('.album_list li').removeClass();


    // 새로 가운데로 오게 될 리스트에 on클래스를 줌

    $('.album_list li').eq(ac + 1).addClass('on');





    // 앨범 이름을 클릭하면 해당 부분의 재생 표시가 나고
    // 나머지 이름들은 정지 표시가 남




    $('.album_click li .play').find('i:nth-child(2)').removeClass('on');

    $('.album_click li .play').find('i:nth-child(1)').addClass('on');

    $(this).find('i:nth-child(1)').removeClass('on');

    $(this).find('i:nth-child(2)').addClass('on');



    // 모든 비디오를 초기화
    $('.album_vid li video').each(function () {


      this.currentTime = 0;
      this.pause();
    });


    $('.album_vid li.on video').get(0).pause();


    $('.album_vid li').removeClass('on');


    $('.album_vid li').eq(ac + 1).addClass('on');






    $('.album_play .play_buttons li').removeClass('on');

    $('.album_play .play_buttons li:nth-child(2)').addClass('on');





  })





















  // 유튜브 스포티파이 이동 이벤트


  setInterval(() => {


    // 첫번째 앨범 재생될 때

    if ($('.album_list ul li:nth-child(1)').hasClass('on')) {

      // 유튜브, 스포티파이는 첫번째 앨범 링크로감(나머지도 모두 동일)

      $('.album_play .play_app li:nth-child(1)').find('a').attr("href", "https://youtu.be/medo8dj_-28?si=f99cX8fi_VKdKril");

      $('.album_play .play_app li:nth-child(2)').find('a').attr("href", "https://open.spotify.com/track/0YjaYbmmCgUUwOVAA3wqiV");

    }


    if ($('.album_list ul li:nth-child(2)').hasClass('on')) {

      $('.album_play .play_app li:nth-child(1)').find('a').attr("href", "https://youtu.be/Sq9DmUBdQMs?si=lINrii9mkWV3rcwF");

      $('.album_play .play_app li:nth-child(2)').find('a').attr("href", "https://open.spotify.com/track/5PFqdHy3b9PGgfns2uVpE6");

    }

    if ($('.album_list ul li:nth-child(3)').hasClass('on')) {

      $('.album_play .play_app li:nth-child(1)').find('a').attr("href", "https://youtu.be/PRLuDnZtsOY?si=aso1lPnerqVlUni2");

      $('.album_play .play_app li:nth-child(2)').find('a').attr("href", "https://open.spotify.com/track/7qyUYMwT1UBUFHtvL2EVAC");

    }

    if ($('.album_list ul li:nth-child(4)').hasClass('on')) {

      $('.album_play .play_app li:nth-child(1)').find('a').attr("href", "https://youtu.be/_6kZcZvFmHc?si=Pc8gqmpcq2NZZRqC");

      $('.album_play .play_app li:nth-child(2)').find('a').attr("href", "https://open.spotify.com/track/1GeX7W2VtmtceoW9fzZ8Oc");

    }

    if ($('.album_list ul li:nth-child(5)').hasClass('on')) {

      $('.album_play .play_app li:nth-child(1)').find('a').attr("href", "https://youtu.be/q3HdmX9kIek?si=Tnk84Sl-1rKv1jU4");

      $('.album_play .play_app li:nth-child(2)').find('a').attr("href", "https://open.spotify.com/search/%EA%B0%80%EC%8A%B5%EA%B8%B0");

    }





  }, 1000)















  // 뒤로가기 적용시 앨범이름 리스트내의 재생/정지

  $('.album_play .play_buttons li').eq(2).click(function () {

    $('.album_click li').find('i:nth-child(2)').removeClass('on');

    $('.album_click li').find('i:nth-child(1)').addClass('on');

    $(`.album_click li:nth-child(${ac + 2}) .play`).find('i:nth-child(1)').removeClass('on');

    $(`.album_click li:nth-child(${ac + 2}) .play`).find('i:nth-child(2)').addClass('on');
  })







  // 앞으로 가기 적용시 앨범이름 리스트내의 재생/정지



  $('.album_play .play_buttons li').eq(3).click(function () {

    $('.album_click li').find('i:nth-child(2)').removeClass('on');

    $('.album_click li').find('i:nth-child(1)').addClass('on');

    $(`.album_click li:nth-child(${ac + 2}) .play`).find('i:nth-child(1)').removeClass('on');

    $(`.album_click li:nth-child(${ac + 2}) .play`).find('i:nth-child(2)').addClass('on');


  })










  // 앨범 그림 클릭시 그 앨범으로 이동



  $('.album_list li').click(function () {

    let album_origin = $('.album_list li.on').index();


    let album_index = $(this).index();


    // ac(앨범 이동 변수)에다 클릭한 앨범의 인덱스 - 1을 대입
    ac = album_index - 1;




    $('.album_list ul').stop().animate({ 'left': `${(ac) * -33.3333}%` }, 1000);



    // on클래스가 있던 리스트 클릭시에
    if ($(this).hasClass('on')) {


      // 비디오를 보여줌

      $('.album_vid').removeClass('hidden');

      // 앨범 리스트를 숨김

      $('.album_list').addClass('hidden');



    }













    // on클래스가 있지 않으면

    else {

      // 모든 비디오를 초기화
      $('.album_vid li video').each(function () {
        this.currentTime = 0;
        this.pause();
      });


      // 현재 해당하는 비디오만 보여줌


      $('.album_vid li').removeClass('on');


      $('.album_vid li').eq(album_index).addClass('on');

    }










    // 기존 가운데에 있던 리스트의 on클래스 제거후

    $('.album_list li').removeClass();


    // 새로 가운데로 오게 될 리스트에 on클래스를 줌

    // $('.album_list li').eq(ac + 1).addClass('on');

    $(this).addClass('on');


    $('.album_click li').removeClass();

    $('.album_click li').eq(album_index).addClass('on');








    // 기존 인덱스와 누른 인덱스가 다를때

    if (album_origin !== album_index) {

      $('.album_click li .play').find('i:nth-child(2)').removeClass('on');

      $('.album_click li .play').find('i:nth-child(1)').addClass('on');


      $('.album_play .play_buttons li').eq(1).trigger('click')

    }












  })




















  // 동영상을 누를시 다시 영상이 없어짐

  $('.album_vid').click(function () {


    $('.album_vid').addClass('hidden');

    $('.album_list').removeClass('hidden');





  })

















  // 앨범 리스트에서의 재생/멈춤


  $('.album_click li span').click(function (e) {

    // 부모요소의 이벤트 버블링을 막음

    // 부모 클래스를 클릭했을 때 
    // 앨범 이름을 클릭하면 해당 부분의 재생 표시가 나고
    // 나머지 이름들은 정지 표시가 나는 이벤트와 충돌함

    e.stopPropagation();

    // 클릭한 리스트가 on클래스가 존재할경우 
    // 리스트에 있는 아이콘에 onclass를 토글함(재생 및 정지)

    if ($(this).parent('li').hasClass('on')) {

      $(this).find('i').toggleClass('on');

    }




  })











  // 앨범별 기본 재생시간 




  setInterval(function () {


    // 분
    let minutes = Math.floor($('.album_vid li.on video').get(0).duration / 60);


    // 초
    let seconds = Math.floor($('.album_vid li.on video').get(0).duration % 60);


    // 표시할 분
    let minutesTxt = 0;


    // 표시할 초
    let secondsTxt = 0;



    // 분이 10 미만일때 앞에 0붙이기

    if (minutes < 10) {

      minutesTxt = '0' + minutes;

    }


    // 그외는 그대로 표시

    else {

      minutesTxt = minutes;

    }


    // 초가 10 미만일때 앞에 0붙이기

    if (seconds < 10) {

      secondsTxt = '0' + seconds;

    }

    // 그외는 그대로 표시

    else {

      secondsTxt = seconds;

    }



    // 분, 초 표시

    $('.full_minutes').text(minutesTxt);


    $('.full_seconds').text(secondsTxt);

















    // 분
    let minutesPlay = Math.floor($('.album_vid li.on video').get(0).currentTime / 60);


    // 초
    let secondsPlay = Math.floor($('.album_vid li.on video').get(0).currentTime % 60);


    // 표시할 분
    let minutesTxtPlay = 0;


    // 표시할 초
    let secondsTxtPlay = 0;



    // 분이 10 미만일때 앞에 0붙이기

    if (minutesPlay < 10) {

      minutesTxtPlay = '0' + minutesPlay;

    }


    // 그외는 그대로 표시

    else {

      minutesTxtPlay = minutesPlay;

    }


    // 초가 10 미만일때 앞에 0붙이기

    if (secondsPlay < 10) {

      secondsTxtPlay = '0' + secondsPlay;

    }

    // 그외는 그대로 표시

    else {

      secondsTxtPlay = secondsPlay;

    }








    // 분, 초 표시

    $('.this_minutes').text(minutesTxtPlay);


    $('.this_seconds').text(secondsTxtPlay);












  }, 500)
































































  // 포토 설정










  // 사진 개수 지정





  const photoNumber1 = $('.all_photo_list .photo_list1>ul:nth-child(1) li').length;


  const photoNumber2 = $('.all_photo_list .photo_list2>ul:nth-child(1) li').length;


  const photoNumber3 = $('.all_photo_list .photo_list3>ul:nth-child(1) li').length;







  // 각 리스트별 사진 넣기



  for (let listPhoto1 = 0; listPhoto1 < photoNumber1; listPhoto1++) {

    $('.all_photo_list .photo_list1>ul:nth-child(1) li').eq(listPhoto1).css({ 'background-image': `url(img/active/activity${listPhoto1}.jpg)` });


    $('.all_photo_list .photo_list1>ul:nth-child(2) li').eq(listPhoto1).css({ 'background-image': `url(img/active/activity${listPhoto1}.jpg)` });

  }



  for (let listPhoto2 = 0; listPhoto2 < photoNumber2; listPhoto2++) {

    $('.all_photo_list .photo_list2>ul:nth-child(1) li').eq(listPhoto2).css({ 'background-image': `url(img/daily/daily${listPhoto2}.jpg)` });


    $('.all_photo_list .photo_list2>ul:nth-child(2) li').eq(listPhoto2).css({ 'background-image': `url(img/daily/daily${listPhoto2}.jpg)` });

  }




  for (let listPhoto3 = 0; listPhoto3 < photoNumber3; listPhoto3++) {

    $('.all_photo_list .photo_list3>ul:nth-child(1) li').eq(listPhoto3).css({ 'background-image': `url(img/pictorial/pictorial${listPhoto3}.jpg)` });


    $('.all_photo_list .photo_list3>ul:nth-child(2) li').eq(listPhoto3).css({ 'background-image': `url(img/pictorial/pictorial${listPhoto3}.jpg)` });

  }





  // 포토 리스트에 마우스를 갖다대면



  $('.all_photo_list .photo_list>ul').mouseenter(function () {



    // 애니메이션 멈춤

    $('.all_photo_list .photo_list>ul:nth-child(1)').css({ 'animation-play-state': 'paused' });

    $('.all_photo_list .photo_list>ul:nth-child(2)').css({ 'animation-play-state': 'paused' });


  })





  // 포토 리스트에 마우스를 떼면



  $('.all_photo_list .photo_list>ul').mouseleave(function () {



    // 애니메이션 재생

    $('.all_photo_list .photo_list>ul:nth-child(1)').css({ 'animation': 'infinite1 60s infinite linear' });

    $('.all_photo_list .photo_list>ul:nth-child(2)').css({ 'animation': 'infinite2 60s infinite linear' });


  })





  // 포토 리스트들 중 하나에 마우스를 갖다대면


  $('.all_photo_list .photo_list>ul li').mouseenter(function () {




    // 리스트들 모두 블러


    $('.all_photo_list .photo_list>ul li').addClass('blur');


    // 갖다댄 곳은 블러 x


    $(this).removeClass('blur');

  })





  // 포토 리스트들 중 하나에 마우스를 떼면


  $('.all_photo_list .photo_list>ul li').mouseleave(function () {




    // 리스트들 블러 해제


    $('.all_photo_list .photo_list>ul li').removeClass('blur');



  })










  // 포토 주제 버튼을 클릭하게 되면



  $('.photo_buttons li').click(function () {


    // 전체 버튼에 on클래스를 빼고

    $('.photo_buttons li').removeClass('on');

    // 클릭한 버튼에 on클래스를 줌

    $(this).addClass('on');

    // 클릭한 버튼의 인덱스 값을 구하고

    let photoBtn = $(this).index();


    // 포토리스트를 모두 숨긴후에 클릭한 버튼의 인덱스 값의 리스트만 보여줌

    $('.all_photo_list .photo_list').removeClass('on');

    $('.all_photo_list .photo_list').eq(photoBtn).addClass('on');


  })































  // 리스트의 갯수 선언

  const liNum1 = $('.back_signiture>li ul li').length;

  // 갯수에 따라 리스트의 width값을 담을 배열 생성

  let liWds1 = [];

  // for문을 통해 각 배열에 리스트의 길이를 담음

  for (let liWd1 = 0; liWd1 < liNum1; liWd1++) {


    // 리스트값 + 양쪽 마진

    liWds1[liWd1] = $('.back_signiture>li ul li').eq(liWd1).width() + 80;



  }



  // 초기 width값 설정

  let backWd1 = 0;



  // 배열에 담았던 길이값을 전부 더함

  backWd1 += liWds1.forEach(wid1 => {

    wid1;

  });






  // 더한 값을 back_signiture width값에 적용

  $('.back_signiture>li').width(backWd1);


















  // 리스트의 갯수 선언

  const liNum2 = $('.front_signiture>li ul li').length;

  // 갯수에 따라 리스트의 width값을 담을 배열 생성

  let liWds2 = [];

  // for문을 통해 각 배열에 리스트의 길이를 담음

  for (let liWd2 = 0; liWd2 < liNum2; liWd2++) {


    liWds2[liWd2] = $('.front_signiture>li ul li').eq(liWd2).width() + 40;


  }


  // 초기 width값 설정

  let backWd2 = 0;


  // 배열에 담았던 길이값을 전부 더함

  backWd2 += liWds2.forEach(wid2 => {

    wid2;

  });


  // 더한 값을 back_signiture width값에 적용

  $('.front_signiture>li').width(backWd2);
















  // 포토 리스트를 클릭하면 강조 화면 나옴


  $('.all_photo_list .photo_list>ul li').click(function () {

    $('.photo_focus').removeClass('off');

    let photo = $(this).css('background-image');

    $('.big_photo').css({ 'background-image': photo });

  })



  // 강조화면이 등장한 상태에서 마우스를 움직이면 포토가 상하좌우로 기울어짐


  $('.photo_focus').mousemove(function (e) {

    let x = e.pageX;

    let y = e.pageY;


    $('.big_photo').css({ 'transform': `rotateY(${x / 70 - 5}deg) rotateX(${y / 70 - 5}deg)` });


  })






  // 강조화면을 클릭하면 강조 화면 없어짐


  $('.photo_focus').click(function () {

    $(this).addClass('off');

  })











})