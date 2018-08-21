'use strict';

let pString = 'abcdefracecar';

function pFinder(pString) {
  let pal = false;
  let i = 0;
  while ((pal === false) && (i < pString.length - 2)) {
    console.log('i=', i);
    let j = i + 2;
    while (j < pString.length){
      console.log('j=', j);
      if (pString[i] === pString[j]) {
        let begin = i + 1;
        let end = j - 1;
        let match = true;
        while ((match === true) && (begin <= end)) {
          console.log('begin=', begin);
          console.log('end=', end);
          if (pString[begin] === pString[end]) {
            begin++;
            end++;
          }
          else {
            match = false;
          }
          if (match === true) {
            pal = true;
          }
        }
      }
      j++;
    }
    i++;
  }
  return pal;
}

pFinder(pString);


