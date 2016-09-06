exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return $.Deferred().resolve(value).promise();
  },


  manipulateRemoteData: function(url) {
  	var get = $.ajax(url);
	get.done(function(response){
	  peopleArray = [];
	    for (var person in response.people){
	      peopleArray.push(response.people[person].name);
	    }
	    peopleArray.sort(); // Not required in this case.
	}, function(err) {
		
	});
	return peopleArray;
  }
};
//    manipulateRemoteData: function(url) {
//  	var xhttp = new XMLHttpRequest();
//  	var resultArray = [];
//  	xhttp.onreadystatechange = function() {
//    	if(this.readyState == 4 && this.status == 200) {
//			var textJSON = this.responseText;
//			var parsed = JSON.parse(textJSON);
//			var arr = [];
//			for(var x in parsed){
//  				arr.push(parsed[x]);
//			}
//			resultArray = arr;      
//    	}
//	};
//  	xhttp.open("GET", url, true);
//  	xhttp.send();
//  	return resultArray.sort();
//  };
//};
