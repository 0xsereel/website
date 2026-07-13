import { Link, useLocation } from "react-router-dom";
import { useGlobal } from "../../contexts/globals";

export const Header = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();
  const location = useLocation();

  const linkClass = (path: string) => {
    const base = location.pathname === path || location.pathname.startsWith(path + "/")
      ? "active"
      : "";
    return base;
  };

  const anchorHref = (id: string) => (location.pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <nav className="top marketing-nav">
      <div className="wrap row">
        <div className="nav-group">
          <Link className="brand" to="/">
            <img src="/assets/glowing-logo.png" alt="Sereel" />
            <span className="name">SEREEL</span>
          </Link>
          <div className="links">
            <a href={anchorHref("platform")}>Control system</a>
            <a href={anchorHref("served")}>Dossiers</a>
            <a href={anchorHref("use-cases")}>Ledger</a>
            <Link to="/standards" className={linkClass("/standards")}>Standards</Link>
            <Link to="/about" className={linkClass("/about")}>About</Link>
            <Link to="/faq" className={linkClass("/faq")}>FAQ</Link>
            <Link to="/blog" className={linkClass("/blog")}>Blog</Link>
          </div>
        </div>
        <div className="nav-actions">
          <Link className="marketing-nav-cta contact-btn" to="/contact">
            Schedule consultation
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="marketing-menu-button menu-btn"
            aria-label="Open menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
          >
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};
