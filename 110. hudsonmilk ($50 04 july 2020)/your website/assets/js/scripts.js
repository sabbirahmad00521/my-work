jQuery(document).ready(function ($) {

   // Owl Carousel

   $('.slider-bg').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: true,
      animateOut: 'fadeOut',
      navText: ['<img src="assets/img/arrow-point-to-right.svg">', '<img src="assets/img/arrow-point-to-right.svg">'],
      mouseDrag: false,
   });


   // choose us slider
   $('.why-choose-us-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: false,
      animateOut: 'fadeOut',
      dots: true,
      mouseDrag: false,
   });


   // text change Scripts
   var text = ["butter", "beef", "pork", "poultry", "milk"];
   var counter = 0;
   var elem = $(".text-change");
   setInterval(change, 1500);

   function change() {
      elem.fadeOut(function () {
         elem.html(text[counter]);
         counter++;
         if (counter >= text.length) {
            counter = 0;
         }
         elem.fadeIn();
      });
   }


   // search 

   $('.search').click(function () {
      $('.search-area').fadeIn()
      return false
   })
   $('.searchbox button.cancel,.search-area .overlay').click(function () {
      $('.search-area').fadeOut()
   })

   // notice close
   $('.notice-close').click(function () {
      $('.red-notice').hide()
   })

   /*-----------------------------------------
          // Menu Scripts
      -----------------------------------------*/

   jQuery("a.responsive-menu").click(function () {
      jQuery("ul.menu").fadeToggle();
      return false;
   });
   jQuery(window).resize(function () {
      var windowWidth = jQuery(window).width();
      if (windowWidth > 750) {
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


   // header margin

   var menuHeight = $('.top-section').outerHeight()
   $('body').css('padding-top', menuHeight + 'px')

   $(window).resize(function () {
      var menuHeight = $('.top-section').outerHeight()
      $('body').css('padding-top', menuHeight + 'px')
   })


   // end jquery
});






// js code
// scroll animation
AOS.init({
   // Global settings:
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 0, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 1000, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: true, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



// quantity

var quantitySelectAll = document.querySelectorAll('.quantity select');

for (j in quantitySelectAll) {
   var quantitySelectAllInSingle = quantitySelectAll[j]
   for (let index = 1; index < 101; index++) {
      var quantityOption = document.createElement('option');
      quantityOption.innerHTML = [index]
      quantitySelectAllInSingle.appendChild(quantityOption)
   }
}

