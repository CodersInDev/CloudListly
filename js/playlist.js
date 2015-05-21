function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var result = document.getElementById('result');

result.onclick = function(event) {
    var target = getEventTarget(event);
    var addedTrack = document.createElement('li');
    addedTrack.innerHTML = target.innerHTML;
    addedTrack.setAttribute('id',target.getAttribute('id'));
    var listTracks = document.getElementById('listTracks');
    listTracks.appendChild(addedTrack);
    loadSong(target.getAttribute('id'));
}
