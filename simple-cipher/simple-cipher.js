// export function Cipher(key = 'abc') {
//   this.key = key;
// }
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

// function generateKey() {
//   return Array(...Array(100))
//     .map(() => ALPHA[Math.floor(Math.random() * ALPHA.length)])
//     .join('');
// }


function arrayWithNegativeIndices(arr) {
  return new Proxy(arr, {
    get(target, prop, receiver) {
      let index = prop;
      if (prop.startsWith('-')) {
        index = receiver.length - Number(prop.substr(1));
      }
      return Reflect.get(target, index, receiver);
    },
  });
}

class Cipher {
  constructor(key = 'abcdefghij') {
    this.key = key;
  }

  encode(text) {
    console.log(this.key);
    console.log(text);
    
    const lettersMap = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
    };

    const res = [];
    const arr = text.split('');
    for (let i = 0; i < arr.length; i += 1) {
      
      let shift = (lettersMap[this.key[i % this.key.length]]);
      // console.log(ALPHA.indexOf(arr[i]));
      console.log(ALPHA[(shift + ALPHA.indexOf(arr[i])) % ALPHA.length]);
      res.push(ALPHA[(shift + ALPHA.indexOf(arr[i])) % ALPHA.length]);
      // console.log(lettersMap[this.key[(i + lettersMap[arr[i]]) % this.key.length]]);
    }
    
    return res.join('');
  }

  decode(text) {
    console.log(text);
    const lettersMap = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
    };
    const res = [];
    const arr = text.split('');
    for (let i = 0; i < arr.length; i += 1) {
      if ((lettersMap[arr[i]]) - i >= 0) {
        res.push(this.key[(lettersMap[arr[i]]) - i]);
      } else {
        res.push(arrayWithNegativeIndices(this.key.split(''))[(lettersMap[arr[i]]) - i]);
      }
    }
    console.log(res.join(''));
    return res.join('');
  }
}

module.exports = { Cipher };
