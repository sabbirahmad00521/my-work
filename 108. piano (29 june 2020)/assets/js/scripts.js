jQuery(document).ready(function ($) {

   // Owl Carousel
   
   $('.chord_list li').click(function () {

      var chordText = $(this).text();

   $('.selected').text(chordText)

      console.log(chordText);
      

   })

});
