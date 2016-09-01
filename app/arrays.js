exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
      return -1;
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i< arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice( 0, 0, item );
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var cnt = 0;
    for(var i = 0; i < arr.length; i++)
        if (arr[i] == item) {
          cnt++;
        }
    return cnt;
  },

  duplicates: function(arr) {
    arr.sort();
    var res = [];
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] == arr[i + 1]) {
        res.push(arr[i]);
        while (arr[i] == arr[i+1]) {
          i++;
        }
      } else {
        i++;
      }
    }
    return res;
  },

  square: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr.splice(i, 1, arr[i]*arr[i]);
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var indexes = [];
    for(var i = 0; i < arr.length; i++)
        if (arr[i] === target)
            indexes.push(i);
    return indexes;
  }
};
