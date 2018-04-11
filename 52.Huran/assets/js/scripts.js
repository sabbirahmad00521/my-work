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


   //   Menu

   jQuery('#bars').click(function () {
      jQuery('.menu').fadeToggle();
      jQuery('.search-area').hide();
   })
   jQuery('#search').click(function () {
      jQuery('.search-area').fadeToggle();
      jQuery('.menu').hide();

   })
   jQuery('.cookie-btn').click(function () {
      jQuery('.cookies').fadeOut();
      return false

   })


   // fixed menu
   jQuery('header #search').fadeIn(500);
   jQuery("header .logo-side").addClass('d-flex');
   jQuery("header .logo-side").addClass('d-flex');
   jQuery("header .logo-side").addClass('align-items-center');
   jQuery("header h1").addClass('d-inline-block');
   jQuery("header h4").addClass('d-inline-block').css({
      'font-size': '16px',
      'margin-left': '20px',
   });
   jQuery("header").css({
      'padding-top': '20px',
      'padding-bottom': '5px',
      'transition': '.5s',
      'position': 'fixed',
      'left': '0',
      'top': '0',
      'width': '100%',
      'z-index': '999',
   });
   jQuery('header .menu').css('top', '110%')
   jQuery('body').css('margin-top', '78px')
});



jQuery(window).scroll(function () {

   var distenceFromTop = jQuery(window).scrollTop();
   if (distenceFromTop > 30) {
      jQuery('.animation-menu #search').fadeIn(500);
      jQuery(".animation-menu .logo-side").addClass('d-flex');
      jQuery(".animation-menu .logo-side").addClass('align-items-center');
      jQuery(".animation-menu h1").addClass('d-inline-block');
      jQuery(".animation-menu h4").addClass('d-inline-block').css({
         'font-size': '16px',
         'margin-left': '20px',
      });
      jQuery('.search-box-area').css('padding-top', '200px')
      jQuery(".animation-menu").css({
         'padding-top': '20px',
         'padding-bottom': '5px',
         'transition': '.5s',
         'position': 'fixed',
         'left': '0',
         'top': '0',
         'width': '100%',
         'z-index': '999',
      });
      jQuery('.animation-menu .menu').css('top', '110%')
      jQuery('.index_page').css('margin-top', '0px')
   } else {
      jQuery('.animation-menu #search').fadeOut(500);
      jQuery('.animation-menu .search-area').css('top', '115%');
      jQuery(".animation-menu .logo-side").removeClass('d-flex');
      jQuery(".animation-menu .logo-side").removeClass('align-items-center');
      jQuery(".animation-menu h1").removeClass('d-inline-block');
      jQuery(".animation-menu h4").removeClass('d-inline-block').css({
         'font-size': '24px',
         'margin-left': '0px'
      });
      jQuery('.search-box-area').css('padding-top', '45px ')

      jQuery(".animation-menu").css({
         'padding-top': '30px',
         'padding-bottom': '15px',
         'transition': '.5s',
         'position': 'relative',
      });
      jQuery('.animation-menu .menu').css('top', '115%')
   }




   //   jQuery(window).resize(function () {
   //   var screenWidth = jQuery(window).width();
   //   if (screenWidth < 992 ) {
   //      jQuery('header ').css()
   //   } else {
   //      jQuery('header ').css()
   //   }
   //});

})
