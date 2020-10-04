const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (text) => [
    ...new Set(
      text
        .toLowerCase()
        .split('')
        .filter(char => char.match(/[a-z]/))
    )
  ].length === ALPHABET.length;
