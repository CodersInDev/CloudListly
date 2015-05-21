var buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", doSearch);

function doSearch() {
	var result = document.getElementById("result");
	result.innerHTML = "";
	var searchResults = "";
	var searched = document.getElementById("searchterm").value;
    SC.get('/tracks', { q: searched }, function(tracks) {
	    for (var i = 0; i < tracks.length; i++) {
			//result.innerHTML += "<li class='tracks'>" + tracks[i].title + "</li>";
			var classStyle = "";
			if(tracks[i].streamable ==  false){
				classStyle = 'nonStreamable';
				//track.className += track.className ? ' nonStreamable' : 'nonStreamable';
			}
			if(tracks[i].downloadable ==  true){
				classStyle = 'downloadable';
				//track.className += track.className ? ' downloadable' : 'downloadable';
			}
			searchResults += "<li id=" + tracks[i].id +" class=" + classStyle +">" + tracks[i].title + "</li>";
		}
		result.insertAdjacentHTML('beforeend', searchResults);
  });
}
