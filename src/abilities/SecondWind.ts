import { Ability } from "./Ability";
import { Character } from "../models/Character";
import { config } from "../config";

export class SecondWind implements Ability {
  name = "Second Wind";

  onAfterDamage(character: Character): void {
    const activated = Math.random() < 0.25;

    if (activated && character.health > 0 && character.health < 30) {
      character.health += 5;

      if (!config.isSilent) {
        console.log(`${character.name} activates Second Wind and heals 5 health`);
      }
    }
  }
}