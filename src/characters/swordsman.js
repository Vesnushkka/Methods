import Character, { typeHeroesMap } from "./character.js";

export default class Swordsman extends Character {
  constructor(name) {
    super(name, typeHeroesMap.Swordsman, 40, 10);
  }
}

const swordsman = new Swordsman("Swordsman");

