import { Character } from "./models/Character";
import { DuelEngine } from "./engine/DuelEngine";
import { config } from "./config";

// 🟢 Single visible fight (NOT silent)
config.isSilent = false;

const char1 = new Character("Character 1");
const char2 = new Character("Character 2");

console.log(`${char1.name}: attack = ${char1.attack}, defense = ${char1.defense}`);
console.log(`${char2.name}: attack = ${char2.attack}, defense = ${char2.defense}`);

const engine = new DuelEngine(char1, char2);
engine.startFight();

// 🔵 Simulation
const simulations = 1000;

let char1Wins = 0;
let char2Wins = 0;

for (let i = 0; i < simulations; i++) {
  config.isSilent = true; 

  const c1 = new Character("Character 1");
  const c2 = new Character("Character 2");

  const simEngine = new DuelEngine(c1, c2, true);

  const winner = simEngine.startFight();

  if (winner.name === "Character 1") {
    char1Wins++;
  } else {
    char2Wins++;
  }
}

console.log("\n--- Simulation Results ---");
console.log(`Character 1 wins: ${char1Wins}`);
console.log(`Character 2 wins: ${char2Wins}`);