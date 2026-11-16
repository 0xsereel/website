import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Check,
  ClipboardList,
  Building2,
  PlugZap,
  FileSignature,
  ListChecks,
  BarChart3,
  ShieldCheck,
  BadgeCheck,
  BookOpenCheck,
  Timer,
  FileCheck2,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { SEO, generateServiceSchema } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";
import { ReportingFlow } from "../../components/Verified/ReportingFlow";
import { Credentials } from "../../components/Credentials/Credentials";
import { IssuerIntakeForm } from "../../components/Forms/IssuerIntakeForm";

const PROCESS_STEPS = [
  { key: "intake", icon: ClipboardList },
  { key: "structure", icon: Building2 },
  { key: "connect", icon: PlugZap },
  { key: "issue", icon: FileSignature },
  { key: "list", icon: ListChecks },
  { key: "report", icon: BarChart3 },
] as const;

const ISSUER_BENEFITS = [
  { key: "eligibility", icon: ShieldCheck },
  { key: "reporting", icon: BadgeCheck },
  { key: "register", icon: BookOpenCheck },
  { key: "settlement", icon: Timer },
  { key: "compliance", icon: FileCheck2 },
  { key: "distribution", icon: UserCheck },
] as const;

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
  const readinessItems = t("issuers.readiness.items", { returnObjects: true }) as string[];

  return (
    <main className="wrap inner-page">
      <SEO
        title={t("issuers.seo.title")}
        description={t("issuers.seo.description")}
        canonical={localize("/issuers")}
        hreflangPath="/issuers"
        structuredData={[
          generateServiceSchema({
            name: t("issuers.seo.title"),
            description: t("issuers.seo.description"),
          }),
        ]}
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

      <section className="section" id="process" aria-labelledby="process-heading">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("issuers.process.eyebrow")} ]</div>
            <h2 id="process-heading">{t("issuers.process.heading")}</h2>
          </div>
        </div>
        <ol className="access-steps">
          {PROCESS_STEPS.map(({ key, icon: Icon }, index) => (
            <li key={key}>
              <span className="access-step-icon">
                <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="mono" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <strong>{t(`issuers.process.steps.${key}.title`)}</strong>
              <small>{t(`issuers.process.steps.${key}.body`)}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" id="automation" aria-labelledby="automation-heading">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("issuers.automation.eyebrow")} ]</div>
            <h2 id="automation-heading">{t("issuers.automation.heading")}</h2>
          </div>
        </div>
        <ul className="benefit-grid">
          {ISSUER_BENEFITS.map(({ key, icon: Icon }) => (
            <li key={key} className="benefit-tile">
              <span className="benefit-icon">
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <strong>{t(`issuers.automation.items.${key}.title`)}</strong>
              <small>{t(`issuers.automation.items.${key}.body`)}</small>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" id="verified" aria-labelledby="verified-heading">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit" id="verified-heading">[ {t("issuers.verified.eyebrow")} ]</div>
          </div>
        </div>
        <ReportingFlow />
        <p>{t("issuers.verified.body")}</p>
        <Link className="text-link" to={localize("/sereel-verified")}>
          {t("issuers.verified.link")} <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </section>

      <section className="section" id="readiness" aria-labelledby="readiness-heading">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("issuers.readiness.eyebrow")} ]</div>
            <h2 id="readiness-heading">{t("issuers.readiness.heading")}</h2>
          </div>
        </div>
        <ul className="means-list">
          {readinessItems.map((item) => (
            <li key={item}>
              <Check size={16} aria-hidden="true" /> {item}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 32 }}>{t("issuers.readiness.footnote")}</p>
      </section>

      <section className="section" id="credentials" aria-labelledby="credentials-heading">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("issuers.credentials.eyebrow")} ]</div>
            <h2 id="credentials-heading">{t("issuers.credentials.heading")}</h2>
          </div>
        </div>
        <Credentials />
      </section>

      <section className="section" id="start">
        <IssuerIntakeForm />
      </section>
    </main>
  );
};
