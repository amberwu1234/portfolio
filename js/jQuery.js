$(function () {
  $(window).scroll(function () {
    let nowPosition = $(window).scrollTop(); /*目前視窗與上方的距離*/
    let winHeight = $(window).height(); /*目前裝置的高度*/
    let resumePosition = $('.resume').offset().top;
    let resumeHeight = $('.resume').height();

    console.log(resumePosition)

    if (nowPosition > resumePosition + resumeHeight) {
      $('.resume').removeClass('active');
    } else if (nowPosition > resumePosition) {
      $('.resume').addClass('active');
      // $('.scroll').animate({
      //   height: winHeight + 500,
      // },0,);

    } else {
      $('.resume').removeClass('active');
    }
  });
});







// $(function () {
//   const $resumeElm = $('.resume');
//   const resumePosition = $resumeElm.offset().top;

//   $(window).scroll(function () {
//     const nowPosition = $(window).scrollTop(); /*目前視窗與上方的距離*/
//     const winHeight = $(window).height(); /*目前裝置的高度*/

//     if (nowPosition > resumePosition + $resumeElm.height()) {
//       $resumeElm.removeClass('active');

//     } else if (nowPosition > resumePosition) {
//         $resumeElm.addClass('active');
//         $('.scroll').animate({
//           height: winHeight + 500 + 120 + 120,
//           }, 0,);

//     } else {
//       $resumeElm.removeClass('active');
//     }
//   });
// });
