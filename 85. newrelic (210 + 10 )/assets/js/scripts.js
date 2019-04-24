jQuery(document).ready(function ($) {

    // Owl Carousel

    $('.text-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 20000,
    });


    // Other Scripts
    jQuery("nav li.li-1").click(function () {
        jQuery("nav li.li-1 > .submenu").toggle();
        jQuery("nav li.li-1").toggleClass("active");
        jQuery("nav li.li-2").removeClass("active");
        jQuery("nav li.li-3").removeClass("active");
        jQuery("nav li.li-4").removeClass("active");
        jQuery("nav li.li-2 > .submenu").hide();
        jQuery("nav li.li-3 > .submenu").hide();
        jQuery("nav li.li-4 > .submenu").hide();
        $(".offcanvas-menu-overlay").toggleClass("active");

    });

    jQuery("nav li.li-2").click(function () {
        jQuery("nav li.li-2 > .submenu").toggle();
        jQuery("nav li.li-2").toggleClass("active");
        jQuery("nav li.li-1").removeClass("active");
        jQuery("nav li.li-3").removeClass("active");
        jQuery("nav li.li-4").removeClass("active");
        jQuery("nav li.li-1 > .submenu").hide();
        jQuery("nav li.li-3 > .submenu").hide();
        jQuery("nav li.li-4 > .submenu").hide();
        jQuery("nav .li-5").hide();
        $(".offcanvas-menu-overlay").toggleClass("active");
    });

    jQuery("nav li.li-3").click(function () {
        jQuery("nav li.li-3 > .submenu").toggle();
        jQuery("nav li.li-3").toggleClass("active");
        jQuery("nav li.li-1").removeClass("active");
        jQuery("nav li.li-2").removeClass("active");
        jQuery("nav li.li-4").removeClass("active");
        jQuery("nav li.li-1 > .submenu").hide();
        jQuery("nav li.li-2 > .submenu").hide();
        jQuery("nav li.li-4 > .submenu").hide();
        jQuery("nav .li-5").hide();
        $(".offcanvas-menu-overlay").toggleClass("active");
    });

    jQuery("nav li.li-4").click(function () {
        jQuery("nav li.li-4 > .submenu").toggle();
        jQuery("nav li.li-4").toggleClass("active");
        jQuery("nav li.li-1").removeClass("active");
        jQuery("nav li.li-2").removeClass("active");
        jQuery("nav li.li-3").removeClass("active");
        jQuery("nav li.li-1 > .submenu").hide();
        jQuery("nav li.li-2 > .submenu").hide();
        jQuery("nav li.li-3 > .submenu").hide();
        jQuery("nav .li-5").hide();
        $(".offcanvas-menu-overlay").toggleClass("active");
    });

    jQuery("nav i").click(function () {
        jQuery("nav .li-5").toggle();
        jQuery("nav li.li-1").removeClass("active");
        jQuery("nav li.li-2").removeClass("active");
        jQuery("nav li.li-3").removeClass("active");
        jQuery("nav li.li-4").removeClass("active");
        jQuery("nav li.li-1 > .submenu").hide();
        jQuery("nav li.li-2 > .submenu").hide();
        jQuery("nav li.li-3 > .submenu").hide();
        jQuery("nav li.li-4 > .submenu").hide();
        $(".offcanvas-menu-overlay").toggleClass("active");
    });

    //        $(".offcanvas-menu-overlay").click(function() {
    //            $('.offcanvas-menu-overlay').removeClass('active');
    //            
    //        });


//    jQuery(".annual .change-btn").click(function () {
//        jQuery(".annual").css({"display": "none"});
//        jQuery(".month").css({"display": "block"})
//    });
//    jQuery(".month .change-btn").click(function () {
//        jQuery(".month").css({"display": "none"});
//        jQuery(".annual").css({"display": "block"})
//    });

    jQuery(".annual .price-change-btn").click(function () {
        jQuery(".annual").hide();
        jQuery(".month").show();
    });
    jQuery(".month .price-change-btn").click(function () {
        jQuery(".month").hide();
        jQuery(".annual").show();
    });


});



$(document).ready(function () {

    var scrollLink = $('.faq-links li a ');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 190
        }, 700);
    });

    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

})
