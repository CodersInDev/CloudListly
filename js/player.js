//player functionalities
// function MyPlayer(){
//   this.listSongs = [];
//   this.addSong = function(song){
//     listSongs.push(song);
//   };
//   //id in the listSongs array of the current song
//   this.currentSong = 0;
//   this.play = function(){
//     //load and play the current song
//     //if not loaded load and play else just play
//     loadSong(listSongs[currentSong].id);
//   }
//   this.next = function(){
//     if(this.current < this.listSongs.length -1){
//       this.current += 1;
//     }else{
//       //return to the first song of the playlist
//       this.current = 0;
//     }
//
//   }
// }


function loadSong(idSong){
  SC.stream("/tracks/" + idSong, function(sound){
      console.log(sound);
      var player = document.getElementById('audioPlayer');
      player.setAttribute("src", sound.url);
      player.play();
  });
}

var player = document.getElementById('audioPlayer');
player.addEventListener("ended", nextSong);
player.addEventListener('play', playSong);

function nextSong(){
  console.log("ready to play the next song");
}

function playSong(){
  console.log("play the song");
}
// function playList(){
//   //get list of id of songs [1,2,3]
// }
