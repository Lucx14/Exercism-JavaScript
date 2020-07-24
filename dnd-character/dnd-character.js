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
  static rollAbility() {
    throw new Error("Remove this statement and implement this function");
  }

  get strength() {
    throw new Error("Remove this statement and implement this function");
  }

  get dexterity() {
    throw new Error("Remove this statement and implement this function");
  }

  get constitution() {
    throw new Error("Remove this statement and implement this function");
  }

  get intelligence() {
    throw new Error("Remove this statement and implement this function");
  }

  get wisdom() {
    throw new Error("Remove this statement and implement this function");
  }

  get charisma() {
    throw new Error("Remove this statement and implement this function");
  }

  get hitpoints() {
    throw new Error("Remove this statement and implement this function");
  }
}
