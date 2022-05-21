export const typeHeroesMap = {
  Bowman: "Bowman",
  Swordsman: "Swordsman",
  Magician: "Magician",
  Undead: "Undead",
  Zombie: "Zombie",
  Daemon: "Daemon",
};

export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof name != "string") {
      throw new Error("Ошибка! Имя должно быть строкой!");
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error(
        "Ошибка! Количество символов в имени должно было от 2 до 10"
      );
    }

    if (!typeHeroesMap[type]) {
      throw new Error("Ошибка! Такой персонаж не существует!");
    }

    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.health = 100;
    this.level = 1;
  }
  
  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error("Нельзя повысить левел умершего");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
