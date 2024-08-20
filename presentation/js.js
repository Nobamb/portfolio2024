$(document).ready(function () {

  const typingTxt = ['W', 'e', 'l', 'c', 'o', 'm', 'e'];

  // typingTxt.map((ele)=>setTimeout(()=>{

  //   $('h1').text(ele);

  // },1000));


  const typingLength = typingTxt.length;


  let textThis = [];

  for (let i = 0; i < typingLength; i++) {




    textThis[i] = typingTxt[i];



    let typing = '';
    textThis.map((ele) => typing += ele);


    setTimeout(() => {

      $('h1').text(typing);



    }, 300 * i)

  }




  setTimeout(() => {

    $('.main').show();



  }, 300 * (typingLength));



  
  setTimeout(() => {

    
    $('h1').addClass('hide');


    $('.main').addClass('start');


  }, 300 * (typingLength + 1));



})