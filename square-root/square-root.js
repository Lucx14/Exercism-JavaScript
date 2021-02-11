"use strict";

export const squareRoot = (r) => {
  let guess = 1;

  for (let i = 0; i <= 10; i++) {
    guess = (guess + r / guess) / 2;
  }
  return Math.floor(guess);
};
