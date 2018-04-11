jQuery(document).ready(function () {

    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                
                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });


    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);

        return false;
    });

});

jQuery(document).ready(function () {
    
    jQuery(window).scroll(function () {
        
        var distenceFromTop = jQuery(window).scrollTop();

        var headerTopHeight = jQuery("header").outerHeight();
        
        var headertotalHeight = headerTopHeight - 1;

        if (distenceFromTop > headertotalHeight) {
            jQuery("nav").fadeIn();
        } else {
            jQuery("nav").fadeOut();
        };

        
        
        var header = jQuery("header").outerHeight();
        var what = jQuery(".what").outerHeight();
        
        var whatTotal = header + what;
        
        if (distenceFromTop < whatTotal) {
            jQuery(".what .arrow").show(500);
        } else {
            jQuery(".what .arrow").fadeOut();
        };
        
                
        
        var how = jQuery(".how").outerHeight();
        
        var howTotal = whatTotal + how;
        
        if (distenceFromTop < howTotal) {
            jQuery(".how .arrow").show(500);
        } else {
            jQuery(".how .arrow").fadeOut();
        };
                
        
        
        var more = jQuery(".more").outerHeight();
        
        var moreTotal = howTotal + more;
        
        if (distenceFromTop < moreTotal) {
            jQuery(".more .arrow").show(500);
        } else {
            jQuery(".more .arrow").fadeOut();
        };
        
    });
    
    
    
    
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#how"]')
  .not('[href="#more"]')
  .not('[href="#get-it"]')
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
        }, 1000, function() {
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
