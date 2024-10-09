export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "#fff",
  };

  return (
    <div className="dice__face" style={styles}>
      <h2 className="dice__num">{props.value}</h2>
    </div>
  );
}
