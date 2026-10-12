import { Link } from "react-router-dom";
import { C } from "./theme";

export function Footer() {
  const footerLinkStyle: React.CSSProperties = {
    color: C.d,
    fontSize: 13,
    textDecoration: "none",
  };

  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "30px clamp(16px,4vw,56px) 22px" }}>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gap: 16,
        }}
      >
        <div>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "inherit", marginBottom: 10 }}>
            <img src="/images/Hero/glowing_seree_logo.svg" alt="Sereel" style={{ width: 24, height: 24 }} />
            <span style={{ fontFamily: "var(--display)", fontSize: 16, color: C.w }}>Sereel</span>
          </Link>
          <p style={{ margin: 0, color: C.d, fontSize: 13 }}>Where Traditional Finance Meets Digital Assets.</p>
        </div>

        <div>
          <h4 style={{ margin: "0 0 10px", fontSize: 11, color: C.w2, letterSpacing: "2px", textTransform: "uppercase" }}>Platform</h4>
          <div style={{ display: "grid", gap: 8 }}>
            <Link to="/platform/custody" style={footerLinkStyle}>Custody</Link>
            <Link to="/solutions/tokenization" style={footerLinkStyle}>Tokenization</Link>
            <Link to="/platform" style={footerLinkStyle}>CMTA Standard</Link>
            <a
              href="https://cmta.ch/certification/recognized-experts"
              target="_blank"
              rel="noreferrer"
              style={footerLinkStyle}
            >
              Certified CMTA Provider
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ margin: "0 0 10px", fontSize: 11, color: C.w2, letterSpacing: "2px", textTransform: "uppercase" }}>Resources</h4>
          <div style={{ display: "grid", gap: 8 }}>
            <Link to="/blog" style={footerLinkStyle}>Blog</Link>
            <Link to="/contact" style={footerLinkStyle}>Contact</Link>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1120,
          margin: "18px auto 0",
          paddingTop: 14,
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <p style={{ margin: 0, fontSize: 11, color: C.d }}>© 2026 Sereel Technologies Inc. All rights reserved.</p>
        <div style={{ display: "flex", gap: 14 }}>
          <a href="https://x.com/0xSereel" target="_blank" rel="noreferrer" style={{ color: C.d, textDecoration: "none", fontSize: 12 }}>
            X
          </a>
          <a href="https://www.linkedin.com/company/0xseree" target="_blank" rel="noreferrer" style={{ color: C.d, textDecoration: "none", fontSize: 12 }}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
