import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { C, grdT } from "../../components/V4/theme";

export function Advisory() {
  return (
    <V4Layout>
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        padding: "120px clamp(16px,4vw,56px) 60px", position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%" }}>
          <Rv>
            <div className="sl">Advisory</div>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.04,
              letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
            }}>
              Tokenization Strategy<br />& <span style={grdT}>Consulting</span>
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{ fontSize: 17, color: C.m, maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
              From tokenomics design to network selection, regulatory mapping to go-to-market—we guide you from concept to launch.
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div className="sl">Services</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.02, fontFamily: "var(--display)", marginBottom: 48 }}>
            End-to-end <span style={{ color: C.m }}>strategic guidance</span>
          </h2>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
          {[
            {
              ico: "🎯",
              title: "Tokenomics Design",
              desc: "Structure your token for success. Supply economics, distribution models, incentive mechanisms, and governance frameworks tailored to your asset class.",
              details: [
                "Token supply and distribution modeling",
                "Economic incentive design",
                "Governance framework architecture",
                "Utility vs security token analysis",
                "Vesting and lock-up schedules",
              ],
            },
            {
              ico: "🌐",
              title: "Protocol Selection",
              desc: "Choose the right blockchain infrastructure. Network selection, consensus mechanisms, finality considerations, and multi-chain strategies.",
              details: [
                "Blockchain network evaluation",
                "Consensus mechanism analysis",
                "Scalability and performance assessment",
                "Interoperability requirements",
                "Cost and transaction fee modeling",
              ],
            },
            {
              ico: "⚖️",
              title: "Regulatory Mapping",
              desc: "Navigate complex regulatory landscapes. Jurisdiction analysis, securities law compliance, licensing requirements, and regulatory filings.",
              details: [
                "Multi-jurisdiction compliance analysis",
                "Securities vs utility classification",
                "Licensing and registration guidance",
                "AML/KYC framework design",
                "Ongoing regulatory reporting",
              ],
            },
            {
              ico: "🚀",
              title: "Go-to-Market Strategy",
              desc: "Launch with confidence. Market positioning, distribution channels, investor targeting, and post-launch liquidity planning.",
              details: [
                "Market positioning and messaging",
                "Distribution channel strategy",
                "Investor targeting and outreach",
                "Liquidity planning and market making",
                "Post-launch growth roadmap",
              ],
            },
            {
              ico: "🏗️",
              title: "Architecture Design",
              desc: "Build robust infrastructure. Smart contract architecture, custody integration, oracle design, and security best practices.",
              details: [
                "Smart contract architecture",
                "Custody and key management design",
                "Oracle integration strategy",
                "Security audit coordination",
                "Disaster recovery planning",
              ],
            },
            {
              ico: "💧",
              title: "Liquidity Planning",
              desc: "Ensure market depth and stability. Market making strategies, exchange listings, OTC desk setup, and institutional distribution.",
              details: [
                "Market making strategy",
                "Exchange listing roadmap",
                "OTC desk establishment",
                "Institutional investor pipeline",
                "Secondary market development",
              ],
            },
          ].map((service, i) => (
            <Rv key={i} d={i * 0.06}>
              <Gc style={{ height: "100%", cursor: "pointer" }} p="32px 28px">
                <div style={{ fontSize: 32, marginBottom: 16 }}>{service.ico}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: C.w, lineHeight: 1.2, marginBottom: 12, fontFamily: "var(--body)" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: 14, color: C.m, lineHeight: 1.75, marginBottom: 20 }}>
                  {service.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {service.details.map(detail => (
                    <div key={detail} style={{ display: "flex", alignItems: "start", gap: 8 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.g, marginTop: 6, flexShrink: 0, boxShadow: `0 0 6px ${C.g}50` }} />
                      <span style={{ fontSize: 12.5, color: C.d, lineHeight: 1.6 }}>{detail}</span>
                    </div>
                  ))}
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
            <div className="sl">Engagement Model</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 20 }}>
              Flexible <span style={{ color: C.m }}>advisory packages</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8, marginBottom: 48, maxWidth: 640 }}>
              From single workshops to comprehensive multi-year partnerships, we tailor our advisory services to your needs.
            </p>
          </Rv>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[
              {
                title: "Strategic Workshop",
                price: "Fixed Fee",
                desc: "Single-day intensive workshop covering tokenomics, protocol selection, and regulatory considerations.",
                features: ["1-day workshop", "Feasibility assessment", "High-level roadmap", "Written deliverable"],
              },
              {
                title: "Project Advisory",
                price: "Retainer",
                desc: "3-6 month engagement guiding you through design, regulatory filings, and launch preparation.",
                features: ["Monthly advisory sessions", "Architecture review", "Regulatory filings support", "Launch planning"],
                highlight: true,
              },
              {
                title: "Strategic Partnership",
                price: "Custom",
                desc: "Long-term partnership with ongoing advisory, platform access, and dedicated support team.",
                features: ["Unlimited advisory", "Platform integration", "Dedicated support", "Ongoing optimization"],
              },
            ].map((pkg, i) => (
              <Rv key={i} d={i * 0.08}>
                <Gc p="28px 24px" style={{ 
                  height: "100%",
                  background: pkg.highlight ? C.cardHi : undefined,
                  border: pkg.highlight ? `1px solid ${C.g}25` : undefined,
                }}>
                  <div style={{ marginBottom: 16 }}>
                    <h4 style={{ fontSize: 18, fontWeight: 700, color: C.w, marginBottom: 6 }}>{pkg.title}</h4>
                    <div style={{ fontSize: 13, color: C.g, fontFamily: "var(--mono)", letterSpacing: "0.5px" }}>{pkg.price}</div>
                  </div>
                  <p style={{ fontSize: 13.5, color: C.m, lineHeight: 1.7, marginBottom: 20 }}>{pkg.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                    {pkg.features.map(feat => (
                      <div key={feat} style={{ display: "flex", alignItems: "start", gap: 8 }}>
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.g, marginTop: 6, flexShrink: 0, boxShadow: `0 0 6px ${C.g}50` }} />
                        <span style={{ fontSize: 12.5, color: C.m, lineHeight: 1.6 }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <button className={pkg.highlight ? "sb" : "so"} style={{ width: "100%", padding: "10px 24px", fontSize: 13 }}>
                    {pkg.highlight ? "Most Popular" : "Learn More"}
                  </button>
                </Gc>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div className="sl">Expertise</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 48 }}>
            Deep <span style={{ color: C.m }}>industry experience</span>
          </h2>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
          {[
            { title: "Traditional Finance", desc: "Former roles at tier-1 banks, asset managers, and exchanges. Deep understanding of capital markets operations." },
            { title: "Blockchain Technology", desc: "Core contributors to major protocols. Expertise across EVM, Solana, Canton, and emerging networks." },
            { title: "Regulatory Compliance", desc: "Former regulators and compliance officers. Experience across SEC, MAS, FINMA, and other jurisdictions." },
            { title: "Token Economics", desc: "Designed tokenomics for $2B+ in tokenized assets. Proven track record across multiple asset classes." },
          ].map((item, i) => (
            <Rv key={i} d={i * 0.06}>
              <Gc p="24px 20px" style={{ height: "100%" }}>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: C.w, marginBottom: 10 }}>{item.title}</h4>
                <p style={{ fontSize: 13.5, color: C.m, lineHeight: 1.7 }}>{item.desc}</p>
              </Gc>
            </Rv>
          ))}
        </div>
      </section>

      <section style={{ padding: "100px clamp(16px,4vw,56px)", background: C.surface, position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.g}12, transparent)` }} />
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Rv>
            <div className="sl">Case Studies</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 48 }}>
              Proven <span style={{ color: C.m }}>results</span>
            </h2>
          </Rv>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            {[
              {
                title: "Global Asset Manager",
                challenge: "Launch tokenized private credit fund compliant with EU and Swiss regulations",
                solution: "Designed CMTAT structure with dual-chain deployment, regulatory filings, and liquidity strategy",
                result: "$250M AUM within 6 months, successful MiCA approval, secondary market liquidity established",
              },
              {
                title: "Regional Exchange",
                challenge: "Build digital asset venue for tokenized securities with T+0 settlement",
                solution: "Architected exchange infrastructure, designed settlement protocol, coordinated regulatory licensing",
                result: "Licensed venue operational in 9 months, 40+ issuers onboarded, $1.2B+ trading volume",
              },
              {
                title: "Corporate Treasury",
                challenge: "Digitize $500M corporate bond program across multiple jurisdictions",
                solution: "Multi-chain tokenization strategy, investor onboarding system, automated compliance monitoring",
                result: "95% cost reduction vs traditional issuance, 24/7 settlement, expanded investor base by 3x",
              },
            ].map((study, i) => (
              <Rv key={i} d={i * 0.08}>
                <Gc p="32px 28px">
                  <h4 style={{ fontSize: 20, fontWeight: 700, color: C.w, marginBottom: 18 }}>{study.title}</h4>
                  <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {["Challenge", "Solution", "Result"].map(label => (
                        <div key={label} style={{ 
                          fontSize: 10, 
                          color: C.g, 
                          fontFamily: "var(--mono)", 
                          letterSpacing: "2px", 
                          textTransform: "uppercase",
                          paddingTop: 2,
                        }}>
                          {label}
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <p style={{ fontSize: 14, color: C.m, lineHeight: 1.7 }}>{study.challenge}</p>
                      <p style={{ fontSize: 14, color: C.m, lineHeight: 1.7 }}>{study.solution}</p>
                      <p style={{ fontSize: 14, color: C.w, lineHeight: 1.7, fontWeight: 600 }}>{study.result}</p>
                    </div>
                  </div>
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
              Let's discuss your <span style={grdT}>vision</span>
            </h2>
            <p style={{ fontSize: 16, color: C.m, marginBottom: 40, lineHeight: 1.8 }}>
              Schedule a consultation to explore how we can help bring your tokenization strategy to life.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>Schedule Consultation</button>
            </Link>
          </div>
        </Rv>
      </section>
    </V4Layout>
  );
}
