jQuery(document).ready(function ($) {

   //   Responsive manu
   jQuery("nav .responsive-menu").click(function () {
      jQuery("nav ul").slideToggle();

      return false;
   });

   //   scrool 
   $(document).ready(function () {

      $(".hero-area a").on('click', function (event) {
         if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
               scrollTop: $(hash).offset().top
            }, 800, function () {

               window.location.hash = hash;
            });
         }
      });
   });

});
