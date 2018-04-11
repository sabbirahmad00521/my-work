jQuery(document).ready(function ($) {

   // Owl Carousel

   $('.blog-slider').owlCarousel({
      items: 3,
      loop: true,
      autoplay: false,
      autoplayTimeout: 2000,
      dots: true,
      margin: 50,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

   });

   // Other Scripts

   function myFunction(x) {
      x.classList.toggle("change");
   }
   $(document).ready(function () {
      $("#btn").click(function () {
         $(".innercontainer").slideToggle();
      });

   });


});
