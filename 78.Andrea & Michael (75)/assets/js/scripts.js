jQuery(document).ready(function ($) {


   jQuery(window).scroll(function () {

      var distenceFromTop = jQuery(window).scrollTop();


      if (distenceFromTop > 30) {
         jQuery("header span ").css({
            'margin-top': '0px'
         });
         jQuery("header h1 > a").css({
            'font-size': '30px',
            'margin-bottom': '-10px',
         });
         jQuery("header").css({
            'padding-bottom': '10px',
         });
      } else {
         jQuery("header span ").css({
            'margin-top': '20px'
         });
         jQuery("header h1 > a").css({
            'font-size': '42px',
            'margin-bottom': '5px',
         });
         jQuery("header").css({
            'padding-bottom': '0px',
         });
      };


   });

});
