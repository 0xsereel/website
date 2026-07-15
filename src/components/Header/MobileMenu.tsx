import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../contexts/globals";
import {
  type NavigationItem,
  type NavigationMenuKey,
  navigationMenus,
} from "./navigationData";

export const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();
  const [openSection, setOpenSection] = useState<NavigationMenuKey | null>("products");

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      setOpenSection("products");
    }
  }, [isMobileMenuOpen]);

  const renderMobileItem = (item: NavigationItem) => {
    const content = (
      <>
        <span>
          {item.title}
          {item.badge && <span className="institutional-mobile-badge">{item.badge}</span>}
        </span>
        {item.description && <small>{item.description}</small>}
      </>
    );

    if (!item.href) {
      return (
        <span
          key={item.title}
          className="institutional-mobile-link is-disabled"
          aria-disabled="true"
        >
          {content}
        </span>
      );
    }

    if (item.asset) {
      return (
        <a
          key={item.title}
          href={item.href}
          className="institutional-mobile-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {content}
        </a>
      );
    }

    if (item.href.startsWith("/") && !item.href.includes("#")) {
      return (
        <Link key={item.title} to={item.href} className="institutional-mobile-link" onClick={closeMenu}>
          {content}
        </Link>
      );
    }

    return (
      <a key={item.title} href={item.href} className="institutional-mobile-link" onClick={closeMenu}>
        {content}
      </a>
    );
  };

  return (
    <div
      id="mobile-navigation"
      className={`institutional-mobile-menu ${isMobileMenuOpen ? "open" : "closed"}`}
      aria-hidden={!isMobileMenuOpen}
      role="dialog"
      aria-modal={isMobileMenuOpen}
      aria-label="Sereel navigation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeMenu();
      }}
    >
      <div className="institutional-mobile-panel" onMouseDown={(event) => event.stopPropagation()}>
        <div className="institutional-mobile-top">
          <Link className="brand" to="/" onClick={closeMenu}>
            <img src="/assets/glowing-logo.png" alt="Sereel" />
            <span className="name">SEREEL</span>
          </Link>
          <button
            onClick={closeMenu}
            className="institutional-menu-button"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav className="institutional-mobile-sections" aria-label="Mobile navigation">
          {navigationMenus.map((menu) => {
            const isOpen = openSection === menu.key;

            return (
              <section className="institutional-mobile-section" key={menu.key}>
                <button
                  type="button"
                  className="institutional-mobile-section-button"
                  aria-expanded={isOpen}
                  aria-controls={`mobile-section-${menu.key}`}
                  onClick={() => setOpenSection(isOpen ? null : menu.key)}
                >
                  {menu.label}
                  <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
                </button>
                <div
                  id={`mobile-section-${menu.key}`}
                  className="institutional-mobile-section-panel"
                  hidden={!isOpen}
                >
                  {menu.columns.map((column) => (
                    <div className="institutional-mobile-column" key={column.title}>
                      <p>{column.title}</p>
                      <div>{column.items.map((item) => renderMobileItem(item))}</div>
                    </div>
                  ))}
                  {menu.feature && (
                    <Link
                      to={menu.feature.href}
                      className="institutional-mobile-feature"
                      onClick={closeMenu}
                    >
                      <span>{menu.feature.title}</span>
                      <small>{menu.feature.copy}</small>
                      <strong>{menu.feature.cta}</strong>
                    </Link>
                  )}
                </div>
              </section>
            );
          })}
        </nav>

        <Link to="/contact" className="institutional-mobile-cta" onClick={closeMenu}>
          Schedule consultation
        </Link>
      </div>
    </div>
  );
};
