import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { C, grdT } from "../../components/V4/theme";

export function Careers() {
  return (
    <V4Layout>
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
            Open <span style={{ color: C.m }}>opportunities.</span>
          </h2>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
          {[
            {
              title: "Senior Backend Engineer",
              dept: "Engineering",
              location: "Remote / Zurich",
              desc: "Build scalable APIs for custody, tokenization, and settlement. Work with Rust, Go, and distributed systems.",
            },
            {
              title: "Smart Contract Engineer",
              dept: "Engineering",
              location: "Remote / New York",
              desc: "Design and audit security token contracts. Expertise in Solidity, formal verification, and protocol security.",
            },
            {
              title: "Compliance Manager",
              dept: "Legal & Compliance",
              location: "Remote / London",
              desc: "Lead regulatory strategy and implementation. Experience with MiFID II, MiCA, and securities regulations.",
            },
            {
              title: "Product Manager",
              dept: "Product",
              location: "Remote / San Francisco",
              desc: "Define custody and trading product roadmap. Bridge institutional finance requirements with blockchain capabilities.",
            },
          ].map((job, i) => (
            <Rv key={i} d={i * 0.06}>
              <Gc p="28px">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: C.w, marginBottom: 6 }}>{job.title}</h3>
                    <div style={{ display: "flex", gap: 16, fontSize: 13, color: C.d }}>
                      <span>{job.dept}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button className="so" style={{ padding: "10px 24px", fontSize: 13 }}>Apply</button>
                </div>
                <p style={{ fontSize: 14.5, color: C.m, lineHeight: 1.75 }}>{job.desc}</p>
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
              Join our <span style={grdT}>team</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, marginBottom: 40, lineHeight: 1.8 }}>
              Don't see a role that fits? Send us your resume and we'll keep you in mind for future opportunities.
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
