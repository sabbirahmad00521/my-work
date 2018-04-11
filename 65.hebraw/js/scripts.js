jQuery(document).ready(function ($) {
   var animated_slider = $(".animated-slider");

   // Owl Carousel

   animated_slider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      dots: true,
      margin: 15,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      //      smartSpeed: 5000,
      //      dragEndSpeed: 1000,
      //      fluidSpeed: 1,
      autoplaySpeed: 1000,
   });


   // animation text
   animated_slider.on('translate.owl.carousel', function (event) {
      $(".slider h4").removeClass("animated fadeInDown").css({
         opacity: "0"
      });
      $(".slider h1").removeClass("animated bounce").css({
         opacity: "0"
      });
      $(".slider h3").removeClass("animated fadeInUp").css({
         opacity: "0"
      });
   })


   animated_slider.on('translated.owl.carousel', function (event) {
      $(".slider h4").addClass("animated fadeInDown").css({
         opacity: "1"
      });
      $(".slider h1").addClass("animated bounce").css({
         opacity: "1"
      });
      $(".slider h3").addClass("animated fadeInUp").css({
         opacity: "1"
      });
   })

});
