// The MyPlayer constructor is a wrapper for a list of HtmlAudioElement.
// Explanation on the notation (based on the Haskell type notation):
// myFucntion :: typeA -> typeB means that myFunction as a typeA as parameter and return a TypeB
// myAttribute :: TypeC means that myAttribute as the TypeC
// Maybe TypeD means that our attribute or function deal with a TypeD if everything is ok or Nothing
// attributes:
// - list :: [HtmlAudioElement]
// - current :: Integer
// - state :: Boolean (play or pause)

// functions:
// - play :: NoParameter -> Boolean + side effect (play the song)
// - add :: TextUrl -> [HtmlAudioElement]
// - pause :: HtmlAudioElement -> Boolean + side effect (pause the song)
// - next  :: NoParameter -> Maybe HtmlAudioElement
// - previous :: [HtmlAudioElement] -> Maybe HtmlAudioElement
// - listEmpty :: NoParameter -> Boolean
// - searchList :: Text -> side effect (display html)


function MyPlayer(idSoundCloud){

  //attr
  var that = this;
  this.list = [];
  this.current = 0;
  //initialize the soundCloud API
  SC.initialize({
	 	client_id: idSoundCloud
	});

  //FUNCTIONS

  //play from the first song of the list
  this.play = function(){
    if(this.list.length){
      this.list[this.current].play();//play function from HtmlAudioElement
      this.state = true;
      return true;
    }else{
      console.log("no songs in the playlist");
      return false
    }
  };

  //pause the current song
  this.pause = function(){
      this.list[this.current].pause();//pause function from HtmlAudioElement
      this.state = false;
      return true;
  };

  this.add = function(idSong){
    //that.list.push(new Audio(song.uri));
    //create the song from the url
    SC.stream("/tracks/" + idSong, function(sound){
        that.list.push(new Audio(sound.url));
    });
    return this.list
  };

  this.next = function(){
    if(that.current  < (that.list.length - 1)){
      //stop the current song
      that.list[that.current].pause();
      //return to the beginning of the song
      that.list[that.current].currentTime = 0.0;
      //change the current element
      that.current += 1;
      //play the new current song
      if(that.state){
        that.list[that.current].play();
      }else{
        that.list[that.current].pause();
      }
    }else{
      console.log("No next song to play!")
    }
  };

  this.previous = function(){
    if(that.current > 0){
      //stop the current song
      that.list[that.current].pause();
      that.list[that.current].currentTime = 0.0;
      //change the current element
      that.current -= 1;
      //play the new current song
      if(that.state){
        that.list[that.current].play();
      }else{
        that.list[that.current].pause();
      }
    }else{
      console.log("No previous song to play!")
    }
  }

  this.emptyList = function(){
    return (that.list.length > 0) ? true : false;
  }

  this.searchList = function(str, callback) {
     SC.get('/tracks', { q: str }, function(tracks) {
        callback(tracks);
    });
  }

  this.currentSong = function(){
    return that.list[that.current];
  }

  this.updateCurrentSong = function(id){
    that.list[that.current].pause();
    //return to the beginning of the song
    that.list[that.current].currentTime = 0.0;
    //change the current element
    that.current = id;
    //play the new current song
    if(that.state){
      that.list[that.current].play();
    }else{
      that.list[that.current].pause();
    }
  }

}
