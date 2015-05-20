function doSearch() {
	$("#result").empty();
	var searched = document.getElementById("searchterm").value;
    SC.get('/tracks', { q: searched }, function(tracks) {
			console.log(tracks);
    $(tracks).each(function(index, track) {
      $('#result').append($('<li></li>').html(track.title));
    });
  });
}
