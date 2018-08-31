'use strict';

function capitalize(s,arr){
  let letterArray = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < letterArray.length) {
      letterArray[arr[i]] = letterArray[arr[i]].toUpperCase();
    }
  }
  return letterArray.join('');
};