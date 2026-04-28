import { Ability } from "./Ability";
import { Character } from "../models/Character";
import { config } from "../config";

export class PowerStrike implements Ability {
  name = "Power Strike";

  onAttack(attacker: Character, defender: Character): number {
    const activated = Math.random() < 0.25;

    if (activated) {
      if (!config.isSilent) {
        console.log(`${attacker.name} activates Power Strike`);
      }
      return Math.floor(attacker.attack * 1.5);
    }

    return attacker.attack;
  }
}