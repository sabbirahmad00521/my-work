jQuery(document).ready(function ($) {

   // Owl Carousel

   $('.slider').owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      margin: 30,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
            nav: true
         },
         600: {
            items: 2,
            nav: false
         },
         1000: {
            items: 3,
            nav: true,
            loop: false
         }
      }
   });

   $('.service-slider').owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      margin: 10,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsiveClass: true,
      responsive: {
         0: {
            items: 3,
         },
         992: {
            margin: 25,
            items: 3,
         }
      }
   });

   $('.plant-slider').owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      margin: 5,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsiveClass: true,
      responsive: {
         0: {
            items: 3,
         },
         992: {
            margin: 25,
            items: 3,
         }
      }
   });
   $('.product-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsiveClass: true,

   });


   // Other Scripts
   jQuery("nav .responsive-menu").click(function () {
      jQuery("#menu").slideToggle();

      return false;
   });
   jQuery("#menu li.menu-1").click(function () {
      jQuery("#menu-1").slideToggle();

      return false;
   });
   jQuery("#menu li.menu-2").click(function () {
      jQuery("#menu-2").slideToggle();

      return false;
   });
   jQuery("#menu li.menu-3").click(function () {
      jQuery("#menu-3").slideToggle();

      return false;
   });
   jQuery("#menu li.menu-4").click(function () {
      jQuery("#menu-4").slideToggle();

      return false;
   });
   jQuery("#menu li.menu-5").click(function () {
      jQuery("#menu-5").slideToggle();

      return false;
   });

   jQuery("#menu li.menu-6").click(function () {
      jQuery("#menu-6").slideToggle();

      return false;
   });


   jQuery("#search").click(function () {
      jQuery("#input").fadeToggle();

      return false;
   });
   jQuery("#searchmb").click(function () {
      jQuery("#inputMobile").fadeToggle();

      return false;
   });

});
