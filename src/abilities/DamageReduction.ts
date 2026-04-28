import { Ability } from "./Ability";
import { Character } from "../models/Character";
import { config } from "../config";

export class DamageReduction implements Ability {
  name = "Damage Reduction";

  onDefend(attacker: Character, defender: Character, damage: number): number {
    const activated = Math.random() < 0.25;

    if (activated) {
      if (!config.isSilent) {
        console.log(`${defender.name} activates Damage Reduction`);
      }
      return Math.floor(damage / 2);
    }

    return damage;
  }
}