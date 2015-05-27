var idSoundCloud    = '3495cef73405762f78396ebe9e88bc92',
    myPlayer        = new MyPlayer(idSoundCloud),
    playlistTag     = document.getElementById('playlistTag'),
    searchlistTag   = document.getElementById('searchlistTag'),
    playPauseButton = document.getElementById('playPauseButton'),
    nextButton      = document.getElementById('nextButton'),
    previousButton  = document.getElementById('previousButton'),
    infoBox         = document.getElementById('infoBox'),
    infoButton      = document.getElementById('infoButton');

//Event on navigation tab
playlistTag.addEventListener('click', playlistClick);
searchlistTag.addEventListener('click', searchClick);

function playlistClick() {
  document.getElementById('listTracks').style.display = "block";
  document.getElementById('searchContent').style.display = 'none';
}

function searchClick() {
  document.getElementById('searchContent').style.display = 'block';
  document.getElementById('listTracks').style.display ="none";
}

//Player's event
playPauseButton.addEventListener("click", playPause);
nextButton.addEventListener("click", myPlayer.next);
previousButton.addEventListener("click", myPlayer.previous);

infoButton.addEventListener("click", function(){
  console.log('click on info button');
	//myPlayer.getCurrentSongObj(displaySongInfo);
});

function displaySongInfo(song){
 	infoBox.innerHTML = "Track title : " + song.title + "</br>Genre : " + song.genre + "</br>Duration : " + song.duration + "</br>Label : " + song.label_name + "</br>Year released : " + song.release_year;
 	console.log(infoBox.innerHTML);
}

function togglePlayButton(){
//toggle the display of the play button
}


function playPause(){
 switch(playPauseButton.getAttribute('value')){
   case 'play':
    if(myPlayer.play()){
      playPauseButton.setAttribute('value', 'pause');
      playPauseButton.setAttribute('class', '');
      playPauseButton.innerHTML = '||';
      myPlayer.currentSong().addEventListener('ended',function(){
        if(!myPlayer.next()){
          playPauseButton.setAttribute('class', 'icon-play');
          playPauseButton.innerHTML = '';
          myPlayer.beginning();
        }
      });
    }
    break;
   case 'pause':
     myPlayer.pause();
     playPauseButton.setAttribute('value', 'play');
     playPauseButton.innerHTML = '';
     playPauseButton.setAttribute('class', 'icon-play');

    break;
   default:
    console.log('action not understood');
 }
}
