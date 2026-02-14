import { useState } from "react";
import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { C } from "../../components/V4/theme";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { SEO } from "../../components/SEO/SEO";
import { DeFiSecurityIcon } from "../../utils/icons";

export default function DeFi() {
  return (
    <>
      <SEO
        title="Institutional DeFi Infrastructure | Canton Network Tokenization - Sereel Protocol"
        description="Institutional DeFi infrastructure with Canton Network tokenization. Multi-chain tokenization for RWA tokenization platform, security token issuance, and enterprise digital asset custody. CMTA tokenization for institutional tokenization infrastructure."
        keywords={['institutional DeFi infrastructure', 'Canton Network tokenization', 'multi-chain tokenization', 'RWA tokenization platform', 'security token issuance', 'enterprise digital asset custody', 'CMTA tokenization', 'institutional tokenization infrastructure', 'tokenized securities platform']}
        canonical="/solutions/defi"
      />
      <V4Layout>
      {/* Hero Section */}
      <section style={{
        minHeight: "80vh",
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
              Institutional DeFi Infrastructure &<br />Canton Network Tokenization
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{
              fontSize: 18,
              color: C.m,
              maxWidth: 820,
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}>
              Multi-chain tokenization with <span style={{ color: C.g, fontWeight: 600 }}>RWA tokenization platform</span> for security token issuance, CMTA tokenization, and enterprise digital asset custody
            </p>
          </Rv>
          <Rv d={0.16}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: 40,
              fontSize: 16,
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: C.g,
                  fontFamily: "var(--display)",
                }}>
                  3-Module
                </div>
                <div style={{ fontSize: 13, color: C.d, marginTop: 4 }}>Vaults</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: C.g,
                  fontFamily: "var(--display)",
                }}>
                  ERC-3643
                </div>
                <div style={{ fontSize: 13, color: C.d, marginTop: 4 }}>Compliant</div>
              </div>
            </div>
          </Rv>
        </div>
      </section>

      {/* Yield Comparison Section */}
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
              Institutional Tokenization Infrastructure vs. Traditional Finance
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8 }}>
              RWA tokenization platform with institutional DeFi infrastructure for security token issuance
            </p>
          </div>
        </Rv>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}>
          {/* Traditional Finance */}
          <Rv d={0.1}>
            <Gc style={{
              background: "linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(251, 146, 60, 0.08))",
              borderColor: "rgba(239, 68, 68, 0.2)",
              height: "100%",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  background: "rgba(239, 68, 68, 0.15)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <h3 style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#ef4444",
                    fontFamily: "var(--display)",
                  }}>
                    Traditional Finance
                  </h3>
                  <p style={{ fontSize: 13, color: C.m }}>Legacy financial systems</p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Settlement Time", value: "T+3 Days" },
                  { label: "Operating Hours", value: "9-5 Limited" },
                  { label: "Transaction Costs", value: "High Fees" },
                  { label: "Liquidity", value: "Fragmented" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <span style={{ fontSize: 14, color: C.m }}>{item.label}</span>
                    <span style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#ef4444",
                      fontFamily: "var(--display)",
                    }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </Gc>
          </Rv>

          {/* Sereel DeFi */}
          <Rv d={0.2}>
            <Gc style={{
              background: `linear-gradient(135deg, ${C.g}08, ${C.g}05)`,
              borderColor: `${C.g}25`,
              height: "100%",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  background: `${C.g}15`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <div style={{ color: C.g, width: 28, height: 28 }}><DeFiSecurityIcon className="w-full h-full" /></div>
                </div>
                <div>
                  <h3 style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: C.g,
                    fontFamily: "var(--display)",
                  }}>
                    Institutional DeFi Infrastructure
                  </h3>
                  <p style={{ fontSize: 13, color: C.m }}>Canton Network tokenization with multi-chain tokenization</p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Settlement Time", value: "Instant" },
                  { label: "Operating Hours", value: "24/7 Global" },
                  { label: "Transaction Costs", value: "90% Lower" },
                  { label: "Liquidity", value: "Unified Pools" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <span style={{ fontSize: 14, color: C.m }}>{item.label}</span>
                    <span style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: C.g,
                      fontFamily: "var(--display)",
                    }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </Gc>
          </Rv>
        </div>
      </section>

      {/* Three-Module Ecosystem */}
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
              Enterprise Digital Asset Custody with Tokenized Securities Platform
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8 }}>
              CMTA tokenization for institutional tokenization infrastructure and bond tokenization platform
            </p>
          </div>
        </Rv>

        <ThreeModuleEcosystem />
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
            position: "relative",
            overflow: "visible",
          }} p="56px 40px">
            <h2 style={{
              fontSize: "clamp(28px,3.5vw,38px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              fontFamily: "var(--display)",
              marginBottom: 20,
            }}>
              Deploy Institutional DeFi Infrastructure Today
            </h2>
            <p style={{
              fontSize: 16,
              color: C.m,
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 720,
              margin: "0 auto 36px",
            }}>
              Join leading institutions using our RWA tokenization platform with Canton Network tokenization, multi-chain tokenization, security token issuance, CMTA tokenization, and enterprise digital asset custody for institutional tokenization infrastructure.
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
}

// Three-Module Ecosystem Component
const ThreeModuleEcosystem = () => {
  const [activeModule, setActiveModule] = useState(0);
  const modules = [
    {
      name: "AMM Module",
      icon: "🔄",
      description: "Automated Market Maker with dynamic fees",
      details: {
        purpose: "Provide liquidity for tokenized assets",
        mechanism: "Constant product formula (x × y = k)",
        yield: "Trading fees + liquidity rewards",
        features: [
          "Dynamic fee adjustment",
          "Impermanent loss protection",
          "Multi-asset pools",
        ],
      },
    },
    {
      name: "Lending Module",
      icon: "🏦",
      description: "Overcollateralized lending with variable rates",
      details: {
        purpose: "Generate yield through asset lending",
        mechanism: "Kinked interest rate model",
        yield: "Interest rate spreads",
        features: [
          "Multiple collateral types",
          "Liquidation protection",
          "Cross-vault positions",
        ],
      },
    },
    {
      name: "Options Module",
      icon: "📊",
      description: "Decentralized options trading",
      details: {
        purpose: "Advanced derivatives trading",
        mechanism: "Modified Black-Scholes pricing",
        yield: "Premium collection + delta hedging",
        features: [
          "Call & put options",
          "Automated settlement",
          "Risk management tools",
        ],
      },
    },
  ];

  return (
    <>
      {/* Module Selector */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 40,
      }}>
        <div style={{
          display: "flex",
          background: C.card,
          borderRadius: 100,
          padding: 6,
          gap: 4,
        }}>
          {modules.map((module, index) => (
            <button
              key={index}
              onClick={() => setActiveModule(index)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 24px",
                borderRadius: 100,
                border: "none",
                background: activeModule === index ? C.g : "transparent",
                color: activeModule === index ? "#010201" : C.m,
                fontSize: 14,
                fontWeight: activeModule === index ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "var(--body)",
              }}
            >
              <span style={{ fontSize: 20 }}>{module.icon}</span>
              {module.name}
            </button>
          ))}
        </div>
      </div>

      {/* Module Details */}
      <Rv key={activeModule}>
        <Gc>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 40,
            alignItems: "center",
          }}>
            {/* Module Visualization */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 40,
            }}>
              <div style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${C.g}15, ${C.g}05)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}>
                <div style={{ fontSize: 80 }}>
                  {modules[activeModule].icon}
                </div>
                {/* Orbital dots */}
                {[0, 120, 240].map((deg, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: i === 0 ? C.g : C.w,
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-100px)`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Module Information */}
            <div>
              <h3 style={{
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: "-1px",
                fontFamily: "var(--display)",
                color: C.g,
                marginBottom: 12,
              }}>
                {modules[activeModule].name}
              </h3>
              <p style={{
                fontSize: 16,
                color: C.m,
                lineHeight: 1.8,
                marginBottom: 28,
              }}>
                {modules[activeModule].description}
              </p>

              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}>
                {[
                  { label: "Purpose", value: modules[activeModule].details.purpose },
                  { label: "Mechanism", value: modules[activeModule].details.mechanism },
                  { label: "Yield Source", value: modules[activeModule].details.yield },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: C.surface,
                      padding: 16,
                      borderRadius: 10,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <h4 style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: C.w,
                      marginBottom: 6,
                    }}>
                      {item.label}
                    </h4>
                    <p style={{ fontSize: 13, color: C.m, lineHeight: 1.6 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24 }}>
                <h4 style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: C.w,
                  marginBottom: 12,
                }}>
                  Key Features
                </h4>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}>
                  {modules[activeModule].details.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 13,
                        color: C.m,
                      }}
                    >
                      <div style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: C.g,
                        flexShrink: 0,
                      }} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Gc>
      </Rv>
    </>
  );
};
