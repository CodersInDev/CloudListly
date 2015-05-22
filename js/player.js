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
      // playPauseButton.setAttribute('class', 'controls');
      // playPauseButton.setAttribute('class', 'icon-pause');
      myPlayer.currentSong().addEventListener('ended',function(){
        if(!myPlayer.next()){
          myPlayer.beginning();
          playPauseButton.setAttribute('value', 'play');
          // playPauseButton.setAttribute('class', 'icon-play');
        }
      });
    }
    break;
   case 'pause':
     myPlayer.pause();
     playPauseButton.setAttribute('value', 'play');
    //  playPauseButton.innerHTML = '';
    //  playPauseButton.setAttribute('class', 'icon-play');
    break;
   default:
    console.log('action not understood')
 }
}
