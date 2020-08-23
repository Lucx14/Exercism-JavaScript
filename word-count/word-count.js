export const countWords = (text) => {
  const count = {};
  const regex = /\w+('\w+)?/g;

  text
    .toLowerCase()
    .match(regex)
    .forEach(word => {
      count[word] = (count[word] || 0) + 1;
    });
  return count;
};
