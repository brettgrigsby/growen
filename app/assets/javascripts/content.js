$(document).ready(function() {
  $(".rsvp").on("click", function() {
    var $content =  $("#rsvp-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });

  $(".our-story").on("click", function() {
    var $content =  $("#our-story-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });

  $(".accomodations").on("click", function() {
    var $content =  $("#accomodations-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });


  $(".transportation").on("click", function() {
    var $content =  $("#transportation-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });

  $(".todo").on("click", function() {
    var $content =  $("#todo-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });

  $(".whenwhere").on("click", function() {
    var $content =  $("#whenwhere-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });

  $(".faq").on("click", function() {
    var $content =  $("#faq-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });

  $(".engagement-pics").on("click", function() {
    var $content =  $("#engagement-pics-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });

  $(".registry").on("click", function() {
    var $content =  $("#registry-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });

  $(".wedding-party").on("click", function() {
    var $content =  $("#wedding-party-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".content").hide();
      $content.show();
    }

  });

  $("#liz").on("click", function() {
    var $content =  $("#liz-list")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".wp-list").hide();
      $content.show();
    }

  });

  $("#brett").on("click", function() {
    var $content =  $("#brett-list")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".wp-list").hide();
      $content.show();
    }

  });

  $("#wedding-trans").on("click", function() {
    var $content =  $("#wedding-trans-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".t-list").hide();
      $content.show();
    }

  });

  $("#airport-trans").on("click", function() {
    var $content =  $("#airport-trans-content")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".t-list").hide();
      $content.show();
    }

  });

  $("#more").on("click", function() {
    var $content =  $("#more-list")

    if ($content.is(":visible")) {
      $content.hide();
    }
    else {
      $(".wp-list").hide();
      $content.show();
    }

  });
  
  $("#nav-bar").on("click", function() {
    $(".content").hide();
  });

});

