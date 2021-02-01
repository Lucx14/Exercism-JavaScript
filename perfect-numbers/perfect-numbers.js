'use strict';

export const classify = (num) => {
  if (num <= 0) throw new Error('Classification is only possible for natural numbers.');

  const aliquotSum = [
    ...Array(num).keys()
  ].slice(1)
   .filter(x => num % x === 0)
   .reduce((acc, val) => acc + val, 0);

  if (aliquotSum === num) {
    return 'perfect';
  } else if (aliquotSum > num) {
    return 'abundant';
  } else {
    return 'deficient';
  }
};
