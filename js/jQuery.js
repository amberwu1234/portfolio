$(function () {
  $(window).scroll(function () {
    let nowPosition = $(window).scrollTop(); /*目前視窗與上方的距離*/
    let winHeight = $(window).height(); /*目前裝置的高度*/

    let resumeHeight = $('.resume').offset();/*此頁與整頁面上方的距離*/


    if(winHeight * 2 - 10 >= nowPosition && nowPosition >= winHeight ){
      $('.navMain a').addClass('active');
      $('.headerMain').addClass('active');
    }else{
      $('.navMain a').removeClass('active');
      $('.headerMain').removeClass('active');
    }


    if(nowPosition = resumeHeight){

    }

    console.log(nowPosition)
    console.log(resumeHeight)


  });



  


});





