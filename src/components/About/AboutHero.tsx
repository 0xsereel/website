import { C, grdT } from "../V4/theme";
import { MeshBg, Gc, Rv } from "../V4/shared";

export default function AboutHero() {
  const peopleImagePath = "/images/about/about_image.jpeg";

  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        padding: "100px clamp(16px,4vw,56px) 60px",
        position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%", textAlign: "center" }}>
          <Rv>
            <h1 style={{
              fontSize: "clamp(44px,6vw,72px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-3px",
              fontFamily: "var(--display)",
              marginBottom: 24,
            }}>
              We Are on a Mission to <span style={grdT}>Maximize</span><br />
              The <span style={grdT}>Efficiency</span> of the<br />
              Global Financial Ecosystem
            </h1>
          </Rv>
          <Rv d={0.1}>
            <p style={{ fontSize: 18, color: C.w2, maxWidth: 800, margin: "0 auto", lineHeight: 1.8 }}>
              Bridging traditional finance with decentralized infrastructure for institutional innovation
            </p>
          </Rv>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "80px clamp(16px,4vw,56px)", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <img
              src={peopleImagePath}
              alt="Team photo"
              style={{
                width: "100%",
                borderRadius: 16,
                filter: "grayscale(100%)",
                transition: "filter 0.5s ease",
                border: `1px solid ${C.border}`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </Rv>
      </section>

      {/* About Intro */}
      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <Gc style={{ position: "relative" }} p="40px 48px">
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 80, height: 1, background: `linear-gradient(90deg, transparent, ${C.g}, transparent)`, margin: "0 auto 32px" }} />
              <p style={{ fontSize: 18, color: C.w2, lineHeight: 1.9, maxWidth: 900, margin: "0 auto" }}>
                Sereel's RWA tokenization platform delivers institutional tokenization infrastructure with security token issuance, CMTA tokenization, and enterprise digital asset custody. Our bond tokenization platform supports Regulation S/D token issuance with multi-chain tokenization across Canton Network. We provide institutional DeFi infrastructure for real world asset tokenization, private credit tokenization, treasury tokenization, stablecoin issuance platform capabilities, and tokenized securities platform solutions—enabling institutions to tokenize, custody, and trade any asset class across any blockchain network.
              </p>
              <div style={{ width: 80, height: 1, background: `linear-gradient(90deg, transparent, ${C.g}, transparent)`, margin: "32px auto 0" }} />
            </div>
          </Gc>
        </Rv>
      </section>

      {/* Mission Statement */}
      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <Gc style={{ position: "relative" }} p="48px 40px">
            <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
              <div style={{ fontSize: 16, color: C.w2, lineHeight: 1.9, display: "flex", flexDirection: "column", gap: 32 }}>
                <p>
                  <a
                    href="https://www.blackrock.com/corporate/investor-relations/larry-fink-annual-chairmans-letter#unlocking-private-markets"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: C.g,
                      textDecoration: "underline",
                      fontWeight: 700,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    25 trillion dollars
                  </a>{" "}
                  sit idly in bank accounts - while cross border payments take days and cost{" "}
                  <a
                    href="https://papss.com/media/in-the-media/new-africa-payment-system-to-save-5-billion-in-fees-lift-trade-in-bloomberg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: C.g,
                      textDecoration: "underline",
                      fontWeight: 700,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    billions
                  </a>
                  . The financial world is not interoperable with the blockchain world. These inefficiencies drive us to build.
                </p>

                <div style={{ width: 120, height: 1, background: `linear-gradient(90deg, transparent, ${C.g}50, transparent)`, margin: "0 auto" }} />

                <p>
                  Sereel is binding traditional and{" "}
                  <a
                    href="https://www.investopedia.com/decentralized-finance-defi-5113835"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: C.g,
                      textDecoration: "underline",
                      fontWeight: 700,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    decentralized finance
                  </a>
                  . Secure enough for financial institutions, scalable enough for communities and entrepreneurs. With a focus on speed and safety, our Rust-based blockchain architecture gives your capital instant liquidity, programmable yield, and bulletproof security.
                </p>

                <div style={{ width: 120, height: 1, background: `linear-gradient(90deg, transparent, ${C.g}50, transparent)`, margin: "0 auto" }} />

                <p>
                  Founded by blockchain engineers and financiers, we're pioneers in turning idle capital into programmable, yield-bearing assets that settle in minutes - not days. We're redefining the physics of value.{" "}
                  <span style={{ color: C.g, fontWeight: 700, fontSize: 18 }}>Join us.</span>
                </p>
              </div>
            </div>
          </Gc>
        </Rv>
      </section>

      {/* Solutions Section */}
      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="sl">Solutions</div>
            <h2 style={{ fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-2px", fontFamily: "var(--display)" }}>
              Our <span style={grdT}>Solutions</span>
            </h2>
            <p style={{ fontSize: 18, color: C.m, marginTop: 16 }}>
              Seamless, secure and accessible institutional DeFi infrastructure
            </p>
          </div>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {[
            {
              icon: "🔐",
              title: "Noncustodial Wallet Service",
              description: "Your assets are protected with Smart Accounts featuring Multi-Factor Authentication. Secure, self-custodied, and enterprise-ready with ERC-4337 integration.",
              features: ["WebAuthn biometrics", "ISO20022 compliance", "Gas abstraction", "Multi-sig support"],
            },
            {
              icon: "⚡",
              title: "Asset Tokenization Service",
              description: "Transform real-world assets into liquid, tradable tokens using zkTLS-powered verification. Instant liquidity with 90% cost reduction.",
              features: ["zkTLS verification", "Real-time auditing", "Instant burn/mint", "Trust account integration"],
            },
            {
              icon: "📊",
              title: "Sereel Protocol",
              description: "Institutional DeFi infrastructure with three modules: AMM, Lending, and Options.",
              features: ["ERC-3643 compliant", "Risk management", "Yield optimization", "Institutional controls"],
            },
          ].map((solution, i) => (
            <Rv key={i} d={i * 0.08}>
              <Gc style={{ height: "100%", display: "flex", flexDirection: "column" }} p="32px">
                <div style={{ fontSize: 32, marginBottom: 20 }}>{solution.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: C.w, marginBottom: 12, lineHeight: 1.3 }}>{solution.title}</h3>
                <p style={{ fontSize: 14, color: C.m, lineHeight: 1.75, marginBottom: 24, flex: 1 }}>{solution.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {solution.features.map((feature, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.g, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: C.m }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </Gc>
            </Rv>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section style={{ padding: "80px clamp(16px,4vw,56px) 120px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="sl">Security</div>
            <h2 style={{ fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-2px", fontFamily: "var(--display)" }}>
              Our <span style={grdT}>Security</span> Measures
            </h2>
            <p style={{ fontSize: 18, color: C.m, marginTop: 16 }}>
              Security That Powers Trust
            </p>
          </div>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 16, marginBottom: 60 }}>
          {[
            {
              icon: "🔐",
              title: "Smart Wallets",
              description: "Leverages ERC-4337 Account Abstraction to enable Multi-Factor Authentication (MFA) for on-chain accounts — enhancing user control and protecting against unauthorized access.",
              benefits: [
                "Biometric & device-based authentication",
                "Recovery mechanisms without seed phrases",
                "Gasless and batched transactions",
              ],
              link: "https://www.erc4337.io/",
            },
            {
              icon: "✓",
              title: "ISO 27001 Compliance",
              description: "We are actively working toward ISO 27001 compliance, ensuring that our information security management systems meet the highest global standards. Security is at the core of our product development process.",
              benefits: [
                "Comprehensive risk assessment and mitigation strategies",
                "Regular security audits and continuous monitoring",
                "Employee training on information security best practices",
              ],
              link: "https://www.iso.org/standard/27001",
            },
          ].map((feature, i) => (
            <Rv key={i} d={i * 0.08}>
              <Gc style={{ height: "100%", display: "flex", flexDirection: "column" }} p="36px">
                <div style={{ fontSize: 36, marginBottom: 20 }}>{feature.icon}</div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: C.w, marginBottom: 12 }}>{feature.title}</h3>
                <p style={{ fontSize: 14, color: C.m, lineHeight: 1.75, marginBottom: 20 }}>{feature.description}</p>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: C.w, marginBottom: 12 }}>Key Benefits</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24, flex: 1 }}>
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.g, marginTop: 6, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: C.m, lineHeight: 1.6 }}>{benefit}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="sb"
                  onClick={() => window.open(feature.link, "_blank")}
                >
                  Learn More
                </button>
              </Gc>
            </Rv>
          ))}
        </div>

        {/* CTA */}
        <Rv d={0.2}>
          <Gc style={{ textAlign: "center", position: "relative" }} p="56px 40px">
            <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${C.g}08, transparent 60%)`, pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 16 }}>
                Ready to Transform Your Institution?
              </h3>
              <p style={{ fontSize: 16, color: C.m, marginBottom: 32, maxWidth: 700, margin: "0 auto 32px" }}>
                Join leading financial institutions already leveraging Sereel's institutional-grade DeFi infrastructure for next-generation efficiency and security.
              </p>
              <button
                className="sb"
                style={{ padding: "16px 40px", fontSize: 15 }}
                onClick={() => window.location.href = "/contact"}
              >
                Get Started Today
              </button>
            </div>
          </Gc>
        </Rv>
      </section>
    </>
  );
}
