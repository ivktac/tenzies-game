export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "#fff",
  };

  const diePips = Array.from({ length: props.value }).map((_, index) => (
    <span key={index} className="die__pip" />
  ));

  return (
    <div className="die__face" style={styles} onClick={props.holdDice}>
      {diePips}
    </div>
  );
}
