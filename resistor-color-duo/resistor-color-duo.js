export const decodedValue = (arr) => {
  const colors = 'black brown red orange yellow green blue violet grey white'.split(' ');
  return parseInt(
    colors.indexOf(arr[0]).toString() + colors.indexOf(arr[1]).toString()
  );
};

