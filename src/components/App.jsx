import { useState, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rolls, setRolls] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstDieValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstDieValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      setEndTime(Date.now());
    }
  }, [dice]);

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
    if (!tenzies) {
      setDice((oldDice) => {
        return oldDice.map((die) => (die.isHeld ? die : generateNewDie()));
      });
      setRolls(rolls + 1);
      // Start time when first roll is made
      if (rolls === 0) {
        setStartTime(Date.now());
      }
      return;
    }

    setTenzies(false);
    setDice(allNewDice());
    setRolls(0);
    setStartTime(null);
    setEndTime(null);
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

  const timeToWin = endTime && startTime ? (endTime - startTime) / 1000 : null;

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <p>Number of rolls: {rolls}</p>
      {timeToWin && <p>Time to win: {timeToWin.toFixed(0)} seconds</p>}
      <div className="dice__container">{diceElements}</div>
      <button onClick={rollDice} className="roll__dice">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
