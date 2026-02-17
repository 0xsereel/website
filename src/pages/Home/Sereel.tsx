import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChainBar, MeshBg, Rv } from "../../components/Core/shared";
import { C } from "../../components/Core/theme";
import { Footer } from "../../components/Core/Footer";

interface Pillar {
  number: string;
  sectionTitle: string;
  headline: string;
  description: string;
  blocks: Array<{ label: string; items: string[] }>;
}

interface ClientSegment {
  title: string;
  description: string;
}

interface Partner {
  name: string;
  website: string;
  description: string;
  fallback: string;
}

const platformPillars: Pillar[] = [
  {
    number: "01",
    sectionTitle: "Enterprise Wallet Infrastructure",
    headline: "Institutional-Grade Custody & Key Management",
    description:
      "Enterprise EOA wallets and multisignature controls built for institutional security, governance, and auditability.",
    blocks: [
      {
        label: "Capabilities",
        items: [
          "Enterprise EOA wallets",
          "Configurable multi-signature workflows",
          "MPC key recovery",
          "Audit trails and compliance reporting",
        ],
      },
    ],
  },
  {
    number: "02",
    sectionTitle: "Tokenization Engine",
    headline: "Multi-Chain Tokenization Built on Open Standards",
    description:
      "Issue compliant tokens across leading networks using the CMTA standard. Issue once, distribute across markets.",
    blocks: [
      {
        label: "Supported Networks",
        items: [
          "EVM Chains: Ethereum, Arbitrum, Base, Polygon, Optimism (all L2s)",
          "Non-EVM: Solana, IOTA, Starknet",
          "Enterprise: Canton Network (privacy-preserving settlements)",
          "Interoperability: Chainlink CCIP",
        ],
      },
      {
        label: "Standard",
        items: ["CMTA-compliant tokenization (CMTAT framework)"],
      },
    ],
  },
  {
    number: "03",
    sectionTitle: "Asset Classes & Regulatory Support",
    headline: "Tokenize Any Asset. Any Jurisdiction.",
    description:
      "We provide the technical and legal framework to tokenize assets compliantly across jurisdictions.",
    blocks: [
      {
        label: "Regulatory Frameworks",
        items: [
          "Regulation S (Non-US Offerings)",
          "Regulation D (Accredited US Investors)",
          "MiCA-Ready (European Union)",
          "Swiss DLT Framework",
          "Singapore MAS Guidelines",
          "Custom Jurisdictional Support",
        ],
      },
    ],
  },
  {
    number: "04",
    sectionTitle: "Market Infrastructure",
    headline: "Trading, Settlement & Distribution Rails",
    description:
      "Infrastructure for primary issuance, secondary trading, and institutional settlement connected to global liquidity.",
    blocks: [
      {
        label: "Capabilities",
        items: [
          "Primary issuance and distribution infrastructure",
          "Secondary market connectivity",
          "T+0 settlement capabilities",
          "Institutional custody integrations",
          "OTC and exchange connectivity",
        ],
      },
    ],
  },
];

const clientSegments: ClientSegment[] = [
  {
    title: "For Fund Managers",
    description:
      "Tokenize fund shares, automate NAV and dividends, and support 24/7 compliant subscriptions.",
  },
  {
    title: "For Stock Exchanges",
    description:
      "Launch digital venues, integrate tokenized securities, and enable T+0 settlement.",
  },
  {
    title: "For Clearing Houses",
    description:
      "Atomic settlement and real-time collateral management with smart-contract clearing.",
  },
  {
    title: "For Banks",
    description:
      "Offer tokenization services, launch digital bonds, and modernize corporate treasury workflows.",
  },
  {
    title: "For Family Offices",
    description:
      "Access tokenized alternatives and private credit with institutional-grade custody.",
  },
];

const whySereel = [
  {
    title: "Standards-Based, Not Proprietary",
    body: "Built on CMTA, an open institutional standard. Your tokens stay portable, not locked in.",
  },
  {
    title: "True Multi-Chain, Not Multi-Chain Theater",
    body: "Native deployments across EVM, Solana, IOTA, Starknet, and Canton with no wrapped-token dependency.",
  },
  {
    title: "Privacy Where It Matters",
    body: "Canton integration supports confidentiality where required without sacrificing regulatory transparency.",
  },
  {
    title: "Production-Ready, Not Pilot-Ready",
    body: "Live production infrastructure supporting real capital flows, not pilots.",
  },
];

const partners: Partner[] = [
  {
    name: "Future Wealth Group",
    website: "futurewealthgroup.ch",
    description:
      "Swiss investment group focused on tokenized assets and sustainable finance.",
    fallback: "FWG",
  },
  {
    name: "GrowTokens",
    website: "growtokens.io",
    description:
      "ESG platform tokenizing solar projects for transparent, scalable sustainable investment.",
    fallback: "GT",
  },
  {
    name: "Future Energy Global",
    website: "fe.global",
    description:
      "Accelerating SAF markets through financial infrastructure at the intersection of climate and capital.",
    fallback: "FEG",
  },
];

function ImageSlot({
  src,
  alt,
  insertPath,
  height,
}: {
  src: string;
  alt: string;
  insertPath: string;
  height: number;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="image-slot" style={{ minHeight: height }}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 14 }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="image-placeholder" style={{ minHeight: height }}>
          <span className="image-placeholder-label">Image Slot</span>
          <strong>{alt}</strong>
          <span>Insert image at:</span>
          <code>{insertPath}</code>
        </div>
      )}
    </div>
  );
}

function PartnerLogo({ partner }: { partner: Partner }) {
  const compactDomain = (domain: string) => {
    if (domain.length <= 14) return domain;
    const [root, tld = ""] = domain.split(".");
    return `${root.slice(0, 7)}...${tld ? `.${tld}` : ""}`;
  };

  return (
    <article className="partner-card">
      <a href={`https://${partner.website}`} target="_blank" rel="noreferrer" className="partner-head">
        <div className="partner-logo-wrap">
          <span className="partner-fallback">{partner.fallback}</span>
        </div>
        <div>
          <h3>{partner.name}</h3>
          <p className="partner-url" title={partner.website}>
            {compactDomain(partner.website)}
          </p>
        </div>
      </a>
      <p className="partner-description">{partner.description}</p>
    </article>
  );
}

export function Sereel() {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavBg(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: C.bg, color: C.w, minHeight: "100vh", fontFamily: "var(--body)", overflowX: "hidden" }}>
      <style>{`
        :root { --body: 'Gilroy', sans-serif; --display: 'Gilroy-Bold', sans-serif; --mono: monospace; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }
        @keyframes morph { 0%{border-radius:30% 70% 60% 40%/50% 30% 70% 50%} 33%{border-radius:50% 50% 30% 70%/40% 60% 50% 50%} 66%{border-radius:40% 60% 50% 50%/60% 40% 60% 40%} 100%{border-radius:30% 70% 60% 40%/50% 30% 70% 50%} }
        @keyframes pulse { 0%,100%{opacity:.25} 50%{opacity:1} }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .section-wrap {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .section-label {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${C.g};
          font-family: var(--mono);
          margin-bottom: 16px;
        }

        .sb {
          background: ${C.g};
          color: #010201;
          border: 1px solid ${C.g};
          border-radius: 9px;
          padding: 14px 26px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .sb:hover {
          transform: translateY(-2px);
          background: ${C.gL};
          box-shadow: 0 16px 36px ${C.gGlow};
        }

        .so {
          background: transparent;
          color: ${C.w};
          border: 1px solid ${C.borderHi};
          border-radius: 9px;
          padding: 14px 26px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: transform .25s ease, border-color .25s ease, background .25s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .so:hover {
          transform: translateY(-2px);
          border-color: ${C.g}66;
          background: ${C.gU};
        }

        .shell {
          border: 1px solid ${C.border};
          border-radius: 16px;
          background: linear-gradient(160deg, ${C.card}, ${C.elevated});
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 20px;
          align-items: stretch;
        }

        .hero-sub {
          font-size: 17px;
          color: ${C.w2};
          line-height: 1.8;
          max-width: 680px;
        }

        .hero-metrics {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .hero-metric {
          border: 1px solid ${C.border};
          border-radius: 12px;
          padding: 12px;
          background: ${C.surface};
          text-align: center;
        }

        .hero-metric strong {
          display: block;
          font-family: var(--display);
          font-size: clamp(20px, 3vw, 28px);
          line-height: 1;
          margin-bottom: 6px;
          background: linear-gradient(135deg, #1ea46f, #18d4a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-metric span {
          font-size: 10px;
          color: ${C.d};
          text-transform: uppercase;
          letter-spacing: 1.7px;
          font-family: var(--mono);
        }

        .market-banner {
          margin-top: 26px;
          border: 1px solid ${C.borderHi};
          border-radius: 12px;
          padding: 16px;
          background: ${C.gU};
          color: ${C.w2};
        }

        .market-banner-title {
          font-size: 10px;
          color: ${C.g};
          font-family: var(--mono);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .market-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .market-stat {
          border: 1px solid ${C.border};
          border-radius: 10px;
          background: ${C.surface};
          padding: 12px 10px;
          text-align: center;
        }

        .market-stat strong {
          display: block;
          font-size: clamp(18px, 2.7vw, 24px);
          line-height: 1;
          margin-bottom: 6px;
          color: ${C.w};
          font-family: var(--display);
        }

        .market-stat span {
          display: block;
          font-size: 10px;
          color: ${C.d};
          text-transform: uppercase;
          letter-spacing: 1.3px;
          font-family: var(--mono);
        }

        .market-source {
          margin-top: 10px;
          font-size: 11px;
          color: ${C.d};
          text-align: center;
        }

        .split-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 20px;
        }

        .pillars-grid,
        .segments-grid,
        .why-grid,
        .partners-grid {
          display: grid;
          gap: 16px;
        }

        .pillars-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .segments-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        .why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .partners-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }

        .card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 12px;
        }

        .pill-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: ${C.gD};
          border: 1px solid ${C.g}33;
          color: ${C.g};
          font-size: 11px;
          font-family: var(--mono);
          letter-spacing: 1px;
        }

        .card-kicker {
          font-size: 11px;
          color: ${C.d};
          text-transform: uppercase;
          letter-spacing: 2px;
          font-family: var(--mono);
        }

        .content-list {
          margin: 8px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 8px;
        }

        .content-list li {
          position: relative;
          padding-left: 16px;
          color: ${C.w2};
          line-height: 1.6;
          font-size: 13px;
        }

        .content-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.62em;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: ${C.g};
          box-shadow: 0 0 10px ${C.gGlow};
        }

        .image-slot {
          border: 1px solid ${C.border};
          border-radius: 14px;
          overflow: hidden;
          background: ${C.surface};
        }

        .image-placeholder {
          width: 100%;
          display: grid;
          gap: 8px;
          align-content: center;
          justify-items: center;
          padding: 18px;
          text-align: center;
          background: radial-gradient(circle at 40% 30%, ${C.gU}, transparent 55%), ${C.surface};
        }

        .image-placeholder-label {
          font-size: 10px;
          font-family: var(--mono);
          letter-spacing: 1.8px;
          color: ${C.g};
          text-transform: uppercase;
        }

        .image-placeholder strong {
          font-size: 16px;
          color: ${C.w};
        }

        .image-placeholder span {
          font-size: 12px;
          color: ${C.w2};
        }

        .image-placeholder code {
          font-family: var(--mono);
          font-size: 10px;
          color: ${C.g};
          border: 1px solid ${C.borderHi};
          border-radius: 8px;
          padding: 5px 8px;
          background: ${C.bg};
          display: block;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .partner-card {
          border: 1px solid ${C.border};
          border-radius: 16px;
          background: ${C.card};
          padding: 16px;
          display: grid;
          gap: 10px;
        }

        .partner-head {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }

        .partner-logo-wrap {
          width: 56px;
          height: 56px;
          border-radius: 999px;
          border: 1px solid ${C.borderHi};
          background: ${C.surface};
          display: grid;
          place-items: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .partner-fallback {
          font-size: 12px;
          font-family: var(--mono);
          color: ${C.g};
          letter-spacing: 0.8px;
        }

        .partner-head h3 {
          font-size: 15px;
          margin: 0 0 4px;
          font-weight: 700;
        }

        .partner-head p {
          margin: 0;
          font-size: 10px;
          color: ${C.d};
          font-family: var(--mono);
        }

        .partner-url {
          max-width: 128px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        .partner-description {
          margin: 0;
          font-size: 13px;
          color: ${C.w2};
          line-height: 1.65;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 16px;
        }

        .social-links {
          display: flex;
          gap: 14px;
        }

        .social-link {
          color: ${C.d};
          text-decoration: none;
          font-size: 12px;
          transition: color .2s ease;
        }

        .social-link:hover {
          color: ${C.w2};
        }

        @media (max-width: 1140px) {
          .segments-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 920px) {
          .hero-grid,
          .split-grid,
          .pillars-grid,
          .why-grid,
          .partners-grid,
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .hero-metrics,
          .market-stats-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 700px) {
          .section-wrap {
            width: min(1180px, calc(100% - 28px));
          }

          .hero-metrics,
          .segments-grid,
          .market-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 66,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(14px, 4vw, 52px)",
          background: navBg ? C.bg + "ee" : "transparent",
          borderBottom: navBg ? `1px solid ${C.border}` : "1px solid transparent",
          backdropFilter: navBg ? "blur(14px)" : "none",
          transition: "all 0.25s ease",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "inherit" }}>
          <img src="/images/Hero/glowing_seree_logo.svg" alt="Sereel" style={{ width: 30, height: 30 }} />
          <span style={{ fontWeight: 800, letterSpacing: "-0.35px", fontSize: 19, fontFamily: "var(--display)" }}>sereel</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/platform" className="so" style={{ padding: "8px 14px", fontSize: 12 }}>Platform</Link>
          <a href="#segments" className="so" style={{ padding: "8px 14px", fontSize: 12 }}>Clients</a>
          <Link to="/blog" className="so" style={{ padding: "8px 14px", fontSize: 12 }}>Blog</Link>
          <Link to="/contact" className="sb" style={{ padding: "8px 14px", fontSize: 12 }}>Schedule Consultation</Link>
        </div>
      </nav>

      <section style={{ padding: "112px 0 72px", position: "relative" }}>
        <MeshBg />
        <div className="section-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-grid">
            <Rv>
              <div className="shell" style={{ padding: "30px" }}>
                <div className="section-label">Institutional Infrastructure</div>
                <h1
                  style={{
                    fontSize: "clamp(36px, 5.8vw, 68px)",
                    lineHeight: 1.03,
                    letterSpacing: "-2.6px",
                    fontFamily: "var(--display)",
                    margin: "0 0 18px",
                  }}
                >
                  Institutional-Grade Digital Asset Infrastructure
                </h1>
                <p className="hero-sub">
                  End-to-end tokenization, custody, and market infrastructure for enterprise institutional DeFi.
                  Built for compliance. Designed for scale.
                </p>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 26 }}>
                  <Link to="/contact" className="sb">Schedule Consultation</Link>
                  <Link to="/blog" className="so">Visit Blog</Link>
                </div>
                <div className="hero-metrics">
                  <div className="hero-metric">
                    <strong>10+</strong>
                    <span>Supported Networks</span>
                  </div>
                  <div className="hero-metric">
                    <strong>CMTA</strong>
                    <span>Certified Provider</span>
                  </div>
                  <div className="hero-metric">
                    <strong>24/7</strong>
                    <span>Compliance Ops</span>
                  </div>
                </div>
              </div>
            </Rv>
            <Rv d={0.08}>
              <div className="shell" style={{ padding: "18px", height: "100%", display: "grid", gap: 14 }}>
                <ImageSlot
                  src="/images/home/hero-infrastructure.jpg"
                  alt="Institutional tokenization operations dashboard"
                  insertPath="/public/images/home/hero-infrastructure.jpg"
                  height={250}
                />
                <ImageSlot
                  src="/images/home/hero-network-map.jpg"
                  alt="Multi-chain network and settlement map"
                  insertPath="/public/images/home/hero-network-map.jpg"
                  height={170}
                />
              </div>
            </Rv>
          </div>

          <div className="market-banner">
            <div className="market-banner-title">Market Stats</div>
            <div className="market-stats-grid">
              <div className="market-stat">
                <strong>$24.83B</strong>
                <span>Total RWA Value</span>
              </div>
              <div className="market-stat">
                <strong>849,297</strong>
                <span>Asset Holders</span>
              </div>
              <div className="market-stat">
                <strong>$296.51B</strong>
                <span>Stablecoin Value</span>
              </div>
              <div className="market-stat">
                <strong>$10.71B</strong>
                <span>Tokenized U.S. Treasuries</span>
              </div>
            </div>
            <div className="market-source">Source: RWA.xyz market overview (as of 2026)</div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div
          style={{
            textAlign: "center",
            paddingTop: 12,
            fontSize: 10,
            letterSpacing: "2.8px",
            textTransform: "uppercase",
            color: C.d,
            fontFamily: "var(--mono)",
          }}
        >
          Supported Networks
        </div>
        <ChainBar />
      </div>

      <section style={{ padding: "84px 0" }}>
        <div className="section-wrap">
          <Rv>
            <div className="split-grid">
              <div className="shell" style={{ padding: "30px" }}>
                <div className="section-label">About</div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 3.8vw, 45px)",
                    lineHeight: 1.06,
                    letterSpacing: "-1.8px",
                    fontFamily: "var(--display)",
                    margin: "0 0 14px",
                  }}
                >
                  Institutional stack for digital assets
                </h2>
                <p style={{ color: C.w2, fontSize: 16, lineHeight: 1.9, margin: 0 }}>
                  Sereel provides secure custody, compliant tokenization, market connectivity, and strategic support.
                  We help institutions tokenize, custody, and trade across blockchain networks.
                </p>
              </div>
              <div className="shell" style={{ padding: "18px" }}>
                <ImageSlot
                  src="/images/home/institutional-intro.jpg"
                  alt="Institutional team operating tokenization and custody workflows"
                  insertPath="/public/images/home/institutional-intro.jpg"
                  height={320}
                />
              </div>
            </div>
          </Rv>
        </div>
      </section>

      <section id="platform" style={{ padding: "22px 0 84px" }}>
        <div className="section-wrap">
          <Rv>
            <div className="section-label">Platform Pillars</div>
            <h2
              style={{
                fontSize: "clamp(30px, 4.5vw, 52px)",
                lineHeight: 1.02,
                letterSpacing: "-2px",
                fontFamily: "var(--display)",
                margin: "0 0 28px",
                maxWidth: 780,
              }}
            >
              One stack for custody, tokenization, compliance, and market rails
            </h2>
          </Rv>
          <div className="pillars-grid">
            {platformPillars.map((pillar, index) => (
              <Rv key={pillar.number} d={index * 0.05}>
                <article className="shell" style={{ padding: "24px" }}>
                  <div className="card-head">
                    <span className="pill-number">{pillar.number}</span>
                    <span className="card-kicker">{pillar.sectionTitle}</span>
                  </div>
                  <h3 style={{ margin: "0 0 10px", fontSize: 23, lineHeight: 1.2 }}>{pillar.headline}</h3>
                  <p style={{ margin: "0 0 12px", color: C.w2, lineHeight: 1.75, fontSize: 14 }}>{pillar.description}</p>

                  {pillar.blocks.map((block) => (
                    <div key={block.label} style={{ marginTop: 14 }}>
                      <strong style={{ color: C.g, fontSize: 12, letterSpacing: "1px", fontFamily: "var(--mono)" }}>
                        {block.label}
                      </strong>
                      <ul className="content-list">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </article>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section id="segments" style={{ padding: "84px 0", background: C.surface, borderTop: `1px solid ${C.border}` }}>
        <div className="section-wrap">
          <Rv>
            <div className="section-label">Client Segments</div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.8vw, 46px)",
                lineHeight: 1.05,
                letterSpacing: "-1.6px",
                fontFamily: "var(--display)",
                margin: "0 0 24px",
              }}
            >
              Built for institutional participants
            </h2>
          </Rv>
          <div className="segments-grid">
            {clientSegments.map((segment, index) => (
              <Rv key={segment.title} d={index * 0.05}>
                <article className="shell" style={{ padding: "18px", minHeight: "100%" }}>
                  <h3 style={{ margin: "0 0 10px", fontSize: 16 }}>{segment.title}</h3>
                  <p style={{ margin: 0, color: C.w2, fontSize: 13.5, lineHeight: 1.72 }}>{segment.description}</p>
                </article>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "84px 0", background: C.surface, borderTop: `1px solid ${C.border}` }}>
        <div className="section-wrap">
          <Rv>
            <div className="section-label">Why Sereel</div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 46px)",
                lineHeight: 1.05,
                letterSpacing: "-1.7px",
                fontFamily: "var(--display)",
                margin: "0 0 22px",
              }}
            >
              Institutional confidence in every layer
            </h2>
          </Rv>
          <div className="why-grid">
            {whySereel.map((item, index) => (
              <Rv key={item.title} d={index * 0.05}>
                <article className="shell" style={{ padding: "24px" }}>
                  <h3 style={{ margin: "0 0 10px", fontSize: 19 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: C.w2, lineHeight: 1.78 }}>{item.body}</p>
                </article>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "12px 0 90px" }}>
        <div className="section-wrap">
          <Rv>
            <div style={{ textAlign: "center", marginBottom: 22 }}>
              <div className="section-label" style={{ marginBottom: 10 }}>Trusted By</div>
              <h2 style={{ margin: "0 0 10px", fontSize: "clamp(26px, 3vw, 36px)", fontFamily: "var(--display)" }}>
                Powering tokenization for institutions
              </h2>
            </div>
          </Rv>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <Rv key={partner.name} d={index * 0.06}>
                <PartnerLogo partner={partner} />
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Sereel;
