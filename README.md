# ⚔️ Duel Game Simulation (TypeScript)

A turn-based duel simulation between two characters, built with TypeScript and Node.js.

---

## 🚀 Features

* Randomized character stats (attack & defense)
* Modular ability system:

  * ⚡ Power Strike – increases attack damage
  * 🛡 Damage Reduction – reduces incoming damage
  * 💖 Second Wind – heals when health is low
* Turn-based combat engine
* 1000-run simulation for statistical analysis
* Clean logging system with silent mode

---

## 🧠 Design Overview

The system is designed using an extensible ability architecture:

* Each ability implements a shared `Ability` interface
* Abilities use hooks:

  * `onAttack`
  * `onDefend`
  * `onAfterDamage`
* The combat engine remains simple and does not depend on specific abilities

👉 This makes it easy to add new abilities without modifying existing logic.

---

## ▶️ How to Run

```bash
npm install
npm run start
```

---

## 📊 Example Output

```
Character 1 ability: Power Strike
Character 2 ability: Second Wind

Round 1:
Character 1 attacks
...

--- Simulation Results ---
Character 1 wins: 505
Character 2 wins: 495
```

---

## 🛠 Tech Stack

* TypeScript
* Node.js

---

## 📌 Notes

* Each simulation runs 1000 fights silently
* Results show win distribution between characters
* Designed for clarity, extensibility, and clean architecture
