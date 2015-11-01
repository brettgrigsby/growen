$(document).ready(function() {
  $("#our-story").on("click", function() {
    var $content =  $("#welcome-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });

  $("#accomodations").on("click", function() {
    var $content =  $("#accomodations-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });


});

