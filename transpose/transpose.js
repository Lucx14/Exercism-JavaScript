"use strict";

export const transpose = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  const result = [];
  const longestIndex = Math.max(...arr.map((str) => str.length));
  const splitInput = arr.map((str) => [...str]);

  for (let i = 0; i < longestIndex; i++) {
    result.push(
      splitInput
        .map((letters) => (letters[i] === undefined ? " " : letters[i]))
        .join("")
    );
  }

  result[result.length - 1] = result[result.length - 1].trimEnd();
  return result;
};
