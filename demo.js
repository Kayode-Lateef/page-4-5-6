(function ($) {
  "use strict";
  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    // $('.collapse.in').toggleClass('in');
    // $(".logo").css("display", "block");
    if( $(".logo").css('visibility') == 'hidden')
    $(".logo").css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 5000);
    else
    $(".logo").css({opacity: 0.0, visibility: "hidden"}).animate({opacity: 1}, 2000);
  });
})(jQuery);

