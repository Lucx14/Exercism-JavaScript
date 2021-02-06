export const toRoman = (num) => {
  const numeralMapping = {
    1: ["I", "X", "C", "M"],
    2: ["II", "XX", "CC", "MM"],
    3: ["III", "XXX", "CCC", "MMM"],
    4: ["IV", "XL", "CD", "MV"],
    5: ["V", "L", "D", "V"],
    6: ["VI", "LX", "DC"],
    7: ["VII", "LXX", "DCC"],
    8: ["VIII", "LXXX", "DCCC"],
    9: ["IX", "XC", "CM"],
  };
  const digits = num.toString().split("");
  const result = digits
    .map((val, i) => {
      if (val !== "0") {
        return numeralMapping[parseInt(val)][digits.length - 1 - i];
      }
    })
    .filter((res) => res !== undefined);
  return result.join("");
};

console.log("hello!!!!");
