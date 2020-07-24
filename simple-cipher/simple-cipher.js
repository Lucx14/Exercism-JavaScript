const generateRandomKey = (length) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const validateKey = (key) => {
  const regex = /^[a-z]+$/;
  if (!regex.test(key)) {
    throw new Error('Bad key');
  }
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export class Cipher {
  constructor(key = generateRandomKey(100)) {
    validateKey(key);
    this.key = key;
  }

  encode(plaintext) {
    const letters = plaintext.split('');
    const result = [];

    for (let i = 0; i < letters.length; i += 1) {
      const letterIndex = alphabet.indexOf(letters[i]);
      const diff = alphabet.indexOf(this.key[i % this.key.length]);
      result.push(alphabet[(letterIndex + diff) % 26]);
    }

    return result.join('');
  }

  decode(ciphertext) {
    const letters = ciphertext.split('');
    const result = [];

    for (let i = 0; i < letters.length; i += 1) {
      const letterIndex = alphabet.indexOf(letters[i]);
      const diff = alphabet.indexOf(this.key[i]);
      const newIndex = letterIndex - diff < 0 ? (letterIndex - diff) + 26 : letterIndex - diff;
      result.push(alphabet[newIndex]);
    }

    return result.join('');
  }
}
