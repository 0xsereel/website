import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "../Header/ThemeToggle";
import { useLang } from "../../i18n/LanguageProvider";

type FooterLink = { label: string; to?: string; href?: string };
type FooterGroup = { title: string; links: FooterLink[] };

export const Footer = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  const groups: FooterGroup[] = [
    {
      title: t("footer.groups.sereel.title"),
      links: [
        { label: t("nav.verticals"), to: "/verticals" },
        { label: t("nav.verified"), to: "/sereel-verified" },
        { label: t("nav.markets"), to: "/markets" },
        { label: t("nav.viewListings"), to: "/listings" },
      ],
    },
    {
      title: t("footer.groups.company.title"),
      links: [
        { label: t("nav.about"), to: "/about" },
        { label: t("nav.contact"), to: "/contact" },
        { label: t("footer.groups.company.blog"), to: "/blog" },
        { label: t("footer.groups.company.faq"), to: "/faq" },
      ],
    },
    {
      title: t("footer.groups.legal.title"),
      links: [
        { label: t("footer.groups.legal.privacy"), to: "/privacy-policy" },
        { label: t("footer.groups.legal.terms"), to: "/terms" },
        { label: "team@sereel.com", href: "mailto:team@sereel.com" },
      ],
    },
  ];

  return (
    <footer className="marketing-footer">
      <div className="wrap">
        <div className="marketing-footer-grid is-three">
          <div className="marketing-footer-brand">
            <Link className="brand" to={localize("/")}>
              <img src="/assets/glowing-logo.png" alt="" />
              <span className="name">SEREEL</span>
            </Link>
            <p>{t("footer.tagline")}</p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? <Link to={localize(link.to)}>{link.label}</Link> : <a href={link.href}>{link.label}</a>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="footer-notice">{t("footer.notice")}</p>

        <div className="legal">
          <span>{t("footer.copyright")}</span>
          <div className="footer-controls">
            <ThemeToggle className="footer-theme-toggle" />
          </div>
        </div>
      </div>
    </footer>
  );
};
