"use strict";

export class Series {
  constructor(series) {
    if (series === "") {
      throw new Error("series cannot be empty");
    }
    this.series = series;
  }

  slices(sliceLength) {
    if (sliceLength > this.series.length)
      throw new Error("slice length cannot be greater than series length");
    if (sliceLength === 0) throw new Error("slice length cannot be zero");
    if (sliceLength < 0) throw new Error("slice length cannot be negative");
    return [...this.series]
      .map((num) => parseInt(num))
      .map((_, i, arr) => arr.slice(i, i + sliceLength))
      .filter((x) => x.length === sliceLength);
  }
}
