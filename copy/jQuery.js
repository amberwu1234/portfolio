$(function () {
  $(window).scroll(function () {
    let nowPosition = $(window).scrollTop(); /*目前視窗與上方的距離*/
    let winHeight = $(window).height(); /*目前裝置的高度*/
    let resumePosition = $('.resume').offset().top;

    let switchTureFalse = true;



    if (nowPosition > resumePosition) {
      if (switchTureFalse) {
        $('.resume').addClass('active');
        $('.scroll').animate({ 
          height: winHeight + 500 + 120 + 120,
          }, 0,);
        switchTureFalse = false;
      }
       
    }else{
      $('.resume').removeClass('active');
      switchTureFalse = true;
    }
    
  });
});
