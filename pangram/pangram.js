const ALPHABET_SIZE = 26;

export const isPangram = (text) => new Set(text.toLowerCase().match(/[a-z]/g)).size === ALPHABET_SIZE;
