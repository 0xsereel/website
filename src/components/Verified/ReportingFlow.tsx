import { useTranslation } from "react-i18next";
import { BadgeCheck, Building2, Landmark, ShieldCheck, type LucideIcon } from "lucide-react";
import { VerifiedPill } from "./VerifiedCard";

const SOURCES: { key: "custodian" | "administrator" | "trustee"; icon: LucideIcon }[] = [
  { key: "custodian", icon: Landmark },
  { key: "administrator", icon: Building2 },
  { key: "trustee", icon: ShieldCheck },
];

/**
 * Three independent parties feed signed data to Sereel, which publishes it to
 * the listing with the Sereel Verified check. Labels only; the picture does the work.
 */
export const ReportingFlow = () => {
  const { t } = useTranslation();

  return (
    <figure className="reporting-flow" aria-label={t("home.flow.aria")}>
      <svg className="reporting-flow-lines" viewBox="0 0 1000 320" preserveAspectRatio="none" aria-hidden="true">
        <path d="M262 52 C 330 52, 340 160, 412 160" />
        <path d="M262 160 L 412 160" />
        <path d="M262 268 C 330 268, 340 160, 412 160" />
        <path d="M612 160 L 738 160" />
      </svg>

      <div className="flow-sources">
        {SOURCES.map(({ key, icon: Icon }) => (
          <div className="flow-node" key={key}>
            <span className="flow-icon">
              <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <span>
              <strong>{t(`home.flow.nodes.${key}.title`)}</strong>
              <small>{t(`home.flow.nodes.${key}.sub`)}</small>
            </span>
          </div>
        ))}
      </div>

      <div className="flow-node is-sereel">
        <span className="flow-icon">
          <BadgeCheck size={18} strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span>
          <strong>{t("home.flow.nodes.sereel.title")}</strong>
          <small>{t("home.flow.nodes.sereel.sub")}</small>
        </span>
      </div>

      <div className="flow-node is-listing">
        <span>
          <strong>{t("home.flow.nodes.listing.title")}</strong>
          <small>{t("home.flow.nodes.listing.sub")}</small>
        </span>
        <VerifiedPill />
      </div>
    </figure>
  );
};
