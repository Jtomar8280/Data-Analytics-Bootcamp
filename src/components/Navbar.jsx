import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          Data Analytics Bootcamp
        </Link>

        {/* Navigation */}
        <div className="navbar-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/course/content">
            Course Content
          </Link>

        </div>

        {/* Profile / Button */}
        <div className="navbar-profile">
          <button type="button">
            Profile
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;