import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useLang } from "../../i18n/LanguageProvider";
import { switchLangHref, type Lang } from "../../i18n/routes";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className = "" }: LanguageSwitcherProps) => {
  const { lang } = useLang();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleSelect = (target: Lang) => {
    setOpen(false);
    if (target === lang) return;
    navigate(switchLangHref(location.pathname, location.search, location.hash, target));
  };

  return (
    <div className={`lang-switcher ${className}`.trim()} ref={rootRef}>
      <button
        type="button"
        className="lang-switcher-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={t("common.changeLanguage")}
        onClick={() => setOpen((value) => !value)}
      >
        <Globe size={15} strokeWidth={1.9} aria-hidden="true" />
        <span className="lang-switcher-code">{lang.toUpperCase()}</span>
      </button>
      {open && (
        <div className="lang-switcher-menu" role="menu">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              role="menuitemradio"
              aria-checked={code === lang}
              className={`lang-switcher-option ${code === lang ? "is-active" : ""}`}
              onClick={() => handleSelect(code)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
