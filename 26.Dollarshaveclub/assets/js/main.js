//Layer-slider 
$(document).ready(function(){
    $('#layerslider').layerSlider({
        autoStart: true,
        firstLayer: 2,
        navStartStop: false,
        skin: 'fullwidth',
        pauseOnHover:false,
        showCircleTimer:false,
        showBarTimer:false,
        skinsPath: 'assets/layerslider/skins/',
        navButtons:false,
        responsiveUnder: 1200
    });
});



$(document).ready(function () {
        $('#blade-gallary-1').lightGallery({
            mode: 'lg-fade'
        }) 
        $('#blade-gallary-2').lightGallery({
            mode: 'lg-fade'
        })
        $('#blade-gallary-3').lightGallery({
            mode: 'lg-fade'
        })
        $('#image-thumbnail').lightGallery({
            mode: 'lg-fade'
        })
    });




jQuery(document).ready(function () {
   jQuery(window).scroll(function () {
      var headerTopHeight = jQuery("header").outerHeight();
      var headerbottomHeight = jQuery(".header-bottom").outerHeight();
      var totalHeight = headerTopHeight + headerbottomHeight;
      var utd = jQuery(window).scrollTop();
       
       
      if (utd > 100) {
         jQuery("header .nav-fixed li.fade-effect").css({"opacity": "0", "transition": ".7s"})
      } else {
         jQuery("header .nav-fixed li.fade-effect").css({"opacity": "1", "transition": ".7s"})
      }
   });
});

