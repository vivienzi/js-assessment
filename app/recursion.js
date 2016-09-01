exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
      var fib = function (a, b, q) {
          if (q === 0) { return a; }
          if (q === 1) { return b; }
          return fib(b, a + b, q - 1);
      };
      return fib(0, 1, n);

  },

  validParentheses: function(n) {
      var vParens = function (nInPar, nOutPar) {
          var result = [];
          var theRest = [];
          if (nOutPar === 0) { return ['']; }
          if (nInPar > 0) {
              theRest = vParens(nInPar - 1, nOutPar);
              theRest.forEach((el) =>result.push('('.concat(el)));
          }
          if (nOutPar > nInPar) {
              theRest = vParens(nInPar, nOutPar - 1);
              theRest.forEach((el) =>result.push(')'.concat(el)));
          }
          return result;
      };
 +    return vParens(n, n);
  }
};
