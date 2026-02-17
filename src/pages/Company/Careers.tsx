import { Link } from "react-router-dom";
import { Layout } from "../../components/Core/Layout";
import { MeshBg, Gc, Rv } from "../../components/Core/shared";
import { C, grdT } from "../../components/Core/theme";

export function Careers() {
  return (
    <Layout>
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        padding: "120px clamp(16px,4vw,56px) 60px", position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%" }}>
          <Rv>
            <div className="sl">Careers</div>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.04,
              letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
            }}>
              Build the Future<br />of <span style={grdT}>Finance</span>
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{ fontSize: 17, color: C.m, maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
              Join our team building institutional digital asset infrastructure. Work on cutting-edge problems at the intersection of finance and blockchain.
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div className="sl">Open Positions</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.02, fontFamily: "var(--display)", marginBottom: 48 }}>
            No current <span style={{ color: C.m }}>openings.</span>
          </h2>
        </Rv>

        <Rv>
          <Gc p="28px">
            <p style={{ fontSize: 15, color: C.m, lineHeight: 1.8, margin: 0 }}>
              We do not have any active openings at the moment. You can still reach out and share your profile for future roles.
            </p>
          </Gc>
        </Rv>
      </section>

      <section style={{ padding: "120px clamp(16px,4vw,56px)", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${C.g}06, transparent 45%)` }} />
        <Rv>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(36px,4.5vw,54px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.06, marginBottom: 24, fontFamily: "var(--display)" }}>
              Join our <span style={grdT}>team</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, marginBottom: 40, lineHeight: 1.8 }}>
              We are not hiring right now. Send us your profile and we will contact you when relevant roles open.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>Get in Touch</button>
            </Link>
          </div>
        </Rv>
      </section>
    </Layout>
  );
}
