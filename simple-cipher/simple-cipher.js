export class Cipher {
  constructor() {
    this.cipherKey = Cipher.generateKey();
  }


  encode(rawText) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    console.log(rawText);
    // console.log(alphabet.indexOf('a'));
    // console.log(this.key);
    // console.log(this.key.substr(0, 10));
    const res = rawText.split('').map((letter, i) => {
      const position = i + alphabet.indexOf(letter);
      return this.key[position];
    });
    console.log(res.join(''));
    return res.join('');
  }

  decode(encodedText) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // console.log(this.key);
    console.log(encodedText);
    // console.log('aaaaaaaaaa');
    const res = encodedText.split('').map((letter, i) => {
      // const pos1 = alphabet.indexOf(letter);
      const position = alphabet.indexOf(letter) - alphabet.indexOf(this.key[i]);
      // console.log(pos1);
      // console.log(position);
      console.log('***');
      console.log(`Key: ${this.key}`);
      console.log(`Letter: ${letter}`);
      console.log(`Index: ${i}`);
      console.log(alphabet.indexOf(letter));
      console.log(alphabet.indexOf(this.key[i]));
      console.log(alphabet.indexOf(letter) - alphabet.indexOf(this.key[i]));
      console.log((alphabet.indexOf(letter) - alphabet.indexOf(this.key[i % this.key.length]) + alphabet.length) % alphabet.length);
      console.log('$$$$');
      return alphabet[position];
    });
    console.log(res.join(''));
    return res.join('');
  }


  // function decodedChar (char, index, key) {
  //   return charset[(alphabet.indexOf(letter) - alphabet.indexOf(this.key[i % this.key.length]) + alphabet.length) % alphabet.length]
  // }




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
