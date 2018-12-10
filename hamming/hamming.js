export const compute = (a, b) => {
  if (a.length !== b.length) throw 'left and right strands must be of equal length';
  let count = 0;
  let arr = a.split('');
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== b[i]) count += 1;
  }
  return count;
}