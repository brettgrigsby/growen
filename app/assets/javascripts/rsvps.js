$(document).ready(function() {
  function toggleSelected(element) {
    if (element.hasClass('selected')) {
      element.removeClass('selected');
    } else {
      element.addClass('selected'); 
    }
    console.log(element.hasClass('selected'));
    element.blur();
  }

  $('.secondary-choices').hide();

  $('.meal-btn').click(function() {
    var $this = $(this);
    console.log($(this).data('id'));
    console.log($(this).data('meal'));
    $(this).removeClass('unselected');
    $(this).addClass('selected');
    $(this).siblings().removeClass('selected');    
    $(this).siblings().addClass('unselected');
    $(this).blur();
    $.ajax({
      type: "PUT",
      url: "/rsvps/" + $this.data('id'),
      data: {
        guest: $this.data('guest-id'), 
        choice: $this.data('meal')
      },
      success: function(response) {
      },
      error: function() {
        console.log('shit');
      }
    });
  });

  $('.ceremony-btn').click(function() {
    var $this = $(this);
    console.log($(this).data('id'));
    console.log($(this).data('choice'));
    $this.removeClass('unselected');
    $this.addClass('selected');
    $this.siblings().removeClass('selected');    
    //$this.siblings().addClass('unselected');
    $this.blur();
    $.ajax({
      type: "PUT",
      url: "/rsvps/" + $this.data('id'),
      data: {
        guest: $this.data('guest-id'), 
        choice: $this.data('choice')
      },
      success: function(response) {
        var followUps = $this.parent().parent().find(".secondary-choices")
        response.message === "showem" ? followUps.show() : followUps.hide();
      },
      error: function() {
        console.log('shit');
      }
    });
  });

  $('.event-btn').click(function() {
    var $this = $(this);
    console.log($(this).data('id'));
    console.log($(this).data('event'));
    toggleSelected($(this));
    $.ajax({
      type: "PUT",
      url: "/rsvps/" + $this.data('id'),
      data: {
        guest: $this.data('guest-id'), 
        choice: $this.data('event') 
      },
      success: function(response) {
      },
      error: function() {
        console.log('shit');
      }
    });
  });

  $('.song-submit').click(function(event){
    event.preventDefault();
    var $this = $(this);
    var guestId = $this.data('guest-id');
    var songArtist = $this.parent().find('.song-artist').val()
    var songTitle = $this.parent().find('.song-title').val()
    console.log(guestId, songArtist, songTitle);
    $.ajax({
      type: "PUT",
      url: "/rsvps/" + $this.data('id'),
      data: {
        guest: guestId, 
        song_artist: songArtist,
        song_title: songTitle
      },
      success: function(response) {
        alert("SONG ADDED! THANKS!")
      },
      error: function() {
        console.log('shit');
      }
    });
  });

  $('#rsvp-find').click(function(event){
    event.preventDefault();
    var name = $('#rsvp-name').val();
    $.ajax({
      type: "GET",
      url: "/find-rsvp/" + name,
      success: function(response) {
        console.log(response);
        window.location.href = "/rsvps/" + response.id + "/edit"
      },
      error: function() {
        alert("No RSVP with that name. Make sure you spelled your name correctly.");
      }
    });
  });

  $('.allergy-checkbox').click(function(event){
    console.log($(this).prop('checked'));
    if ($(this).prop('checked') === true) {
      $(this).parent().parent().find('.allergy-form').show();
    } else {
      $(this).parent().parent().find('.allergy-form').hide();
    }
  });

  $('.allergy-submit').click(function(event){
    event.preventDefault();
    var $this = $(this);
    var allergy = $(this).parent().find('.allergy-text').val();
    var guestId = $(this).data('guest-id');
    $.ajax({
      type: "PUT",
      url: "/rsvps/" + $(this).data('id'),
      data: {
        guest: guestId,
        allergy: allergy
      },
      success: function(response) {
        alert("Your allergy has been submitted.");
      },
      error: function() {
        alert("Something Done Goofed :(");
      }
    });
  });

});
