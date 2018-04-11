//$(document).ready(function () {
//   var typed = new Typed('.content-inner p', {
//      strings: ["Rinding the best fashion", "Talking to influencers", "Reaching out to brands", "Testing with users", "Prototyping concepts"],
//      typeSpeed: 50,
//      startDelay: 1000,
//      backSpeed: 50,
//      loop: true,
//      showCursor: false,
//      backDelay: 2000
//   });
//   var typed = new Typed('.content span', {
//      strings: ["Rinding the best fashion", "Talking to influencers", "Reaching out to brands", "Testing with users", "Prototyping concepts"],
//      typeSpeed: 50,
//      startDelay: 1000,
//      backSpeed: 50,
//      loop: true,
//      showCursor: false,
//      backDelay: 2000
//   });
//});



jQuery(document).ready(function ($) {

   var mobileSlides = $(".mobile-slider");

   mobileSlides.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      animateOut: 'fade',
      autoplayTimeout: 3000
   });
});
