jQuery(document).ready(function ($) {

    $('#chat-row').perfectScrollbar({
        theme: "red",
    });

    $('.chat-users').perfectScrollbar({
        theme: "red",
    });

});
$(document).ready(function () {
    $('.accordion-header').click(function (ev) {
        ev.preventDefault();
        let x = $(this).children('.accordion-heading').attr('saifal');
        let chatrow = $('#chat-row');
        $('.chat-box').hide();
        $(x).fadeIn();
    });
});



$(document).ready(function () {
    $('.accordion-header').click(function (ev) {
        ev.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        let x = $(this).children('.accordion-heading').attr('saifal');
        let chatrow = $('#chat-row');
        $('.chat-box').hide();
        $(x).fadeIn();
    });
});
