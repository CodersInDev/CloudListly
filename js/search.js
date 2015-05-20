var buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", doSearch);

function doSearch() {
	var result = document.getElementById("result");
	result.innerHTML = "";
	var searched = document.getElementById("searchterm").value;
    SC.get('/tracks', { q: searched }, function(tracks) {
	    for (var i = 0; i < tracks.length; i++) {
		result.innerHTML += "<li>" + tracks[i].title + "</li>";
	}

  });
}
