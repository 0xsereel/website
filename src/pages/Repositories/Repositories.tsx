import { Link } from "react-router-dom";

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
      description:
        "The foundational paper that introduced the concept of programmable blockchain and smart contracts, revolutionizing decentralized applications.",
      category: "Blockchain Fundamentals",
      source: "Ethereum Foundation",
      year: "2013",
    },
    {
      title: "A Comprehensive Review of the TLSNotary Protocol",
      link: "https://arxiv.org/abs/2409.17670",
      description:
        "In-depth analysis of TLS-based data verification systems, crucial for our zkTLS implementation in asset tokenization.",
      category: "Zero-Knowledge Proofs",
      source: "arXiv",
      year: "2024",
    },
    {
      title: "Programmable Cryptography 0xPARC",
      link: "https://0xparc.org/blog/programmable-cryptography-1",
      description:
        "Explores the intersection of cryptography and programmability, fundamental to building secure and efficient DeFi protocols.",
      category: "Cryptographic Systems",
      source: "0xPARC",
      year: "2023",
    },
    {
      title: "The God Protocols",
      link: "https://nakamotoinstitute.org/library/the-god-protocols/",
      description:
        "Nick Szabo's seminal work on trusted third parties and the vision for trustless systems that inspired blockchain technology.",
      category: "Cryptographic Theory",
      source: "Nakamoto Institute",
      year: "1997",
    },
    {
      title: "Web Data Authentication with Garble-Then-Prove",
      link: "https://eprint.iacr.org/2023/964",
      description:
        "Advanced cryptographic techniques for secure data verification, directly applicable to our real-world asset verification systems.",
      category: "Zero-Knowledge Proofs",
      source: "IACR ePrint",
      year: "2023",
    },
  ];

  const categories = [
    "All",
    "Blockchain Fundamentals",
    "Zero-Knowledge Proofs",
    "Cryptographic Systems",
    "Cryptographic Theory",
  ];

  return (
    <main className="wrap">
      <section className="page-hero">
        <div className="mono eyebrow lit">[ Research ]</div>
        <h1>
          <span className="lit">Research</span> Repository
        </h1>
        <p className="lede">
          Foundational research and cutting-edge papers that inspire our
          institutional DeFi innovations.
        </p>
      </section>

      <section className="section">
        <div className="stack">
          {researchPapers.map((paper) => (
            <a
              className="item"
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              key={paper.title}
            >
              <div className="num">{paper.year || "—"}</div>
              <div className="name">{paper.title}</div>
              <div className="desc">{paper.description}</div>
              <div className="tags">
                <span className="tag">{paper.category}</span>
                <span className="tag">{paper.source}</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 64 }}>
          <div className="sec-head">
            <div>
              <div className="mono eyebrow lit">[ Categories ]</div>
              <h2>
                Research <span className="lit">Areas.</span>
              </h2>
            </div>
          </div>
          <div className="tags" style={{ justifyContent: "flex-start" }}>
            {categories.map((cat) => (
              <span className="tag" key={cat}>
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="end" style={{ marginTop: 80 }}>
          <div className="card">
            <span className="mono lit">[ Explore ]</span>
            <h2 style={{ marginTop: 16 }}>
              Dive deeper into our <span className="lit">research.</span>
            </h2>
            <div className="row">
              <Link className="pill lg" to="/blog">
                <span className="dot"></span>Read the blog
              </Link>
              <span className="mono">
                team@sereel.com · Updated monthly
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
