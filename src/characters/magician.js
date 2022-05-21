import Character, { typeHeroesMap } from "./character.js";

export default class Magician extends Character {
  constructor(name) {
    super(name, typeHeroesMap.Magician, 10, 40);
  }
}

const magician = new Magician("Magician");

