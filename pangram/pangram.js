const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (text) => {
  const chars = text.toLowerCase().split('').sort();
  const lettersUsed = [...new Set(chars)].filter(char => char.match(/[a-z]/)).join('');
  return lettersUsed === ALPHABET;
};
