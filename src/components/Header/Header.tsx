import { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGlobal } from "../../contexts/globals";
import { useLang } from "../../i18n/LanguageProvider";
import { stripLangPrefix } from "../../i18n/routes";
import { BRAND_REVEAL_EVENT } from "../../utils/brandReveal";
import { NAV_LINKS } from "./navigationData";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();
  const location = useLocation();
  const { t } = useTranslation();
  const { localize } = useLang();

  // On the home page the logo story flies the mark into the nav, so the nav
  // logo stays hidden until the story reports it has arrived.
  const isHome = stripLangPrefix(location.pathname) === "/";
  const [brandReveal, setBrandReveal] = useState(isHome ? 0 : 1);

  useEffect(() => {
    if (!isHome) {
      setBrandReveal(1);
      return;
    }
    const onReveal = (event: Event) => setBrandReveal((event as CustomEvent<number>).detail);
    window.addEventListener(BRAND_REVEAL_EVENT, onReveal);
    return () => window.removeEventListener(BRAND_REVEAL_EVENT, onReveal);
  }, [isHome]);

  return (
    <nav className="top institutional-nav">
      <div className="wrap row">
        <div className="nav-group">
          <Link className="brand" to={localize("/")} aria-label="Sereel">
            <img src="/assets/glowing-logo.png" alt="" style={{ opacity: brandReveal }} />
            <span className="name" style={{ transform: `translateX(${-39 * (1 - brandReveal)}px)` }}>
              SEREEL
            </span>
          </Link>
          <div className="institutional-links" aria-label={t("nav.primary")}>
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.key}
                to={localize(link.href)}
                className={({ isActive }) => `institutional-nav-trigger${isActive ? " active" : ""}`}
              >
                {t(`nav.${link.key}`)}
              </RouterNavLink>
            ))}
          </div>
        </div>
        <div className="nav-actions">
          <LanguageSwitcher />
          <Link className="institutional-nav-cta contact-btn" to={localize("/listings")}>
            {t("nav.viewListings")}
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="institutional-menu-button menu-btn"
            aria-label={t("common.openMenu")}
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {t("common.menu")}
          </button>
        </div>
      </div>
    </nav>
  );
};
