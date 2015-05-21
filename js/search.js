var buttonSearch = document.getElementById("buttonSearch");
var searchBox = document.getElementById("searchterm");

buttonSearch.addEventListener("click", function() {
	var result = document.getElementById("result");
	result.innerHTML = "";
	var searchResults = "";

	myPlayer.searchList(searchBox.value, function (list) {
		if(!list.length) {
			result.insertAdjacentHTML('beforeend', "<h3>No songs match your search query - try to have more mainstream taste next time</h3>")
		}
		for (var i = 0; i < list.length; i++) {
			if(list[i].streamable){
				searchResults += "<li id=" + list[i].id +">" + list[i].title + "</li>";
			};
			result.insertAdjacentHTML('beforeend', searchResults);
		}
	});
});
