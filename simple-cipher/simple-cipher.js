export class Cipher {
  constructor() {
    this.cipherKey = Cipher.generateKey();
  }

  // encode() {}

  // decode() {}

  get key() {
    return this.cipherKey;
  }

  static generateKey() {
    const result = [];
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;

    for (let i = 0; i < 100; i += 1) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }

    return result.join('');
  }
}
