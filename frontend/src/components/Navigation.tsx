import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link
        to="/"
        className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/physical"
        className={`nav-link ${
          location.pathname === "/physical" ? "active" : ""
        }`}
      >
        Physical Development
      </Link>
      <Link
        to="/personality"
        className={`nav-link ${
          location.pathname === "/personality" ? "active" : ""
        }`}
      >
        Personality Development
      </Link>
    </nav>
  );
}

export default Navigation;
