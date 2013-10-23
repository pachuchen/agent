	Event.observe(window, 'load', loadCalls);

	function loadCalls() {
		//Load the pages one by one to the divs
	    loadPages('templates/header.html','header');
	}

	function loadPages(path,loadToId){
	     //IE cache the response when the request parameters are the same
	    //So We send a random parameter weith the request
	    var random = Math.floor(Math.random() * 2000);

	    new Ajax.Request(path+'?rand=' + random,
	    {
	        method:'get',
	        evalScripts: true,
	        parameters:{random:random},
	        onSuccess: function(transport) {
	            document.getElementById(loadToId).innerHTML = transport.responseText;
	        },
	        onFailure: function() {
	            setError('Problem with loading the file');
	        }
	    });
	}
      
$(function() {

});
