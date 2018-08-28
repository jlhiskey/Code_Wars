'use strict';

// Original Solution Before Refactor

// function cubeOdd(arr) {
//   let cubeArr = [];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') {
//       return undefined;
//     }
//     else {
//       cubeArr[i] = Math.pow(arr[i], 3);
//     }
//   }
//   let j = 0;
//   while (j < cubeArr.length) {
//     if (cubeArr[j] % 2 !== 0) {
//       sum += cubeArr[j];
//       j++;
//     }
//     else {
//       j++;
//     }
//   }
//   return sum;
// };

// Refactored Solution

function cubeOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return undefined;
    }
    else {
      if ((Math.pow(arr[i], 3)) % 2 !== 0) {
        sum += (Math.pow(arr[i], 3));}
    }
  }
  return sum;
};

cubeOdd(['a',12,9,'z',42]);