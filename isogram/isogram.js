'use strict';

export const isIsogram = (word) => {
  const lettersCount = {};
  const letters = [...word.toLowerCase()].filter(x => /[a-z]/.test(x))
  for (const letter of letters) {
    lettersCount[letter] ? lettersCount[letter]++ : lettersCount[letter] = 1;
  }
  return Object.values(lettersCount)
    .filter(x => x > 1).length > 0 ? false : true;
};

// export const isIsogram = (word = '') => !/([a-z]).*\1/i.test(word);

