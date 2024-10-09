export default function Die(props) {
  return (
    <div className="die__face">
      <h2 className="die__num">{props.value}</h2>
    </div>
  );
}
