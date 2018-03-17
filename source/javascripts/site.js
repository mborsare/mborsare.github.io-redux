// This is where it all goes :)

$(document).ready(function() {
  console.log('sup');

  var $root = $('html, body');
  $('a[href^="#"]').click(function () {
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
  });

  // $('.introduction').hover(function() {
  //   $(this).toggleClass('revealed');
  //
  //   $(this).on('mousemove', function(e) {
  //     $('.follow-cursor').css({
  //       left: e.pageX,
  //       top: e.pageY
  //     });
  //   });
  // });

});
