export function solve(x, y) {
  const position = (x ** 2) + (y ** 2);
  if (typeof (x) !== 'number' || typeof (y) !== 'number') {
    return null;
  }
  if (Math.sqrt(position) > 10) {
    return 0;
  }
  if (Math.sqrt(position) > 5) {
    return 1;
  }
  if (Math.sqrt(position) > 1) {
    return 5;
  }
  return 10;
}
