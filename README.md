# CloudListly

##Why?

Do you want to be able to make a brand new playlist using SoundCloud tracks *without* logging into your account? Now you can, using CloudListly.

##What?

CloudListly is a mobile first application which gives you the opportunity to create your own playlist using tracks from soundcloud. The tabbed components makes it easy to navigate the app: the search tab allows you to search SoundCloud for tracks and add them to your playlist; and the playlist tab allows you to view your new playlist. The embedded player enables you to play your music, whichever tab you're in.  You can find CloudListly [here](http://codersindev.github.io/CloudListly/).  

#### At the moment

With the application you can:

* Search songs and view a list of the results
* Select songs from the results and add them to your playlist
* Play your playlist, starting from a song of your choice
* Play and pause your playlist, and skip forwards and backwards
* Navigate between the search page and your playlist page using tabs
* Use the 'info' button to see more information about the current playing song
* Run some tests

#### Work to do next

With the application you will be able to

* Reset your playlist
* Be able to search songs dynamically
* See in the player what song is now playing
* See which tracks in the results list have already been added to the playlist

##How?

To view CloudListly in action, go [here](http://codersindev.github.io/CloudListly/). 

**To start a code review, fork the repo, clone it, then load the link above. If you really want to run the files from your local machine, you need to run a server - like harp or simple python server**  

* python -m SimpleHTTPServer
 
####Testing

If you want to test in Chrome, you'll have to run a Python server, as above, and go to [http://localhost:8000/test.html](http://localhost:8000/test.html).

Currently there are two tests (from the tests.js file), which are both passing.
1. The first test checks that the document to be tested (index.html) has been loaded fully into the page.
2. The second test checks that the search bar exists on the page, by finding the id of the search button and checking that it is as expected.
