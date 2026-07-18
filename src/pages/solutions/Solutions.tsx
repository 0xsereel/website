import { Link } from "react-router-dom";
import { Layout } from "../../components/Core/Layout";
import { MeshBg, Gc, Rv } from "../../components/Core/shared";
import { C, grdT } from "../../components/Core/theme";

export function Solutions() {
  return (
    <Layout>
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        padding: "120px clamp(16px,4vw,56px) 60px", position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%" }}>
          <Rv>
            <div className="sl">Solutions</div>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.04,
              letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
            }}>
              Built for Every<br /><span style={grdT}>Institutional Player</span>
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{ fontSize: 17, color: C.m, maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
              Tailored tokenization, custody, and settlement solutions for fund managers, exchanges, banks, and family offices.
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div className="sl">By Segment</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.02, fontFamily: "var(--display)", marginBottom: 48 }}>
            Designed for <span style={{ color: C.m }}>your needs</span>
          </h2>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}>
          {[
            {
              ico: "📈",
              title: "Fund Managers",
              desc: "Tokenize fund shares with automated NAV and dividend distribution. Enable 24/7 subscriptions with programmable compliance and investor management.",
              features: [
                "Fund tokenization with automated NAV updates",
                "Programmable dividend distribution",
                "24/7 subscription and redemption windows",
                "Investor onboarding with KYC/AML",
                "Cap table management and reporting",
                "Regulatory compliance (Reg S/D, MiCA, Swiss DLT)",
              ],
              link: "/solutions/fund-managers",
            },
            {
              ico: "🏛",
              title: "Exchanges",
              desc: "Launch digital asset venues with tokenized securities integration. T+0 settlement and around-the-clock trading with built-in compliance.",
              features: [
                "White-label exchange infrastructure",
                "Tokenized securities listing and trading",
                "Order book and matching engine",
                "T+0 atomic settlement",
                "24/7 trading with global access",
                "Regulatory reporting and compliance",
              ],
              link: "/solutions/exchanges",
            },
            {
              ico: "🏦",
              title: "Banks",
              desc: "Tokenization-as-a-service for corporate clients. Digital bond programs and blockchain treasury solutions with institutional-grade security.",
              features: [
                "Tokenization-as-a-service platform",
                "Digital bond issuance programs",
                "Corporate treasury on blockchain",
                "Client wallet management",
                "Regulatory compliance framework",
                "Integration with core banking systems",
              ],
              link: "/solutions/banks",
            },
            {
              ico: "💎",
              title: "Family Offices",
              desc: "Tokenize alternative assets with multi-generational custody. Fractional ownership of illiquid assets with transparent governance.",
              features: [
                "Alternative asset tokenization",
                "Multi-generational custody solutions",
                "Fractional ownership structures",
                "Private placement management",
                "Estate planning integration",
                "Portfolio analytics and reporting",
              ],
              link: "/solutions/family-offices",
            },
          ].map((solution, i) => (
            <Rv key={i} d={i * 0.06}>
              <Gc style={{ cursor: "pointer" }} p="36px">
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "start" }}>
                  <span style={{ fontSize: 40 }}>{solution.ico}</span>
                  <div>
                    <h3 style={{ fontSize: 26, fontWeight: 700, color: C.w, lineHeight: 1.2, marginBottom: 14, fontFamily: "var(--body)" }}>
                      {solution.title}
                    </h3>
                    <p style={{ fontSize: 15, color: C.m, lineHeight: 1.75, marginBottom: 24 }}>
                      {solution.desc}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, marginBottom: 20 }}>
                      {solution.features.map(feat => (
                        <div key={feat} style={{ display: "flex", alignItems: "start", gap: 8 }}>
                          <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.g, marginTop: 7, flexShrink: 0, boxShadow: `0 0 6px ${C.g}50` }} />
                          <span style={{ fontSize: 13, color: C.m, lineHeight: 1.6 }}>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={solution.link} style={{ textDecoration: "none" }}>
                      <button className="so" style={{ padding: "10px 24px", fontSize: 13 }}>
                        Learn More →
                      </button>
                    </Link>
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
            <div className="sl">Capabilities</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 48 }}>
              Shared <span style={{ color: C.m }}>infrastructure</span>
            </h2>
          </Rv>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[
              { title: "Multi-Chain", desc: "Native deployments across EVM, Solana, IOTA, Starknet, and Canton Network." },
              { title: "Compliance-First", desc: "Built-in KYC/AML, transfer restrictions, and regulatory reporting." },
              { title: "Enterprise Security", desc: "MPC, HSM, multi-sig, and role-based access with complete audit trails." },
              { title: "T+0 Settlement", desc: "Instant atomic settlement with smart contract DVP and clearing." },
              { title: "24/7 Operations", desc: "Always-on infrastructure with 99.97% uptime SLA." },
            ].map((item, i) => (
              <Rv key={i} d={i * 0.06}>
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
              Let's build your <span style={grdT}>solution</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, marginBottom: 40, lineHeight: 1.8 }}>
              Schedule a consultation to discuss your institutional digital asset needs.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>Contact Us</button>
            </Link>
          </div>
        </Rv>
      </section>
    </Layout>
  );
}
