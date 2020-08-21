const CONSTRUCTOR_MIN = 0;
const CONSTRUCTOR_MAX = 9999;
const PRIVATE_KEY_MIN = 2;
const ARGUMENT_ERROR = 'Argument Error';
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

export class DiffieHellman {
  constructor(p, g) {
    this.validate_inputs(p, g);

    this.p = p;
    this.g = g;
  }

  validate_inputs(p, g) {
    [p, g].forEach(val => {
      if (val < CONSTRUCTOR_MIN || p > CONSTRUCTOR_MAX || !isPrime(val) ) {
        throw new Error(ARGUMENT_ERROR);
      } 
    });
  }

  validate_private_key(key) {
    if (key < PRIVATE_KEY_MIN || key >= this.p) throw new Error(ARGUMENT_ERROR);
  }

  getPublicKeyFromPrivateKey(privateKey) {
    this.validate_private_key(privateKey);
    return this.generateKey(this.g, privateKey);
  }

  getSharedSecret(privateKey, publicKey) {
    return this.generateKey(publicKey, privateKey);
  }

  generateKey(a, b) {
    return a ** b % this.p;
  }
}
