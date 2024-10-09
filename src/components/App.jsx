import Die from "./Die";

export default function App() {
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  return (
    <main>
      <div className="dice__container">
        {allNewDice().map((die, index) => (
          <Die key={index} value={die} />
        ))}
      </div>
    </main>
  );
}
