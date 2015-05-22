var buttonSearch = document.getElementById("buttonSearch");
var searchBox = document.getElementById("searchterm");
var resultList = document.getElementById("result");
var listTracks = document.getElementById('listTracks');

buttonSearch.addEventListener("click", function() {
  resultList.innerHTML= "";
	var searchResults = "";

	myPlayer.searchList(searchBox.value, function(list){
		if(!list.length){
			var li = document.createElement('li');
			li.innerHTML = "No songs match your search query - try to have more mainstream taste next time";
			li.addEventListener("click", function(){console.log("click on the non result")});
      resultList.appendChild(li);
		}
		list.forEach(function(song){
			if(song.streamable){
				var li = document.createElement('li');
				li.innerHTML = song.title;
				li.setAttribute('id', song.id);
				li.setAttribute('name', 'clickable')
				li.addEventListener("click", function(){
          var liSong = li.cloneNode(li);
					liSong.setAttribute('value',myPlayer.list.length);
					myPlayer.add(song.id);
          liSong.addEventListener("click", function(){
            myPlayer.updateCurrentSong(liSong.value);
          });
					listTracks.appendChild(liSong);
				});
        resultList.appendChild(li);
			};
		});
	});
});
