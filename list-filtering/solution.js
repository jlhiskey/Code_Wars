'use strict';

function filter_list(array) {

  return array.filter(element => typeof element === 'number');
}

filter_list([1,2,'a','b']);