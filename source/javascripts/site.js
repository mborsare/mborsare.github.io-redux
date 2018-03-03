// This is where it all goes :)

$(document).ready(function() {

  $('.introduction').hover(function() {
    $(this).toggleClass('revealed');

    $(this).on('mousemove', function(e) {
      $('.follow-cursor').css({
        left: e.pageX,
        top: e.pageY
      });
    });

  });
});
