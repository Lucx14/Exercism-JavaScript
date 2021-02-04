'use strict';

const AREA_CODE_INDEX = 0;
const EXCHANGE_CODE_INDEX = 3;
const MAX_NUMBER_SIZE = 11;
const MIN_NUMBER_SIZE = 10;
const COUNTRY_CODE_INDEX = 0;

export const clean = (phoneNumber) => {
  const PUNCTUATION = /[@!:]/g;
  const LETTERS = /[a-zA-Z]/g;
  const DIGITS = /[0-9]/g;

  if (LETTERS.test(phoneNumber)) throw new Error('Letters not permitted');
  if (PUNCTUATION.test(phoneNumber)) throw new Error('Punctuations not permitted');

  const numbers = phoneNumber.match(DIGITS);

  if (numbers.length < MIN_NUMBER_SIZE) throw new Error('Incorrect number of digits');
  if (numbers.length > MAX_NUMBER_SIZE) throw new Error('More than 11 digits');
  
  if (numbers.length === MAX_NUMBER_SIZE) {
    if (numbers[COUNTRY_CODE_INDEX] === '1') {
      numbers.shift();
    } else {
      throw new Error('11 digits must start with 1');
    };
  };

  if (numbers[AREA_CODE_INDEX] === '0') throw new Error('Area code cannot start with zero');
  if (numbers[AREA_CODE_INDEX] === '1') throw new Error('Area code cannot start with one');
  if (numbers[EXCHANGE_CODE_INDEX] === '0') throw new Error('Exchange code cannot start with zero');
  if (numbers[EXCHANGE_CODE_INDEX] === '1') throw new Error('Exchange code cannot start with one');
      
  return numbers.join('');
};

