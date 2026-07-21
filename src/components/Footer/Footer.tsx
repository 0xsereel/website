import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../Header/ThemeToggle";

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
  const isBlogPage =
    location.pathname === "/blog" || location.pathname.startsWith("/blog/");
  const footerGroups: FooterGroup[] = [
    {
      title: "Products",
      links: [
        { label: "Tokenization-as-a-Service", href: "/#product-tokenization" },
        { label: "Custody", href: "/#product-custody" },
        { label: "Marketplace & Settlement", href: "/#product-marketplace-settlement" },
        { label: "Compliance Layer", href: "/#product-compliance" },
        { label: "Tokenized RWA Lending", href: "/#product-rwa-lending" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Asset Managers", href: "/#solution-asset-managers" },
        { label: "Issuers & Arrangers", href: "/#solution-issuers-arrangers" },
        { label: "Banks & Custodians", href: "/#solution-banks-custodians" },
        { label: "Broker-Dealers & Platforms", href: "/#solution-broker-dealers-platforms" },
        { label: "Family Offices & Treasuries", href: "/#solution-family-offices-treasuries" },
        { label: "Institutional Strategy Teams", href: "/#solution-institutional-strategy-teams" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", to: "/blog" },
        { label: "Whitepaper", href: "/whitepapers/sereel-whitepaper.pdf", asset: true },
        { label: "Standards", to: "/standards" },
        { label: "FAQ", to: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
      ],
    },
  ];

  if (!isBlogPage) {
    return (
      <footer className="marketing-footer">
        <div className="wrap">
          <div className="marketing-footer-grid">
            <div className="marketing-footer-brand">
              <Link className="brand" to="/">
                <img src="/assets/glowing-logo.png" alt="" />
                <span className="name">SEREEL</span>
              </Link>
              <p>Compliant rails for tokenized capital markets.</p>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4>{group.title}</h4>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {"to" in link && link.to ? (
                        <Link to={link.to}>{link.label}</Link>
                      ) : (
                        <a
                          href={link.href ?? "#"}
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
            <span>© Sereel Technologies, Inc. 2026</span>
            <div className="footer-controls">
              <span>Infrastructure provider, not issuer or asset sponsor</span>
              <ThemeToggle className="footer-theme-toggle" />
            </div>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          Sereel<span>.</span>
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
          <span>© Sereel Technologies, Inc. 2026</span>
          <div className="footer-controls">
            <span>All Rights Reserved</span>
            <ThemeToggle className="footer-theme-toggle" />
          </div>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        Sereel<span>.</span>
      </div>
    </footer>
  );
};
