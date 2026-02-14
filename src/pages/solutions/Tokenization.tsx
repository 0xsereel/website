import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { V4Layout } from "../../components/V4/V4Layout";
import { C } from "../../components/V4/theme";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";
import { 
  StockIcon, 
  LockIcon, 
  TokenIcon, 
  CostReductionIcon,
  LiquidityIcon,
  GlobalIcon,
  ComplianceIcon,
  FireIcon,
  WithdrawIcon
} from "../../utils/icons";

export const Tokenization = () => {
  useEffect(() => {
    document.title = "Security Token Issuance | CMTA Tokenization | Bond Tokenization Platform - Sereel";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Security token issuance with CMTA tokenization and bond tokenization platform. Multi-chain tokenization for real world asset tokenization, private credit tokenization, treasury tokenization, and stablecoin issuance. Regulation S/D token issuance across Canton Network with institutional DeFi infrastructure.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'security token issuance, CMTA tokenization, bond tokenization platform, multi-chain tokenization, real world asset tokenization, private credit tokenization, treasury tokenization, stablecoin issuance platform, Regulation S token issuance, Regulation D token issuance, Canton Network tokenization, tokenized securities platform');
  }, []);

  return (
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
              Security Token Issuance &<br />CMTA Tokenization Platform
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{
              fontSize: 18,
              color: C.m,
              maxWidth: 780,
              margin: "0 auto",
              lineHeight: 1.8,
            }}>
              Bond tokenization platform for real world asset tokenization with <span style={{ color: C.g, fontWeight: 600 }}>multi-chain tokenization</span> across Canton Network. Regulation S/D token issuance for private credit tokenization, treasury tokenization, and stablecoin issuance.
            </p>
          </Rv>
        </div>
      </section>

      {/* Asset Transformation Flow */}
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
              RWA Tokenization Platform: Real World Asset Tokenization
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8 }}>
              Security token issuance with CMTA tokenization for institutional tokenization infrastructure
            </p>
          </div>
        </Rv>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr auto 1fr",
          gap: 24,
          alignItems: "center",
          marginBottom: 48,
        }}>
          {/* Traditional Asset */}
          <Rv d={0.1}>
            <Gc style={{
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(168, 85, 247, 0.08))",
              borderColor: "rgba(59, 130, 246, 0.2)",
            }}>
              <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
                <div style={{ color: "#3b82f6", width: 48, height: 48 }}><StockIcon className="w-full h-full" /></div>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Regulated Stock</h3>
              <p style={{ fontSize: 14, color: C.m }}>1000 Company Shares</p>
            </Gc>
          </Rv>

          {/* Arrow 1 */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 32, color: C.g }}>→</div>
            <p style={{ fontSize: 11, color: C.d, marginTop: 6 }}>zkTLS Verify</p>
          </div>

          {/* zkTLS Verification */}
          <Rv d={0.2}>
            <Gc style={{
              textAlign: "center",
              background: `linear-gradient(135deg, ${C.g}08, ${C.g}05)`,
              borderColor: `${C.g}25`,
            }}>
              <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
                <div style={{ color: C.g, width: 48, height: 48 }}><LockIcon className="w-full h-full" /></div>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: C.g }}>zkTLS Proof</h3>
              <p style={{ fontSize: 14, color: C.m }}>Private Verification</p>
            </Gc>
          </Rv>

          {/* Arrow 2 */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 32, color: C.g }}>→</div>
            <p style={{ fontSize: 11, color: C.d, marginTop: 6 }}>Tokenize</p>
          </div>

          {/* Digital Token */}
          <Rv d={0.3}>
            <Gc style={{
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(234, 179, 8, 0.08), rgba(249, 115, 22, 0.08))",
              borderColor: "rgba(234, 179, 8, 0.2)",
            }}>
              <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
                <div style={{ color: "#eab308", width: 48, height: 48 }}><TokenIcon className="w-full h-full" /></div>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#eab308" }}>RWA Token</h3>
              <p style={{ fontSize: 14, color: C.m }}>1000 Tokens</p>
            </Gc>
          </Rv>
        </div>

        {/* Benefits */}
        <Rv d={0.4}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}>
            {[
              { value: "90%", label: "Cost Reduction" },
              { value: "Instant", label: "Liquidity Access" },
              { value: "24/7", label: "Trading Available" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: C.g,
                  fontFamily: "var(--display)",
                  marginBottom: 8,
                }}>
                  {stat.value}
                </div>
                <p style={{ fontSize: 14, color: C.m }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </Rv>
      </section>

      {/* zkTLS Proof Section */}
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
              zkTLS Proof System
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8 }}>
              Private verification of real-world assets with zero-knowledge proofs
            </p>
          </div>
        </Rv>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
        }}>
          {[
            { title: "Data Request", description: "Securely fetch asset data from trusted sources" },
            { title: "TLS Verification", description: "Verify data authenticity without revealing content" },
            { title: "Zero-Knowledge Proof", description: "Generate proof of verification while maintaining privacy" },
            { title: "On-Chain Verification", description: "Validate proof on blockchain for tokenization" }
          ].map((step, index) => (
            <Rv key={index} d={index * 0.08}>
              <Gc style={{ height: "100%" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 12,
                }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: C.gD,
                    color: C.g,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {index + 1}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.w }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{
                  color: C.m,
                  fontSize: 15,
                  lineHeight: 1.7,
                  paddingLeft: 48,
                }}>
                  {step.description}
                </p>
              </Gc>
            </Rv>
          ))}
        </div>
      </section>

      {/* Token Lifecycle */}
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
              Token Lifecycle
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8 }}>
              Seamless mint, trade, and burn cycles with instant liquidity
            </p>
          </div>
        </Rv>

        <TokenLifecycleSection />
      </section>

      {/* Supported Assets */}
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
              Bond Tokenization & Tokenized Securities Platform
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8 }}>
              Private credit tokenization, treasury tokenization, and stablecoin issuance platform with Regulation S/D compliance
            </p>
          </div>
        </Rv>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}>
          {[
            { icon: "🏠", name: "Real Estate", description: "Commercial & residential properties" },
            { icon: "📊", name: "Stocks", description: "Public and private equity shares" },
            { icon: "💎", name: "Commodities", description: "Gold, oil, agricultural products" },
            { icon: "🏛️", name: "Bonds", description: "Government and corporate bonds" },
            { icon: "🎨", name: "Art & Collectibles", description: "Fine art, luxury goods, NFTs" },
            { icon: "💰", name: "Cash & Deposits", description: "Fiat currency, CDs, money markets" }
          ].map((asset, index) => (
            <Rv key={index} d={index * 0.06}>
              <Gc style={{ height: "100%" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{asset.icon}</div>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: C.w,
                  marginBottom: 12,
                }}>
                  {asset.name}
                </h3>
                <p style={{ color: C.m, fontSize: 14, lineHeight: 1.7 }}>
                  {asset.description}
                </p>
              </Gc>
            </Rv>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
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
              Multi-Chain Tokenization & Canton Network Integration
            </h2>
            <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8 }}>
              Institutional DeFi infrastructure for enterprise digital asset custody and tokenized securities
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
              title: "90% Cost Reduction",
              description: "Eliminate traditional intermediaries and manual processes",
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><CostReductionIcon className="w-full h-full" /></div>
            },
            {
              title: "Instant Liquidity",
              description: "Convert illiquid assets into tradable tokens in minutes",
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><LiquidityIcon className="w-full h-full" /></div>
            },
            {
              title: "Global Access",
              description: "24/7 trading with worldwide investor participation",
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><GlobalIcon className="w-full h-full" /></div>
            },
            {
              title: "Regulatory Compliance",
              description: "Built-in ERC-3643 compliance for institutional requirements",
              icon: <div style={{ color: C.g, width: 40, height: 40 }}><ComplianceIcon className="w-full h-full" /></div>
            }
          ].map((benefit, index) => (
            <Rv key={index} d={index * 0.08}>
              <Gc style={{ display: "flex", gap: 20, alignItems: "start", height: "100%" }}>
                <div style={{ flexShrink: 0 }}>{benefit.icon}</div>
                <div>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: C.w,
                    marginBottom: 12,
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: C.m, fontSize: 15, lineHeight: 1.7 }}>
                    {benefit.description}
                  </p>
                </div>
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
              Start Your Institutional Tokenization Infrastructure Today
            </h2>
            <p style={{
              fontSize: 16,
              color: C.m,
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 640,
              margin: "0 auto 36px",
            }}>
              Deploy security token issuance with our RWA tokenization platform. CMTA tokenization, bond tokenization, and enterprise digital asset custody for institutional DeFi infrastructure.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>
                Start Tokenizing
              </button>
            </Link>
          </Gc>
        </Rv>
      </section>
    </V4Layout>
  );
};

// Token Lifecycle Interactive Section Component
const TokenLifecycleSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  const phases = [
    {
      name: "Mint",
      icon: <div style={{ color: C.g, width: 56, height: 56 }}><TokenIcon className="w-full h-full" /></div>,
      title: "Mint Tokens",
      description: "Deposit assets into trust account and mint tokens with one API call",
      steps: [
        { label: "Step 1", text: "Deposit asset" },
        { label: "Step 2", text: "Verify ownership" },
        { label: "Step 3", text: "Mint tokens" },
      ]
    },
    {
      name: "Trade",
      icon: <div style={{ color: C.g, width: 56, height: 56 }}><LiquidityIcon className="w-full h-full" /></div>,
      title: "Trade Instantly",
      description: "24/7 trading with instant settlement and global liquidity",
      steps: [
        { label: "Global", text: "Worldwide access" },
        { label: "Instant", text: "No settlement delays" },
        { label: "Liquid", text: "Deep order books" },
      ]
    },
    {
      name: "Burn",
      icon: <div style={{ color: C.g, width: 56, height: 56 }}><FireIcon className="w-full h-full" /></div>,
      title: "Burn Tokens",
      description: "Destroy tokens to unlock underlying assets in seconds",
      steps: [
        { label: "Instant", text: "Burn in seconds" },
        { label: "Secure", text: "Cryptographic proof" },
        { label: "Automated", text: "No manual process" },
      ]
    },
    {
      name: "Withdraw",
      icon: <div style={{ color: C.g, width: 56, height: 56 }}><WithdrawIcon className="w-full h-full" /></div>,
      title: "Withdraw Assets",
      description: "Instantly access your underlying assets from trust account",
      steps: [
        { label: "Instant", text: "No waiting period" },
        { label: "Secure", text: "Multi-sig protection" },
        { label: "Flexible", text: "Partial withdrawals" },
      ]
    },
  ];

  return (
    <>
      {/* Phase Selector */}
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
          {phases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              style={{
                padding: "10px 28px",
                borderRadius: 100,
                border: "none",
                background: activePhase === index ? C.g : "transparent",
                color: activePhase === index ? "#010201" : C.m,
                fontSize: 14,
                fontWeight: activePhase === index ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "var(--body)",
              }}
            >
              {phase.name}
            </button>
          ))}
        </div>
      </div>

      {/* Phase Content */}
      <Rv key={activePhase}>
        <Gc>
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: 24 }}>
              {phases[activePhase].icon}
            </div>
            <h3 style={{
              fontSize: 28,
              fontWeight: 800,
              fontFamily: "var(--display)",
              marginBottom: 16,
            }}>
              {phases[activePhase].title}
            </h3>
            <p style={{
              color: C.m,
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 560,
              margin: "0 auto 32px",
            }}>
              {phases[activePhase].description}
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}>
              {phases[activePhase].steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    background: C.surface,
                    padding: 20,
                    borderRadius: 10,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div style={{
                    color: C.g,
                    fontWeight: 700,
                    fontSize: 14,
                    marginBottom: 6,
                  }}>
                    {step.label}
                  </div>
                  <div style={{ color: C.m, fontSize: 14 }}>{step.text}</div>
                </div>
              ))}
            </div>
          </div>
        </Gc>
      </Rv>
    </>
  );
};
