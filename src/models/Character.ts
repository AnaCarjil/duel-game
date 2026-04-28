import { Ability } from "../abilities/Ability";
import { PowerStrike } from "../abilities/PowerStrike";
import { DamageReduction } from "../abilities/DamageReduction";
import { SecondWind } from "../abilities/SecondWind";
import { config } from "../config";

function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class Character {
  name: string;
  health: number;
  attack: number;
  defense: number;
  ability: Ability;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.attack = getRandom(15, 20);
    this.defense = getRandom(10, 15);

    const abilities = [
      new PowerStrike(),
      new DamageReduction(),
      new SecondWind()
    ];

    this.ability = abilities[Math.floor(Math.random() * abilities.length)]!;

    if (!config.isSilent) {
      console.log(`${this.name} ability: ${this.ability.name}`);
    }
  }

  takeDamage(damage: number): void {
    this.health = Math.max(0, this.health - damage);
  }

  isAlive(): boolean {
    return this.health > 0;
  }
}