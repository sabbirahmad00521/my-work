jQuery(document).ready(function ($) {

   // Owl Carousel
   /*
   $('.owl-carousel-class-name').owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      dots: true,
      margin: 15,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      smartSpeed: 1,
      dragEndSpeed: 1,
      fluidSpeed: 1,
      autoplaySpeed: 10,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
            nav: true
         },
         600: {
            items: 3,
            nav: false
         },
         1000: {
            items: 5,
            nav: true,
            loop: false
         }
      }
   });
   */

   // Other Scripts
   // menu
   jQuery("a.responsive-menu").click(function () {
      jQuery("ul.menu,.social-icons").fadeToggle();
      return false;
   });

   jQuery(window).resize(function () {
      var windowWidth = jQuery(window).width();
      if (windowWidth > 974) {
         jQuery("ul.menu,.social-icons").css({
            "display": "block"
         });
         $('.responsive-menu').removeClass('change');
      } else {
         jQuery("ul.menu,.social-icons").css({
            "display": "none"
         });

      }
   });


   // masonary
   var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer',
      gutter: 10
   });

   // layout Masonry after each image loads
   $grid.imagesLoaded().progress(function () {
      $grid.masonry();
   });



   $("[data-fancybox]").fancybox({
      buttons: [
         // "zoom",
         //"share",
         "slideShow",
         //"fullScreen",
         //"download",
         "thumbs",
         "close"
      ],
   });









});




$('input').focus(function () {
   $(this).parent().addClass('active');
   $('input').focusout(function () {
      if ($(this).val() == '') {
         $(this).parent().removeClass('active');
      } else {
         $(this).parent().addClass('active');
      }
   })
});