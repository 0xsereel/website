import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
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
  const youBring = t("issuers.roles.youBring.items", { returnObjects: true }) as string[];
  const sereelRuns = t("issuers.roles.sereelRuns.items", { returnObjects: true }) as string[];

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

      <section className="section" id="roles" aria-labelledby="roles-heading">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("issuers.roles.eyebrow")} ]</div>
            <h2 id="roles-heading">{t("issuers.roles.heading")}</h2>
          </div>
        </div>
        <div className="means-grid">
          <div>
            <h3>{t("issuers.roles.youBring.heading")}</h3>
            <ul className="means-list">
              {youBring.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t("issuers.roles.sereelRuns.heading")}</h3>
            <ul className="means-list">
              {sereelRuns.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
