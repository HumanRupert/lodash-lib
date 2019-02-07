var _ = {
  clamp (number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange (number, start, end) {
    if (typeof end === 'undefined'){
      let lower = start;
      end = lower;
      start = 0;
    }
    let low = start;
    let up = end;
    if(low > up){
      low = end;
      up = start;
    }
    if (number < up && number >= low){
      return true;
    } else {
      return false;
    }},
    words(string){
      var split = string.split(' ');
      return split;
    },
    pad(string, final) {
      const padding = final - string.length;
      if(padding > string.length){
        if(padding % 2 == 0){
          let even_pad = padding / 2;
          let space = " ".repeat(even_pad);
          let new_string = space + string + space;
          return new_string;
        } else {
          let start_pad = padding / 2 - 0.5;
          let end_pad = padding / 2 + 0.5;
          let startspace = " ".repeat(start_pad);
          let endspace = " ".repeat(end_pad);
          let new_string = startspace + string + endspace;
          return new_string;
        }
      } else {
        return string;
      }
    },
    has(obj, elm){
      if (typeof obj[elm] === 'undefined'){
        return false;
      } else {
        return true;
      }
    },
    invert(obj){
      var values = Object.keys(obj);
      var keys = Object.values(obj);
      var newobject = {};
      for (var i=0; i < keys.length; i++){
        for (var j=0; j < values.length; j++){
          newobject[keys[i]] = values[j];
        };
      };
      return newobject;
    },
    findKey (obj, func) {
      var k = Object.keys(obj)
      var v = Object.values(obj)
      for (let i = 0; i < v.length; i++) {
        if (func(v[i])) {
          return k[i];
          break;
        }
        }
      },
      drop (array, num) {
        if (typeof num === 'undefined'){
          array.shift()
          return array;
        } else {
          var it = 0;
          while (it < num) {
            it ++;
            array.shift();
          };
          return array;
        }
      },
      dropWhile (array, func) {
        var firstFalsyIndex;
        for (let i = array.length; i > -1; i--) {
          if (! func(array[i], i)) {
            firstFalsyIndex = i;
          }
        }
        return array.slice(firstFalsyIndex);
      },
      chunk (array, chunk) {
        var start = 0;
        var end = chunk;
        var quot = Math.floor(array.length / chunk);
        var newarray = [];
        if (array.length % chunk === 0) {
          let i = 0;
          while (i < quot) {
            newarray.push(array.slice(start, end));
            start = start + chunk;
            end = end + chunk;
            i++;
          };
        } else {
          let i = 0;
          while (i < quot) {
            newarray.push(array.slice(start, end));
            start = start + chunk;
            end = end + chunk;
            i++;
        };
        i = 0;
        while (i < (quot * chunk)) {
          array.shift()
          i++
        };
        newarray.push(array);
      }
      return newarray;
    }
  };
// Do not write or modify code below this line.
module.exports = _;
