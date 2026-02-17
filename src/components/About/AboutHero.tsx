import { useState } from "react";
import { Link } from "react-router-dom";
import { C, grdT } from "../Core/theme";
import { MeshBg, Gc, Rv } from "../Core/shared";

function MarketImage({
  src,
  alt,
  fallbackPath,
}: {
  src: string;
  alt: string;
  fallbackPath: string;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        overflow: "hidden",
        background: C.surface,
        minHeight: 220,
      }}
    >
      {!missing ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            minHeight: 220,
            objectFit: "cover",
            filter: "grayscale(22%)",
          }}
          onError={() => setMissing(true)}
        />
      ) : (
        <div
          style={{
            minHeight: 220,
            padding: 20,
            display: "grid",
            gap: 8,
            alignContent: "center",
            justifyItems: "center",
            textAlign: "center",
            background: `radial-gradient(circle at 50% 30%, ${C.gU}, transparent 60%), ${C.surface}`,
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: C.g,
              fontFamily: "var(--mono)",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Insert Image
          </span>
          <strong style={{ color: C.w }}>{alt}</strong>
          <code
            style={{
              color: C.g,
              border: `1px solid ${C.borderHi}`,
              borderRadius: 8,
              padding: "5px 8px",
              fontSize: 11,
              fontFamily: "var(--mono)",
              background: C.bg,
            }}
          >
            {fallbackPath}
          </code>
        </div>
      )}
    </div>
  );
}

export default function AboutHero() {
  return (
    <>
      <style>{`
        .about-wrap {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 16px;
        }
        .market-grid,
        .capability-grid,
        .principle-grid {
          display: grid;
          gap: 16px;
        }
        .market-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .capability-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .principle-grid {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }
        .dot-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 9px;
        }
        .dot-list li {
          position: relative;
          padding-left: 16px;
          color: ${C.w2};
          font-size: 14px;
          line-height: 1.68;
        }
        .dot-list li::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 999px;
          position: absolute;
          left: 0;
          top: 0.62em;
          background: ${C.g};
          box-shadow: 0 0 10px ${C.gGlow};
        }
        .stage-card {
          border: 1px solid ${C.border};
          border-radius: 12px;
          padding: 14px 12px;
          background: ${C.card};
        }
        @media (max-width: 960px) {
          .about-grid,
          .market-grid,
          .capability-grid {
            grid-template-columns: 1fr;
          }
          .principle-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .about-wrap {
            width: min(1160px, calc(100% - 28px));
          }
          .principle-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section
        style={{
          minHeight: "82vh",
          display: "flex",
          alignItems: "center",
          padding: "108px 0 64px",
          position: "relative",
        }}
      >
        <MeshBg />
        <div className="about-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="about-grid">
            <Rv>
              <Gc p="34px 30px">
                <div className="sl">About Sereel</div>
                <h1
                  style={{
                    margin: "0 0 18px",
                    fontSize: "clamp(36px,5.5vw,66px)",
                    lineHeight: 1.02,
                    letterSpacing: "-2.5px",
                    fontFamily: "var(--display)",
                  }}
                >
                  The Institutional Bridge Between <span style={grdT}>Underserved</span> and{" "}
                  <span style={grdT}>Well-Served</span> Markets
                </h1>
                <p style={{ margin: "0 0 12px", color: C.w2, fontSize: 16, lineHeight: 1.82 }}>
                  Sereel connects capital, infrastructure, and compliant distribution across global markets.
                  We pair institutional standards with access for historically underserved regions.
                </p>
                <p style={{ margin: "0 0 26px", color: C.w2, fontSize: 16, lineHeight: 1.82 }}>
                  Our mandate is simple: institutional quality in every market.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link className="sb" to="/contact">
                    Schedule Consultation
                  </Link>
                  <Link className="so" to="/blog">
                    Visit Blog
                  </Link>
                </div>
              </Gc>
            </Rv>

            <Rv d={0.08}>
              <Gc p="22px 20px" style={{ height: "100%" }}>
                <div className="sl">Core Position</div>
                <h3 style={{ margin: "0 0 12px", fontSize: 24, lineHeight: 1.2 }}>
                  One institutional layer for fragmented markets
                </h3>
                <ul className="dot-list">
                  <li>CMTA-based standards for portability and compliance</li>
                  <li>Institutional custody and governance controls</li>
                  <li>Multi-chain issuance and settlement with policy controls</li>
                </ul>
              </Gc>
            </Rv>
          </div>
        </div>
      </section>

      <section style={{ padding: "18px 0 84px" }}>
        <div className="about-wrap">
          <Rv>
            <Gc p="36px 30px">
              <div className="sl">Institutional Thesis</div>
              <p style={{ margin: 0, color: C.w2, fontSize: 18, lineHeight: 1.9, maxWidth: 1000 }}>
                Capital should not be constrained by geography or legacy infrastructure. Sereel combines tokenization,
                custody, compliance, and market connectivity so institutions can originate in one market and distribute
                in another with confidence.
              </p>
            </Gc>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "0 0 84px" }}>
        <div className="about-wrap">
          <Rv>
            <div className="sl">Market Coverage</div>
            <h2
              style={{
                margin: "0 0 24px",
                fontSize: "clamp(30px,4.2vw,50px)",
                lineHeight: 1.04,
                letterSpacing: "-2px",
                fontFamily: "var(--display)",
                maxWidth: 900,
              }}
            >
              Connecting markets that need capital with markets that can deploy it
            </h2>
          </Rv>

          <div className="market-grid">
            <Rv>
              <Gc p="26px 24px" style={{ height: "100%" }}>
                <div className="sl">Underserved Markets</div>
                <p style={{ margin: "0 0 14px", color: C.w2, lineHeight: 1.8, fontSize: 15 }}>
                  Regions with strong capital demand but limited institutional issuance and settlement access.
                </p>
                <ul className="dot-list">
                  <li>Emerging market credit and private enterprise financing</li>
                  <li>Infrastructure and climate-transition projects</li>
                  <li>Growth issuers seeking compliant global investor access</li>
                </ul>
              </Gc>
            </Rv>

            <Rv d={0.08}>
              <Gc p="26px 24px" style={{ height: "100%" }}>
                <div className="sl">Well-Served Markets</div>
                <p style={{ margin: "0 0 14px", color: C.w2, lineHeight: 1.8, fontSize: 15 }}>
                  Institutions that require governance, compliance, and operational quality before allocating globally.
                </p>
                <ul className="dot-list">
                  <li>Institutional allocators seeking compliant access to new asset pools</li>
                  <li>Regulated entities requiring auditable controls</li>
                  <li>Markets prioritizing open standards over lock-in</li>
                </ul>
              </Gc>
            </Rv>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 84px" }}>
        <div className="about-wrap">
          <div className="capability-grid">
            {[
              {
                title: "Standards-First Issuance",
                body: "CMTA standards enable compliant issuance with institutional portability across jurisdictions.",
              },
              {
                title: "Institutional Custody & Governance",
                body: "Role-based controls, approval workflows, and auditable operations for treasury and risk teams.",
              },
              {
                title: "Cross-Market Distribution Rails",
                body: "Primary and secondary connectivity from issuance through settlement and reporting.",
              },
              {
                title: "Jurisdiction-Aware Compliance",
                body: "Policy controls mapped to regional frameworks for compliant scaling.",
              },
            ].map((item, index) => (
              <Rv key={item.title} d={index * 0.05}>
                <Gc p="24px 22px" style={{ height: "100%" }}>
                  <h3 style={{ margin: "0 0 10px", fontSize: 20 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: C.w2, lineHeight: 1.75, fontSize: 14.5 }}>{item.body}</p>
                </Gc>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 84px" }}>
        <div className="about-wrap">
          <Rv>
            <div className="sl">Operating Model</div>
            <h2
              style={{
                margin: "0 0 20px",
                fontSize: "clamp(28px,3.9vw,44px)",
                letterSpacing: "-1.6px",
                fontFamily: "var(--display)",
              }}
            >
              One institutional workflow, from origination to settlement
            </h2>
          </Rv>

          <div className="principle-grid">
            {[
              { step: "01", title: "Originate", text: "Source assets and counterparties across target markets." },
              { step: "02", title: "Structure", text: "Design compliant terms for each issuance jurisdiction." },
              { step: "03", title: "Issue", text: "Deploy standards-based tokens with institutional controls." },
              { step: "04", title: "Distribute", text: "Connect primary and secondary channels for liquidity access." },
              { step: "05", title: "Settle", text: "Execute auditable transfers and settlement across approved rails." },
            ].map((stage, index) => (
              <Rv key={stage.step} d={index * 0.04}>
                <article className="stage-card">
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      display: "grid",
                      placeItems: "center",
                      border: `1px solid ${C.g}35`,
                      background: C.gD,
                      color: C.g,
                      fontSize: 11,
                      fontFamily: "var(--mono)",
                      letterSpacing: "1px",
                      marginBottom: 10,
                    }}
                  >
                    {stage.step}
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 15 }}>{stage.title}</h3>
                  <p style={{ margin: 0, color: C.w2, fontSize: 13, lineHeight: 1.65 }}>{stage.text}</p>
                </article>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 84px" }}>
        <div className="about-wrap">
          <div className="market-grid">
            <Rv>
              <MarketImage
                src="/images/about/about_image.jpeg"
                alt="Institutional market operations"
                fallbackPath="/public/images/about/about_image.jpeg"
              />
            </Rv>
            <Rv d={0.08}>
              <MarketImage
                src="/images/about/about_people.jpg"
                alt="Global partnerships and market collaboration"
                fallbackPath="/public/images/about/about_people.jpg"
              />
            </Rv>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 120px" }}>
        <div className="about-wrap">
          <Rv>
            <Gc p="56px 34px" style={{ textAlign: "center", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(ellipse at center, ${C.g}09, transparent 62%)`,
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2
                  style={{
                    margin: "0 0 14px",
                    fontSize: "clamp(32px,4.6vw,56px)",
                    letterSpacing: "-2px",
                    fontFamily: "var(--display)",
                  }}
                >
                  Building the institutional standard for <span style={grdT}>global market inclusion</span>
                </h2>
                <p style={{ margin: "0 auto 30px", maxWidth: 820, color: C.w2, lineHeight: 1.85, fontSize: 16 }}>
                  Expanding into new markets or connecting local opportunities to global capital? Sereel provides the
                  infrastructure and controls to scale with confidence.
                </p>
                <Link to="/contact" className="sb" style={{ padding: "16px 42px", fontSize: 15, textDecoration: "none" }}>
                  Schedule Strategic Consultation
                </Link>
              </div>
            </Gc>
          </Rv>
        </div>
      </section>
    </>
  );
}
