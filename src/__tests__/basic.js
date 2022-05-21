import {
  Bowman,
  Daemon,
  Magician,
  Swordsman,
  Undead,
  Zombie,
} from "../characters/index.js";

test("bownLevelup", () => {
  const newBowman = new Bowman("Bowman");
  newBowman.levelUp();
  expect(newBowman).toEqual({
    name: "Bowman",
    type: "Bowman",
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
  });
});

test("bownDamage", () => {
  const newBowman = new Bowman("Bowman");
  newBowman.damage(5);
  expect(newBowman).toEqual({
    name: "Bowman",
    type: "Bowman",
    attack: 25,
    defence: 25,
    health: 96.25,
    level: 1,
  });
});

test("daemonLevelup", () => {
  const newDaemon = new Daemon("Daemon");
  newDaemon.levelUp();
  expect(newDaemon).toEqual({
    name: "Daemon",
    type: "Daemon",
    attack: 12,
    defence: 48,
    health: 100,
    level: 2,
  });
});

test("daemonDamage", () => {
  const newDaemon = new Daemon("Daemon");
  newDaemon.damage(5);
  expect(newDaemon).toEqual({
    name: "Daemon",
    type: "Daemon",
    attack: 10,
    defence: 40,
    health: 97,
    level: 1,
  });
});

test("magicianLevelup", () => {
  const newMagician = new Magician("Magician");
  newMagician.levelUp();
  expect(newMagician).toEqual({
    name: "Magician",
    type: "Magician",
    attack: 12,
    defence: 48,
    health: 100,
    level: 2,
  });
});

test("magicianDamage", () => {
  const newMagician = new Magician("Magician");
  newMagician.damage(5);
  expect(newMagician).toEqual({
    name: "Magician",
    type: "Magician",
    attack: 10,
    defence: 40,
    health: 97,
    level: 1,
  });
});

test("swordsmanLevelup", () => {
  const newSwordsman = new Swordsman("Swordsman");
  newSwordsman.levelUp();
  expect(newSwordsman).toEqual({
    name: "Swordsman",
    type: "Swordsman",
    attack: 48,
    defence: 12,
    health: 100,
    level: 2,
  });
});

test("swordsmanDamage", () => {
  const newSwordsman = new Swordsman("Swordsman");
  newSwordsman.damage(5);
  expect(newSwordsman).toEqual({
    name: "Swordsman",
    type: "Swordsman",
    attack: 40,
    defence: 10,
    health: 95.5,
    level: 1,
  });
});

test("undeadLevelup", () => {
  const newUndead = new Undead("Undead");
  newUndead.levelUp();
  expect(newUndead).toEqual({
    name: "Undead",
    type: "Undead",
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
  });
});

test("undeadDamage", () => {
  const newUndead = new Undead("Undead");
  newUndead.damage(5);
  expect(newUndead).toEqual({
    name: "Undead",
    type: "Undead",
    attack: 25,
    defence: 25,
    health: 96.25,
    level: 1,
  });
});

test("zombieLevelup", () => {
  const newZombie = new Zombie("Zombie");
  newZombie.levelUp();
  expect(newZombie).toEqual({
    name: "Zombie",
    type: "Zombie",
    attack: 48,
    defence: 12,
    health: 100,
    level: 2,
  });
});

test("zombieDamage", () => {
  const newZombie = new Zombie("Zombie");
  newZombie.damage(5);
  expect(newZombie).toEqual({
    name: "Zombie",
    type: "Zombie",
    attack: 40,
    defence: 10,
    health: 95.5,
    level: 1,
  });
});
