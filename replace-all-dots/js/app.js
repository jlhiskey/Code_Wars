'use strict';

var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}


var x = 15;
var y = 10;

console.log(x);



function abbrevName(name){
  let splitName = name.split(' ');
  let firstInitial = splitName [0][0];
  let lastInitial = splitName [1][0];
    
  return `${firstInitial}.${lastInitial}`
}