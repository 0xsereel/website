import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { C, grdT } from "../../components/V4/theme";

export function FamilyOffices() {
  return (
    <V4Layout>
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        padding: "120px clamp(16px,4vw,56px) 60px", position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%" }}>
          <Rv>
            <div className="sl">Family Offices</div>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.04,
              letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
            }}>
              Digital Asset<br />Management for <span style={grdT}>Family Offices</span>
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{ fontSize: 17, color: C.m, maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
              Secure custody, portfolio management, and private placement access for high-net-worth families and their advisors.
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div className="sl">Wealth Management</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.02, fontFamily: "var(--display)", marginBottom: 48 }}>
            Preserve and grow <span style={{ color: C.m }}>wealth.</span>
          </h2>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
          {[
            {
              title: "Secure Custody",
              desc: "Multi-signature wallets with hardware security modules. Generational wealth protection with estate planning integration.",
            },
            {
              title: "Portfolio Dashboard",
              desc: "Unified view across digital and traditional assets. Real-time valuation with performance analytics and tax reporting.",
            },
            {
              title: "Private Placements",
              desc: "Access tokenized private equity, real estate, and structured products. Due diligence support and deal flow management.",
            },
            {
              title: "Advisory Integration",
              desc: "White-label platform for external advisors. Collaborative portfolio management with role-based permissions.",
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
              Protect your <span style={grdT}>legacy</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, marginBottom: 40, lineHeight: 1.8 }}>
              Speak with our team about secure digital asset management for family offices.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>Get in Touch</button>
            </Link>
          </div>
        </Rv>
      </section>
    </V4Layout>
  );
}
