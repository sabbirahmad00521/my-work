$(document).ready(function () {



    jQuery("nav .responsive-menu").click(function () {
        jQuery("nav ul").slideToggle();

        return false;
    });

    jQuery(window).resize(function () {

        var screenWidth = jQuery(window).width();

        if (screenWidth > 768) {
            jQuery("nav ul").removeAttr("style");
        }
        if (screenWidth > 768) {
            jQuery(" nav ul ul li").show();
        }
		});





    jQuery(".scrolltotop").click(function () {

        jQuery("html").animate({
            'scrollTop': '0'
        }, 1000);

        return false;
    });







    jQuery(window).scroll(function () {



        var headerTopHeight = jQuery("nav").outerHeight();
        var headerbottomHeight = jQuery(".logo-area").outerHeight();

        var totalHeight = headerTopHeight + headerbottomHeight;


        var utd = jQuery(window).scrollTop();

        if (utd > totalHeight) {
            jQuery("nav").addClass("fixed");
        } else {
            jQuery("nav").removeClass("fixed");
        }



        if (utd > 300) {
            jQuery(".scrolltotop").fadeIn();
        } else {
            jQuery(".scrolltotop").fadeOut();
        }




        if (utd > 3700) {
            jQuery("footer.index").show();
        } else {
            jQuery("footer.index").hide();
        }




        var screenWidth = jQuery(window).width();

        if (screenWidth < 768) {
            jQuery("nav").removeClass("fixed");
        } 

        
        

    });





    jQuery(".search-btn").click(function () {
        jQuery(".search-box").fadeToggle(300);
    })




    jQuery(".parallax-1").parallax('50%', 0);



});
