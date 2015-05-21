var buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", doSearch);

function doSearch() {
	var result = document.getElementById("result");
	result.innerHTML = "";
	var searched = document.getElementById("searchterm").value;
    SC.get('/tracks', { q: searched }, function(tracks) {
			console.log(tracks);
	    for (var i = 0; i < tracks.length; i++) {
		// result.innerHTML += "<li class='tracks'>" + tracks[i].title + "</li>";
		var track = document.createElement('li');
		track.innerHTML = tracks[i].title;
		track.setAttribute('id', tracks[i].id);
		//add class for background style
		//do not append this result in the list!
		if(tracks[i].streamable ==  false){
			track.className += track.className ? ' nonStreamable' : 'nonStreamable';
		}
		if(tracks[i].downloadable ==  true){
			track.className += track.className ? ' downloadable' : 'downloadable';
		}
		result.appendChild(track);
	}
  });
}
