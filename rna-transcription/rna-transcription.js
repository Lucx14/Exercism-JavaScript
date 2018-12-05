export const toRna = (sequence) => {
  const err = 'Invalid input DNA.';
  const map = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  const arr = sequence.split('').map(x => map[x]);

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof (arr[i]) === 'undefined') {
      throw err;
    }
  }

  return arr.join('');
};
