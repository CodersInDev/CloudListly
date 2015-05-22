function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var result = document.getElementById('result');
var listTracks = document.getElementById('listTracks')
result.onclick = function(event) {
  console.log("wrong");
    var target = getEventTarget(event);
    var addedTrack = document.createElement('li');
    addedTrack.innerHTML = target.innerHTML;
    addedTrack.setAttribute('id',target.getAttribute('id'));
    addedTrack.setAttribute('value',myPlayer.list.length)
    var listTracks = document.getElementById('listTracks');
    listTracks.appendChild(addedTrack);
    //create and add the song
    //createSong(target.getAttribute('id'));
    myPlayer.add(target.getAttribute('id'));
}

//Start playlist from the song in the playlist that is clicked 
listTracks.onclick = function(event) {
    var target = getEventTarget(event);
    myPlayer.updateCurrentSong(target.getAttribute('value'));
}
