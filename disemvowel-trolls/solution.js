'use strict';

function disemvowel(str) {
  let vowelStr = 'aeiouAEIOU';
  let noVowStr = '';
  let vowelArray = vowelStr.split('');
  let inputArray = str.split('');
  let i = 0;
  while (i <= inputArray.length) {
    let match = false;
    let j = 0;
    while ((match === false) && (j <= vowelStr.length)) {
      if (inputArray[i] === vowelArray.charAt(j)) {
        match = true;
      }
      else {
        j++;
      }
    }
    if (match === false) {
      noVowStr = str.charAt(i);
    }
    else {
      i++;
    }
  }
  return noVowStr;
}

disemvowel('abcaeiouabc');