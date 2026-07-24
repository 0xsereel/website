import {
  type CSSProperties,
  type FocusEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu as MenuIcon } from "lucide-react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useGlobal } from "../../contexts/globals";
import {
  type NavigationItem,
  type NavigationMenuKey,
  navigationMenus,
} from "./navigationData";

const MenuGlyph = ({ title }: { title: string }) => {
  const name = title.toLowerCase();
  let glyph = "rails";
  if (name.includes("custod") || name.includes("bank")) glyph = "vault";
  else if (name.includes("compliance") || name.includes("standard")) glyph = "verified";
  else if (name.includes("market") || name.includes("settlement")) glyph = "exchange";
  else if (name.includes("lifecycle") || name.includes("report")) glyph = "cycle";
  else if (name.includes("distribution") || name.includes("arranger")) glyph = "network";
  else if (name.includes("lending") || name.includes("treasur")) glyph = "layers";
  else if (name.includes("strategy") || name.includes("manager")) glyph = "signal";
  else if (name.includes("broker") || name.includes("platform")) glyph = "blocks";
  else if (name.includes("whitepaper") || name.includes("research")) glyph = "document";
  else if (name.includes("blog")) glyph = "editorial";
  else if (name === "faq") glyph = "question";
  else if (name.includes("about")) glyph = "orbit";
  else if (name.includes("contact")) glyph = "send";

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {glyph === "vault" && <><path d="M5.5 9V6.8L12 4l6.5 2.8V9"/><rect x="4" y="9" width="16" height="10" rx="2"/><path d="M8 13h8M8 16h5"/></>}
      {glyph === "verified" && <><path d="m12 3 7 3v5c0 4.5-2.8 7.5-7 10-4.2-2.5-7-5.5-7-10V6l7-3Z"/><path d="m8.8 12 2.1 2.1 4.6-4.7"/></>}
      {glyph === "exchange" && <><path d="M4 8h13M14 5l3 3-3 3M20 16H7M10 13l-3 3 3 3"/></>}
      {glyph === "cycle" && <><path d="M18.3 8A7 7 0 0 0 6.2 6.5L4 9M5.7 16A7 7 0 0 0 17.8 17.5L20 15"/><path d="M4 5v4h4M20 19v-4h-4"/></>}
      {glyph === "network" && <><circle cx="12" cy="5" r="2"/><circle cx="5" cy="17" r="2"/><circle cx="19" cy="17" r="2"/><path d="m11 7-5 8m7-8 5 8M7 17h10"/></>}
      {glyph === "layers" && <><path d="m12 4 8 4-8 4-8-4 8-4Z"/><path d="m5 12 7 3.5 7-3.5M5 16l7 3.5 7-3.5"/></>}
      {glyph === "signal" && <><path d="M5 18V14M10 18V9M15 18V12M20 18V5"/><path d="m4 10 6-5 5 3 5-5"/></>}
      {glyph === "blocks" && <><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/><path d="M14 7h3v3M10 17H7v-3"/></>}
      {glyph === "document" && <><path d="M7 3.5h7l4 4V20H7z"/><path d="M14 3.5V8h4M10 12h5M10 15.5h5"/></>}
      {glyph === "editorial" && <><path d="M5 18.5 6.2 14 16 4.2a2 2 0 0 1 2.8 2.8L9 16.8 5 18.5Z"/><path d="m14.5 5.8 3.7 3.7M5 19h14"/></>}
      {glyph === "question" && <><circle cx="12" cy="12" r="8.5"/><path d="M9.8 9.3a2.5 2.5 0 1 1 3.2 2.4c-.8.3-1 1-1 1.8M12 17h.01"/></>}
      {glyph === "orbit" && <><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(-28 12 12)"/><circle cx="19" cy="8" r="1" fill="currentColor" stroke="none"/></>}
      {glyph === "send" && <><path d="m4 5 16 7-16 7 3-7-3-7Z"/><path d="M7 12h13"/></>}
      {glyph === "rails" && <><path d="M4 17 9 7l3 10 3-10 5 10"/><path d="M6 13h12"/></>}
    </svg>
  );
};

const MenuFeatureVisual = ({ menuKey }: { menuKey: NavigationMenuKey }) => (
  <div className={`institutional-feature-visual visual-${menuKey}`} aria-hidden="true">
    {menuKey === "products" && (
      <svg viewBox="0 0 240 126">
        <path className="visual-rail rail-a" d="M12 35h45l19 19h35" />
        <path className="visual-rail rail-b" d="M12 91h45l19-19h35" />
        <path className="visual-rail rail-c" d="M229 35h-45l-19 19h-35" />
        <path className="visual-rail rail-d" d="M229 91h-45l-19-19h-35" />
        <rect className="visual-core" x="98" y="39" width="44" height="48" rx="11" />
        <path className="visual-mark" d="m110 63 8 8 15-17" />
        <circle className="visual-packet packet-one" cx="18" cy="35" r="3" />
        <circle className="visual-packet packet-two" cx="222" cy="91" r="3" />
      </svg>
    )}
    {menuKey === "solutions" && (
      <svg viewBox="0 0 240 126">
        <rect className="visual-node node-a" x="13" y="20" width="54" height="30" rx="7" />
        <rect className="visual-node node-b" x="13" y="76" width="54" height="30" rx="7" />
        <rect className="visual-node node-c" x="173" y="20" width="54" height="30" rx="7" />
        <rect className="visual-node node-d" x="173" y="76" width="54" height="30" rx="7" />
        <path className="visual-route" d="M67 35h27l13 17M67 91h27l13-17M173 35h-27l-13 17M173 91h-27l-13-17" />
        <path className="visual-engine" d="m120 40 24 14v25l-24 14-24-14V54z" />
        <circle className="visual-engine-dot" cx="120" cy="66.5" r="8" />
      </svg>
    )}
    {menuKey === "resources" && (
      <svg viewBox="0 0 240 126">
        <rect className="visual-page page-back" x="68" y="18" width="92" height="82" rx="8" />
        <rect className="visual-page page-mid" x="78" y="24" width="92" height="82" rx="8" />
        <rect className="visual-page page-front" x="88" y="30" width="92" height="82" rx="8" />
        <path className="visual-copy-line line-one" d="M106 53h55" />
        <path className="visual-copy-line line-two" d="M106 69h40" />
        <path className="visual-copy-line line-three" d="M106 85h49" />
        <circle className="visual-scan" cx="100" cy="53" r="3" />
      </svg>
    )}
    {menuKey === "company" && (
      <svg viewBox="0 0 240 126">
        <ellipse className="visual-globe" cx="120" cy="64" rx="59" ry="46" />
        <path className="visual-globe-line" d="M61 64h118M120 18c17 13 25 28 25 46s-8 33-25 46M120 18C103 31 95 46 95 64s8 33 25 46" />
        <path className="visual-link" d="m82 44 41 22 34-28" />
        <circle className="visual-location location-one" cx="82" cy="44" r="5" />
        <circle className="visual-location location-two" cx="123" cy="66" r="5" />
        <circle className="visual-location location-three" cx="157" cy="38" r="5" />
      </svg>
    )}
  </div>
);

export const Header = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [openMenu, setOpenMenu] = useState<NavigationMenuKey | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [panelLeft, setPanelLeft] = useState(0);
  const navRef = useRef<HTMLElement | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeMenu = navigationMenus.find((menu) => menu.key === openMenu);

  useEffect(() => {
    let frame = 0;
    const updateScrolledState = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrolledState);
    };

    updateScrolledState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const updatePanelLeft = () => {
      const nav = navRef.current;
      const trigger = triggerRefs.current[openMenu];
      if (!nav || !trigger) return;
      const triggerRect = trigger.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const center = triggerRect.left - navRect.left + triggerRect.width / 2;
      setPanelLeft(center);
    };
    updatePanelLeft();
    window.addEventListener("resize", updatePanelLeft);
    return () => window.removeEventListener("resize", updatePanelLeft);
  }, [openMenu]);

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1181px)");
    const closeMobileMenuOnDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };
    closeMobileMenuOnDesktop(desktop);
    desktop.addEventListener("change", closeMobileMenuOnDesktop);
    return () => desktop.removeEventListener("change", closeMobileMenuOnDesktop);
  }, [setIsMobileMenuOpen]);

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
      return ["/about", "/contact"].some((path) =>
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
        <span className="institutional-menu-icon" aria-hidden="true">
          <MenuGlyph title={item.title} />
        </span>
        <span className="institutional-menu-link-copy">
        <span className="institutional-menu-link-title">
          {item.title}
          {item.badge && <span className="institutional-menu-badge">{item.badge}</span>}
        </span>
        {item.description && (
          <span className="institutional-menu-link-description">{item.description}</span>
        )}
        </span>
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
      className={`top institutional-nav ${isScrolled ? "is-scrolled" : "is-at-top"}`}
      onMouseLeave={closeMenu}
      onBlur={handleNavBlur}
    >
      <div className="wrap row">
        <Link className="brand nav-animated-brand" to="/" aria-label="Sereel home">
          <span className="nav-brand-animation" aria-hidden="true">
            <span className="nav-brand-symbol">
              <img src="/assets/glowing-logo.png" alt="" />
            </span>
            <span className="nav-brand-word">Sereel</span>
          </span>
        </Link>
        <div className="institutional-links" aria-label="Primary navigation">
            {navigationMenus.map((menu) => (
              <button
                key={menu.key}
                id={`nav-trigger-${menu.key}`}
                ref={(el) => {
                  triggerRefs.current[menu.key] = el;
                }}
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
                <span>{menu.label}</span>
                <span className="nav-chevron" aria-hidden="true">
                  {openMenu === menu.key ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </span>
              </button>
            ))}
        </div>
        <div className="nav-actions">
          <Link className="institutional-nav-cta contact-btn" to="/contact">
            <span>Get started</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="institutional-menu-button menu-btn"
            aria-label="Open menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <MenuIcon size={21} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
      </div>
      <AnimatePresence mode="sync">
      {activeMenu && (
        <motion.div
          key={activeMenu.key}
          id={`mega-menu-${activeMenu.key}`}
          className={`institutional-mega-panel is-${activeMenu.key} ${
            activeMenu.compact ? "is-compact" : ""
          }`}
          style={{ "--panel-center": `${panelLeft}px` } as CSSProperties}
          role="region"
          aria-labelledby={`nav-trigger-${activeMenu.key}`}
          initial={{ opacity: 0, y: reduceMotion ? 0 : -7, scale: reduceMotion ? 1 : .965 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -4, scale: reduceMotion ? 1 : .985 }}
          transition={{ duration: reduceMotion ? 0 : .24, ease: [.16, 1, .3, 1] }}
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
                  <MenuFeatureVisual menuKey={activeMenu.key} />
                  <h3>{activeMenu.feature.title}</h3>
                  <p>{activeMenu.feature.copy}</p>
                  <Link to={activeMenu.feature.href} onClick={closeMenu}>
                    {activeMenu.feature.cta}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};
