function textGetter() {
	return new Promise(function(resolve, reject) {
	    var textRequest = new XMLHttpRequest();
	    textRequest.open('GET', 'assets/json/text.json', false);

	    textRequest.onload = function() {
	      	if (this.status == 200) {
			    resolve(JSON.parse(textRequest.responseText));
	      	} else {
				reject('ERROR: Request code of \"text.json\" isn\'t 200 (' + textRequest.status + ')');
	      	}
	    };

	    textRequest.onerror = function() {
	    	reject(new Error("Network Error"));
	    };

	    textRequest.send('GET');
	});
}