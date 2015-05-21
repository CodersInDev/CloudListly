//play and pause event
var playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener("click", playPause);

//next event
var nextButton = document.getElementById('nextButton');
nextButton.addEventListener("click", myPlayer.next);

//previous event
var previousButton = document.getElementById('previousButton');
previousButton.addEventListener("click", myPlayer.previous);


function playPause(){
 switch(playPauseButton.getAttribute('value')){
   case 'play':
    if(myPlayer.play()){
      playPauseButton.setAttribute('value', 'pause');
      playPauseButton.innerHTML = 'pause';
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
