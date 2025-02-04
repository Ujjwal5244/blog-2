import "./NavBar.css";

export function NavBar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <img
          src="https://img.freepik.com/free-vector/indonesian-halal-logo-new-branding-2022_17005-1495.jpg?semt=ais_hybrid"
          className="nav-logo"
        />
        Untitled Ui
      </a>
      <div className="navbar-menu">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
      </div>
      <div className="navbar-buttons">
        <button className="btn btn-ghost">Log in</button>
        <button className="btn btn-primary">Create account</button>
      </div>
    </nav>
  );
}
