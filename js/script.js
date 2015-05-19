var idSoundCloud = '3495cef73405762f78396ebe9e88bc92';


// var url = 'https://api.soundcloud.com/tracks.json?client_id=3495cef73405762f78396ebe9e88bc92';
// $.getJSON(url, function(tracks) {
//   $(tracks).each(function(track) {
//     console.log(track.title);
//     console.log("bob");
//   })
// });

var track_url = 'http://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true },document.getElementById('player'));

//
// $(document).ready(function() {
//   SC.initialize({
//     client_id: idSoundCloud,
//   });
//   $.getJSON('https://api.soundcloud.com/tracks/293.json?client_id=3495cef73405762f78396ebe9e88bc92', function(track){
// //$('#result').html(track.title);
//       SC.oEmbed(track.permalink_url, document.getElementById('player'));
//   });
// });
//
// $(document).ready(function() {
//   SC.get('https://api.soundcloud.com/tracks/293', function(track){
//       $('#result').html(track.title);
//   });


//});
