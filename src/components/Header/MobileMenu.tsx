import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobal } from "../../contexts/globals";

export const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();
  const location = useLocation();

  const linkClass = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/")
      ? "active"
      : "";
  };

  const anchorHref = (id: string) => (location.pathname === "/" ? `#${id}` : `/#${id}`);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.body.classList.add("menu-open");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  return (
    <div
      id="mobile-navigation"
      className={`mobile-menu marketing-menu ${isMobileMenuOpen ? "open" : "closed"}`}
      aria-hidden={!isMobileMenuOpen}
    >
      <div className="top">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img src="/assets/glowing-logo.png" alt="Sereel" />
          <span className="name">SEREEL</span>
        </Link>
        <button
          onClick={closeMenu}
          className="marketing-menu-button"
          aria-label="Close menu"
        >
          Close
        </button>
      </div>
      <div className="links-m">
        <a href={anchorHref("platform")} onClick={closeMenu}>Control system</a>
        <a href={anchorHref("served")} onClick={closeMenu}>Dossiers</a>
        <a href={anchorHref("use-cases")} onClick={closeMenu}>Ledger</a>
        <Link to="/standards" className={linkClass("/standards")} onClick={closeMenu}>Standards</Link>
        <Link to="/about" className={linkClass("/about")} onClick={closeMenu}>About</Link>
        <Link to="/faq" className={linkClass("/faq")} onClick={closeMenu}>FAQ</Link>
        <Link to="/blog" className={linkClass("/blog")} onClick={closeMenu}>Blog</Link>
        <Link to="/contact" className={linkClass("/contact")} onClick={closeMenu}>Schedule consultation</Link>
      </div>
    </div>
  );
};
