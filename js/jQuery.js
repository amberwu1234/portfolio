$(function () {
  
  $(window).scroll(function () {
    let nowPosition = $(window).scrollTop(); /*目前視窗與上方的距離*/
    let winHeight = $(window).height(); /*目前裝置的高度*/


    if(winHeight * 2 - 10 >= nowPosition && nowPosition >= winHeight ){
      $('.navMain a').addClass('active');
      $('.headerMain').addClass('active');
    }else{
      $('.navMain a').removeClass('active');
      $('.headerMain').removeClass('active');
    }

  });



  $('.resume .rocket').click(function(){
    $('.resume .rocket').addClass('active');
    $('.timeLine li:last-child .txt').addClass('active');

    $('.timeLine li:first-child .timeNode').addClass('active');
  })

  


});





