
    jQuery(window).scroll(function () {

        var headerTopHeight = jQuery(".parallax-1").outerHeight();
        var headerbottomHeight = jQuery("header").outerHeight();

        var totalHeight = headerTopHeight ;


        var utd = jQuery(window).scrollTop();

        if (utd > totalHeight) {
            jQuery("header").addClass("fixed");
        } else {
            jQuery("header").removeClass("fixed");
        }

        if (utd > totalHeight-1) {
            jQuery(".arrow-down").fadeOut();
        } else {
            jQuery(".arrow-down").fadeIn();
        }
        
        
        
  });




//
//

jQuery(document).ready(function () {
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
});
