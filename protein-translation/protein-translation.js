const translation = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
};

const translate = (arg) => {
  if (arg === undefined) return [];

  const arr = arg.match(/.{1,3}/g);
  let result = arr.map(x => translation[x]);
  const error = 'Invalid codon';
  const keys = Object.keys(translation);

  arr.forEach((x) => {
    if (!keys.includes(x)) result = ['err'];
  });

  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === 'STOP') result = result.slice(0, i);
  }

  if (result.includes('err')) throw new Error(error);
  return result;
};


export default translate;
