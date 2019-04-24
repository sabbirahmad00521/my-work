jQuery(document).ready(function ($) {

   // Owl Carousel Slider
   $('.slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 10000,
      dots: true,
      smartSpeed: 1000,
      dragEndSpeed: 1000,
      fluidSpeed: 1000,
      autoplaySpeed: 1000,
      responsiveClass: true,
   });

   $('.item-slider').owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      autoplayTimeout: 7000,
      dots: true,
      margin: 80,
      nav: true,
      navText: ["<img src='assets/img/pervious-button.png'>", "<img src='assets/img/next-button.png'>"],
      smartSpeed: 1000,
      dragEndSpeed: 1000,
      fluidSpeed: 1000,
      autoplaySpeed: 1000,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
         },
         400: {
            items: 2,
            margin: 40,
         },
         768: {
            items: 3,
         },
         1200: {
            items: 4,
         }
      }
   });

   // Menu Scripts
   jQuery("a.responsive-menu").click(function () {
      jQuery("ul.menu").fadeToggle();
      return false;
   });


   //   Scrool to top Script
   jQuery(".scrool-to-top").click(function () {
      jQuery("html").animate({
         'scrollTop': '0'
      }, 500);
      return false;
   });

   jQuery(window).scroll(function () {
      var distenceFromTop = jQuery(window).scrollTop();
      if (distenceFromTop > 200) {
         jQuery(".scrool-to-top").fadeIn();
      } else {
         jQuery(".scrool-to-top").fadeOut();
      };
   });

});
