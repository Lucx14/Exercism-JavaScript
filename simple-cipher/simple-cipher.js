const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const alphabetIndex = letter => ALPHABET.indexOf(letter);
const newIndex = (oldIndex, shift) => ((oldIndex + shift) + ALPHABET.length) % ALPHABET.length;

export class Cipher {
  constructor(key = Cipher.generateRandomKey(100)) {
    Cipher.validateKey(key);
    this.key = key;
  }

  static validateKey(key) {
    if (!/^[a-z]+$/.test(key)) throw new Error('Bad key');
  }

  static generateRandomKey(length) {
    let result = '';
    do {
      result += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    while (result.length < length);
    return result;
  }

  encode(plaintext) {
    return this.convert(plaintext, 1);
  }

  decode(ciphertext) {
    return this.convert(ciphertext, -1);
  }

  convert(text, direction) {
    return text.split('')
      .map((_, i) => ALPHABET[newIndex(alphabetIndex(text[i]), (this.shift(i, direction)))])
      .join('');
  }

  shift(index, direction) {
    return ALPHABET.indexOf(this.key[index % this.key.length]) * direction;
  }
}
