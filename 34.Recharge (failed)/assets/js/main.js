//$(document).ready(function () {
//    $(".btn-select").each(function (e) {
//        var value = $(this).find("ul li.selected").html();
//        if (value != undefined) {
//            $(this).find(".btn-select-input").val(value);
//            $(this).find(".btn-select-value").html(value);
//        }
//    });
//});
//
//$(document).on('click', '.btn-select', function (e) {
//    e.preventDefault();
//    var ul = $(this).find("ul");
//    if ($(this).hasClass("active")) {
//        if (ul.find("li").is(e.target)) {
//            var target = $(e.target);
//            target.addClass("selected").siblings().removeClass("selected");
//            var value = target.html();
//            $(this).find(".btn-select-input").val(value);
//            $(this).find(".btn-select-value").html(value);
//        }
//        ul.hide();
//        $(this).removeClass("active");
//    }
//    else {
//        $('.btn-select').not(this).each(function () {
//            $(this).removeClass("active").find("ul").hide();
//        });
//        ul.slideDown(300);
//        $(this).addClass("active");
//    }
//});
//
//$(document).on('click', function (e) {
//    var target = $(e.target).closest(".btn-select");
//    if (!target.length) {
//        $(".btn-select").removeClass("active").find("ul").hide();
//    }
//});

$(document).ready(function () {


   $(".asd").chosen()


   $("#qwe").intlTelInput();

});

$(document).ready(function () {
   $('.loader').ClassyLoader({
      speed: 10,
      diameter: 80,
      fontSize: '30px',
      fontColor: 'rgba(213, 14, 60,1)',
      lineColor: 'rgba(213, 14, 60,1)',
      percentage: 100,
      lineWidth: 20,
      start: 'top',
      remainingLineColor: 'rgba(213, 14, 60, 0.0)'
   });
});

$(document).ready(function () {
   $(".next-btn").click(function () {
      $(".clearfix").show();
   });
});
//
//$(document).ready(function () {
//   var myVar;
//
//   function myFunction() {
//      myVar = setTimeout(showPage, 1000);
//   }
//
//   function showPage() {
//      document.getElementById("loader").style.display = "none";
//      document.getElementById("polo").style.display = "block";
//   }
//});
