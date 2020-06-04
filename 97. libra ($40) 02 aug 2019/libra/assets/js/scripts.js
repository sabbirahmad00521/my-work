jQuery(document).ready(function ($) {

    
   jQuery("a.responsive-menu").click(function () {
      jQuery("ul.menu").fadeToggle();
      return false;
  });
  jQuery(window).resize(function () {
      var windowWidth = jQuery(window).width();
      if (windowWidth > 991) {
          jQuery("ul.menu").css({
              "display": "block"
          });
          $('.responsive-menu').removeClass('change');
      } else {
          jQuery("ul.menu").css({
              "display": "none"
          });

      }
  });


});
function myFunction(x) {
   x.classList.toggle("change");
 }