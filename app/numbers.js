exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var a = num.toString(2);
  	var b = a.charAt(a.length - bit);
  	var c = b.toString();
  	var d = parseInt(c, 10);
  	return d;
  },

  base10: function(str) {
  	var a = parseInt(str, 2);
  	return a;
  },

  convertToBinary: function(num) {
  	return ("000000000" + num.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
  	var atens = Math.pow(10,String(a).length - String(a).indexOf('.') - 1), 
      btens = Math.pow(10,String(b).length - String(b).indexOf('.') - 1); 
  var result = (a * atens) * (b * btens) / (atens * btens); 
  return result;
  }
};
