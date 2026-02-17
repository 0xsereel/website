import { useState } from "react";
import { Link } from "react-router-dom";
import { C, grdT } from "../V4/theme";
import { MeshBg, Gc, Rv } from "../V4/shared";

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
                  Sereel is built to connect capital, infrastructure, and compliant distribution across global markets.
                  We unify the standards expected by major institutions with the access required by regions that are
                  historically excluded from efficient market rails.
                </p>
                <p style={{ margin: "0 0 26px", color: C.w2, fontSize: 16, lineHeight: 1.82 }}>
                  Our mandate is simple: institutional quality everywhere, not only in already mature financial centers.
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
                  <li>CMTA and ERC-3643 token standards for portability and regulatory alignment</li>
                  <li>Enterprise wallet, custody, and governance controls for institutional operations</li>
                  <li>Multi-chain issuance and settlement without compromising compliance policies</li>
                  <li>Distribution rails that support both mature and developing market participants</li>
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
                Capital should not be constrained by geography, legacy infrastructure, or disconnected regulatory
                processes. Sereel integrates tokenization, custody, compliance, and market connectivity so institutions
                can originate in one market and distribute in another with confidence. We are building institutional
                infrastructure that works equally well for deeply liquid markets and growth markets that need trusted
                access to global capital.
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
                  Regions and sectors with strong demand for capital but limited access to institutional-grade issuance,
                  distribution, and settlement infrastructure.
                </p>
                <ul className="dot-list">
                  <li>Emerging market credit and private enterprise financing</li>
                  <li>Infrastructure and climate-transition projects requiring transparent funding rails</li>
                  <li>Growth-stage issuers requiring compliant international investor access</li>
                </ul>
              </Gc>
            </Rv>

            <Rv d={0.08}>
              <Gc p="26px 24px" style={{ height: "100%" }}>
                <div className="sl">Well-Served Markets</div>
                <p style={{ margin: "0 0 14px", color: C.w2, lineHeight: 1.8, fontSize: 15 }}>
                  Asset managers, banks, exchanges, and family offices that require governance, compliance, and
                  operational quality before allocating capital globally.
                </p>
                <ul className="dot-list">
                  <li>Institutional allocators seeking compliant access to new asset pools</li>
                  <li>Regulated entities requiring auditable controls across every transfer event</li>
                  <li>Markets prioritizing standards-based interoperability over proprietary lock-in</li>
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
                body: "CMTA and ERC-3643 foundations enable compliant issuance models designed for institutional portability across jurisdictions and counterparties.",
              },
              {
                title: "Institutional Custody & Governance",
                body: "Role-based controls, approval workflows, and auditable operations designed for treasury, compliance, and risk teams.",
              },
              {
                title: "Cross-Market Distribution Rails",
                body: "Primary and secondary market connectivity to support lifecycle management from issuance through settlement and reporting.",
              },
              {
                title: "Jurisdiction-Aware Compliance",
                body: "Policy controls that map to regional frameworks so institutions can scale without losing regulatory discipline.",
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
                  If your institution is expanding into new markets or bringing local opportunities to global capital,
                  Sereel provides the infrastructure, controls, and regulatory posture to scale with confidence.
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
