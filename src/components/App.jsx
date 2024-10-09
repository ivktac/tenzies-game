import { useState } from "react";
import Dice from "./Dice";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die, index) => (
    <Dice key={index} value={die} />
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
