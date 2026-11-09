import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";
import { MarketPanel } from "../../components/Markets/MarketPanel";

export const Markets = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  return (
    <main className="wrap inner-page">
      <SEO
        title={t("markets.seo.title")}
        description={t("markets.seo.description")}
        canonical={localize("/markets")}
        hreflangPath="/markets"
      />
      <section className="page-hero">
        <div className="mono eyebrow lit">[ {t("markets.eyebrow")} ]</div>
        <h1>{t("markets.heading")}</h1>
        <p className="lede">{t("markets.lede")}</p>
      </section>
      <section className="section">
        <MarketPanel variant="full" />
        <p className="market-footnote">{t("markets.note")}</p>
      </section>
    </main>
  );
};
