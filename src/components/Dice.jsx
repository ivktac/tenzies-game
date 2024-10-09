export default function Dice(props) {
  return (
    <div className="dice__face">
      <h2 className="dice__num">{props.value}</h2>
    </div>
  );
}
