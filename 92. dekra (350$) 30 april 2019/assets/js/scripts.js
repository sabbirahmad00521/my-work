jQuery(document).ready(function ($) {

   // Owl Carousel

   $('.home-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      dots: true,
      margin: 15,
      nav: true,
      navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
   });


   // search button
   $('.search-btn a.search-icon').click(function () {
      $('.search-box').toggleClass('active');
      return false
   });
   $('.close-search').click(function () {
      $('.search-box').removeClass('active');
   });

   //menu 
   jQuery("a.responsive-menu").click(function () {
      jQuery("ul.menu").slideToggle(500);
      return false;
   });
   jQuery("ul.menu li ").click(function () {
      console.log(this);
      jQuery(this).children(".submenu-container").toggle();
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


   //Side Menu 
   jQuery(".sidebar .hasChilds").click(function () {
      jQuery(this).children("ul").slideToggle(500);
      jQuery(this).children("div").children('span').children('i').toggleClass('fa-angle-down fa-angle-up');
      return false;
   });

   jQuery(".opened").parents().css({
      "display": "block"
   });
 
   jQuery("li.opened  a").css({
      "color": "#007D40",
      "border-bottom-color": "#007D40"
   });
 
   jQuery("li.opened div a").css({
      "color": "#007D40",
      "border-bottom-color": "#007D40"
   });

   if (jQuery("li.opened").children('div')) {
      jQuery("li.opened ul li a").css({
         "color": "#585858",
         "border-bottom-color": "#D5D5D5"
      });
   } 

   jQuery("li.opened ").parent().parent().children("div").children("a").css({
      "color": "#007D40",
      "border-bottom-color": "#007D40"
   });

   jQuery("li.opened ").parent().parent().parent().parent().children("div").children("a").css({
      "color": "#007D40",
      "border-bottom-color": "#007D40"
   });

   jQuery("li.opened ").parent().parent().children("div").children("span").children("i").toggleClass('fa-angle-down fa-angle-up');
   jQuery("li.opened ").parent().parent().parent().parent().children("div").children("span").children("i").toggleClass('fa-angle-down fa-angle-up');

   //video popup
   $(".video-play-btn").modalVideo({channel:'youtube'});

});