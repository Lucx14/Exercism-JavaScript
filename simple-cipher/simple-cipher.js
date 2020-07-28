const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

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
    return this.convert(plaintext, 'encode');
  }

  decode(ciphertext) {
    return this.convert(ciphertext, 'decode');
  }

  convert(text, direction) {
    const letters = text.split('');
    const result = [];

    for (let index = 0; index < letters.length; index += 1) {
      const letterIndex = ALPHABET.indexOf(letters[index]);
      const diff = ALPHABET.indexOf(this.key[index % this.key.length]);
      const newIndex = direction === 'encode'
        ? (letterIndex + diff) % ALPHABET.length
        : (((letterIndex - diff) + ALPHABET.length) % ALPHABET.length);
      result.push(ALPHABET[newIndex]);
    }

    return result.join('');
  }
}
