  $("#apply").submit(function(e){
  var response = $("#g-recaptcha-response").val();
  if(response.length == 0){
  alert('Please Check Captcha box.');
  return false;
  }
  });