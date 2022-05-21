import Character, { typeHeroesMap } from "./character.js";

export default class Daemon extends Character {
  constructor(name) {
    super(name, typeHeroesMap.Daemon, 10, 40);
  }
}

