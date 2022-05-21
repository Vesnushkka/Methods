import Character, { typeHeroesMap } from "./character.js";

export default class Zombie extends Character {
  constructor(name) {
    super(name, typeHeroesMap.Zombie, 40, 10);
  }
}

const zombie = new Zombie("Zombie");

