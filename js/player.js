//play and pause event
var playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener("click", playPause);

//next event
var nextButton = document.getElementById('nextButton');
nextButton.addEventListener("click", myPlayer.next);

//previous event
var previousButton = document.getElementById('previousButton');
previousButton.addEventListener("click", myPlayer.previous);

var infoButton = document.getElementById('infoButton');
infoButton.addEventListener("click", function(){
	myPlayer.getCurrentSongObj(displaySongInfo);
});

var infoBox = document.getElementById('infoBox');

function displaySongInfo(song){
 	infoBox.innerHTML = "Track title : " + song.title + "</br>Genre : " + song.genre + "</br>Duration : " + song.duration + "</br>Label : " + song.label_name + "</br>Year released : " + song.release_year;
 	console.log(infoBox.innerHTML)
}

function playPause(){
 switch(playPauseButton.getAttribute('value')){
   case 'play':
    if(myPlayer.play()){
      playPauseButton.setAttribute('value', 'pause');
      playPauseButton.innerHTML = 'pause';
      myPlayer.currentSong().addEventListener('ended',function(){myPlayer.next()});
    }
    break;
   case 'pause':
     myPlayer.pause();
     playPauseButton.setAttribute('value', 'play');
     playPauseButton.innerHTML = 'play';
    break;
   default:
    console.log('action not understood')
 }
}

