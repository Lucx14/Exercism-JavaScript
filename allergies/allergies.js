export class Allergies {
  #foods = {
    128: "cats",
    64: "pollen",
    32: "chocolate",
    16: "tomatoes",
    8: "strawberries",
    4: "shellfish",
    2: "peanuts",
    1: "eggs",
  };
  constructor(score) {
    this.score = score;
  }

  list() {
    let scoreReducer = this.score;
    let arr = [];
    this.#allergyValues().forEach((val) => {
      if (val <= scoreReducer) {
        arr.push(val);
        scoreReducer -= val;
      }
    });

    return arr
      .sort((a, b) => a - b)
      .map((num) => num.toString())
      .map((num) => this.#foods[num]);
  }

  allergicTo(food) {
    console.log(this.list());
    console.log(this.list().includes(food));
    return this.list().includes(food);
  }

  #allergyValues() {
    return Object.keys(this.#foods)
      .map((num) => Number(num))
      .sort((a, b) => b - a);
  }
}
