$(document).ready(function () {



    jQuery("nav a.responsive-menu").click(function () {
        jQuery("nav ul").slideToggle();

        return false;
    });

//    jQuery(".footer-menu a.responsive-menu").click(function () {
//        jQuery(".footer-menu ul").slideToggle();
//
//        return false;
//    });

    jQuery(window).resize(function () {

        var screenWidth = jQuery(window).width();

        if (screenWidth > 768) {
            jQuery("nav ul").removeAttr("style");
        }


    });

});