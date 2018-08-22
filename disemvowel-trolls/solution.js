'use strict';

// function disemvowel(str) {
//   let vowelStr = 'aeiouAEIOU';
//   let noVowArray = [];
//   let vowelArray = vowelStr.split('');
//   let inputArray = str.split('');
//   for (let i = 0; i <= inputArray.length; i++) {
//     let j = 0;
//     while (( j <= vowelArray.length)) {
//       if (inputArray[i] === vowelArray[j]) {
//       }
//       else {
//         noVowArray += inputArray[i];
//       }
//     }
//   }
//   return String(noVowArray);
// }

// disemvowel('abcaeiouabc');

//I was vetoed on solving it without being cute...

function disemvowel(str) {
  return str.replace(/[aeiou]/ig, '');
}