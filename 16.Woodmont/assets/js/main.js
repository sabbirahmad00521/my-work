//Submenu fade effect


jQuery(".responsive-menu nav ul li").click(function () {
    jQuery(this).children("ul").fadeToggle(200);
});


jQuery(".menu ul li").hover(function () {
    jQuery(this).children("ul").fadeToggle(200);
});



//menu fixed
jQuery(window).scroll(function () {

    var headerHeight = jQuery(" header").outerHeight();

    var srl = jQuery(window).scrollTop();

    if (srl > headerHeight) {
        jQuery("header").addClass("fixed-menu");

    } else {
        jQuery("header").removeClass("fixed-menu");
    }
})




// ACCORDION WITH TOGGLE ICONS

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);





//WOW js
new WOW().init();

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
});
wow.init();

