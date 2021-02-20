export class NucleotideCounts {
  static parse(strand) {
    const nucleotideCount = { A: 0, C: 0, G: 0, T: 0 };
    [...strand].forEach((n) => {
      if (!Object.keys(nucleotideCount).includes(n))
        throw new Error("Invalid nucleotide in strand");
      nucleotideCount[n] += 1;
    });
    return Object.values(nucleotideCount).join(" ");
  }
}
