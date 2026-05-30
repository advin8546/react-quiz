function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = maxPossiblePoints ? (points / maxPossiblePoints) * 100 : 0;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.round(percentage)}%)
      </p>
      <p className="highscore">High score: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishedScreen;
