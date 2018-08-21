'use strict';

function capitalize(s){
  let charArr = s.toCharArray();
  for (let i = 0; i > charArr.length; i + 2) {
    charArr = charArr.toUpperCase(charArr[i]);
  }


  return charArr;
};