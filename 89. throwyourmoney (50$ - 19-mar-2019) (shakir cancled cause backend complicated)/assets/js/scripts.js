jQuery(document).ready(function ($) {


    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.item'
    });

    // store filter for each group
    var filters = {};

    $('.filter-button').on('click', '.button', function (event) {
        var $button = $(event.currentTarget);
        // get group key
        var $buttonGroup = $button.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[filterGroup] = $button.attr('data-filter');
        // combine filters
        var filterValue = concatValues(filters);
        // set filter for Isotope
        $grid.isotope({
            filter: filterValue
        });
    });

    // flatten object by concatting values
    function concatValues(obj) {
        var value = '';
        for (var prop in obj) {
            value += obj[prop];
        }
        return value;
    }


    jQuery(window).scroll(function () {
        var distenceFromTop = jQuery(window).scrollTop();

        if (distenceFromTop >= 30) {
            // If page is scrolled more than 50px
            $("#return-to-top").fadeIn(200); // Fade in the arrow
        } else {
            $("#return-to-top").fadeOut(200); // Else fade out the arrow
        }



        if (distenceFromTop > 30) {
            jQuery("nav .left-bar").css({
                'height': '25px',
                'top': '12px'
            });
            jQuery("nav .right-bar").css({
                'height': '25px',
                'top': '12px'
            });
            jQuery(".user").css({
                'margin-top': '3px'
            });
            jQuery(".top-bar").css({
                'margin': '2px 0'
            });
            jQuery("a.bar img").css({
                'height': '25px'
            });
            jQuery("nav ul > li a i").css({
                'display': 'none'
            });
            jQuery("nav ul > li a span").css({
                'padding-top': '3px'
            });
            jQuery("nav ul > li > a").css({
                'height': '50px',
            });
            jQuery("nav ul.menu > li > a").mouseover(function () {
                jQuery(this).css({
                    'height': '57px',
                    'transition': '.5s',
                });
            })
            jQuery("nav ul.menu > li > a").mouseleave(function () {
                jQuery(this).css({
                    'height': '50px',
                    'transition': '.5s',
                });
            })
            jQuery("nav ul ul li a").css({
                'height': '100%',
                'padding': '10px',
            });
        } else {
            jQuery("nav .left-bar").css({
                'height': '40px',
                'top': '18px'
            });
            jQuery("nav .right-bar").css({
                'height': '40px',
                'top': '18px'
            });
            jQuery(".user").css({
                'margin-top': '8px'
            });
            jQuery(".top-bar").css({
                'margin': '10px 0'
            });
            jQuery("a.bar img").css({
                'height': '42px'
            });
            jQuery("nav ul > li a i").css({
                'display': 'block'
            });
            jQuery("nav ul > li a span").css({
                'padding-top': '0px'
            });
            jQuery("nav ul > li > a").css({
                'height': '77px',
            });
            jQuery("nav ul.menu > li > a").mouseover(function () {
                jQuery(this).css({
                    'height': '84px',
                    'transition': '.5s',
                });
            })
            jQuery("nav ul.menu > li > a").mouseleave(function () {
                jQuery(this).css({
                    'height': '77px',
                    'transition': '.5s',
                });
            })
            jQuery("nav ul ul li a").css({
                'height': '100%',
                'padding': '10px',
            });
        };

    });


    $("#return-to-top").click(function () {
        // When arrow is clicked
        $("body,html").animate({
                scrollTop: 0 // Scroll to top of body
            },
            500
        );
    });


});
