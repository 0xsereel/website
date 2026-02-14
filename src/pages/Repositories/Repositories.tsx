import { V4Layout } from "../../components/V4/V4Layout";
import { C, grdT } from "../../components/V4/theme";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";

interface ResearchPaper {
  title: string;
  link: string;
  description: string;
  category: string;
  source: string;
  year?: string;
}

export const Repositories = () => {
  const researchPapers: ResearchPaper[] = [
    {
      title: "Ethereum Whitepaper",
      link: "https://ethereum.org/en/whitepaper/",
      description: "The foundational paper that introduced the concept of programmable blockchain and smart contracts, revolutionizing decentralized applications.",
      category: "Blockchain Fundamentals",
      source: "Ethereum Foundation",
      year: "2013"
    },
    {
      title: "A Comprehensive Review of the TLSNotary Protocol",
      link: "https://arxiv.org/abs/2409.17670",
      description: "In-depth analysis of TLS-based data verification systems, crucial for our zkTLS implementation in asset tokenization.",
      category: "Zero-Knowledge Proofs",
      source: "arXiv",
      year: "2024"
    },
    {
      title: "Programmable Cryptography 0xPARC",
      link: "https://0xparc.org/blog/programmable-cryptography-1",
      description: "Explores the intersection of cryptography and programmability, fundamental to building secure and efficient DeFi protocols.",
      category: "Cryptographic Systems",
      source: "0xPARC",
      year: "2023"
    },
    {
      title: "The God Protocols",
      link: "https://nakamotoinstitute.org/library/the-god-protocols/",
      description: "Nick Szabo's seminal work on trusted third parties and the vision for trustless systems that inspired blockchain technology.",
      category: "Cryptographic Theory",
      source: "Nakamoto Institute",
      year: "1997"
    },
    {
      title: "Web Data Authentication with Garble-Then-Prove",
      link: "https://eprint.iacr.org/2023/964",
      description: "Advanced cryptographic techniques for secure data verification, directly applicable to our real-world asset verification systems.",
      category: "Zero-Knowledge Proofs",
      source: "IACR ePrint",
      year: "2023"
    },
  ];

  const categories = ["All", "Blockchain Fundamentals", "Zero-Knowledge Proofs", "Cryptographic Systems", "Cryptographic Theory"];

  return (
    <V4Layout>
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        padding: "140px clamp(16px,4vw,56px) 60px", position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%", textAlign: "center" }}>
          <Rv>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
            }}>
              <span style={grdT}>Research</span> Repository
            </h1>
          </Rv>
          <Rv d={0.1}>
            <p style={{ fontSize: 18, color: C.m, maxWidth: 800, margin: "0 auto", lineHeight: 1.8 }}>
              Foundational research and cutting-edge papers that inspire our institutional DeFi innovations
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="sl">Research</div>
            <h2 style={{ fontSize: "clamp(30px,3.8vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.04, fontFamily: "var(--display)", marginBottom: 16 }}>
              <span style={grdT}>Research</span> That Shapes Our Vision
            </h2>
            <p style={{ fontSize: 16, color: C.m, maxWidth: 720, margin: "0 auto", lineHeight: 1.8 }}>
              These seminal papers and cutting-edge research form the theoretical foundation of our institutional DeFi solutions
            </p>
          </div>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 20, marginBottom: 80 }}>
          {researchPapers.map((paper, index) => (
            <Rv key={index} d={index * 0.08}>
              <Gc style={{ height: "100%", cursor: "pointer", display: "flex", flexDirection: "column" }} p="32px 28px">
                <div style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  background: C.gD,
                  border: `1px solid ${C.g}20`,
                  borderRadius: 20,
                  fontSize: 10,
                  color: C.g,
                  fontFamily: "var(--mono)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: 18,
                  width: "fit-content"
                }}>
                  {paper.category}
                </div>

                <a 
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <h3 style={{ 
                    fontSize: 22, 
                    fontWeight: 700, 
                    color: C.w, 
                    marginBottom: 14, 
                    fontFamily: "var(--body)",
                    lineHeight: 1.3,
                    transition: "color 0.3s"
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = C.g)}
                  onMouseOut={(e) => (e.currentTarget.style.color = C.w)}>
                    {paper.title}
                  </h3>
                </a>

                <p style={{ fontSize: 14, color: C.m, lineHeight: 1.75, marginBottom: 20, flex: 1 }}>
                  {paper.description}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                  <span style={{ fontSize: 12, color: C.d, fontWeight: 600 }}>{paper.source}</span>
                  {paper.year && <span style={{ fontSize: 12, color: C.d }}>{paper.year}</span>}
                </div>

                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: C.g,
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "gap 0.3s"
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.gap = "12px")}
                  onMouseOut={(e) => (e.currentTarget.style.gap = "8px")}
                >
                  <span>Read Paper</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </Gc>
            </Rv>
          ))}
        </div>

        <Rv>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 800, letterSpacing: "-1px", fontFamily: "var(--display)", marginBottom: 32 }}>
              <span style={grdT}>Research</span> Categories
            </h3>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {categories.map((category, index) => (
              <Rv key={index} d={index * 0.05}>
                <div style={{
                  padding: "10px 24px",
                  background: C.gU,
                  border: `1px solid ${C.border}`,
                  borderRadius: 100,
                  fontSize: 12,
                  color: C.m,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = C.g + "50";
                  e.currentTarget.style.color = C.g;
                  e.currentTarget.style.background = C.gD;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.color = C.m;
                  e.currentTarget.style.background = C.gU;
                }}>
                  {category}
                </div>
              </Rv>
            ))}
          </div>
        </Rv>

        <Rv d={0.3}>
          <div style={{ marginTop: 80 }}>
            <Gc style={{ textAlign: "center", position: "relative" }} p="56px 40px">
              <div style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(ellipse at center, ${C.g}08, transparent 60%)`,
                pointerEvents: "none"
              }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{
                  fontSize: "clamp(26px,3vw,36px)",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                  lineHeight: 1.08,
                  marginBottom: 16,
                  fontFamily: "var(--display)"
                }}>
                  Interested in Our Research?
                </h3>
                <p style={{ fontSize: 16, color: C.m, lineHeight: 1.8, marginBottom: 32, maxWidth: 640, margin: "0 auto 32px" }}>
                  Stay updated with our latest research findings and contributions to the institutional DeFi ecosystem
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <button className="sb">Read Our Blog</button>
                  <button className="so">Contact Us</button>
                </div>
              </div>
            </Gc>
          </div>
        </Rv>
      </section>
    </V4Layout>
  );
};
