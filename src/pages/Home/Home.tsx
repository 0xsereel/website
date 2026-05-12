import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../../components/Reveal";

const citiesList = ["Chicago", "Nairobi", "Zürich", "Kigali"];

export const Home = () => {
  const [cityIndex, setCityIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setFade(true);
      timeout = setTimeout(() => {
        setCityIndex((i) => (i + 1) % citiesList.length);
        setFade(false);
      }, 400);
    }, 2400);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <main className="wrap">
        <section className="hero">
          <div className="hero-meta">
            <div className="left">
              <span className="mono">Sereel Technologies</span>
              <span className="mono est">
                established in{" "}
                <span className={`city ${fade ? "fade" : ""}`}>
                  {citiesList[cityIndex]}
                </span>
              </span>
            </div>
          </div>

          <div className="hero-grid">
            <div>
              <Reveal>
                <h1>
                  Tokenization,
                  <br />
                  built to <span className="lit">institutional</span>
                  <br />
                  standard.
                </h1>
              </Reveal>
              <Reveal>
                <p className="sub">
                  Custody, issuance, and market rails for asset managers, banks,
                  and family offices. Compliant by construction.
                </p>
              </Reveal>
              <Reveal>
                <div className="cta-row">
                  <Link className="pill lg" to="/contact">
                    <span className="dot"></span>Schedule consultation
                  </Link>
                  <Link className="pill lg ghost" to="/standards">
                    <span className="dot"></span>See the standards
                  </Link>
                </div>
              </Reveal>
              <Reveal>
                <a
                  className="seal"
                  href="https://cmta.ch/certification/recognized-experts"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CMTA Recognized Tokenization Experts"
                >
                  <span className="stamp">
                    <svg viewBox="0 0 46 46">
                      <defs>
                        <path
                          id="circ"
                          d="M 23,23 m -18,0 a 18,18 0 1,1 36,0 a 18,18 0 1,1 -36,0"
                        />
                      </defs>
                      <text
                        fontFamily="JetBrains Mono"
                        fontSize="5"
                        letterSpacing="1.4"
                        fill="#6FE5A5"
                      >
                        <textPath href="#circ" startOffset="0">
                          · SEREEL · CMTA · 2026 · SEREEL · CMTA · 2026{" "}
                        </textPath>
                      </text>
                    </svg>
                    <b>CMTA</b>
                  </span>
                  <span className="label">
                    <b>CMTA</b> &amp; ERC3643 Standard Experts
                  </span>
                </a>
              </Reveal>
            </div>

            <div className="logo-stage">
              <img src="/assets/glowing-logo.png" alt="Sereel logo" />
            </div>
          </div>

          <div className="stats">
            <div className="cell">
              <div className="k display">
                <span className="lit">8</span>
              </div>
              <div className="v mono">Chains supported</div>
            </div>
            <div className="cell">
              <div className="k display">
                T<span className="lit">+0</span>
              </div>
              <div className="v mono">Settlement</div>
            </div>
            <div className="cell">
              <div className="k display">
                <span className="lit">9</span>
              </div>
              <div className="v mono">Jurisdictions</div>
            </div>
            <div className="cell">
              <div className="k display">
                CMTA <span className="lit">&amp;</span> ERC-3643
              </div>
              <div className="v mono">Standard Experts</div>
            </div>
          </div>
        </section>
      </main>

      <section className="trusted">
        <div className="wrap row">
          <span className="mono">Trusted by</span>
          <div className="by">
            <span className="name">Globetec Asset Managers</span>
            <span className="name">Growtokens</span>
            <span className="name">Future Wealth Group</span>
            <span className="name">Future Energy Global</span>
            <span className="name">FirmCorp Partners</span>
          </div>
          <Link className="mono lit" to="/about">
            Partners →
          </Link>
        </div>
      </section>

      <div className="wrap">
        <section className="build" id="build">
          <div className="sec-head">
            <div>
              <div className="mono eyebrow lit">[ Platform ]</div>
              <h2>
                What we <span className="lit">build.</span>
              </h2>
            </div>
            <p className="lede">
              Four primitives. One platform. Each layer is independently
              deployable. Pick the parts you need; integrate the rest.
            </p>
          </div>

          <div className="stack">
            <div className="item">
              <div className="num">01 / Custody</div>
              <div className="name">Enterprise wallet infrastructure</div>
              <div className="desc">
                Institutional-grade EOAs and custodied wallets built for
                treasury operations and compliance.
              </div>
              <div className="tags">
                <span className="tag">EOA</span>
                <span className="tag">MPC</span>
                <span className="tag">SSS</span>
              </div>
            </div>
            <div className="item">
              <div className="num">02 / Issuance</div>
              <div className="name">Tokenization engine</div>
              <div className="desc">
                Compliant security tokens on the CMTA standard. The
                institutional benchmark adopted by major Swiss banks.
              </div>
              <div className="tags">
                <span className="tag">CMTAT</span>
                <span className="tag">ERC-3643</span>
                <span className="tag">CCIP</span>
              </div>
            </div>
            <div className="item">
              <div className="num">03 / Coverage</div>
              <div className="name">Asset &amp; regulatory frameworks</div>
              <div className="desc">
                Equity, debt, private credit, stablecoins. African VASP regimes,
                Reg S, Reg D, MiCA, Swiss DLT, Singapore MAS.
              </div>
              <div className="tags">
                <span className="tag">Kenya VASP</span>
                <span className="tag">Botswana</span>
                <span className="tag">Rwanda</span>
              </div>
            </div>
            <div className="item">
              <div className="num">04 / Markets</div>
              <div className="name">Settlement &amp; distribution rails</div>
              <div className="desc">
                Primary issuance, secondary connectivity, T+0 settlement. OTC
                and exchange routes to institutional liquidity.
              </div>
              <div className="tags">
                <span className="tag">T+0</span>
                <span className="tag">OTC</span>
                <span className="tag">DvP</span>
              </div>
            </div>
          </div>
        </section>

        <section className="standards" id="standards">
          <div className="sec-head">
            <div>
              <div className="mono eyebrow lit">[ Standards ]</div>
              <h2>
                Built on <span className="lit">open</span> rails.
              </h2>
            </div>
            <p className="lede">
              We ship on the standards your counsel already recognizes. No
              proprietary lock in. No re-papering when you scale.
            </p>
          </div>

          <div className="spec-grid">
            <div className="spec-card">
              <span className="badge">● Standard 01</span>
              <h3>
                CMTA
                <br />
                <span className="glow-text">CMTAT</span>
              </h3>
              <div className="sub">
                Capital Markets &amp; Technology Association
              </div>
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
                <li>
                  40+ institutional members including UBS, SIX, and Sygnum
                </li>
                <li>
                  Native compliance modules: transfer restrictions, snapshots,
                  freeze
                </li>
                <li>
                  Composable with ERC-3643 for permissioned transferability
                </li>
              </ul>
            </div>
            <div className="spec-card">
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
                <li>
                  ONCHAINID identity portability across issuers and chains
                </li>
                <li>
                  Backed by Tokeny, Apex, ING, and 20+ regulated issuers
                </li>
                <li>
                  Sereel deploys CMTAT + ERC-3643 hybrid contracts for
                  cross-jurisdictional issuances
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="standards" style={{ paddingTop: 40 }}>
          <div className="sec-head">
            <div>
              <div className="mono eyebrow lit">[ Coverage ]</div>
              <h2>
                Networks &amp; <span className="lit">jurisdictions.</span>
              </h2>
            </div>
            <p className="lede">
              Where Sereel runs, and the legal frameworks we ship under.
            </p>
          </div>

          <div className="twocol">
            <div className="col">
              <h3>Networks</h3>
              <ul>
                <li>
                  <div className="left">
                    <span className="glyph"></span>Ethereum
                  </div>
                  <span className="meta">EVM</span>
                </li>
                <li>
                  <div className="left">
                    <span className="glyph"></span>Arbitrum
                  </div>
                  <span className="meta">EVM · L2</span>
                </li>
                <li>
                  <div className="left">
                    <span className="glyph"></span>Base
                  </div>
                  <span className="meta">EVM · L2</span>
                </li>
                <li>
                  <div className="left">
                    <span className="glyph"></span>Polygon
                  </div>
                  <span className="meta">EVM</span>
                </li>
                <li>
                  <div className="left">
                    <span className="glyph"></span>Optimism
                  </div>
                  <span className="meta">EVM · L2</span>
                </li>
                <li>
                  <div className="left">
                    <span className="glyph"></span>Solana
                  </div>
                  <span className="meta">SVM</span>
                </li>
                <li>
                  <div className="left">
                    <span className="glyph"></span>Starknet
                  </div>
                  <span className="meta">ZK</span>
                </li>
                <li>
                  <div className="left">
                    <span className="glyph"></span>IOTA
                  </div>
                  <span className="meta">DAG</span>
                </li>
                <li>
                  <div className="left">
                    <span className="glyph"></span>Canton Network
                  </div>
                  <span className="meta">Privacy</span>
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
      </div>

      <section className="quote">
        <div className="wrap">
          <p className="pull">
            The next decade of finance will be{" "}
            <span className="lit">tokenized.</span> Its infrastructure should
            look, and behave, like the infrastructure it replaces.
          </p>
          <div className="attrib">
            <span className="mono">/ Sereel thesis</span>
            <span className="mono lit">2026</span>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="faq">
          <div className="sec-head">
            <div>
              <div className="mono eyebrow lit">[ Primer ]</div>
              <h2>
                Questions, <span className="lit">answered.</span>
              </h2>
            </div>
            <p className="lede">
              A short primer for institutional teams evaluating tokenization
              infrastructure.
            </p>
          </div>

          <div className="list">
            <details>
              <summary>
                Why CMTA over a proprietary stack?
                <span className="plus">+</span>
              </summary>
              <div className="a">
                CMTA is the institutional tokenization standard adopted by major
                Swiss banks and recognized by Singapore&apos;s Project Guardian.
                Tokens stay portable, interoperable, and compliant across 40+
                institutional members. They are not trapped inside one vendor.
              </div>
            </details>
            <details>
              <summary>
                What can we tokenize?
                <span className="plus">+</span>
              </summary>
              <div className="a">
                Securities and equity, bonds and fixed income, private credit,
                stablecoins, utility tokens, and structured products. Across
                every jurisdiction listed above. If the asset is real, we can
                wrap it.
              </div>
            </details>
            <details>
              <summary>
                How does custody actually work?
                <span className="plus">+</span>
              </summary>
              <div className="a">
                Secure multisig wallets built for institutional treasury
                operations and compliance.
              </div>
            </details>
            <details>
              <summary>
                How do we get started?
                <span className="plus">+</span>
              </summary>
              <div className="a">
                Schedule a consultation. We will assess your use case, recommend
                the technical and regulatory path, and architect a deployment
                plan within two weeks.
              </div>
            </details>
          </div>
        </section>
      </div>

      <div className="wrap">
        <section className="end" id="end">
          <div className="card">
            <span className="mono lit">[ Let&apos;s begin ]</span>
            <h2 style={{ marginTop: 16 }}>
              Architect your <span className="lit">tokenized</span> future.
            </h2>
            <div className="row">
              <Link className="pill lg" to="/contact">
                <span className="dot"></span>Schedule consultation
              </Link>
              <span className="mono">
                team@sereel.com · Chicago · Nairobi · Zürich · Kigali
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
