'use strict';

function validatePIN (pin) {
  let testing = /^\d{4}$|^\d{6}$/.test(pin);
  return testing;
}