'use strict';
function insertDash(num) {
  let stringify = String(num);
  let withDash = '';
   (let i = 0; i < stringify.length; i++) {
    withDash += stringify.charAt(i);
    if ((Number(stringify.charAt(i)) % 2 === 1) && (Number(stringify.charAt(i + 1)) % 2 === 1)) {
      withDash += '-';
    }
  }
  return withDash;
}