'use strict';

function titleCase(title, minorWords) {
  let stringTitle = '';
  if (title === '') {
    stringTitle = title;
  }
  else {
    let lowerTitle = title.toLowerCase();
    if (minorWords === null) {
      var lowerMinorWords = 'z z';
    }
    else {
      lowerMinorWords = minorWords.toLowerCase();
    }
    let titleArray = lowerTitle.split(' ');
    let minorWordsArray = lowerMinorWords.split(' ');
    for (let i = 0; i < titleArray.length; i++) {
      if (i === 0){
        titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].substr(1);
      }
      else {
        let match = false;
        let j = 0;
        while ((match === false) && (j < minorWordsArray.length)) {
          if (titleArray[i] === minorWordsArray[j]) {
            match = true;
          }
          else {
            j++;
          }
        }
        if (match === true) {
          titleArray[i] = titleArray[i].charAt(0).toLowerCase() + titleArray[i].substr(1);
        }
        else {
          titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].substr(1);
        }
      }
    }
    stringTitle = titleArray.join(' ');
  }
  return stringTitle;
}

titleCase('a clash of KINGS', 'a an the of');
titleCase('the quick brown fox', 'The Quick Brown Fox');
titleCase('THE WIND IN THE WILLOWS', 'The In');
titleCase('the quick brown fox');