$(document).ready(function() {
  $(".service-img").hover(function() {
    $(this).animate({
      width: "220"
    });
  }, function() {
    $(this).animate({
      width: "180"
    });
  });

  // second part
  $(".nav-item, .shadow").hover(function() {
    $(this).css({
      'box-shadow': 'none',
      'text-shadow': '2px 2px 5px rgba(255, 255, 255, 2)'
    });
  }, function() {
    $(this).css({
      'box-shadow': 'none',
      'text-shadow': 'none'
    });
  });

});
