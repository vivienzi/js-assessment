exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

  },

  manipulateRemoteData: function(url) {
  	var xhttp = new XMLHttpRequest();
  	var resultArray = [];
  	xhttp.onreadystatechange = function() {
    	if(this.readyState == 4 && this.status == 200) {
			var textJSON = this.responseText;
			var parsed = JSON.parse(textJSON);
			var arr = [];
			for(var x in parsed){
  				arr.push(parsed[x]);
			}
			resultArray = arr;      
    	}
	};
  	xhttp.open("GET", "/data/testdata.json", true);
  	xhttp.send();
  	return resultArray.sort();
  };
};
