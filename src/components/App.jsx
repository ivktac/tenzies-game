import { useState } from "react";
import Die from "./Die";

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

  return (
    <main>
      <div className="dice__container">
        {allNewDice().map((die, index) => (
          <Die key={index} value={die} />
        ))}
      </div>
      <button onClick={rollDice} className="roll__dice">
        Roll Dice
      </button>
    </main>
  );
}
