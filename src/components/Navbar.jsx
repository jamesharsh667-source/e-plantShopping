function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>🌿 Paradise Nursery</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Plants</li>
        <li>🛒 Cart ({cartCount})</li>
      </ul>
    </nav>
  );
}

export default Navbar;