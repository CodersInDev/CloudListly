test("Check the document has loaded fully", function(){
//assign the iframe object to a varaiabl called iframe
var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
var target = iframe.contentDocument || iframe.contentWindow.document;
//find the element with id hello in the iframe and get its contents
var ready = target.readyState;
equal(ready, "complete", "it works!")
});


test("Check the search bar exists", function(){
//assign the iframe object to a varaiabl called iframe
var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
var target = iframe.contentDocument || iframe.contentWindow.document;
//find the element with id hello in the iframe and get its contents
var search = target.getElementById("buttonSearch").value;

equal(search, "search", "it works!")
});