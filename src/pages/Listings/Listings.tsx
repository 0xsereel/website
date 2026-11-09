import { useTranslation } from "react-i18next";
import { KeyRound, Mail, SearchCheck } from "lucide-react";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";
import { ListingsAccessForm } from "../../components/Forms/ListingsAccessForm";

const STEPS = [
  { key: "request", icon: Mail },
  { key: "review", icon: SearchCheck },
  { key: "access", icon: KeyRound },
] as const;

export const Listings = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  return (
    <main className="wrap inner-page">
      <SEO
        title={t("listings.seo.title")}
        description={t("listings.seo.description")}
        canonical={localize("/listings")}
        hreflangPath="/listings"
      />
      <section className="page-hero">
        <div className="mono eyebrow lit">[ {t("listings.eyebrow")} ]</div>
        <h1>{t("listings.heading")}</h1>
        <p className="lede">{t("listings.lede")}</p>
      </section>

      <section className="section">
        <ol className="access-steps">
          {STEPS.map(({ key, icon: Icon }, index) => (
            <li key={key}>
              <span className="access-step-icon">
                <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>
              <strong>{t(`listings.steps.${key}.title`)}</strong>
              <small>{t(`listings.steps.${key}.line`)}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <ListingsAccessForm />
      </section>
    </main>
  );
};
