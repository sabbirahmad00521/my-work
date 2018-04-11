jQuery(document).ready(function ($) {

   // Owl Carousel


   $('.home-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      smartSpeed: 1,
      dragEndSpeed: 1,
      fluidSpeed: 1,
      autoplaySpeed: 10,
      responsiveClass: true,
   });


   $('.smile-slider').owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      dots: true,
      smartSpeed: 1,
      dragEndSpeed: 1,
      fluidSpeed: 1,
      autoplaySpeed: 10,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
            nav: true
         },
         600: {
            items: 3,
            nav: false
         },
         900: {
            items: 4,
            nav: true,
            loop: false
         }
      }
   });


   // Other Scripts
function Map(imageName) {
    if ($('#google_map').length) {
        //Contact Map
        var map;
        map = new GMaps({
            el: '#google_map',
            lat: 23.1699567,
            lng: 89.2034067,
            scrollwheel: false,
            zoom: 16
        });
        map.drawOverlay({
            lat: map.getCenter().lat(),
            lng: map.getCenter().lng(),
            layer: 'overlayLayer',
            content: '<div class="overlay_map"><img src="images/' + imageName + '" alt="marker"></div>',
            verticalAlign: 'top',
            horizontalAlign: 'center'
        });
    }
}
Map("../img/map-marker.png");

});
