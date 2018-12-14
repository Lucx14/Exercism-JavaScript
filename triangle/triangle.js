class Triangle {
  constructor(a, b, c) {
    this.sidea = a;
    this.sideb = b;
    this.sidec = c;
    this.arr = [a, b, c];
  }

  kind() {
    this.toThrow();
    let result;
    const map = {};
    for (let i = 0; i < this.arr.length; i += 1) {
      map.hasOwnProperty(this.arr[i]) ? map[this.arr[i]] += 1 : map[this.arr[i]] = 1;
    }

    if (Object.values(map).length === 1) result = 'equilateral';
    if (Object.values(map).length === 2) result = 'isosceles';
    if (Object.values(map).length === 3) result = 'scalene';
    return result;
  }

  toThrow() {
    if (this.arr.includes(0)) throw new Error('Error');
    if (this.arr.some(v => v < 0)) throw new Error('Error');
    if (this.arr[0] + this.arr[1] < this.arr[2]) throw new Error('Error');
    if (this.arr[1] + this.arr[2] < this.arr[0]) throw new Error('Error');
    if (this.arr[2] + this.arr[0] < this.arr[1]) throw new Error('Error');
  }
}

export default Triangle;
