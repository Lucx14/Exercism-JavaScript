export class Matrix {
  constructor(str) {
    this.grid = str
      .split("\n")
      .map((x) => x.split(" ").map((y) => parseInt(y)));
  }

  get rows() {
    return this.grid;
  }

  get columns() {
    return this.grid[0].map((_, i) => this.grid.map((row) => row[i]));
  }
}
