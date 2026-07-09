import hero from "../assets/hero.png";

function LandingPage({ onGetStarted }) {
  return (
    <div
      className="landing-page"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="overlay">
        <h1>🌱 Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your one-stop destination for beautiful
          indoor, outdoor, flowering, and succulent plants. Bring nature into
          your home with our carefully selected collection.
        </p>

        <button
          className="get-started-btn"
          onClick={onGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;