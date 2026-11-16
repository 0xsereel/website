import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";
import { track } from "../../utils/track";
import { VERTICALS } from "../../components/Verticals/verticals";

const Structure = ({ verticalKey }: { verticalKey: string }) => {
  const { t } = useTranslation();
  const steps = ["asset", "vehicle", "investors"] as const;
  return (
    <figure className="structure-diagram" aria-label={t("verticals.diagramAria")}>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span className="mono">{t(`verticals.steps.${step}`)}</span>
            <strong>{t(`verticals.items.${verticalKey}.${step}`)}</strong>
            {index < steps.length - 1 && <ArrowRight className="structure-arrow" size={16} aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <figcaption>
        <span className="mono">{t("verticals.steps.reporting")}</span>
        {t("verticals.reportingLine")}
      </figcaption>
    </figure>
  );
};

export const Verticals = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  return (
    <main className="wrap inner-page">
      <SEO
        title={t("verticals.seo.title")}
        description={t("verticals.seo.description")}
        canonical={localize("/verticals")}
        hreflangPath="/verticals"
      />
      <section className="page-hero">
        <div className="mono eyebrow lit">[ {t("verticals.eyebrow")} ]</div>
        <h1>{t("verticals.heading")}</h1>
        <p className="lede">{t("verticals.lede")}</p>
      </section>

      <section className="section vertical-list">
        {VERTICALS.map(({ key, icon: Icon, slug }) => {
          const structures = t(`verticals.items.${key}.structures`, { returnObjects: true }) as string[];
          return (
            <article className="vertical-panel" id={slug} key={key}>
              <header>
                <span className="vertical-tile-icon">
                  <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h2>{t(`verticals.items.${key}.name`)}</h2>
                  <p>{t(`verticals.items.${key}.line`)}</p>
                </div>
              </header>
              <Structure verticalKey={key} />
              <div className="structure-chips">
                <span className="mono">{t("verticals.typical")}</span>
                <ul>
                  {structures.map((structure) => (
                    <li key={structure}>{structure}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      <section className="section page-cta">
        <h2>{t("verticals.cta.heading")}</h2>
        <div className="hero-actions">
          <Link className="market-cta primary" to={localize("/listings")}>
            {t("home.hero.viewListings")}
          </Link>
          <Link
            className="market-cta secondary"
            to={localize("/issuers#start")}
            onClick={() => track("issuer_cta_click", { from: "verticals" })}
          >
            {t("verticals.cta.issuer")}
          </Link>
        </div>
      </section>
    </main>
  );
};
