jQuery(document).ready(function ($) {

   $('nav li').click(function () {



      if ($(this).hasClass('active')) {
         $(this).removeClass('active')
         $('.megamenu').hide()
         $(".menu").css({
            "margin-bottom" : "0"
         })
         $('.overlay').hide()
         return true
      }
      $('.overlay').show()
    



      $('nav *').removeClass('active')
      $(this).addClass('active')
      $('.megamenu').hide()
      $(this).children('.megamenu').show();

      var height = $(this).children('.megamenu').height()

      $(".menu").css({
         "margin-bottom" : 50 + height+"px"
      })
   })


   
   $('.close-menu, .overlay').click(function () {
      $('.active').removeClass('active')
      $('.megamenu').hide()
      $('.overlay').hide()
      $(".menu").css({
         "margin-bottom" : "0"
      })
      return false
   })



});

