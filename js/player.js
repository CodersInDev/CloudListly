//play and pause event
var playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener("click", playPause);

//next event
var nextButton = document.getElementById('nextButton');
nextButton.addEventListener("click", myPlayer.next);

//previous event
var previousButton = document.getElementById('previousButton');
previousButton.addEventListener("click", myPlayer.previous);

var container = document.getElementById('container');
console.log(container);
//var currentSong = myPlayer.currentSong();
//container.addEventListener("ended", function(){console.log("The end of the song")});

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
