jQuery(document).ready(function () {
   //Responsive menu
   jQuery("nav .responsive-menu").click(function () {
      jQuery("nav ul").slideToggle();

      return false;
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

});

jQuery(document).ready(function () {


   // Select all links with hashes
   $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#how"]')
      .not('[href="#more"]')
      .not('[href="#get-it"]')
      .click(function (event) {
         // On-page links
         if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
         ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
               // Only prevent default if animation is actually gonna happen
               event.preventDefault();
               $('html, body').animate({
                  scrollTop: target.offset().top
               }, 1000, function () {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                     return false;
                  } else {
                     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                     $target.focus(); // Set focus again
                  };
               });
            }
         }
      });
});

jQuery(document).ready(function ($) {

   // Owl Carousel

   $('.slider').owlCarousel({
      items: 1,
      loop: false,
      autoplay: false,
      autoplayTimeout: 2000,
      dots: true,
      nav: false,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
   });


   // Other Scripts


});
