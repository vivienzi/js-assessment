exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
    reduceString: function(str, amount) {
        var finalString = '', cL = '', counter;
        str.split('').forEach(function(i){
        if (i !== cL) counter = 0;
        counter++;
        cL = i;
        if (counter <= amount ) finalString = finalString + i;
    });
        return finalString;
  },

  wordWrap: function(str, cols) {
      var formatedString = '',
          wordsArray = [];
      wordsArray = str.split(' ');
      formatedString = wordsArray[0];
      for (var i = 1; i < wordsArray.length; i++) {
        if (wordsArray[i].length > cols) {
            formatedString += '\n' + wordsArray[i];
        } else {
            if (formatedString.length + wordsArray[i].length > cols) {
                formatedString += '\n' + wordsArray[i];
            } else {
                formatedString += ' ' + wordsArray[i];
            }
        }
    }

  },

  reverseString: function(str) {
      var o = '';
      for (var i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;
  }
};
