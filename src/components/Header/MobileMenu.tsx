import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGlobal } from "../../contexts/globals";
import { useLang } from "../../i18n/LanguageProvider";
import { track } from "../../utils/track";
import { NAV_LINKS } from "./navigationData";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();
  const { t } = useTranslation();
  const { localize } = useLang();

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
      className={`institutional-mobile-menu ${isMobileMenuOpen ? "open" : "closed"}`}
      aria-hidden={!isMobileMenuOpen}
      role="dialog"
      aria-modal={isMobileMenuOpen}
      aria-label={t("nav.mobileLabel")}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeMenu();
      }}
    >
      <div className="institutional-mobile-panel" onMouseDown={(event) => event.stopPropagation()}>
        <div className="institutional-mobile-top">
          <Link className="brand" to={localize("/")} onClick={closeMenu}>
            <img src="/assets/glowing-logo.png" alt="Sereel" />
            <span className="name">SEREEL</span>
          </Link>
          <div className="institutional-mobile-top-actions">
            <LanguageSwitcher />
            <button onClick={closeMenu} className="institutional-menu-button" aria-label={t("common.closeMenu")}>
              {t("common.close")}
            </button>
          </div>
        </div>

        <nav className="mobile-flat-links" aria-label={t("nav.primary")}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              to={localize(link.href)}
              onClick={() => {
                if (link.key === "issuers") track("issuer_cta_click", { from: "nav" });
                closeMenu();
              }}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
        </nav>

        <Link to={localize("/listings")} className="institutional-mobile-cta" onClick={closeMenu}>
          {t("nav.viewListings")}
        </Link>
      </div>
    </div>
  );
};
