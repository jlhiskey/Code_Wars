'use strict';
function insertDash(num) {
  let stringify = String(num);
  let withDash = '';
  for (let i = 0; i < stringify.length; i++) {
    withDash += stringify.charAt(i);
    if ((Number(stringify.charAt(i)) % 2 === 1) && (Number(stringify.charAt(i + 1)) % 2 === 1)) {
      withDash += '-';
    }
  }
  return withDash;
}



let x = -4%2
undefined
x
-0
false
x*x
0
x === -x
true