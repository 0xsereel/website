import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { C, grdT } from "../../components/V4/theme";

export function Platform() {
  return (
    <V4Layout>
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        padding: "120px clamp(16px,4vw,56px) 60px", position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%" }}>
          <Rv>
            <div className="sl">Platform</div>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.04,
              letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
            }}>
              Complete Institutional<br />Digital Asset <span style={grdT}>Infrastructure</span>
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{ fontSize: 17, color: C.m, maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
              From custody to settlement, tokenization to marketplace—everything you need to launch, manage, and scale institutional digital asset operations.
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div className="sl">Core Modules</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.02, fontFamily: "var(--display)", marginBottom: 48 }}>
            One platform. <span style={{ color: C.m }}>Every operation.</span>
          </h2>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
          {[
            {
              ico: "🔐",
              title: "Custody",
              desc: "Enterprise-grade EOA wallets and multisig with MPC recovery, hardware security modules, role-based access control, and complete audit trails.",
              features: ["Multi-sig & MPC", "HSM Integration", "RBAC", "Audit Trails", "API Access"],
            },
            {
              ico: "🪙",
              title: "Tokenization",
              desc: "CMTA-compliant token issuance across EVM chains, Solana, IOTA, Starknet, and Canton Network. Securities, bonds, stablecoins, and structured products.",
              features: ["CMTAT & ERC3643", "Multi-chain", "Regulatory Compliance", "Smart Contracts", "Token Standards"],
            },
            {
              ico: "🏪",
              title: "Marketplace",
              desc: "Primary issuance, secondary trading, and OTC connectivity. Institutional-grade venue with built-in compliance, order matching, and settlement integration.",
              features: ["Primary Issuance", "Secondary Trading", "OTC Desk", "Order Matching", "Liquidity"],
            },
            {
              ico: "🔌",
              title: "APIs",
              desc: "RESTful APIs and SDKs for programmatic access to custody, tokenization, wallet management, and settlement. Enterprise authentication and webhooks.",
              features: ["REST APIs", "SDKs", "Webhooks", "Enterprise Auth", "Documentation"],
            },
            {
              ico: "⚡",
              title: "Settlement",
              desc: "T+0 atomic settlement with smart contract clearing. Multi-chain DVP across custody integrations. Instant finality with zero counterparty risk.",
              features: ["T+0 Settlement", "Atomic DVP", "Multi-chain", "Smart Contract Clearing", "Real-time"],
            },
          ].map((module, i) => (
            <Rv key={i} d={i * 0.06}>
              <Gc style={{ cursor: "pointer" }} p="32px">
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "start" }}>
                  <span style={{ fontSize: 32 }}>{module.ico}</span>
                  <div>
                    <h3 style={{ fontSize: 24, fontWeight: 700, color: C.w, lineHeight: 1.2, marginBottom: 12, fontFamily: "var(--body)" }}>
                      {module.title}
                    </h3>
                    <p style={{ fontSize: 15, color: C.m, lineHeight: 1.75, marginBottom: 16 }}>
                      {module.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {module.features.map(feat => (
                        <span key={feat} style={{
                          fontSize: 11, color: C.d, fontFamily: "var(--mono)", letterSpacing: "0.5px",
                          padding: "6px 12px", borderRadius: 6, background: C.gU, border: `1px solid ${C.border}`,
                        }}>{feat}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Gc>
            </Rv>
          ))}
        </div>
      </section>

      <section style={{ padding: "100px clamp(16px,4vw,56px)", background: C.surface, position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.g}12, transparent)` }} />
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Rv>
            <div className="sl">Integration</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 20 }}>
              Built for <span style={{ color: C.m }}>enterprise scale</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8, marginBottom: 48, maxWidth: 640 }}>
              Deploy on-premise, cloud, or hybrid. Single-tenant isolation with SOC 2 Type II compliance. White-label options available.
            </p>
          </Rv>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[
              { title: "Enterprise SLA", desc: "99.97% uptime guarantee with 24/7 support and dedicated account team." },
              { title: "Custom Deployment", desc: "On-premise, cloud, or hybrid infrastructure tailored to your compliance requirements." },
              { title: "White Label", desc: "Fully customizable branding, domain, and UI to match your corporate identity." },
            ].map((item, i) => (
              <Rv key={i} d={i * 0.08}>
                <Gc p="24px 20px" style={{ height: "100%" }}>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: C.w, marginBottom: 10 }}>{item.title}</h4>
                  <p style={{ fontSize: 13.5, color: C.m, lineHeight: 1.7 }}>{item.desc}</p>
                </Gc>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "120px clamp(16px,4vw,56px)", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${C.g}06, transparent 45%)` }} />
        <Rv>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(36px,4.5vw,54px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.06, marginBottom: 24, fontFamily: "var(--display)" }}>
              Ready to get <span style={grdT}>started?</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, marginBottom: 40, lineHeight: 1.8 }}>
              Schedule a consultation to discuss your institutional digital asset infrastructure needs.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>Contact Us</button>
            </Link>
          </div>
        </Rv>
      </section>
    </V4Layout>
  );
}
