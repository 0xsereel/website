import { useTranslation } from "react-i18next";

export const VerifiedBadgeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="verified-badge-icon">
    <path
      fill="currentColor"
      d="M12 1.8l2.5 1.9 3.1-.2 1 3 2.6 1.8-.9 3 .9 3-2.6 1.8-1 3-3.1-.2L12 22.2l-2.5-1.9-3.1.2-1-3-2.6-1.8.9-3-.9-3 2.6-1.8 1-3 3.1.2z"
    />
    <path d="M8 12.3l2.7 2.6L16.2 9" fill="none" stroke="var(--verified-tick, #fff)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Tick = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 12.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Clock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2.2" />
    <path d="M12 8v4.5l3 2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const VerifiedPill = ({ state = "verified" }: { state?: "verified" | "lapsed" }) => {
  const { t } = useTranslation();
  return state === "verified" ? (
    <span className="verified-pill">
      <VerifiedBadgeIcon size={15} />
      {t("verified.badge")}
    </span>
  ) : (
    <span className="verified-pill is-lapsed">
      <Clock />
      {t("verified.states.lapsed.pill")}
    </span>
  );
};

type CheckKey = "trustee" | "administrator" | "custodian";
const CHECKS: CheckKey[] = ["trustee", "administrator", "custodian"];

interface VerifiedCardProps {
  /** Which check, if any, is shown as late. */
  lateCheck?: CheckKey;
  showNote?: boolean;
}

/** A clearly marked sample of the Sereel Verified panel. Real badges live in dlala. */
export const VerifiedCard = ({ lateCheck, showNote = true }: VerifiedCardProps) => {
  const { t } = useTranslation();

  return (
    <figure className="verified-card" aria-label={t("verified.sampleAria")}>
      <div className="verified-card-head">
        <VerifiedPill state={lateCheck ? "lapsed" : "verified"} />
        <span className="verified-sample mono">{t("verified.sample")}</span>
      </div>
      <ul className="verified-checks">
        {CHECKS.map((key) => {
          const late = key === lateCheck;
          return (
            <li key={key} className={late ? "is-late" : undefined}>
              <span className="verified-check-icon">{late ? <Clock /> : <Tick />}</span>
              <span>
                <strong>{t(`verified.checks.${key}.label`)}</strong>
                <small>{late ? t("verified.states.lapsed.detail") : t(`verified.checks.${key}.detail`)}</small>
              </span>
            </li>
          );
        })}
      </ul>
      {showNote && <figcaption className="verified-note">{t("verified.note")}</figcaption>}
    </figure>
  );
};
