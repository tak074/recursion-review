// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var arrStr = [];
    for (var i = 0; i < obj.length; i++) {
      arrStr.push(stringifyJSON(obj[i]));
    }

    return arrStr = '[' + arrStr + ']';
  }

  //object
  if (typeof obj === 'object') {
    var emp = [];
    for (var key in obj) {
      var objStr = stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      emp.push(objStr);
      if (obj[key] === undefined) {
        return '{}';
      }
      //
    }
    return emp = '{' + emp + '}';
  }

};