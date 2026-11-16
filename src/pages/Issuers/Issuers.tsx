import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";

/**
 * Layout.tsx resets scroll to top on every pathname change via
 * useLayoutEffect, ignoring the hash. Since all useLayoutEffects in the tree
 * fire before any useEffect, this plain useEffect reliably runs after that
 * reset and wins — no edit to shared Layout.tsx needed.
 */
const useHashScrollAndFocus = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.focus();
  }, [hash]);
};

export const Issuers = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  useHashScrollAndFocus();

  return (
    <main className="wrap inner-page">
      <SEO
        title={t("issuers.seo.title")}
        description={t("issuers.seo.description")}
        canonical={localize("/issuers")}
        hreflangPath="/issuers"
      />
      <section className="page-hero">
        <div className="mono eyebrow lit">[ {t("issuers.eyebrow")} ]</div>
        <h1>{t("issuers.hero.heading")}</h1>
        <p className="lede">{t("issuers.hero.lede")}</p>
        <div className="hero-actions">
          <Link className="market-cta primary" to={localize("/issuers#start")}>
            {t("issuers.hero.ctaPrimary")}
          </Link>
          <Link className="market-cta secondary" to={localize("/sereel-verified")}>
            {t("issuers.hero.ctaSecondary")}
          </Link>
        </div>
      </section>
    </main>
  );
};
