import { useState } from "react";
import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { C } from "../../components/V4/theme";

type ModuleCard = {
  title: string;
  desc: string;
  to: string;
  tags: string[];
};

function PlatformImageSlot({
  src,
  alt,
  ideal,
  insertPath,
  minHeight,
}: {
  src: string;
  alt: string;
  ideal: string;
  insertPath: string;
  minHeight: number;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        background: C.surface,
        overflow: "hidden",
        minHeight,
      }}
    >
      {!missing ? (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", minHeight, objectFit: "cover", filter: "grayscale(18%)" }}
          onError={() => setMissing(true)}
        />
      ) : (
        <div
          style={{
            minHeight,
            padding: 20,
            display: "grid",
            alignContent: "center",
            justifyItems: "center",
            textAlign: "center",
            gap: 8,
            background: `radial-gradient(circle at 50% 30%, ${C.gU}, transparent 58%), ${C.surface}`,
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: C.g,
              fontFamily: "var(--mono)",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Image Slot
          </span>
          <strong style={{ color: C.w, fontSize: 15 }}>{alt}</strong>
          <p style={{ margin: 0, color: C.w2, fontSize: 12, lineHeight: 1.6 }}>Ideal image: {ideal}</p>
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
            {insertPath}
          </code>
        </div>
      )}
    </div>
  );
}

const modules: ModuleCard[] = [
  {
    title: "Custody & Governance",
    desc: "Enterprise wallet infrastructure with role-based controls, key governance, and audit-ready operational integrity.",
    to: "/platform/custody",
    tags: ["MPC", "Multi-signature", "RBAC", "Audit Trails"],
  },
  {
    title: "Tokenization Engine",
    desc: "CMTA and ERC-3643 issuance workflows for compliant deployment across core EVM and non-EVM institutional networks.",
    to: "/solutions/tokenization",
    tags: ["CMTA", "ERC-3643", "Multi-chain", "Compliance"],
  },
  {
    title: "Market Infrastructure",
    desc: "Primary issuance and secondary connectivity designed for institutional liquidity, execution control, and post-trade governance.",
    to: "/platform/marketplace",
    tags: ["Primary Issuance", "Secondary Markets", "OTC", "Distribution"],
  },
  {
    title: "Settlement Rails",
    desc: "Fast, deterministic settlement workflows supporting delivery-versus-payment models and real-time reporting controls.",
    to: "/platform/settlement",
    tags: ["T+0", "DvP", "Atomic Settlement", "Reconciliation"],
  },
];

export function Platform() {
  return (
    <V4Layout>
      <style>{`
        .platform-wrap {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }
        .hero-grid,
        .architecture-grid,
        .ops-grid,
        .module-grid {
          display: grid;
          gap: 16px;
        }
        .hero-grid { grid-template-columns: 1.05fr 0.95fr; }
        .architecture-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .ops-grid { grid-template-columns: 1.1fr 0.9fr; }
        .module-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
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
          line-height: 1.7;
        }
        .dot-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: ${C.g};
          box-shadow: 0 0 10px ${C.gGlow};
        }
        .module-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }
        .module-tag {
          font-size: 10px;
          color: ${C.d};
          font-family: var(--mono);
          letter-spacing: 0.5px;
          padding: 5px 10px;
          border-radius: 6px;
          border: 1px solid ${C.border};
          background: ${C.gU};
        }
        @media (max-width: 980px) {
          .hero-grid,
          .architecture-grid,
          .ops-grid,
          .module-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .platform-wrap {
            width: min(1160px, calc(100% - 28px));
          }
        }
      `}</style>

      <section
        style={{
          minHeight: "82vh",
          display: "flex",
          alignItems: "center",
          padding: "112px 0 72px",
          position: "relative",
        }}
      >
        <MeshBg />
        <div className="platform-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-grid">
            <Rv>
              <Gc p="34px 30px">
                <div className="sl">Platform</div>
                <h1
                  style={{
                    fontSize: "clamp(38px,5.7vw,68px)",
                    fontWeight: 800,
                    lineHeight: 1.02,
                    letterSpacing: "-2.5px",
                    fontFamily: "var(--display)",
                    marginBottom: 18,
                  }}
                >
                  Institutional Infrastructure for Issuance, Custody, and Settlement
                </h1>
                <p style={{ fontSize: 16, color: C.w2, maxWidth: 700, lineHeight: 1.82, marginBottom: 18 }}>
                  Sereel gives institutions a single operational layer to tokenize assets, govern custody, and settle
                  across global markets with compliant controls.
                </p>
                <p style={{ fontSize: 14, color: C.w2, lineHeight: 1.75, marginBottom: 26 }}>
                  Built on the CMTA standard. Sereel is a certified CMTA technology provider.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link to="/contact" className="sb" style={{ textDecoration: "none" }}>
                    Schedule Consultation
                  </Link>
                  <Link to="/blog" className="so" style={{ textDecoration: "none" }}>
                    Visit Blog
                  </Link>
                </div>
              </Gc>
            </Rv>

            <Rv d={0.08}>
              <Gc p="18px" style={{ height: "100%" }}>
                {/* Ideal image: institutional digital-asset operations command center/dashboard */}
                <PlatformImageSlot
                  src="/images/platform/hero-ops-dashboard.jpg"
                  alt="Institutional platform operations dashboard"
                  ideal="Institutional operations command center with tokenization, custody, and settlement panels"
                  insertPath="/public/images/platform/hero-ops-dashboard.jpg"
                  minHeight={360}
                />
              </Gc>
            </Rv>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 84px" }}>
        <div className="platform-wrap">
          <Rv>
            <div className="sl">Platform Architecture</div>
            <h2
              style={{
                fontSize: "clamp(30px,4.2vw,50px)",
                lineHeight: 1.03,
                letterSpacing: "-2px",
                fontFamily: "var(--display)",
                margin: "0 0 22px",
              }}
            >
              Modular by design. Unified by institutional controls.
            </h2>
          </Rv>
          <div className="architecture-grid">
            <Rv>
              <Gc p="24px 22px">
                <ul className="dot-list">
                  <li>Standards-based issuance for portability and long-term interoperability</li>
                  <li>Policy-driven custody and governance controls across operating teams</li>
                  <li>Integrated settlement and reporting for faster post-trade certainty</li>
                  <li>Designed for legal, risk, treasury, and compliance collaboration</li>
                </ul>
              </Gc>
            </Rv>

            <Rv d={0.08}>
              <Gc p="18px">
                {/* Ideal image: architectural diagram showing platform modules and data/control flow */}
                <PlatformImageSlot
                  src="/images/platform/architecture-diagram.jpg"
                  alt="Platform architecture and module flow"
                  ideal="Architecture diagram with custody, tokenization, market, and settlement modules connected"
                  insertPath="/public/images/platform/architecture-diagram.jpg"
                  minHeight={260}
                />
              </Gc>
            </Rv>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 84px" }}>
        <div className="platform-wrap">
          <Rv>
            <div className="sl">Core Modules</div>
            <h2
              style={{
                fontSize: "clamp(28px,3.9vw,44px)",
                lineHeight: 1.04,
                letterSpacing: "-1.7px",
                fontFamily: "var(--display)",
                margin: "0 0 24px",
              }}
            >
              One platform. Multiple institutional workflows.
            </h2>
          </Rv>
          <div className="module-grid">
            {modules.map((module, index) => (
              <Rv key={module.title} d={index * 0.05}>
                <Gc p="24px 22px" style={{ height: "100%" }}>
                  <h3 style={{ margin: "0 0 10px", fontSize: 22 }}>{module.title}</h3>
                  <p style={{ margin: 0, color: C.w2, fontSize: 14.5, lineHeight: 1.75 }}>{module.desc}</p>
                  <div className="module-tags">
                    {module.tags.map((tag) => (
                      <span key={tag} className="module-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <Link to={module.to} className="so" style={{ textDecoration: "none", padding: "10px 18px", fontSize: 12 }}>
                      Explore Module
                    </Link>
                  </div>
                </Gc>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 84px" }}>
        <div className="platform-wrap">
          <div className="ops-grid">
            <Rv>
              <Gc p="26px 24px" style={{ height: "100%" }}>
                <div className="sl">Operating Environments</div>
                <h2
                  style={{
                    margin: "0 0 12px",
                    fontSize: "clamp(28px,3.8vw,42px)",
                    letterSpacing: "-1.5px",
                    fontFamily: "var(--display)",
                  }}
                >
                  Built for regulated institutional deployment
                </h2>
                <p style={{ margin: "0 0 14px", color: C.w2, lineHeight: 1.8, fontSize: 15 }}>
                  Run in cloud, hybrid, or enterprise-specific deployment models with policy controls aligned to your
                  internal governance model.
                </p>
                <ul className="dot-list">
                  <li>Dedicated environments for institutional risk boundaries</li>
                  <li>Operational readiness for audit, reporting, and internal controls</li>
                  <li>Scalable architecture for regional expansion and cross-border workflows</li>
                </ul>
              </Gc>
            </Rv>

            <Rv d={0.08}>
              <Gc p="18px" style={{ height: "100%" }}>
                {/* Ideal image: data center/cloud + compliance operations visual */}
                <PlatformImageSlot
                  src="/images/platform/deployment-compliance.jpg"
                  alt="Enterprise deployment and compliance operations"
                  ideal="Hybrid cloud and compliance operations visual with institutional context"
                  insertPath="/public/images/platform/deployment-compliance.jpg"
                  minHeight={300}
                />
              </Gc>
            </Rv>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 120px" }}>
        <div className="platform-wrap">
          <Rv>
            <Gc p="54px 34px" style={{ textAlign: "center", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(ellipse at center, ${C.g}08, transparent 62%)`,
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2
                  style={{
                    fontSize: "clamp(34px,4.7vw,56px)",
                    fontWeight: 800,
                    letterSpacing: "-2px",
                    lineHeight: 1.04,
                    marginBottom: 16,
                    fontFamily: "var(--display)",
                  }}
                >
                  Ready to deploy institutional-grade infrastructure?
                </h2>
                <p style={{ fontSize: 16, color: C.w2, marginBottom: 30, lineHeight: 1.8, maxWidth: 760, margin: "0 auto 30px" }}>
                  Share your requirements. We will map the right architecture, controls, and deployment path for your
                  institution.
                </p>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>
                    Contact Us
                  </button>
                </Link>
              </div>
            </Gc>
          </Rv>
        </div>
      </section>
    </V4Layout>
  );
}
