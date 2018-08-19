'use strict';

function capitalize(s){
  let array = [];
  let string1 = '';
  let string2 = '';
  for (var i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      string1 += s[i].toUpperCase();
      string2 += s[i];
    }
    else {
      string2 += s[i].toUpperCase();
      string1 += s[i];
    }
  }
  array.push(string1, string2);
  return array;
}