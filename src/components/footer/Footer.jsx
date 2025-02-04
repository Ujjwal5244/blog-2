import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <h3 className="footer-title">10x your growth with Untitled</h3>
          <p className="footer-subtitle">
            Join over 30,000+ designers already growing with Untitled
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h4>Product</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Releases</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Add more columns similar to the design */}
        </div>

        <div className="footer-bottom">
          <p>© 2024 Untitled. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
