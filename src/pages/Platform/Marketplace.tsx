import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { C, grdT } from "../../components/V4/theme";

export function Marketplace() {
  return (
    <V4Layout>
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        padding: "120px clamp(16px,4vw,56px) 60px", position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%" }}>
          <Rv>
            <div className="sl">Marketplace</div>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.04,
              letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
            }}>
              Institutional Digital<br />Asset <span style={grdT}>Marketplace</span>
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{ fontSize: 17, color: C.m, maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
              Primary issuance, secondary trading, and OTC connectivity. Built-in compliance with institutional-grade order matching and settlement.
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div className="sl">Trading Solutions</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.02, fontFamily: "var(--display)", marginBottom: 48 }}>
            End-to-end trading. <span style={{ color: C.m }}>Fully compliant.</span>
          </h2>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
          {[
            {
              title: "Primary Issuance",
              desc: "Launch new tokenized securities with integrated compliance. Investor onboarding, subscription management, and cap table tracking.",
            },
            {
              title: "Secondary Trading",
              desc: "Continuous order book with limit and market orders. Smart order routing with best execution analytics.",
            },
            {
              title: "OTC Desk",
              desc: "Block trades and negotiated deals with settlement integration. Private liquidity pools and custom matching logic.",
            },
            {
              title: "Compliance Engine",
              desc: "Automated KYC/AML checks with transfer restrictions. Whitelisting, accreditation verification, and regulatory reporting.",
            },
          ].map((item, i) => (
            <Rv key={i} d={i * 0.06}>
              <Gc p="28px">
                <h3 style={{ fontSize: 20, fontWeight: 700, color: C.w, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14.5, color: C.m, lineHeight: 1.75 }}>{item.desc}</p>
              </Gc>
            </Rv>
          ))}
        </div>
      </section>

      <section style={{ padding: "120px clamp(16px,4vw,56px)", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${C.g}06, transparent 45%)` }} />
        <Rv>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(36px,4.5vw,54px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.06, marginBottom: 24, fontFamily: "var(--display)" }}>
              Start <span style={grdT}>trading</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, marginBottom: 40, lineHeight: 1.8 }}>
              Connect with our team to explore marketplace opportunities and liquidity options.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>Get Access</button>
            </Link>
          </div>
        </Rv>
      </section>
    </V4Layout>
  );
}
