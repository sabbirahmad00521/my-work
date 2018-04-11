$(document).ready(function ($) {

   
   $(".popup-box").click(function(){
      $(".search-box").slideToggle(200);
   });
      
   $(".close").click(function(){
      $(".search-box").slideUp(200);
   });
   
   
});
