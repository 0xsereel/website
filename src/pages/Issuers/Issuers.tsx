import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";

export const Issuers = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

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
      </section>
    </main>
  );
};
