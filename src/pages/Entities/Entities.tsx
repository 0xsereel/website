import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";

export const Entities = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  const entities = [
    { name: "Sereel Technologies, Inc.", location: t("entities.locations.chicago") },
    { name: "Sereel Technologies Botswana", location: t("entities.locations.gaborone") },
    { name: "Sereel Technologies Kenya", location: t("entities.locations.nairobi") },
  ];

  return (
    <main className="wrap">
      <SEO
        title={t("entities.seo.title")}
        description={t("entities.seo.description")}
        canonical={localize("/entities")}
        hreflangPath="/entities"
      />
      <section className="page-hero">
        <div className="mono eyebrow lit">[ {t("entities.eyebrow")} ]</div>
        <h1>
          {t("entities.headingStart")} <span className="lit">{t("entities.headingHighlight")}</span>
        </h1>
        <p className="lede">{t("entities.lede")}</p>
      </section>

      <section className="section">
        <div className="locations three">
          {entities.map((entity) => (
            <div className="loc" key={entity.name}>
              <div className="name">{entity.name}</div>
              <div className="country mono">{entity.location}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
