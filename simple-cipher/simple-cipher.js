export class Cipher {
  constructor(key = Cipher.generateRandomKey(100)) {
    Cipher.validateKey(key);
    this.key = key;
  }

  static get ALPHABET() { return 'abcdefghijklmnopqrstuvwxyz'; }

  static validateKey(key) {
    if (!/^[a-z]+$/.test(key)) throw new Error('Bad key');
  }

  static generateRandomKey(length) {
    let result = '';
    for (let i = 0; i < length; i += 1) {
      result += Cipher.ALPHABET.charAt(Math.floor(Math.random() * this.ALPHABET.length));
    }
    return result;
  }

  encode(plaintext) {
    const letters = plaintext.split('');
    const result = [];

    for (let index = 0; index < letters.length; index += 1) {
      const letterIndex = Cipher.ALPHABET.indexOf(letters[index]);
      const diff = Cipher.ALPHABET.indexOf(this.key[index % this.key.length]);
      result.push(Cipher.ALPHABET[(letterIndex + diff) % 26]);
    }

    return result.join('');
  }

  decode(ciphertext) {
    const letters = ciphertext.split('');
    const result = [];

    for (let index = 0; index < letters.length; index += 1) {
      const letterIndex = Cipher.ALPHABET.indexOf(letters[index]);
      const diff = Cipher.ALPHABET.indexOf(this.key[index]);
      const newIndex = letterIndex - diff < 0 ? (letterIndex - diff) + 26 : letterIndex - diff;
      result.push(Cipher.ALPHABET[newIndex]);
    }

    return result.join('');
  }
}
