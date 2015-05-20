var trackName = document.getElementById("track");
trackName.addEventListener("click", addToPlaylist);

function addToPlaylist(track) {
	var playlist = document.getElementById("playlist");
	playlist.innerHTML += "<li>" + track.title + "</li>"
}