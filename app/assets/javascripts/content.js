$(document).ready(function() {
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

