const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const alphabetIndex = letter => ALPHABET.indexOf(letter);
const randomNumber = max => Math.floor(Math.random() * max);

export class Cipher {
  constructor(key = Cipher.generateRandomKey(Cipher.RANDOM_KEY_LENGTH)) {
    Cipher.validateKey(key);
    this.key = key;
  }

  static get RANDOM_KEY_LENGTH() {
    return 100;
  }

  static validateKey(key) {
    if (!/^[a-z]+$/.test(key)) throw new Error('Bad key');
  }

  static generateRandomKey(length) {
    return [...Array(length)]
      .map(() => ALPHABET[randomNumber(ALPHABET.length)])
      .join('');
  }

  static shift(prevIndex, offset) {
    return ((prevIndex + offset) + ALPHABET.length) % ALPHABET.length;
  }

  encode(plaintext) {
    return this.convert(plaintext, 1);
  }

  decode(ciphertext) {
    return this.convert(ciphertext, -1);
  }

  convert(text, direction) {
    return text.split('')
      .map((letter, i) => ALPHABET[
        Cipher.shift(alphabetIndex(letter), (this.offset(i, direction)))
      ])
      .join('');
  }

  offset(index, direction) {
    return ALPHABET.indexOf(this.key[index % this.key.length]) * direction;
  }
}
