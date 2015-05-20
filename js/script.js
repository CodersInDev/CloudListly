var idSoundCloud = '3495cef73405762f78396ebe9e88bc92';

$(document).ready(function() {
	SC.initialize({
	 	client_id: idSoundCloud
	});

	var track_url = 'http://soundcloud.com/forss/flickermood';
	SC.oEmbed(track_url, { auto_play: false },document.getElementById('player'));

});

