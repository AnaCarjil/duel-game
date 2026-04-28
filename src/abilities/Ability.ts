import { Character } from "../models/Character";

export interface Ability {
  name: string;

  onAttack?(attacker: Character, defender: Character): number;

  onDefend?(attacker: Character, defender: Character, damage: number): number;

  onAfterDamage?(character: Character): void;
}