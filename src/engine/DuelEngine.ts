import { Character } from "../models/Character";
import { config } from "../config";

export class DuelEngine {
  character1: Character;
  character2: Character;
  silent: boolean;

  constructor(character1: Character, character2: Character, silent = false) {
    this.character1 = character1;
    this.character2 = character2;
    this.silent = silent;

    config.isSilent = silent;
  }

  startFight(): Character {
    let attacker = Math.random() < 0.5 ? this.character1 : this.character2;
    let defender = attacker === this.character1 ? this.character2 : this.character1;

    let round = 1;

    while (this.character1.isAlive() && this.character2.isAlive()) {
      if (!this.silent) console.log(`Round ${round}:`);
      if (!this.silent) console.log(`${attacker.name} attacks`);

      let attackValue = attacker.attack;

      if (attacker.ability.onAttack) {
        attackValue = attacker.ability.onAttack(attacker, defender);
      }

      let damage = Math.max(0, attackValue - defender.defense);

      if (defender.ability.onDefend) {
        damage = defender.ability.onDefend(attacker, defender, damage);
      }

      defender.takeDamage(damage);

      if (defender.ability.onAfterDamage) {
        defender.ability.onAfterDamage(defender);
      }

      if (!this.silent) {
        console.log(`${defender.name} has ${defender.health} health`);
      }

      [attacker, defender] = [defender, attacker];
      round++;
    }

    const winner = this.character1.isAlive() ? this.character1 : this.character2;

    if (!this.silent) {
      console.log(`${winner.name} won!`);
    }

    return winner;
  }
}