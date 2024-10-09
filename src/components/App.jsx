import { useState } from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => (
    <Dice key={die.id} value={die.value} />
  ));

  return (
    <main>
      <div className="dice__container">{diceElements}</div>
      <button onClick={rollDice} className="roll__dice">
        Roll Dice
      </button>
    </main>
  );
}
