//Layer-slider 
$(document).ready(function () {
    $('#layerslider').layerSlider({
        autoStart: false,
        firstLayer: 4,
        navStartStop: false,
        skin: 'v5',
        pauseOnHover: false,
        showCircleTimer: false,
        skinsPath: 'assets/layerslider/skins/',
        navPrevNext: false,
        navButtons: true,
        responsiveUnder: 1400
    });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop : true,
      nav : true,
      navText : ["<i class='fa fa-angle-right'></i>" , "<i class='fa fa-angle-left'></i>"] ,
      margin : 30
  });
});
