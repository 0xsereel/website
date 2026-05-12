import { Link, useLocation } from "react-router-dom";
import { useGlobal } from "../../contexts/globals";

export const Header = () => {
  const { setIsMobileMenuOpen } = useGlobal();
  const location = useLocation();

  const linkClass = (path: string) => {
    const base = location.pathname === path || location.pathname.startsWith(path + "/")
      ? "active"
      : "";
    return base;
  };

  return (
    <nav className="top">
      <div className="wrap row">
        <div className="nav-group">
          <Link className="brand" to="/">
            <img src="/assets/glowing-logo.png" alt="Sereel" />
            <span className="name">SEREEL</span>
          </Link>
          <div className="links">
            <Link to="/standards" className={linkClass("/standards")}>Standards</Link>
            <Link to="/about" className={linkClass("/about")}>About</Link>
            <Link to="/blog" className={linkClass("/blog")}>Blog</Link>
          </div>
        </div>
        <div className="nav-actions">
          <Link className="pill" to="/contact">
            <span className="dot"></span>
            Contact
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="pill ghost menu-btn"
            aria-label="Open menu"
            style={{ padding: "0 14px" }}
          >
            <span className="dot"></span>
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};
