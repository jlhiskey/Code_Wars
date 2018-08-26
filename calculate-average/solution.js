'use strict';

function find_average(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return ((array.reduce(reducer)) / array.length);
}

find_average([1,2,3]);