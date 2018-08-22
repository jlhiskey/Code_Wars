'use strict';

function isNice(arr) {
  let value = false;
  if (arr.length === 0 || arr.length === 1) {
    return value;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
        value = true;
      }
      else {
        return false;

      }
    }
    return value;
  }
};