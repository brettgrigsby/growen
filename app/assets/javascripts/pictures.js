$(document).ready(function() {

  $(".nail").on("click", function(e) {
    e.preventDefault();
    var $newSrc = $(this).data("img");
    $("#main-photo").attr("src", $newSrc);
  });

});

