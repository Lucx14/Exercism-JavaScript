export const encode = (string) => {
  let encoded = '';
  const arr = string.match(/(.)\1{0,}/g);

  if (string === '') return '';
  if (arr.length === string.length) return string;

  for (let i = 0; i < arr.length; i += 1) {
    arr[i].length > 1 ? encoded += `${arr[i].length + arr[i][0]}` : encoded += `${arr[i]}`;
  }

  return encoded;
};


export const decode = (string) => {
  let decoded = '';
  const arr = string.match(/[a-zA-Z]|[ ]|[^a-zA-Z\s]+/gi);

  if (string === '') return '';

  for (let i = 0; i < arr.length; i += 1) {
    if (Number.isInteger(parseInt(arr[i], 10))) {
      decoded += `${arr[i + 1].repeat(parseInt(arr[i], 10))}`;
    } else if (!Number.isInteger(parseInt(arr[i], 10)) && !Number.isInteger(parseInt(arr[i - 1], 10))) {
      decoded += `${arr[i]}`;
    }
  }
  return decoded;
};
