import Character, { typeHeroesMap } from "./character.js";

export default class Undead extends Character {
  constructor(name) {
    super(name, typeHeroesMap.Undead, 25, 25);
  }
}

const undead = new Undead("Undead");

