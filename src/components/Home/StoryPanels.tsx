import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { useLang } from "../../i18n/LanguageProvider";
import { VERTICALS } from "../Verticals/verticals";
import { VerifiedCard } from "../Verified/VerifiedCard";
import { MarketPanel } from "../Markets/MarketPanel";

/** The three takeaways the logo's petals point at, shared by the animated and static story. */

export const IssuePanel = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  return (
    <div className="story-panel-body">
      <span className="story-eyebrow mono lit">{t("home.story.issue.eyebrow")}</span>
      <h2>{t("home.story.issue.heading")}</h2>
      <ul className="vertical-tiles">
        {VERTICALS.map(({ key, icon: Icon, slug }) => (
          <li key={key}>
            <Link to={`${localize("/verticals")}#${slug}`} className="vertical-tile">
              <span className="vertical-tile-icon">
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <strong>{t(`verticals.items.${key}.name`)}</strong>
              <small>{t(`verticals.items.${key}.line`)}</small>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const CheckPanel = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  return (
    <div className="story-panel-body is-check">
      <div>
        <span className="story-eyebrow mono lit">{t("home.story.check.eyebrow")}</span>
        <h2>{t("home.story.check.heading")}</h2>
        <p>{t("home.story.check.body")}</p>
        <Link className="text-link" to={localize("/sereel-verified")}>
          {t("home.story.check.link")} <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
      <VerifiedCard showNote={false} />
    </div>
  );
};

export const OperatePanel = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  return (
    <div className="story-panel-body">
      <span className="story-eyebrow mono lit">{t("home.story.operate.eyebrow")}</span>
      <h2>{t("home.story.operate.heading")}</h2>
      <MarketPanel variant="compact" />
      <Link className="text-link" to={localize("/markets")}>
        {t("home.story.operate.link")} <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </div>
  );
};
