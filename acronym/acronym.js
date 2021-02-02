'use strict';

export const parse = (text) => {
  const sanitizedText = [
    ...text.replace(/-/g, ' ').toUpperCase()
  ]
    .filter(char => !/['_,]/g.test(char))
    .join('')
    .replace(/\s{2,}/g, ' ');
  return sanitizedText.split(' ').map(word => word[0]).join('');
};
