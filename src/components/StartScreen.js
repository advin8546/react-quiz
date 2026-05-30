function StartScreen({ dispatch, numQuestions }) {
  return (
    <div className="start">
      <h2>Ready to test React fundamentals?</h2>
      <h3>{numQuestions} questions, one timed session, instant scoring.</h3>
      <p className="start-note">
        This demo highlights predictable reducer state, conditional rendering,
        and deploy-safe static data loading.
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start quiz
      </button>
    </div>
  );
}

export default StartScreen;
