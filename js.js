



$(document).ready(function () {











  /** 이 함수는 글자를 타이핑시켜주는 이펙트를 구현시켜준다. 
   첫번째 파라미터 : 구현시킬 글자, 
   두번째 파라미터 : 옮길 글자,
   세번째 파라미터 : 타이핑 속도
  */


  function txtTypeEffect(txt, typeToTxt, time) {

    // 글자를 배열로 지정
    const typingTxt = txt.split('');

    // 글자 길이 선언
    const typingLength = typingTxt.length;


    // 새로 넣을 배열
    let textThis = [];

    // for문으로 글자 길이만큼
    for (let i = 0; i < typingLength; i++) {



      // 새로 넣을 빈 배열에 기존 글자의 배열을 하나하나씩 넣음
      textThis[i] = typingTxt[i];


      // 부를 글자 지정,
      let typing = '';

      // 부를 글자에 새로 넣은 배열의 값을 대입
      textThis.map((ele) => typing += ele);




      // 0.3초마다 글자가 하나씩 들어가게 되어 타이핑 효과를 냄
      setTimeout(() => {

        $(typeToTxt).text(typing);



      }, time * i)

    }



  }




  const welcome = 'Welcome';


  const introLen = welcome.length;



  console.log(introLen);


  txtTypeEffect(welcome, $('h1'), 300);









  // // 타이핑 글자
  // const welcome = 'Welcome';



  // // 글자를 배열로 지정
  // const typingTxt = welcome.split('');


  // // 글자 길이 선언
  // const typingLength = typingTxt.length;



  // // 새로 넣을 배열
  // let textThis = [];




  // // for문으로 글자 길이만큼
  // for (let i = 0; i < typingLength; i++) {



  //   // 새로 넣을 빈 배열에 기존 글자의 배열을 하나하나씩 넣음
  //   textThis[i] = typingTxt[i];


  //   // 부를 글자 지정,
  //   let typing = '';

  //   // 부를 글자에 새로 넣은 배열의 값을 대입
  //   textThis.map((ele) => typing += ele);




  //   // 0.3초마다 글자가 하나씩 들어가게 되어 타이핑 효과를 냄
  //   setTimeout(() => {

  //     $('h1').text(typing);



  //   }, 300 * i)

  // }






  // 글자 타이핑 완료후, 컨텐츠 영역 표시 및 커서를 컨텐츠 영역 오른쪽에 위치

  setTimeout(() => {

    $('.contents').show();

    $('.cursor').css({ 'right': '-60px' });

  }, 300 * introLen);







  // 컨텐츠 영역까지 표시 후, 컨텐츠영역을 제외한
  // 나머지 요소들 가리고 중앙에 배치

  setTimeout(() => {


    $('h1').fadeOut();

    $('.cursor').fadeOut();


    $('.contents').addClass('center');


  }, 300 * (introLen + 1));













  // 중앙에 배치되었을 경우 on클래스 부여해서
  // 크기가 점점 커지게 함


  let mainCloseUp = setInterval(() => {

    if ($('.contents').hasClass('center')) {


      $('.contents').addClass('on');

      clearInterval(mainCloseUp)

    }



  }, 1000);








  // 웹사이트 사진 리스트 목록에 on클래스를 줌
  // 추후에 웹사이트 모습을 하나씩 보여주기 위함


  let webPicOn = setInterval(() => {


    if ($('.contents').hasClass('on')) {


      $(this).find('.webPic').addClass('on');


      clearInterval(webPicOn);

    }


  }, 1000)















  // 웹사이트 사진 리스트들에 각각의 사진 지정


  const webNum = $('.webPic li').length;


  for (let web = 0; web < webNum; web++) {

    $('.webPic li').eq(web).css({ 'background-image': `url(img/web${web + 1}.png)` });

    $('.contents>.main .project .webList li').eq(web).find('.sumbnail').css({ 'background-image': `url(img/web${web + 1}.png)` });

  }







  // webcount(사진이 하나씩 내려오게 하기 위한 초기 변수)



  let webCount = 0;


  let webChange = setInterval(() => {




    // 웹사이트 사진 목록이 on클래스를 받을 때

    if ($('.webPic').hasClass('on')) {




      // 0.7초마다 1씩 증가

      webCount++;


      // 리스트들은 0.7초마다 0.5초동안 투명도 변경

      $('.webPic li').animate({ 'opacity': `${0.3 * webCount}` }, 500);


      // 처음리스트가 내려올경우

      if (webCount === 1) {

        // 처음 리스트만 내려오게 지정

        $('.webPic li').eq(webCount - 1).css({ 'bottom': '100%' }).animate({ 'bottom': '0%' });
      }

      else {

        // 그외에는 다음리스트를 내리면서 리스트가 내려오면서 보임

        $('.webPic li').eq(webCount - 2).css({ 'bottom': 0 }).animate({ 'bottom': '-100%' });
        $('.webPic li').eq(webCount - 1).css({ 'bottom': '100%' }).animate({ 'bottom': '0%' });
      }


      // 3초후에 컨텐츠 영역이 보이게 show 클래스를 줌

      // webchange는 종료

      setTimeout(() => {


        $('.contents').addClass('show');



        clearInterval(webChange);

      }, 3000);


    }



  }, 700)









  const titleArr = ['jeong seung hoon', 'portfolio'];






  let lineChange;


  let titleTyping = setInterval(() => {




    if ($('.contents').hasClass('show')) {




      txtTypeEffect(titleArr[0], $('.contents>.main .project>h3 span:nth-child(1)'), 50)


      setTimeout(() => {

        lineChange = true;

      }, titleArr[0].length * 50)



      clearInterval(titleTyping)






    }



  }, 1000);










  let titleChangeTyping = setInterval(() => {



    if (lineChange) {

      txtTypeEffect(titleArr[1], $('.contents>.main .project>h3 span:nth-child(2)'), 50)


      clearInterval(titleChangeTyping)

    }





  }, 1000)


















































  // nav 리스트 클릭시에 




  $('.contents>nav ul li').click(function () {

    let I = $(this).index();



    // 기존 리스트들 클래스 제거
    $('.contents>nav ul li').removeClass();


    // 현재 클래스 on
    $(this).addClass('on');



    // 타이틀 상수로 클릭한 리스트의 텍스트 받아옴
    const title = $(this).text();


    // 컨텐츠 제목 영역 접히는 연출(0.5초동안)

    $('.contents>h2').addClass('fold');



    // 0.4초 후에 다시 되돌아오면서 타이틀 상수에 있는 텍스트를 제목으로 받아옴
    setTimeout(() => {
      $('.contents>h2').removeClass('fold');
      $('.contents>h2').text(title);

    }, 400);



  })




  // 프로필 영역의 텍스트 클릭시,
  // nav의 프로필 리스트 클릭처리

  $('.contents>.main .profile h3').click(function () {

    $('.contents>nav ul li').eq(1).trigger('click');

  })




  // 프로젝트 영역의 텍스트 클릭시,
  // nav의 프로젝트 리스트 클릭처리





  $('.contents>.main .project h4').click(function () {

    $('.contents>nav ul li').eq(2).trigger('click');


  })















  // main 버튼 클릭시
  // 모든 컨텐츠 영역 제자리

  $('.contents>nav ul li').eq(0).click(function () {

    $('.contents .main>div').removeClass('on');
    $('.contents .main>div').removeClass('off');


    $('.contents>.main .project .webList li').removeClass('on');
    $('.contents>.main .profile>.mainProfile').fadeOut();
  })


  // 프로필 버튼 클릭시
  // 컨텐츠 영역 초기화 후에 프로필 영역 등장,
  // 프로젝트 영역 퇴장

  $('.contents>nav ul li').eq(1).click(function () {

    $('.contents .main>div').removeClass('on');
    $('.contents .main>div').removeClass('off');
    $('.contents .main>.profile').addClass('on');
    $('.contents .main>.project').addClass('off');

    $('.contents>.main .project .webList li').removeClass('on');

    $('.contents>.main .profile>.mainProfile').fadeIn();


  })


  // 프로젝트 버튼 클릭시
  // 컨텐츠 영역 초기화 후에 프로젝트 영역 등장,
  // 프로필 영역 퇴장

  $('.contents>nav ul li').eq(2).click(function () {
    $('.contents .main>div').removeClass('on');
    $('.contents .main>div').removeClass('off');
    $('.contents .main>.project').addClass('on');
    $('.contents .main>.profile').addClass('off');



    const projectLen = $('.contents>.main .project .webList li').length;


    for (let p = 0; p < projectLen; p++) {


      setTimeout(() => {

        $('.contents>.main .project .webList li').eq(p).addClass('on');


      }, (p) * 500);

    }





    $('.contents>.main .profile>.mainProfile').fadeOut();
  })




  // 스테이터스 지정

  const status = [80, 85, 90, 90, 80];







  // 페이지 버튼 클릭시 프로필 다음 화면 이동

  $('.contents>.main .profile>.mainProfile .page').click(function () {


    $('.contents>.main .profile>.mainProfile>div').toggleClass('on');

    if ($('.contents>.main .profile>.mainProfile>.status').hasClass('on')) {

      // for(let s = 0; s < status.length; s++){

      //   setTimeout(() => {
      //     $('.contents>.main .profile>.mainProfile>div>ul .skill li').eq(s).find('.mybar').stop().animate({'width':`${status[s]}%`},800);


      //   }, 300 * s);




      // }






      status.forEach((s, i) => {

        setTimeout(() => {
          $('.contents>.main .profile>.mainProfile>div>ul .skill li').eq(i).find('.mybar').stop().animate({ 'width': `${s}%` }, 800);

          $('.contents>.main .profile>.mainProfile>div>ul .skill li').find('h5').show();

          let count = 0;


          let persentCount = setInterval(() => {


            count++;

            if (count === s) {

              clearInterval(persentCount)

            }

            $('.contents>.main .profile>.mainProfile>div>ul .skill li').eq(i).find('h5').text(`${count}%`);


          }, 800 / s);





        }, 300 * i);

      });












    }



    else {

      for (let s = 0; s < status.length; s++) {


        $('.contents>.main .profile>.mainProfile>div>ul .skill li').eq(s).find('.mybar').stop().animate({ 'width': `0%` }, s * 100);


        $('.contents>.main .profile>.mainProfile>div>ul .skill li').find('.page').hide();
      }



    }




  })








  // 컨셉뷰 클릭시 컨셉뷰 화면 등장


  $('.contents>.main .project .webList li .txt .conceptBtn').click(function () {


    $('.concept_view').addClass('on');


    $('.concept_view').scrollTop(0);


    let conI = $(this).parents('li').index();


    $('.concept_view img').hide();


    $('.concept_view img').eq(conI).show();

  })






  $('.concept_view').click(function () {

    $(this).removeClass('on')

  })



})