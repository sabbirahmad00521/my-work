   
    

    
    
    document.addEventListener('DOMContentLoaded', () => {
  const scroller = new SweetScroll({
  
   trigger: '[data-scroll]',       // Selector for trigger (must be a valid css selector)
  header: '[data-scroll-header]', // Selector or Element for fixed header (Selector of must be a valid css selector)
  duration: 1000,                 // Specifies animation duration in integer
  easing: 'easeInSine',         // Specifies the pattern of easing
  offset: 0,                      // Specifies the value to offset the scroll position in pixels
  vertical: true,                 // Enable the vertical scroll
  horizontal: false,              // Enable the horizontal scroll
  cancellable: true,              // When fired wheel or touchstart events to stop scrolling
  updateURL: false,               // Update the URL hash on after scroll (true | false | 'push' | 'replace')
  preventDefault: true,           // Cancels the container element click event
  stopPropagation: true,          // Prevents further propagation of the container element click event in the bubbling phase
  quickMode: false,               // Instantly scroll to the destination! (It's recommended to use it with `easeOutExpo`)

  // Callbacks
  before: null,
  after: null,
  cancel: null,
  complete: null,
  step: null,
  
  
  
  
  
  
  
  
  });
}, false);
    

    
    


        jQuery(document).ready(function() {
    jQuery('.animate1').addClass("hideit").viewportChecker({
        classToAdd: 'showit animated jackInTheBox',
        offset: 100 
      
        
       });
});


    
       
        jQuery(document).ready(function() {
    jQuery('.about').addClass("hideit").viewportChecker({
        classToAdd: 'showit animated lightSpeedIn',
        offset: 100 
      
        
       });
});

 

jQuery(document).ready(function() {
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      btn.fadeIn('show');
    } else {
      btn.fadeOut('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});



jQuery(document).ready(function() {
  
  var btn = $('#ftlink2');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      btn.fadeIn('show');
    } else {
      btn.fadeOut('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});



          jQuery(document).ready(function() {
    jQuery('.ok12').addClass("hideit").viewportChecker({
        classToAdd: 'showit animated bounceIn',
        offset: -1500
      
        
       });
});

        

    
    