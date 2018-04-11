jQuery(document).ready(function ($) {

   // Owl Carousel
   
   $('.slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      dots: true,
      margin: 15,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      smartSpeed: 1,
      dragEndSpeed: 1,
      fluidSpeed: 1,
      autoplaySpeed: 10
   });
   
   // Other Scripts

function Map(imageName) {
    if ($('#google_map').length) {
        //Contact Map
        var map;
        map = new GMaps({
            el: '#google_map',
            lat: 25.0657621,
            lng: 55.1297854,
            scrollwheel: false,
            zoom: 14
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
