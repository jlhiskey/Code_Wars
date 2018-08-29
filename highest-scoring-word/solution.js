'use strict';

function high(x){
  let splitX = x.split(' ');
  let sumArr = [];
  for (let i = 0; i < splitX.length; i++) {
    sumArr.push(0);
    for ( let j = 0; j < splitX[i].length ; j++ ) {
      sumArr[i] += (splitX[i][j].charCodeAt() - 96);
    }
  }
  return splitX[sumArr.indexOf(Math.max(...sumArr))];
}

high('massage yes massage yes massage');