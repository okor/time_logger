$(function(){

  // CSS for on hover, fade in textshadow
  var shadow = "#D67C00 0 0 20px"

  // CSS for off hover, fade out textshadow
  var clear_shadow = "#D67C00 0 0 0"

  // id's to apply effects to
  var buttons = [ "#start", "#pause", "#reset" ]

  // for each button, on hover, apply textshadow fade
  $.each(buttons, function(index, value){
    $(value).hover(function() { $(this).animate({textShadow: shadow}); }, 
      function() { $(this).animate({textShadow: clear_shadow}); });
  })

})