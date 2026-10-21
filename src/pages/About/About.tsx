import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";

export const About = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  return (
    <main className="wrap">
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
            {t("about.hero.headingStart")}
            <br />
            {t("about.hero.headingMiddle")} <span className="lit">{t("about.hero.headingHighlight")}</span>{" "}
            {t("about.hero.headingEnd")}
          </h1>
          <p className="lede">{t("about.hero.lede")}</p>
        </div>

        <div className="logo-stage hero-logo-stage" aria-hidden="true">
          <img src="/images/Hero/glowing_seree_logo_expanded.svg" alt="" />
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("about.mission.eyebrow")} ]</div>
            <h2>
              {t("about.mission.headingStart")} <span className="lit">{t("about.mission.headingHighlight")}</span>
            </h2>
          </div>
        </div>

        <div className="about-body">
          <p>
            {t("about.mission.paragraph1Start")}{" "}
            <span className="lit">{t("about.mission.paragraph1Highlight")}</span>.
          </p>
          <p>{t("about.mission.paragraph2")}</p>
        </div>

        <div className="stat-grid">
          <div className="cell">
            <div className="k display">
              $<span className="lit">30</span>B+
            </div>
            <div className="v mono">{t("about.stats.market")}</div>
          </div>
          <div className="cell">
            <div className="k display">
              <span className="lit">8</span>
            </div>
            <div className="v mono">{t("about.stats.chains")}</div>
          </div>
          <div className="cell">
            <div className="k display">
              T<span className="lit">+0</span>
            </div>
            <div className="v mono">{t("about.stats.settlement")}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("about.footprint.eyebrow")} ]</div>
            <h2>
              {t("about.footprint.headingStart")} <span className="lit">{t("about.footprint.headingHighlight")}</span>
            </h2>
          </div>
          <p className="lede">{t("about.footprint.lede")}</p>
        </div>
        <div className="locations three">
          <div className="loc">
            <div className="name">{t("about.footprint.locations.chicago.city")}</div>
            <div className="country mono">{t("about.footprint.locations.chicago.country")}</div>
          </div>
          <div className="loc">
            <div className="name">{t("about.footprint.locations.nairobi.city")}</div>
            <div className="country mono">{t("about.footprint.locations.nairobi.country")}</div>
          </div>
          <div className="loc">
            <div className="name">{t("about.footprint.locations.kigali.city")}</div>
            <div className="country mono">{t("about.footprint.locations.kigali.country")}</div>
          </div>
        </div>
      </section>
    </main>
  );
};
