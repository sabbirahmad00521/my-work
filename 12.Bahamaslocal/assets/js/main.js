$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});




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
        skinsPath: 'layerslider/skins/',
        hoverPrevNext:true,
        hoverBottomNav:false,
        navButtons:false
    });
});



