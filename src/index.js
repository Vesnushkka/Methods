import { Bowman, Daemon } from "./characters";

const bowman = new Bowman("TestBowman");
const daemon = new Daemon("TestDaemon");

console.log(bowman);

setTimeout(() => {
    bowman.levelUp()
    console.log(bowman);
}, 5000);

setTimeout(() => {
    daemon.damageOther(bowman)
    console.log(daemon, bowman);
}, 7000);