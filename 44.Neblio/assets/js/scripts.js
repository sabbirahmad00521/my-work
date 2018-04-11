jQuery(document).ready(function ($) {

   //   scrool to top
   jQuery(".scrolltotop").click(function () {
      jQuery("html").animate({
         'scrollTop': '0'
      }, 1000);
      return false;
   });

   
   // Owl Carousel

   $('.blog-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      dots: true,
      margin: 15,
      nav: false,
      navText: ["", ""],
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
            items: 1,
            nav: false
         },
         1000: {
            items: 1,
            nav: true,
            loop: false
         }
      }
   });


   // Other Scripts

   /**  Start Typed
    **====================== **/
   $(".typeanimation").typed({
      strings: ["enabling next gen distributed applications.", "enterprise records management.", "the internet-of-things.", "secure identity management.", "a distributed API network.", "replacing legacy database architectures."],
      showCursor: true,
      typeSpeed: 50,
      loop: true,
      backSpeed: 50,

   });



   //menu fixed
   jQuery(window).scroll(function () {

      var headerHeight = jQuery("header").outerHeight();

      var srl = jQuery(window).scrollTop();

      if (srl > 200) {
         jQuery(".scrolltotop").fadeIn();
      } else {
         jQuery(".scrolltotop").fadeOut();
      }

      //    if (srl > 200) {
      //        jQuery(".menu-bar fixed-menu").style.top = "0px";
      //    } else {
      //        jQuery(".menu-bar fixed-menu").style.top = "-250px";
      //    }


      if (srl > 200) {
         jQuery(".menu-bar").addClass("fixed-menu");
         jQuery(".menu-bar.white-menu").removeClass("asd");
         //         $('.fixed-menu').css('top','100px');
      } else {
         jQuery(".menu-bar").removeClass("fixed-menu");
         jQuery(".menu-bar.white-menu").addClass("asd");
         //         $('.fixed-menu').css('top','-250px');
      }



      if (srl > 200) {
         document.getElementById('logo').src = 'assets/img/neblio-logo-dark.png';
         //          document.getElementsByClassName(".logo").style.opacity = 0.2;

      } else {
         document.getElementById('logo').src = 'assets/img/neblio-logo-white.png';
         //         document.getElementsByClassName(".logo").style.opacity = 0.2;
      }

   });


   //Responsive menu
   jQuery("nav .responsive-menu").click(function () {
      jQuery("nav ul").slideToggle();

      return false;
   });


   //   masonary
   $(".all-posts").masonry({
      fitWidth: true,
   });


});
