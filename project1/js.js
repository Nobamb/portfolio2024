$(document).ready(function () {










  $('.mobileMenu').click(function () {

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
    $('.galleryarea .map ul li').css({ 'filter': 'blur(0px)' });


  })




  $('.galleryarea .map ul li').click(function () {

    $('.galleryarea .map ul').css({ 'z-index': 0 });

    $(this).parents('ul').css({ 'z-index': 600 });

    $('.galleryarea .map ul li').removeClass('on');

    $('.galleryarea .map ul li').css({ 'filter': 'blur(3px)' });

    $(this).addClass('on');

    $(this).css({ 'filter': 'blur(0px)' });



  })





  // 예약하기 버튼 클릭시 버튼 스타일 및 내용 변경


  $('.reserveMain .reserveInforZone .inforBtn li').click(function () {

    let resI = $(this).index();

    $('.reserveMain .reserveInforZone .inforBtn li').removeClass();

    $(this).addClass('on');



    $('.reserveMain .reserveInforZone .inforTxt>li').removeClass();

    $('.reserveMain .reserveInforZone .inforTxt>li').eq(resI).addClass('on');


  })









  // 날짜 선택확인용 변수
  let dateChoice;



  // 예약하기 관련 버튼 클릭시 버튼 스타일 및 내용 변경


  $('.reserveMain .reserveCheck .reserveAboutBtn li').click(function () {


    // 클릭한 리스트의 인덱스 가져오기
    let resBtnI = $(this).index();




    // 인덱스 확인해서 효과 부여
    switch (resBtnI) {



      // 예약하기 버튼
      case 0:


        // 날짜 선택이 되었을 때 예약 완료 알림
        if (dateChoice) {


          const resConf = $('.reserveCheck .checkAll .checkMore .total').text();
          alert(`예약이 완료되었습니다.
          ${resConf}`);


        }




        // 날짜 선택이 되지 않았을 때 날짜 선택 알림
        else {

          alert('날짜를 선택해주세요.')

        }



        break;




      // 찜하기 버튼
      case 1:

        $(this).toggleClass('on');


        break;




    }


  })







  let applyHeight;



  // 프로그램 영역 내의 신청안내 버튼 클릭시 


  $('.apply .applytxt a').click(function (e) {
    e.preventDefault();


    // 초기 active효과 제거
    $('.ui-state-highlight').removeClass('ui-state-active');


    // 반응형 크기에 의해 헤더 높이값이 변화해도 특정 위치값에 위치하도록 
    // setinterval 적용

    applyHeight = setInterval(() => {


      // 푸터의 위치값 지정
      const footerTop = $('.reservearea').height() + $('header').height();


      // 예약하기의 위치값(헤더값만큼 떨어트림)


      $('.reservearea').css({ 'top': $('header').height() });


      // 푸터의 위치값은 헤더 높이 + 신청안내 높이 만큼 떨어트림
      $('footer').css({ 'position': 'absolute', 'top': footerTop });

    }, 100);



    // 스크롤 최상단으로 보냄
    $(window).scrollTop(0);




    // 다른 섹션들은 모두 숨기고
    $('section').hide();


    // 예약하기는 보여짐
    $('.reservearea').show();










    // 프로그램에 해당하는 이미지 변경

    const style = $('.programBox .gallery .imgBox li.on').css('background-image');




    $('.reserveMain .reserveInfor>.photo').css({ 'background-image': style });











    const applyTxt1 = $('.apply .applytxt li.on p').eq(0).text();

    const applyTxt2 = $('.apply .applytxt li.on p').eq(1).text();


    // 기존 내용 모두 지운 후에

    $('.reserveMain .reserveInforZone .inforTxt>li:first-child p').remove()


    // 새로운 내용 추가

    $('.reserveMain .reserveInforZone .inforTxt>li:first-child').append(`<p>${applyTxt1}</p>`);


    $('.reserveMain .reserveInforZone .inforTxt>li:first-child').append(`<p>${applyTxt2}</p>`);






    // 제목을 가져옴

    const title = $('.applyTitle li.on h2 p').text();



    // 예약하기 제목 초기화 및
    $('.reserveMain h2').text();


    // 가져온 제목을 예약하기 제목으로 사용
    $('.reserveMain h2').text(title);


    $('.reserveMain .total p').eq(0).find('span').text();

    $('.reserveMain .total p').eq(0).find('span').text(title);





    // 리뷰 목록

    const review = [['정말 유익한 시간이었네요. 나중에 또 해보고 싶어요', '이거 하느라 시간가는줄도 몰랐네 ㅋㅋㅋ 엄청 재밌었어요!'],
    ['이거 하면서 여러가지 만들어봤는데 너무 이뻐요!', '다음에도 꼭 이 프로그램 해보고싶어요, 최고!'],
    ['이 프로그램을 통해서 많은 무궁화 정보를 알게 되어 좋았어요', '엄청 좋았어요, 제일 좋았던 프로그램이에요.']]


    // 이름 목록
    const name = [['홍길동', '김두한'],
    ['정진영', '이정재'],
    ['조병옥', '김영인']]


    // 질문 목록

    const question = [['식재는 주로 어떤 품종의 식재를 사용하나요?', '식재 관리를 할 때 주의사항이 뭔가요?'],
    ['주로 어떤것을 만드나요?', '실제 무궁화를 사용해서 만드나요?'],
    ['교육 내용은 어떤 것을 배우게 되나요?', '프로그램 도중에 퀴즈가 있나요?']];


    // 답변 목록

    const answer = [[`저희는 주로 '원술랑', '남원' 품종의 무궁화를 사용하고 있습니다.`, '식재를 하실 때 간격을 좁게 하시고 <br>다른 가로수 밑에 식재하지 않는게 좋아요.'],
    ['무궁화와 관련된 다양한 작품들을 만듭니다.', '작품에 따라서 진짜 무궁화를 사용해 만들거나<br>무궁화와 비슷한 작품을 만듭니다.'],
    ['무궁화와 관련된 역사 및<br>무궁화의 특징을 배웁니다.', '네, 퀴즈가 있고 정답을 맞추시면<br>소정의 상품을 드립니다.']];



    // 프로그램 개수
    const proLiNum = $('.programBox .gallery .imgBox li').length;


    // 프로그램 전체 기준으로 확인해서 그 순서에 맞는 리스트가 on클래스일때, 그 순서에 맞는 리뷰를 불러옴

    for (let pro = 0; pro < proLiNum; pro++) {
      if ($('.programBox .gallery .imgBox li').eq(pro).hasClass('on')) {

        // 리뷰 내용   
        $('.reserveMain .reserveInforZone .inforTxt>li:nth-child(2) ul li').eq(0).find('p').text(review[pro][0]);
        $('.reserveMain .reserveInforZone .inforTxt>li:nth-child(2) ul li').eq(1).find('p').text(review[pro][1]);

        // 리뷰 이름
        $('.reserveMain .reserveInforZone .inforTxt>li:nth-child(2) ul li').eq(0).find('span').text(name[pro][0]);
        $('.reserveMain .reserveInforZone .inforTxt>li:nth-child(2) ul li').eq(1).find('span').text(name[pro][1]);



        // 질문 
        $('.reserveMain .reserveInforZone .inforTxt>li:nth-child(3) ul li').eq(0).find('p').text(question[pro][0]);
        $('.reserveMain .reserveInforZone .inforTxt>li:nth-child(3) ul li').eq(1).find('p').text(question[pro][1]);

        // 이름
        $('.reserveMain .reserveInforZone .inforTxt>li:nth-child(3) ul li').eq(0).find('span').text(name[pro][0]);
        $('.reserveMain .reserveInforZone .inforTxt>li:nth-child(3) ul li').eq(1).find('span').text(name[pro][1]);

        // 답변
        $('.reserveMain .reserveInforZone .inforTxt>li:nth-child(3) ul li').eq(0).find('div').html(answer[pro][0]);
        $('.reserveMain .reserveInforZone .inforTxt>li:nth-child(3) ul li').eq(1).find('div').html(answer[pro][1]);
      }


    }



















  })









  // 달력 클릭시







  // 해당 날짜를 total에 불러옴

  $("#datepicker").datepicker({

    onSelect: function (dateText, inst) {


      // 날짜 선택이 완료됨
      dateChoice = 1;

      $('.reserveMain .total p').eq(1).find('span').text();
      $('.reserveMain .total p').eq(1).find('span').text(dateText);


      let selectDate = $('#datepicker').datepicker('getDate');


      // 현재 날짜

      const newDate = new Date();

      const todayY = newDate.getYear() + 1900;

      const todayM = newDate.getMonth() + 1;

      const todayD = newDate.getDate();



      // 예약 날짜


      // 년
      let selectYear = selectDate.getYear() + 1900;


      // 월
      let selectMon = selectDate.getMonth() + 1;


      // 일
      let selectDay = selectDate.getDate();





      // 현재 날짜 이전의 날짜로 예약시
      // 연도가 적거나, 연도는 같지만 월이 더 적거나, 월까지는 같지만 일에서 차이가 날때


      if (todayY > selectYear || ((todayY === selectYear) && (todayM > selectMon)) || ((todayY === selectYear) && (todayM === selectMon) && (todayD >= selectDay))) {

        console.log(todayY >= selectYear);
        console.log(((todayY === selectYear) && (todayM >= selectMon)));
        console.log(((todayY === selectYear) && (todayM === selectMon) && (todayD >= selectDay)));

        // 날짜 선택이 미완료됨
        dateChoice = null;

        alert('현재 날짜 이후의 날짜를 선택해주세요.');

        $('.reserveMain .total p').eq(1).find('span').text();
        $('.reserveMain .total p').eq(1).find('span').text('날짜를 선택해주세요.');


      }





    }





  });







  /** 이 함수는 인원수의 숫자를 초기값으로 변경시킨다.*/
  function reNum() {

    $('.reserveCheck .checkAll .checkMore .people form input').val(1);

    num = 1;


    $('.reserveCheck .checkAll .checkMore .total p').eq(2).find('span').text(num);

    $('.reserveCheck .checkAll .checkMore .people p span').text(num);



  }








  // 예약 인원 변수
  let num;



  // 예약인원수를 변경했을 때


  $('.reserveCheck .checkAll .checkMore .people form input').change(function () {


    // 변경된 수 만큼을 변수에 넣음
    num = $(this).val();


    // 변수를 표시되는 인원수에 대입

    $('.reserveCheck .checkAll .checkMore .total p').eq(2).find('span').text(num);

    $('.reserveCheck .checkAll .checkMore .people p span').text(num);


    // 1보다 작거나 10보다 크거나 정수가 아닐때
    if (!Number.isInteger(Number(num)) || num > 10 || num < 1) {
      alert('유효한 숫자만 입력할 수 있습니다.');

      reNum();

    }




  })







  // 닫기버튼을 클릭시

  $('.reservearea .closed').click(function () {

    reNum();


    // 높이값 비활성화
    clearInterval(applyHeight);

    // 다른 프로그램 입장시 다시 선택하게 함


    $('.reserveMain .total p').eq(1).find('span').text();
    $('.reserveMain .total p').eq(1).find('span').text('날짜를 선택해주세요.');



    // 초기 active효과 제거
    $('a').removeClass('ui-state-active');


    // 날짜 초기화

    dateChoice = null;



    // 스크롤 최상단으로 보냄
    $(window).scrollTop(0);


    // 다른 섹션들은 모두 보여주고
    $('section').show();


    // 예약하기는 숨김
    $('.reservearea').hide();




    // 푸터의 위치값은 원래대로 되돌림
    $('footer').css({ 'position': 'relative', 'top': 0 });


  })





  $('.util .btnarea .btn2').click(function (e) {

    e.preventDefault();

    $('.scaleUpTxt').toggleClass('on');

  })


  $(window).mousemove(function (e) {


    let x = e.pageX;

    let y = e.pageY;




    $('.scaleUpTxt').css({ 'left': -20 + x, 'top': -20 + y });

    $('.speakTxt').css({ 'left': -30 + x, 'top': -30 + y });

  })






  $(window).mouseup(function () {


    if ($('.scaleUpTxt').hasClass('on')) {

      // 글자 추출
      const selectedText = window.getSelection().toString();


      console.log(selectedText.length);

      if (selectedText.length > 0) {

        $('.scaleUpTxt .txt').addClass('scale');

        $('.scaleUpTxt .txt').text(selectedText);


        setTimeout(() => {

          $('.scaleUpTxt .txt').removeClass('scale');

          $('.scaleUpTxt .txt').html('글자를 보고싶으시다면 드래그해주세요<br>그만 보고 싶으시다면 버튼을 다시 눌러주세요');
        }, 3000)



      }


    }





    function speak(text, opt_prop) {

      window.speechSynthesis.cancel() // 현재 읽고있다면 초기화

      const prop = opt_prop || {}

      const speechMsg = new SpeechSynthesisUtterance()
      speechMsg.rate = prop.rate || 1 // 속도: 0.1 ~ 10      
      speechMsg.pitch = prop.pitch || 1 // 음높이: 0 ~ 2
      speechMsg.lang = "ko-KR"
      speechMsg.text = text

      // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
      window.speechSynthesis.speak(speechMsg)
    }

    if ($('.speakTxt').hasClass('on')) {



      // 글자 추출
      const selectedText2 = window.getSelection().toString();


      if (selectedText2.length > 0) {


        alert(selectedText2)

        speak(selectedText2, {

          rate: 1,
          pitch: 1.2

        })







      }


    }














  })








  $('.util .btnarea .btn3').click(function (e) {

    e.preventDefault();

    $('.speakTxt').toggleClass('on');

  })


























})