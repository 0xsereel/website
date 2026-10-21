import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";

export const NotFound = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  return (
    <main className="wrap">
      <SEO title={t("notFound.seo.title")} noIndex />
      <section className="page-hero" style={{ textAlign: "center" }}>
        <div className="mono eyebrow lit">[ 404 ]</div>
        <h1>{t("notFound.heading")}</h1>
        <p className="lede">{t("notFound.body")}</p>
        <div style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center" }}>
          <Link className="pill" to={localize("/")}>
            <span className="dot"></span>{t("notFound.backHome")}
          </Link>
          <Link className="pill" to="/blog">
            <span className="dot"></span>{t("notFound.readJournal")}
          </Link>
        </div>
      </section>
    </main>
  );
};
