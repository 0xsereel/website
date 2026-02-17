import { Link } from "react-router-dom";
import { Layout } from "../../components/Core/Layout";
import { MeshBg, Gc, Rv } from "../../components/Core/shared";
import { C, grdT } from "../../components/Core/theme";

export function Docs() {
  return (
    <Layout>
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        padding: "120px clamp(16px,4vw,56px) 60px", position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%" }}>
          <Rv>
            <div className="sl">Documentation</div>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.04,
              letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
            }}>
              Developer<br /><span style={grdT}>Documentation</span>
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{ fontSize: 17, color: C.m, maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
              Comprehensive guides, tutorials, and API references to build on Sereel's digital asset infrastructure platform.
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div className="sl">Documentation</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.02, fontFamily: "var(--display)", marginBottom: 48 }}>
            Everything you need <span style={{ color: C.m }}>to build.</span>
          </h2>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
          {[
            {
              title: "Getting Started",
              desc: "Quick start guides, authentication setup, and sandbox environment access. Get up and running in minutes.",
            },
            {
              title: "Integration Guides",
              desc: "Step-by-step tutorials for custody, tokenization, and settlement integration. Real-world implementation examples.",
            },
            {
              title: "API Reference",
              desc: "Complete endpoint documentation with request/response schemas. Interactive playground with code examples.",
            },
            {
              title: "SDKs & Libraries",
              desc: "Native SDKs for TypeScript, Python, and Go. Open-source libraries with active community support.",
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
              Start <span style={grdT}>building</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, marginBottom: 40, lineHeight: 1.8 }}>
              Get API credentials and access to our sandbox environment.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>Request Access</button>
            </Link>
          </div>
        </Rv>
      </section>
    </Layout>
  );
}
