function Header() {
  return (
    <header className="app-header">
      <img src="logo512.png" alt="React logo" />
      <div>
        <p className="eyebrow">Recruiter quick view</p>
        <h1>The React Quiz</h1>
        <p className="header-copy">
          A reducer-driven quiz flow with async data loading, timer state,
          scoring, persisted high score, and clear finish feedback.
        </p>
      </div>
    </header>
  );
}

export default Header;
