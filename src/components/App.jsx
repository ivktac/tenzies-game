import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function rollDice() {
    setDice((oldDice) => {
      return oldDice.map((die) => (die.isHeld ? die : generateNewDie()));
    });
  }

  function holdDice(id) {
    setDice((oldDice) => {
      return oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      );
    });
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      holdDice={() => holdDice(die.id)}
    />
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
