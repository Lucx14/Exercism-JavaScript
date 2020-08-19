const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const LETTER = /[A-Za-z]/;
const LOWER_CASE = /[a-z]/;
const shiftLetter = (letter, shift) => {
  const newLetter = ALPHABET[(ALPHABET.indexOf(letter.toLowerCase()) + shift) % ALPHABET.length];
  return LOWER_CASE.test(letter) ? newLetter : newLetter.toUpperCase();
};

export class RotationalCipher {
  static rotate(plain_text, key) {
    return [...plain_text]
      .map(char => LETTER.test(char) ? shiftLetter(char, key) : char)
      .join('');
  };
};
