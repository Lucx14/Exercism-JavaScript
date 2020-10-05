const ALPHABET_SIZE = 26;
const LETTER = /[a-z]/g;

export const isPangram = (text) => (
  new Set(
    text
      .toLowerCase()
      .match(LETTER)
    ).size === ALPHABET_SIZE
);
