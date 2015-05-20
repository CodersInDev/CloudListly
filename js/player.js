//player functionalities
SC.stream("/tracks/293", function(sound){
    console.log(sound);
    $("#audioPlayer").attr("src", sound.url);
});
