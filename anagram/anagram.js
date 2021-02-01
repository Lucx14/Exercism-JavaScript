'use strict';

export const findAnagrams = (word, possibleAnagrams) => {
  const sortWord = (word) => word.toLowerCase().split('').sort().join('');

  const sortedWord = sortWord(word);

  return possibleAnagrams.filter(anagram => {
    const downcaseAnagram = anagram.toLowerCase();
    return downcaseAnagram !== word.toLowerCase() && sortWord(anagram) === sortedWord;
  })
};
