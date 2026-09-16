import { SEO } from "../../components/SEO";

export const Standards = () => {
  return (
    <main className="wrap">
      <SEO
        title="Token Standards & Compliance Frameworks"
        description="The recognized token standards and compliance frameworks Sereel deploys so institutions can launch across public and private blockchain environments."
        canonical="/standards"
      />
      <section className="page-hero">
        <div className="mono eyebrow lit">[ Standards ]</div>
        <h1>
          Standards where they matter.
          <br />
          <span className="lit">Invisible</span> where they should be.
        </h1>
        <p className="lede">
          Sereel deploys recognized token standards and compliance frameworks so
          institutions can launch across public and private blockchain
          environments without rebuilding legal and technical rails from
          scratch.
        </p>
      </section>

      <section className="section">
        <div className="spec-grid">
          <div className="spec-card large">
            <span className="badge">● Standard 01</span>
            <h3>
              CMTA
              <br />
              <span className="glow-text">CMTAT</span>
            </h3>
            <div className="sub">Capital Markets &amp; Technology Association</div>
            <p>
              The Swiss tokenization framework adopted by major banks and
              recognized by Singapore&apos;s Project Guardian. Sereel is one of the
              few engineering teams certified to deploy on it.
            </p>
            <ul>
              <li>
                Reference implementation for tokenized securities under Swiss
                DLT law
              </li>
              <li>40+ institutional members including UBS, SIX, and Sygnum</li>
              <li>
                Native compliance modules: transfer restrictions, snapshots,
                freeze
              </li>
              <li>Composable with ERC-3643 for permissioned transferability</li>
              <li>Audited, open source, and version-locked at the protocol layer</li>
            </ul>
          </div>
          <div className="spec-card large">
            <span className="badge">● Standard 02</span>
            <h3>
              ERC
              <br />
              <span className="glow-text">3643</span>
            </h3>
            <div className="sub">Permissioned Token Standard / T-REX</div>
            <p>
              The leading EVM standard for compliant security tokens.
              Identity-on-chain through ONCHAINID, with modular compliance
              enforced at the contract layer.
            </p>
            <ul>
              <li>
                Built-in eligibility checks: KYC, accreditation, jurisdiction
              </li>
              <li>ONCHAINID identity portability across issuers and chains</li>
              <li>Backed by Tokeny, Apex, ING, and 20+ regulated issuers</li>
              <li>Sereel deploys CMTAT + ERC-3643 hybrid contracts</li>
              <li>Recovery, partitioning, and forced-transfer hooks built in</li>
            </ul>
          </div>
        </div>

        <div className="twocol large" style={{ marginTop: 60 }}>
          <div className="col">
            <h3>Networks</h3>
            <ul>
              <li>
                <div className="left">
                  <span className="glyph"></span>All EVM-compatible chains
                </div>
                <span className="meta">EVM</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Solana
                </div>
                <span className="meta">SVM</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Canton Network
                </div>
                <span className="meta">Privacy</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Bitcoin
                </div>
                <span className="meta">BTC</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>IOTA
                </div>
                <span className="meta">DAG</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>ZKsync Prividium
                </div>
                <span className="meta">Private rollup</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Private blockchain environments
                </div>
                <span className="meta">Permissioned</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Public blockchain networks
                </div>
                <span className="meta">Open</span>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Jurisdictions</h3>
            <ul>
              <li>
                <div className="left">
                  <span className="glyph"></span>Kenya VASP Act
                </div>
                <span className="meta">KE</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Botswana VASP Act
                </div>
                <span className="meta">BW</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Rwanda VASP Act
                </div>
                <span className="meta">RW</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Regulation S
                </div>
                <span className="meta">Non-US</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Regulation D
                </div>
                <span className="meta">US · Accredited</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>MiCA
                </div>
                <span className="meta">EU</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Swiss DLT
                </div>
                <span className="meta">CH</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>MAS Guidelines
                </div>
                <span className="meta">SG</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Custom Counsel
                </div>
                <span className="meta">Bespoke</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
