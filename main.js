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
		
		var trackResults = data.tracks.items;
		var source = $('#tracks-template').html();
		var template = Handlebars.compile(source);

		var trackHtml = template({ tracks: trackResults });

		$('#results').html(trackHtml);

		
	});

});

});