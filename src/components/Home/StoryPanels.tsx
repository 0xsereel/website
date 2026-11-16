import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeftRight, ArrowRight, Droplets, Timer, type LucideIcon } from "lucide-react";
import { useLang } from "../../i18n/LanguageProvider";
import { VERTICALS } from "../Verticals/verticals";
import { VerifiedCard } from "../Verified/VerifiedCard";

/** The three takeaways the logo's petals point at, shared by the animated and static story. */

export const IssuePanel = () => {
  const { t } = useTranslation();
  return (
    <div className="story-panel-body">
      <span className="story-eyebrow mono lit">{t("home.story.issue.eyebrow")}</span>
      <h2>{t("home.story.issue.heading")}</h2>
      <ul className="vertical-tiles">
        {VERTICALS.map(({ key, icon: Icon }) => (
          <li key={key}>
            <div className="vertical-tile">
              <span className="vertical-tile-icon">
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <strong>{t(`verticals.items.${key}.name`)}</strong>
              <small>{t(`verticals.items.${key}.line`)}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const CheckPanel = () => {
  const { t } = useTranslation();
  return (
    <div className="story-panel-body is-check">
      <div>
        <span className="story-eyebrow mono lit">{t("home.story.check.eyebrow")}</span>
        <h2>{t("home.story.check.heading")}</h2>
        <p>{t("home.story.check.body")}</p>
      </div>
      <VerifiedCard showNote={false} showSample={false} />
    </div>
  );
};

const SETTLEMENT: { key: string; icon: LucideIcon }[] = [
  { key: "settlement", icon: Timer },
  { key: "transfers", icon: ArrowLeftRight },
  { key: "liquidity", icon: Droplets },
];

export const SettlePanel = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  return (
    <div className="story-panel-body">
      <span className="story-eyebrow mono lit">{t("home.story.settle.eyebrow")}</span>
      <h2>{t("home.story.settle.heading")}</h2>
      <ul className="settle-tiles">
        {SETTLEMENT.map(({ key, icon: Icon }) => (
          <li key={key} className="settle-tile">
            <span className="vertical-tile-icon">
              <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <strong>{t(`home.story.settle.items.${key}.title`)}</strong>
            <small>{t(`home.story.settle.items.${key}.line`)}</small>
          </li>
        ))}
      </ul>
      <Link className="text-link" to={localize("/listings")}>
        {t("home.story.settle.link")} <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </div>
  );
};
