import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

const CREDENTIALS: { key: string; href?: string }[] = [
  { key: "cmta", href: "https://cmta.ch/certification/recognized-experts" },
  { key: "canton" },
  { key: "vacc" },
];

/** Shared credentials list, used by About and Issuers. Copy lives under about.credentials.* — not duplicated per page. */
export const Credentials = () => {
  const { t } = useTranslation();

  return (
    <ul className="credential-list">
      {CREDENTIALS.map(({ key, href }) => (
        <li key={key} className="credential">
          <strong>{t(`about.credentials.items.${key}.title`)}</strong>
          <span>{t(`about.credentials.items.${key}.detail`)}</span>
          {href && (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-link">
              {t("about.credentials.link")} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};
