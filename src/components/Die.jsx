export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "#fff",
  };

  return (
    <div className="die__face" style={styles} onClick={props.holdDice}>
      <h2 className="die__num">{props.value}</h2>
    </div>
  );
}
