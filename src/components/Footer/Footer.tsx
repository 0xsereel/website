import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "../Header/ThemeToggle";
import { useLang } from "../../i18n/LanguageProvider";

type FooterLink = {
  label: string;
  to?: string;
  href?: string;
  asset?: boolean;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

export const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { localize } = useLang();
  const isBlogPage =
    location.pathname === "/blog" || location.pathname.startsWith("/blog/");
  const footerGroups: FooterGroup[] = [
    {
      title: t("footer.groups.products.title"),
      links: [
        { label: t("footer.groups.products.tokenization"), href: "/#product-tokenization" },
        { label: t("footer.groups.products.custody"), href: "/#product-custody" },
        { label: t("footer.groups.products.marketplace"), href: "/#product-marketplace-settlement" },
        { label: t("footer.groups.products.compliance"), href: "/#product-compliance" },
        { label: t("footer.groups.products.lending"), href: "/#product-rwa-lending" },
      ],
    },
    {
      title: t("footer.groups.solutions.title"),
      links: [
        { label: t("footer.groups.solutions.assetManagers"), href: "/#solution-asset-managers" },
        { label: t("footer.groups.solutions.issuers"), href: "/#solution-issuers-arrangers" },
        { label: t("footer.groups.solutions.banks"), href: "/#solution-banks-custodians" },
        { label: t("footer.groups.solutions.brokerDealers"), href: "/#solution-broker-dealers-platforms" },
        { label: t("footer.groups.solutions.familyOffices"), href: "/#solution-family-offices-treasuries" },
        { label: t("footer.groups.solutions.strategyTeams"), href: "/#solution-institutional-strategy-teams" },
      ],
    },
    {
      title: t("footer.groups.resources.title"),
      links: [
        { label: t("footer.groups.resources.blog"), to: "/blog" },
        { label: t("footer.groups.resources.whitepaper"), href: "/whitepapers/sereel-whitepaper.pdf", asset: true },
        { label: t("footer.groups.resources.standards"), to: "/standards" },
        { label: t("footer.groups.resources.faq"), to: "/faq" },
      ],
    },
    {
      title: t("footer.groups.company.title"),
      links: [
        { label: t("footer.groups.company.about"), to: "/about" },
        { label: t("footer.groups.company.contact"), to: "/contact" },
        { label: t("footer.groups.company.privacy"), to: "/privacy-policy" },
        { label: t("footer.groups.company.terms"), to: "/terms" },
      ],
    },
  ];

  if (!isBlogPage) {
    return (
      <footer className="marketing-footer">
        <div className="wrap">
          <div className="marketing-footer-grid">
            <div className="marketing-footer-brand">
              <Link className="brand" to={localize("/")}>
                <img src="/assets/glowing-logo.png" alt="" />
                <span className="name">SEREEL</span>
              </Link>
              <p>{t("footer.tagline")}</p>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4>{group.title}</h4>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {"to" in link && link.to ? (
                        <Link to={localize(link.to)}>{link.label}</Link>
                      ) : (
                        <a
                          href={link.asset ? link.href ?? "#" : localize(link.href ?? "#")}
                          target={link.asset ? "_blank" : undefined}
                          rel={link.asset ? "noopener noreferrer" : undefined}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="legal">
            <span>{t("footer.copyright")}</span>
            <div className="footer-controls">
              <span>{t("footer.disclaimer")}</span>
              <ThemeToggle className="footer-theme-toggle" />
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="blog-footer">
      <div className="wrap">
        <div className="row">
          <div className="col" style={{ maxWidth: 280 }}>
            <div className="brand" style={{ marginBottom: 14 }}>
              <img src="/assets/glowing-logo.png" alt="" />
              <span className="name">SEREEL</span>
            </div>
            <span className="mono">Institutional tokenization infrastructure</span>
          </div>
          <div className="col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/entities">Entities</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/repositories">Research Repository</Link></li>
              <li><Link to="/standards">Standards</Link></li>
            </ul>
          </div>
          <div className="col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:team@sereel.com">team@sereel.com</a></li>
              <li>
                  <a href="https://www.linkedin.com/company/0xsereel" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>

              <li>
                  <a href="https://x.com/0xSereel" target="_blank" rel="noopener noreferrer">
                    X / Twitter
                  </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Sereel Technologies Inc. All rights reserved.</span>
          <div className="footer-controls">
            <ThemeToggle className="footer-theme-toggle" />
          </div>
        </div>
      </div>
    </footer>
  );
};
