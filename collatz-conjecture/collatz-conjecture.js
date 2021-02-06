export const steps = (num) => {
  const err = "Only positive numbers are allowed";
  if (num < 1) throw new Error(err);
  let count = 0;
  let int = num;
  while (int > 1) {
    int % 2 === 0 ? (int /= 2) : (int = int * 3 + 1);
    count += 1;
  }
  return count;
};
