test("Check the document has loaded fully", function(){
//assign the iframe object to a varaiabl called iframe
var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
var target = iframe.contentDocument || iframe.contentWindow.document;
//find the element with id hello in the iframe and get its contents
var ready = target.readyState;
equal(ready, "complete", "it works!");
});


test("Check the search bar exists", function(){
//assign the iframe object to a varaiabl called iframe
var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
var target = iframe.contentDocument || iframe.contentWindow.document;
//find the element with id hello in the iframe and get its contents
var search = target.getElementById("buttonSearch").value;

equal(search, "Search", "it works!");
});


test("Check that the welcome message displays", function(){
	var iframe = document.getElementById("iframe");
	var target = iframe.contentDocument || iframe.contentWindow.document;
	var welcome = target.getElementById("welcomeMessage").innerHTML;

	equal(welcome, "Welcome to CloudListly", "it works!");
});

setTimeout(function() { // this is only here so you can see the page change!
test("check if the result of a search is not empty with a normal search", function(assert){
	var iframe = document.getElementById("iframe");
var done = assert.async();
var target = iframe.contentDocument || iframe.contentWindow.document;
var search = target.getElementById('searchterm');
search.value = "rubierubierubie";
var result = target.getElementById('buttonSearch').click();
// wait for the next page to load
 notEqual(result, "" );
  done();
});
}, 2000); // wait two seconds before running the second test!
