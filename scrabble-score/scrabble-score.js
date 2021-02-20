"use strict";

export const score = (word) => {
  const scores = [
    "",
    "aeioulnrst",
    "dg",
    "bcmp",
    "fhvwy",
    "k",
    "",
    "",
    "jx",
    "",
    "qz",
  ];

  return [...word.toLowerCase()]
    .map((letter) => {
      let points;
      scores.forEach((group, i) => {
        if ([...group].includes(letter)) {
          points = i;
        }
      });
      return points;
    })
    .reduce((acc, val) => acc + val, 0);
};
