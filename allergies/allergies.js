export class Allergies {
  #allergens = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };

  constructor(score) {
    this.score = score;
  }

  list() {
    return Object.keys(this.#allergens)
      .map((allergen) => this.#allergens[allergen] & this.score && allergen)
      .filter(Boolean);
  }

  allergicTo(food) {
    return this.list().includes(food);
  }
}
