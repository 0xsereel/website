import { type FocusEvent, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobal } from "../../contexts/globals";
import {
  type NavigationItem,
  type NavigationMenuKey,
  navigationMenus,
} from "./navigationData";

export const Header = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<NavigationMenuKey | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const activeMenu = navigationMenus.find((menu) => menu.key === openMenu);

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, []);

  const closeMenu = () => setOpenMenu(null);

  const handleNavBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpenMenu(null);
    }
  };

  const isTopLevelActive = (key: NavigationMenuKey) => {
    if (openMenu === key) return true;
    if (key === "resources") {
      return ["/blog", "/faq", "/repositories", "/standards"].some((path) =>
        location.pathname === path || location.pathname.startsWith(`${path}/`)
      );
    }
    if (key === "company") {
      return ["/about", "/partnerships", "/contact"].some((path) =>
        location.pathname === path || location.pathname.startsWith(`${path}/`)
      );
    }
    return false;
  };

  const renderNavigationItem = (
    item: NavigationItem,
    className = "institutional-menu-link"
  ) => {
    const content = (
      <>
        <span className="institutional-menu-link-title">
          {item.title}
          {item.badge && <span className="institutional-menu-badge">{item.badge}</span>}
        </span>
        {item.description && (
          <span className="institutional-menu-link-description">{item.description}</span>
        )}
      </>
    );

    if (!item.href) {
      return (
        <span
          key={item.title}
          className={`${className} is-disabled`}
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
          className={className}
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
        <Link key={item.title} to={item.href} className={className} onClick={closeMenu}>
          {content}
        </Link>
      );
    }

    return (
      <a key={item.title} href={item.href} className={className} onClick={closeMenu}>
        {content}
      </a>
    );
  };

  return (
    <nav
      ref={navRef}
      className="top institutional-nav"
      onMouseLeave={closeMenu}
      onBlur={handleNavBlur}
    >
      <div className="wrap row">
        <div className="nav-group">
          <Link className="brand" to="/">
            <img src="/assets/glowing-logo.png" alt="Sereel" />
            <span className="name">SEREEL</span>
          </Link>
          <div className="institutional-links" aria-label="Primary navigation">
            {navigationMenus.map((menu) => (
              <button
                key={menu.key}
                id={`nav-trigger-${menu.key}`}
                type="button"
                className={`institutional-nav-trigger ${
                  isTopLevelActive(menu.key) ? "active" : ""
                }`}
                aria-haspopup="true"
                aria-expanded={openMenu === menu.key}
                aria-controls={`mega-menu-${menu.key}`}
                onMouseEnter={() => setOpenMenu(menu.key)}
                onFocus={() => setOpenMenu(menu.key)}
                onClick={() => setOpenMenu(openMenu === menu.key ? null : menu.key)}
              >
                {menu.label}
              </button>
            ))}
          </div>
        </div>
        <div className="nav-actions">
          <Link className="institutional-nav-cta contact-btn" to="/contact">
            Schedule consultation
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="institutional-menu-button menu-btn"
            aria-label="Open menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
          >
            Menu
          </button>
        </div>
      </div>
      {activeMenu && (
        <div
          id={`mega-menu-${activeMenu.key}`}
          className={`institutional-mega-panel is-${activeMenu.key} ${
            activeMenu.compact ? "is-compact" : ""
          }`}
          role="region"
          aria-labelledby={`nav-trigger-${activeMenu.key}`}
        >
          <div className="institutional-mega-inner">
            <div className="institutional-mega-grid">
              {activeMenu.columns.map((column) => (
                <div className="institutional-mega-column" key={column.title}>
                  <p className="institutional-mega-column-title">{column.title}</p>
                  <div className="institutional-mega-list">
                    {column.items.map((item) => renderNavigationItem(item))}
                  </div>
                </div>
              ))}
              {activeMenu.feature && (
                <div className="institutional-feature-panel">
                  <p className="institutional-feature-kicker">Featured</p>
                  <h3>{activeMenu.feature.title}</h3>
                  <p>{activeMenu.feature.copy}</p>
                  <Link to={activeMenu.feature.href} onClick={closeMenu}>
                    {activeMenu.feature.cta}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
