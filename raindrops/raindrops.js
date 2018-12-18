class Raindrops {
  constructor() {
    this.strings = {
      3: 'Pling',
      5: 'Plang',
      7: 'Plong',
      35: 'PlingPlang',
      37: 'PlingPlong',
      57: 'PlangPlong',
      357: 'PlingPlangPlong',
    };
  }

  convert(n) {
    const factors = [];
    let i = n;
    while (i > 0) {
      if (n % i === 0) factors.push(i);
      i -= 1;
    }
    if (factors.includes(3) && factors.includes(5) && factors.includes(7)) return this.strings[357];
    if (factors.includes(3) && factors.includes(5)) return this.strings[35];
    if (factors.includes(3) && factors.includes(7)) return this.strings[37];
    if (factors.includes(5) && factors.includes(7)) return this.strings[57];
    if (factors.includes(3)) return this.strings[3];
    if (factors.includes(5)) return this.strings[5];
    if (factors.includes(7)) return this.strings[7];
    return n.toString();
  }
}

export default Raindrops;
