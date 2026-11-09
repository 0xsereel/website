import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";
import { SereelMark } from "../../components/Brand/SereelMark";

const CREDENTIALS: { key: string; href?: string }[] = [
  { key: "cmta", href: "https://cmta.ch/certification/recognized-experts" },
  { key: "canton" },
  { key: "vacc" },
];

const LOCATIONS = ["chicago", "nairobi", "kigali"] as const;

export const About = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  return (
    <main className="wrap inner-page">
      <SEO
        title={t("about.seo.title")}
        description={t("about.seo.description")}
        canonical={localize("/about")}
        hreflangPath="/about"
      />
      <section className="page-hero about-hero">
        <div>
          <div className="mono eyebrow lit">[ {t("about.eyebrow")} ]</div>
          <h1>
            {t("about.hero.headingStart")} <span className="lit">{t("about.hero.headingHighlight")}</span>
          </h1>
          <p className="lede">{t("about.hero.lede")}</p>
        </div>
        <div className="page-mark" aria-hidden="true">
          <SereelMark />
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("about.mission.eyebrow")} ]</div>
            <h2>{t("about.mission.heading")}</h2>
          </div>
        </div>
        <div className="about-body">
          <p>{t("about.mission.paragraph1")}</p>
          <p>{t("about.mission.paragraph2")}</p>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("about.credentials.eyebrow")} ]</div>
            <h2>{t("about.credentials.heading")}</h2>
          </div>
        </div>
        <ul className="credential-list">
          {CREDENTIALS.map(({ key, href }) => (
            <li key={key} className="credential">
              <strong>{t(`about.credentials.items.${key}.title`)}</strong>
              <span>{t(`about.credentials.items.${key}.detail`)}</span>
              {href && (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-link">
                  {t("about.credentials.link")} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("about.footprint.eyebrow")} ]</div>
            <h2>
              {t("about.footprint.headingStart")} <span className="lit">{t("about.footprint.headingHighlight")}</span>
            </h2>
          </div>
        </div>
        <div className="locations three">
          {LOCATIONS.map((key) => (
            <div className="loc" key={key}>
              <div className="name">{t(`about.footprint.locations.${key}.city`)}</div>
              <div className="country mono">{t(`about.footprint.locations.${key}.country`)}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
