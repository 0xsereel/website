import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Activity, ArrowRight, FolderOpen, Landmark, ShieldCheck, Tags, UserCheck, type LucideIcon } from "lucide-react";
import { useLang } from "../../i18n/LanguageProvider";
import { MarketPanel } from "../Markets/MarketPanel";
import { ReportingFlow } from "../Verified/ReportingFlow";
import { ListingsAccessForm } from "../Forms/ListingsAccessForm";

const BENEFITS: { key: string; icon: LucideIcon }[] = [
  { key: "compliant", icon: ShieldCheck },
  { key: "reporting", icon: Activity },
  { key: "pricing", icon: Tags },
  { key: "custodians", icon: Landmark },
  { key: "access", icon: UserCheck },
  { key: "documents", icon: FolderOpen },
];

export const Benefits = () => {
  const { t } = useTranslation();
  return (
    <section className="marketing-section wrap" aria-labelledby="benefits-title">
      <div className="section-copy compact">
        <h2 id="benefits-title">{t("home.benefits.heading")}</h2>
      </div>
      <ul className="benefit-grid">
        {BENEFITS.map(({ key, icon: Icon }) => (
          <li key={key} className="benefit-tile">
            <span className="benefit-icon">
              <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <strong>{t(`home.benefits.items.${key}.title`)}</strong>
            <small>{t(`home.benefits.items.${key}.line`)}</small>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const ReportingSection = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  return (
    <section className="marketing-section reporting-section" aria-labelledby="reporting-title">
      <div className="wrap">
        <div className="section-copy compact">
          <h2 id="reporting-title">{t("home.flow.heading")}</h2>
        </div>
        <ReportingFlow />
        <Link className="text-link" to={localize("/sereel-verified")}>
          {t("home.flow.link")} <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export const MarketsSection = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  return (
    <section className="marketing-section wrap" id="markets" aria-labelledby="markets-title">
      <div className="section-copy compact">
        <h2 id="markets-title">{t("home.markets.heading")}</h2>
        <p>{t("home.markets.lede")}</p>
      </div>
      <MarketPanel variant="full" />
      <Link className="text-link" to={localize("/markets")}>
        {t("home.markets.link")} <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </section>
  );
};

export const ListingsBand = () => {
  const { t } = useTranslation();
  return (
    <section className="listings-band" id="view-listings" aria-labelledby="listings-band-title">
      <div className="wrap listings-band-grid">
        <div>
          <h2 id="listings-band-title">{t("home.listingsBand.heading")}</h2>
          <p>{t("home.listingsBand.lede")}</p>
        </div>
        <ListingsAccessForm compact />
      </div>
    </section>
  );
};
