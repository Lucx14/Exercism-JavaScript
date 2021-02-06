"use strict";

export const transpose = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  // throw new Error("Remove this statement and implement this function");
  const result = [];

  const x = arr.map((x) => [...x]);
  const longestIndex = Math.max(...x.map((x) => x.length));
  for (let xx = 0; xx < longestIndex; xx++) {
    result.push(x.map((ss) => ss[xx]));
  }
  const qqq = result.map((aa) => {
    return aa.map((xxx) => {
      if (xxx === undefined) {
        return " ";
      } else {
        return xxx;
      }
    });
  });
  const hhhh = qqq.map((x) => x.join(""));
  hhhh[hhhh.length - 1] = hhhh[hhhh.length - 1].trimEnd();
  return hhhh;
};
