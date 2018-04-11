////scrool to Section


$(function () {
   $.scrollify({
      section: ".scrool",
      scrollbars: false,
      before: function (i, scrools) {

         var ref = scrools[i].attr("data-section-name");

         $(".dot .active").removeClass("active");

         $(".dot").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
      afterRender: function () {
         var dot = "<ul class=\"dot\">";
         var activeClass = "";
         $(".scrool").each(function (i) {
            activeClass = "";
            if (i === 0) {
               activeClass = "active";
            }
            dot += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
         });

         dot += "</ul>";

         $(".level-one").append(dot);

         $(".dot a").on("click", $.scrollify.move);
      }
   });
});



//click to section

jQuery(document).ready(function () {

   $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#how"]')
      .not('[href="#more"]')
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
});


//scrool bar

$('#scrollbox3').enscroll({
   showOnHover: true,
   verticalTrackClass: 'track3',
   verticalHandleClass: 'handle3'
});



//background slider


$(function () {
   $('.level-one').vegas({
      overlay: true,
      transition: 'asdfg',
      transitionDuration: 1500,
      delay: 7000,
      color: 'tranparent',
      timer: false,
      slides: [
         {
            src: 'assets/images/bg-1.jpg'
         },
         {
            src: 'assets/images/bg-2.jpg'
         },
         {
            src: 'assets/images/bg-3.jpg'
         }
        ]
   });
});


//slider

(function ($) {
   $.fn.slideshow = function (options) {
      options = $.extend({
         wrapper: ".slider-wrapper",
         previous: ".slider-previous",
         next: ".slider-next",
         slides: ".slide",
         nav: ".slider-nav",
         speed: 500,
         easing: "linear"
      }, options);
      var slideTo = function (slide, element) {
         var $currentSlide = $(options.slides, element).eq(slide);
         $currentSlide.
         animate({
            opacity: 1
         }, options.speed, options.easing).
         siblings(options.slides).
         css("opacity", 0);
      };
      return this.each(function () {
         var $element = $(this),
            $previous = $(options.previous, $element),
            $next = $(options.next, $element),
            index = 0,
            total = $(options.slides).length;

         $(options.slides, $element).each(function () {
            var $slide = $(this);
            var image = $slide.data("image");
            $slide.css("backgroundImage", "url(" + image + ")");
         });
         $element.hover(function () {
            $(options.nav, $element).stop(true, true).show();
         }, function () {
            $(options.nav, $element).stop(true, true).hide();
         });
         $next.on("click", function () {
            index++;
            $previous.show();

            if (index == total - 1) {
               index = total - 1;
               $next.hide();
            }
            slideTo(index, $element);
         });

         $previous.on("click", function () {
            index--;
            $next.show();
            if (index == 0) {
               index = 0;
               $previous.hide();
            }
            slideTo(index, $element);
         });
      });
   };

   $(function () {
      $("#main-slider").slideshow();
   });
})(jQuery);


//menu

jQuery(document).ready(function () {
   jQuery(window).scroll(function () {
      var headerTopHeight = jQuery("header").outerHeight();
      var utd = jQuery(window).scrollTop();
      if (utd > headerTopHeight) {
         jQuery("header").addClass("fixed");
      } else {
         jQuery("header").removeClass("fixed");
      }
   });
});

//contact

jQuery(document).ready(function () {
    
    
   jQuery("#contact").click(function () {
      jQuery("#contact-form-fade").slideDown("slow");
   });  
        
   jQuery("#close-button").click(function () {
      jQuery("#contact-form-fade").slideUp();
   });  
    
    
    
});

