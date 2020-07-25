export const abilityModifier = (constitution) => {
  if (constitution < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (constitution > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((constitution - 10) / 2);
};

export class Character {
  constructor() {
    this.str = Character.rollAbility();
    this.dxt = Character.rollAbility();
    this.con = Character.rollAbility();
    this.intel = Character.rollAbility();
    this.wdm = Character.rollAbility();
    this.crsm = Character.rollAbility();

  }
  static rollAbility() {
    const roll = () => {
      return Math.floor(Math.random() * 6) + 1;
    }

    const scores = [...Array(4)].map(() => roll());
    const numbers = scores.sort((a, b) => a - b);
    numbers.shift();
    return numbers.reduce((a, b) => a + b, 0);
  }

  get strength() {
    return this.str;
  }

  get dexterity() {
    return this.dxt;
  }

  get constitution() {
    return this.con;
  }

  get intelligence() {
    return this.intel;
  }

  get wisdom() {
    return this.wdm;
  }

  get charisma() {
    return this.crsm;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.con);
  }
}
