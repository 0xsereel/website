import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { C, grdT } from "../../components/V4/theme";

export function Advisory() {
  return (
    <V4Layout>
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          padding: "120px clamp(16px,4vw,56px) 60px",
          position: "relative",
        }}
      >
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%" }}>
          <Rv>
            <div className="sl">Advisory</div>
            <h1
              style={{
                fontSize: "clamp(44px,5.5vw,72px)",
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-3px",
                fontFamily: "var(--display)",
                marginBottom: 24,
              }}
            >
              Strategic Advisory <br />
              <span style={grdT}>For Institutions</span>
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{ fontSize: 17, color: C.m, maxWidth: 680, lineHeight: 1.8, marginBottom: 20 }}>
              Our advisory work is intentionally bespoke. We align to your institution's mandate, jurisdiction, and
              operating model, then guide execution with a practical strategy.
            </p>
            <p style={{ fontSize: 17, color: C.m, maxWidth: 680, lineHeight: 1.8, marginBottom: 0 }}>
              If you want to discuss your requirements, reach out directly and we will schedule a strategic consultation.
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "40px clamp(16px,4vw,56px) 120px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Rv>
            <Gc p="52px 36px" style={{ textAlign: "center", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(ellipse at center, ${C.g}08, transparent 60%)`,
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2
                  style={{
                    fontSize: "clamp(32px,4.2vw,52px)",
                    fontWeight: 800,
                    letterSpacing: "-2px",
                    lineHeight: 1.08,
                    marginBottom: 18,
                    fontFamily: "var(--display)",
                  }}
                >
                  Speak with our advisory team
                </h2>
                <p style={{ fontSize: 16, color: C.m, marginBottom: 30, lineHeight: 1.8, maxWidth: 760, margin: "0 auto 30px" }}>
                  Share your objectives and constraints. We will respond with the right next step for your institution.
                </p>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>
                    Reach Out
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

