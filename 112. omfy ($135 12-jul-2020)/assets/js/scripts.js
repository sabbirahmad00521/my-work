jQuery(document).ready(function ($) {

   // Owl Carousel

   $('.upsell-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
   });


   // datepicker
   $("#datepicker").datepicker({
      dateFormat: 'MM yy',
      changeMonth: true,
      changeYear: true,
      showButtonPanel: true,

      onClose: function (dateText, inst) {
         var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
         var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
         $(this).val($.datepicker.formatDate('MM yy', new Date(year, month, 1)));
      }
   });

   $("#datepicker").focus(function () {
      $(".ui-datepicker-calendar").hide();
      $("#ui-datepicker-div").position({
         my: "center top",
         at: "center bottom",
         of: $(this)
      });
   });

});