// wait for DOM to load before running JS
$(function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  
  // your code here
 $('#search').on('submit', function (event) {
 	event.preventDefault();
 	$('#results').empty();
 	console.log('form submitted!');

 	var searchedTracks = $('#tracks').val();
 	console.log(searchedTracks);

 	$.get("https://api.spotify.com/v1/search?q=" + searchedTracks + '&type=track', function (data) {
	
		console.log(data);
		
		var tracksResults = data.tracks.items;

		tracksResults.forEach(function (track) {
			console.log(track);
			var row = $('<div class="row"></div>');
			$(row).append('<div class="col-xs-3">' + track.name + '</div>');
			$(row).append('<div class="col-xs-3">' + track.artists[0].name + '</div>');

			var albumImages = track.album.images;
			if (albumImages.length >= 2) {
				$(row).append('<div class="col-xs-3"><img src="'+albumImages[2].url+'"></div>');
			}	else {
				$(row).append('<div class="col-xs-3">No image available</div>');
			}
			$(row).append('<div class="col-xs-3"><a class="btn btn-primary" href="'+track.preview_url+'">Preview</a></div>');
			$('#results').append(row);
		});

		
	});

});

});