'use strict';

function mutateMyStrings(stringOne, stringTwo){
  let arrOne = stringOne.split('');
  let arrTwo = stringTwo.split('');

  let finalString = (stringOne + '\n');

  for (let i = 0; i < arrOne.length; i++) {

    if (arrOne[i] !== arrTwo[i]) {
      arrOne[i] = arrTwo[i];
      finalString = finalString.concat(arrOne.join('') + '\n');
    }
  }
return finalString;
}

mutateMyStrings('bubble gum', 'turtle ham');