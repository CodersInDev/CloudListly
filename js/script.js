var idSoundCloud = '3495cef73405762f78396ebe9e88bc92';

window.onload = function(){
	SC.initialize({
	 	client_id: idSoundCloud
	});

	var player = document.getElementById('player');
	var track_url = 'http://soundcloud.com/forss/flickermood';

	//SC.oEmbed(track_url, { auto_play: false }, player);
}
