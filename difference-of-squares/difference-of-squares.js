'use strict';

export class Squares {
  constructor(num) {
    this.data = [...Array(num + 1).keys()].slice(1);
  }

  get sumOfSquares() {
    return this.data.reduce((acc, val) => acc + val ** 2, 0);
  }

  get squareOfSum() {
    return (this.data.reduce((a,b) => a + b, 0)) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
