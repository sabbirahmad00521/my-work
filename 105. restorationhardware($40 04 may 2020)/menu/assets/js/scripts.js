jQuery(document).ready(function ($) {


    $('.menu li').mouseenter(function () {
        var submenuHeight = $(this).find(".submenu").outerHeight()
        $(this).find(".submenu").find('.thirdmenu').attr("style", "height:" + submenuHeight + 'px !important')


    })

    $('.menu > li').mouseleave(function () {
        $('.submenu > li .thirdmenu').removeClass('active')
        $('.submenu > li:nth-child(1) .thirdmenu').addClass('active')
    })

    $('.submenu > li').mouseenter(function () {
        $('.submenu > li .thirdmenu').removeClass('active')
        $(this).children().addClass('active')
    })

    $('.thirdmenu li').hover(function () {
        $('.thirdmenu li span').attr("style", "color: #999 !important")
        $(this).children().children().attr("style", "color: #000 !important")
    })

    $('.menu > li').hover(function () {
        $(this).toggleClass('borderactive')

        if ($('.menu li').hasClass('borderactive')) {
            $('.borderactive .submenu > li:nth-child(1)').addClass('coloractive')
        }
    })

    $('.submenu > li').mouseenter(function () {
        if ($('.borderactive .submenu > li:nth-child(1)').hasClass('coloractive')) {
            $('.borderactive .submenu > li:nth-child(1)').removeClass('coloractive')
        }

        $(this).addClass('coloractive')
    })

    $('.submenu li').mouseleave(function () {
        $(this).removeClass('coloractive')
        $('.thirdmenu li span').attr("style", "color: #000 !important")
    })

    $('.searchbtn').click(function () {
        $('.searchbox').show()
        return false
    })

    $('.close-search').click(function () {
        $('.searchbox').hide()
    })


});