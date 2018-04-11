jQuery(document).ready(function ($) {

   //   Animated Header
   jQuery(window).scroll(function () {
      var dFT = jQuery(window).scrollTop();
      if (dFT > 15) {
         $("header").addClass("animated-fixed")
      } else {
         $("header").removeClass("animated-fixed")
      };

      //Scroll to top
      var utd = jQuery(window).scrollTop();
      if (utd > 750) {
         $("a.scroll-top").fadeIn()
      } else {
         $("a.scroll-top").fadeOut()
      };

   });

   var sections = $('section'),
      nav = $('nav'),
      nav_height = nav.outerHeight();
   $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
      sections.each(function () {
         var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();
         if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
         }
      });
   });
   
   nav.find('a').on('click', function () {
      var $el = $(this),
         id = $el.attr('href');

      $('html, body').animate({
         scrollTop: $(id).offset().top
      }, 500);

      return false;
   });

   $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#tab-1"]')
      .not('[href="#tab-2"]')
      .not('[href="#get-it"]')
      .click(function (event) {
         if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
         ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
               event.preventDefault();
               $('html, body').animate({
                  scrollTop: target.offset().top
               }, 1000, function () {
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { 
                     return false;
                  } else {
                     $target.attr('tabindex', '-1'); 
                     $target.focus(); 
                  };
               });
            }
         }
      });

   //   Responsive manu
   jQuery("nav .responsive-menu").click(function () {
      jQuery("nav ul").slideToggle();

      return false;
   });

});
