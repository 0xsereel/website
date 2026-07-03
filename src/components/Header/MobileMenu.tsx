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
      className={`mobile-menu ${isMobileMenuOpen ? "open" : "closed"}`}
      aria-hidden={!isMobileMenuOpen}
    >
      <div className="top">
        <Link className="brand" to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/assets/glowing-logo.png" alt="Sereel" />
          <span className="name">SEREEL</span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="pill ghost"
          aria-label="Close menu"
        >
          <span className="dot"></span>
          Close
        </button>
      </div>
      <div className="links-m">
        <Link to="/standards" className={linkClass("/standards")} onClick={() => setIsMobileMenuOpen(false)}>Standards</Link>
        <Link to="/about" className={linkClass("/about")} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link to="/blog" className={linkClass("/blog")} onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
        <Link to="/contact" className={linkClass("/contact")} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        <Link to="/faq" className={linkClass("/faq")} onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
      </div>
    </div>
  );
};
