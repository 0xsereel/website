import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { C, grdT } from "../../components/V4/theme";

export function Developers() {
  return (
    <V4Layout>
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        padding: "120px clamp(16px,4vw,56px) 60px", position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%" }}>
          <Rv>
            <div className="sl">Developers</div>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.04,
              letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
            }}>
              Build with <span style={grdT}>Sereel</span>
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{ fontSize: 17, color: C.m, maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
              RESTful APIs, SDKs, and comprehensive documentation for building institutional digital asset applications.
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div className="sl">Resources</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.02, fontFamily: "var(--display)", marginBottom: 48 }}>
            Everything you need to <span style={{ color: C.m }}>get started</span>
          </h2>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
          <Rv d={0}>
            <Gc style={{ height: "100%", cursor: "pointer" }} p="36px">
              <div style={{ fontSize: 36, marginBottom: 20 }}>📚</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: C.w, lineHeight: 1.2, marginBottom: 12, fontFamily: "var(--body)" }}>
                Documentation
              </h3>
              <p style={{ fontSize: 15, color: C.m, lineHeight: 1.75, marginBottom: 24 }}>
                Complete guides for integrating custody, tokenization, and settlement APIs. Step-by-step tutorials, code examples, and best practices.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
                {["Quickstart", "Guides", "Tutorials", "Examples", "SDKs"].map(tag => (
                  <span key={tag} style={{
                    fontSize: 11, color: C.d, fontFamily: "var(--mono)", letterSpacing: "0.5px",
                    padding: "6px 12px", borderRadius: 6, background: C.gU, border: `1px solid ${C.border}`,
                  }}>{tag}</span>
                ))}
              </div>
              <button className="so" style={{ padding: "10px 24px", fontSize: 13 }}>
                View Docs →
              </button>
            </Gc>
          </Rv>

          <Rv d={0.08}>
            <Gc style={{ height: "100%", cursor: "pointer" }} p="36px">
              <div style={{ fontSize: 36, marginBottom: 20 }}>⚡</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: C.w, lineHeight: 1.2, marginBottom: 12, fontFamily: "var(--body)" }}>
                API Reference
              </h3>
              <p style={{ fontSize: 15, color: C.m, lineHeight: 1.75, marginBottom: 24 }}>
                Complete API documentation with interactive examples. Authentication, endpoints, request/response schemas, and error handling.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
                {["REST", "Webhooks", "Auth", "SDKs", "Postman"].map(tag => (
                  <span key={tag} style={{
                    fontSize: 11, color: C.d, fontFamily: "var(--mono)", letterSpacing: "0.5px",
                    padding: "6px 12px", borderRadius: 6, background: C.gU, border: `1px solid ${C.border}`,
                  }}>{tag}</span>
                ))}
              </div>
              <button className="so" style={{ padding: "10px 24px", fontSize: 13 }}>
                API Reference →
              </button>
            </Gc>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", background: C.surface, position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.g}12, transparent)` }} />
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Rv>
            <div className="sl">API Capabilities</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 20 }}>
              Programmatic access to <span style={{ color: C.m }}>everything</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8, marginBottom: 48, maxWidth: 640 }}>
              RESTful APIs with comprehensive SDKs for TypeScript, Python, and Go. Enterprise authentication with API keys and OAuth 2.0.
            </p>
          </Rv>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              {
                title: "Custody API",
                desc: "Create and manage wallets, multi-sig configurations, and key recovery. Full RBAC and audit trail access.",
                endpoints: ["POST /wallets", "GET /wallets/{id}", "POST /signatures", "GET /transactions"],
              },
              {
                title: "Tokenization API",
                desc: "Issue, manage, and transfer tokens across multiple chains. Compliance rules and transfer restrictions.",
                endpoints: ["POST /tokens/issue", "POST /tokens/transfer", "GET /tokens/{id}", "PUT /tokens/compliance"],
              },
              {
                title: "Settlement API",
                desc: "Initiate atomic swaps, DVP transactions, and multi-chain settlements. Real-time status tracking.",
                endpoints: ["POST /settlements", "GET /settlements/{id}", "POST /settlements/dvp", "GET /settlements/status"],
              },
              {
                title: "Marketplace API",
                desc: "Order management, trade execution, and liquidity access. Real-time market data and order book.",
                endpoints: ["POST /orders", "GET /orders/{id}", "GET /orderbook", "POST /trades"],
              },
            ].map((api, i) => (
              <Rv key={i} d={i * 0.06}>
                <Gc p="28px 24px" style={{ height: "100%" }}>
                  <h4 style={{ fontSize: 18, fontWeight: 700, color: C.w, marginBottom: 10 }}>{api.title}</h4>
                  <p style={{ fontSize: 13.5, color: C.m, lineHeight: 1.7, marginBottom: 18 }}>{api.desc}</p>
                  <div style={{ 
                    background: C.bg, 
                    borderRadius: 8, 
                    padding: "12px 14px", 
                    border: `1px solid ${C.border}`,
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: C.d,
                  }}>
                    {api.endpoints.map((endpoint, j) => (
                      <div key={j} style={{ marginBottom: j < api.endpoints.length - 1 ? 6 : 0 }}>
                        {endpoint}
                      </div>
                    ))}
                  </div>
                </Gc>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div className="sl">Code Example</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 40 }}>
            Simple and <span style={{ color: C.m }}>powerful</span>
          </h2>
        </Rv>

        <Rv d={0.08}>
          <Gc p="32px 28px">
            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: C.w, marginBottom: 8 }}>Tokenize a corporate bond</h4>
              <p style={{ fontSize: 13, color: C.m }}>Issue a CMTAT-compliant security token with built-in compliance rules.</p>
            </div>
            <div style={{ background: C.bg, borderRadius: 10, padding: "20px 22px", border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                {["#ff5f57", "#febc2e", "#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.8 }} />)}
              </div>
              <pre style={{ fontFamily: "var(--mono)", fontSize: 12.5, lineHeight: 1.9, color: C.m, margin: 0, whiteSpace: "pre-wrap" }}>
{`import { Sereel } from '@sereel/sdk';

const sereel = new Sereel({
  apiKey: process.env.SEREEL_API_KEY,
});

// Issue a corporate bond token
const bond = await sereel.tokenize({
  asset: 'corporate-bond',
  standard: 'CMTAT',
  chain: 'ethereum',
  supply: 1_000_000,
  compliance: ['RegS', 'MiCA'],
  metadata: {
    issuer: 'Acme Corp',
    maturity: '2030-12-31',
    coupon: 0.045,
  },
});

console.log(\`Token deployed: \${bond.address}\`);`}
              </pre>
            </div>
          </Gc>
        </Rv>
      </section>

      <section style={{ padding: "100px clamp(16px,4vw,56px)", background: C.surface, position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.g}12, transparent)` }} />
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Rv>
            <div className="sl">Support</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 48 }}>
              We're here to <span style={{ color: C.m }}>help</span>
            </h2>
          </Rv>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[
              { title: "Developer Discord", desc: "Join our community of developers building on Sereel. Get help and share knowledge." },
              { title: "Technical Support", desc: "Dedicated support team available 24/7 for API issues and integration questions." },
              { title: "Changelog", desc: "Stay updated with the latest API changes, new features, and deprecations." },
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
              Ready to <span style={grdT}>build?</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, marginBottom: 40, lineHeight: 1.8 }}>
              Get API credentials and start integrating Sereel into your applications.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>Get API Access</button>
            </Link>
          </div>
        </Rv>
      </section>
    </V4Layout>
  );
}
