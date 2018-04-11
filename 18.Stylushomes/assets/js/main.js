$(document).ready(function () {
    $('#layerslider').layerSlider({
        autoStart: true,
        firstLayer: 2,
        navStartStop: false,
        skin: 'v5',
        pauseOnHover: false,
        showCircleTimer: false,
        skinsPath: 'layerslider/skins/',
        navPrevNext: false,
        navButtons: false,
        responsiveUnder: 1000
    });
});
$(".modal-transparent").on('show.bs.modal', function () {
    setTimeout(function () {
        $(".modal-backdrop").addClass("modal-backdrop-transparent");
    }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
});
