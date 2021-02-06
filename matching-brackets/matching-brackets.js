"use strict";

const BRACKETS = {
  "(": ")",
  "{": "}",
  "[": "]",
};

const openingBracket = (char) => Object.keys(BRACKETS).includes(char);
const closingBracket = (char) => Object.values(BRACKETS).includes(char);

export const isPaired = (str) => {
  const brackets = [...str].filter((x) => [..."({[]})"].includes(x));
  const stack = [];

  for (const br of brackets) {
    if (openingBracket(br)) stack.push(br);
    if (closingBracket(br)) {
      const lastEl = stack.pop();
      if (!lastEl || BRACKETS[lastEl] !== br) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
