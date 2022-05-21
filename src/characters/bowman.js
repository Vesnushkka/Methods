import Character, { typeHeroesMap } from "./character.js";

export default class Bowman extends Character {
  constructor(name) {
    super(name , typeHeroesMap.Bowman, 25, 25);
  }
}

const newBowman = new Bowman("Bowman");
  const result = newBowman.levelUp()
  console.log(result);


