import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { C } from "../../components/V4/theme";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { SEO } from "../../components/SEO/SEO";
import { 
  SmartAccountIcon, 
  ISO20022Icon, 
  SecurityIcon, 
  GasAbstractionIcon,
  CorporateTreasuryIcon,
  CrossBorderIcon,
  AssetCustodyIcon
} from "../../utils/icons";

export const Wallet = () => {
  return (
    <>
      <SEO
        title="Enterprise Digital Asset Custody | Institutional DeFi Infrastructure - Sereel Wallet"
        description="Enterprise digital asset custody with institutional DeFi infrastructure. Multi-signature solutions for institutional tokenization infrastructure. Built for security token issuance, RWA tokenization platform, and Canton Network tokenization."
        keywords={['enterprise digital asset custody', 'institutional DeFi infrastructure', 'institutional tokenization infrastructure', 'RWA tokenization platform', 'Canton Network tokenization', 'security token issuance', 'tokenized securities platform']}
        canonical="/solutions/wallet"
      />
      <V4Layout>
      {/* Hero Section */}
      <section style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        padding: "140px clamp(16px,4vw,56px) 80px",
        position: "relative",
      }}>
        <MeshBg />
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1120,
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
        }}>
          <Rv>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,64px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2.5px",
              fontFamily: "var(--display)",
              marginBottom: 24,
            }}>
              Enterprise Digital Asset Custody &<br />Institutional DeFi Infrastructure
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{
              fontSize: 18,
              color: C.m,
              maxWidth: 720,
              margin: "0 auto",
              lineHeight: 1.8,
            }}>
              Institutional tokenization infrastructure with <span style={{ color: C.g, fontWeight: 600 }}>enterprise digital asset custody</span> for RWA tokenization platform and Canton Network tokenization
            </p>
          </Rv>
        </div>
      </section>

      {/* TradFi to DeFi Transformation Section */}
      <section style={{
        padding: "80px clamp(16px,4vw,56px)",
        maxWidth: 1120,
        margin: "0 auto",
      }}>
        <Rv>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{
              fontSize: "clamp(32px,4vw,42px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              fontFamily: "var(--display)",
              marginBottom: 16,
            }}>
              Institutional DeFi Infrastructure for Enterprise Digital Asset Custody
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8 }}>
              Institutional tokenization infrastructure powering security token issuance and tokenized securities platform
            </p>
          </div>
        </Rv>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: 32,
          alignItems: "center",
        }}>
          {/* Traditional Finance */}
          <Rv d={0.1}>
            <Gc style={{
              background: `linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(251, 146, 60, 0.08))`,
              borderColor: "rgba(239, 68, 68, 0.2)",
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: 56,
                  height: 56,
                  margin: "0 auto 20px",
                  background: "rgba(239, 68, 68, 0.15)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 20,
                  color: "#ef4444",
                }}>
                  Traditional Finance
                </h3>
                <div style={{ textAlign: "left", color: C.m, fontSize: 14, lineHeight: 2 }}>
                  <div>• T+3 settlement days</div>
                  <div>• High operational costs</div>
                  <div>• Limited transparency</div>
                  <div>• Manual compliance</div>
                  <div>• Fragmented systems</div>
                </div>
              </div>
            </Gc>
          </Rv>

          {/* Arrow */}
          <div style={{
            fontSize: 48,
            color: C.g,
            fontWeight: 300,
          }}>
            →
          </div>

          {/* DeFi */}
          <Rv d={0.2}>
            <Gc style={{
              background: `linear-gradient(135deg, ${C.g}08, ${C.g}05)`,
              borderColor: `${C.g}25`,
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: 56,
                  height: 56,
                  margin: "0 auto 20px",
                  background: `${C.g}15`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.g} strokeWidth="2">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 20,
                  color: C.g,
                }}>
                  Sereel DeFi
                </h3>
                <div style={{ textAlign: "left", color: C.m, fontSize: 14, lineHeight: 2 }}>
                  <div>• <span style={{ color: C.g, fontWeight: 600 }}>Instant</span> settlement</div>
                  <div>• <span style={{ color: C.g, fontWeight: 600 }}>90% cost</span> reduction</div>
                  <div>• <span style={{ color: C.g, fontWeight: 600 }}>Full</span> transparency</div>
                  <div>• <span style={{ color: C.g, fontWeight: 600 }}>Automated</span> compliance</div>
                  <div>• <span style={{ color: C.g, fontWeight: 600 }}>Unified</span> ecosystem</div>
                </div>
              </div>
            </Gc>
          </Rv>
        </div>
      </section>

      {/* Key Features Grid */}
      <section style={{
        padding: "80px clamp(16px,4vw,56px)",
        maxWidth: 1120,
        margin: "0 auto",
      }}>
        <Rv>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{
              fontSize: "clamp(32px,4vw,42px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              fontFamily: "var(--display)",
              marginBottom: 16,
            }}>
              Institutional-Grade Features
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8 }}>
              Built for the demands of modern financial institutions
            </p>
          </div>
        </Rv>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
        }}>
          {[
            {
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><SmartAccountIcon className="w-full h-full" /></div>,
              title: "ERC-4337 Smart Accounts",
              description: "Account recovery with gas sponsorship and social logins",
              details: ["Email + WebAuthn passkeys", "No seed phrase required", "Biometric authentication"]
            },
            {
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><ISO20022Icon className="w-full h-full" /></div>,
              title: "ISO20022 Native",
              description: "Every transaction generates standardized financial messages",
              details: ["SWIFT compatibility", "Automated reporting", "Audit-ready from day one"]
            },
            {
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><SecurityIcon className="w-full h-full" /></div>,
              title: "Enterprise Security",
              description: "Multi-sig, transaction policies, and MEV protection",
              details: ["Configurable approval flows", "Private mempool access", "Risk management tools"]
            },
            {
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><GasAbstractionIcon className="w-full h-full" /></div>,
              title: "Gas Abstraction",
              description: "Seamless user experience with sponsored transactions",
              details: ["Gasless transactions", "Batched operations", "Optimized fees"]
            }
          ].map((feature, index) => (
            <Rv key={index} d={index * 0.08}>
              <Gc style={{ height: "100%" }}>
                <div style={{ marginBottom: 20 }}>{feature.icon}</div>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: C.w,
                  marginBottom: 12,
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: C.m,
                  marginBottom: 20,
                  fontSize: 15,
                  lineHeight: 1.7,
                }}>
                  {feature.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {feature.details.map((detail, idx) => (
                    <div key={idx} style={{
                      fontSize: 13,
                      color: C.d,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}>
                      <div style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: C.g,
                        flexShrink: 0,
                      }} />
                      {detail}
                    </div>
                  ))}
                </div>
              </Gc>
            </Rv>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section style={{
        padding: "80px clamp(16px,4vw,56px)",
        maxWidth: 1120,
        margin: "0 auto",
      }}>
        <Rv>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{
              fontSize: "clamp(32px,4vw,42px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              fontFamily: "var(--display)",
              marginBottom: 16,
            }}>
              Use Cases
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8 }}>
              Real-world applications for institutional clients
            </p>
          </div>
        </Rv>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}>
          {[
            {
              title: "Corporate Treasury",
              description: "Automated capital calls with on-chain audit trails",
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><CorporateTreasuryIcon className="w-full h-full" /></div>
            },
            {
              title: "Cross-Border Payments",
              description: "Compliant stablecoin transfers with instant settlement",
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><CrossBorderIcon className="w-full h-full" /></div>
            },
            {
              title: "Asset Custody",
              description: "Secure tokenized asset storage with institutional controls",
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><AssetCustodyIcon className="w-full h-full" /></div>
            }
          ].map((useCase, index) => (
            <Rv key={index} d={index * 0.08}>
              <Gc style={{ textAlign: "center", height: "100%" }}>
                <div style={{ marginBottom: 20 }}>{useCase.icon}</div>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: C.w,
                  marginBottom: 12,
                }}>
                  {useCase.title}
                </h3>
                <p style={{
                  color: C.m,
                  fontSize: 15,
                  lineHeight: 1.7,
                }}>
                  {useCase.description}
                </p>
              </Gc>
            </Rv>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "100px clamp(16px,4vw,56px)",
        maxWidth: 1120,
        margin: "0 auto",
      }}>
        <Rv>
          <Gc style={{
            textAlign: "center",
            background: `linear-gradient(135deg, ${C.g}08, ${C.g}03)`,
            borderColor: `${C.g}25`,
          }} p="56px 40px">
            <h2 style={{
              fontSize: "clamp(28px,3.5vw,38px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              fontFamily: "var(--display)",
              marginBottom: 20,
            }}>
              Deploy Enterprise Digital Asset Custody Today
            </h2>
            <p style={{
              fontSize: 16,
              color: C.m,
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 640,
              margin: "0 auto 36px",
            }}>
              Join leading institutions using our RWA tokenization platform with institutional DeFi infrastructure, CMTA tokenization, and Canton Network tokenization for security token issuance.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>
                Get Started Today
              </button>
            </Link>
          </Gc>
        </Rv>
      </section>
      </V4Layout>
    </>
  );
};
