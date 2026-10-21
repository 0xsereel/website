import { createContext, useContext, useEffect, type PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { type Lang, langFromPathname, localizePath } from "./routes";

interface LanguageContextValue {
  lang: Lang;
  /** Localizes an internal href (e.g. nav/footer links) for the current language. */
  localize: (href: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

/**
 * Derives the active language purely from the URL (/fr prefix) and keeps
 * i18next + <html lang> in sync with it. Must render inside the Router.
 */
export function LanguageProvider({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = langFromPathname(pathname);

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  const value: LanguageContextValue = {
    lang,
    localize: (href: string) => localizePath(href, lang),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
