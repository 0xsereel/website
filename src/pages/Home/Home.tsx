import { useState } from "react";
import { Link } from "react-router-dom";

const railNodes = [
  "Issuer",
  "Product Rules",
  "Custody",
  "Tokenization",
  "Subscriptions",
  "Marketplace / Redemptions",
  "Whitelisted Investors",
];

const proofPoints = [
  "Launch governed products",
  "Control investor access",
  "Settle with records",
  "Distribute through approved rails",
  "Report lifecycle events",
];

const trustedPartners = [
  {
    name: "Globetec Asset Managers",
    href: "https://globetec.co.ke/",
    logo: "/images/partners/globetec-logo.png",
  },
  {
    name: "GrowTokens",
    href: "https://growtokens.io",
    logo: "/images/partners/growtokens-logo.png",
  },
  {
    name: "Future Wealth Group",
    href: "https://futurewealthgroup.ch",
    logo: "/images/partners/fwg.svg",
  },
  {
    name: "Future Energy Global",
    href: "https://fe.global",
    logo: "/images/partners/fe.svg",
  },
  {
    name: "FirmCorp Partners",
    fallback: "FirmCorp",
  },
];

const segments = [
  {
    name: "Asset Managers",
    copy:
      "Launch tokenized funds with investor gating, custody workflows, subscriptions, redemptions, and controlled secondary transfers.",
    layers: ["Tokenization", "Compliance", "Subscriptions", "Marketplace"],
  },
  {
    name: "Issuers",
    copy:
      "Launch tokenized debt, private credit, fixed-income, and structured products through permissioned rails.",
    layers: ["Product rules", "Tokenization", "Settlement", "Reporting"],
  },
  {
    name: "Custody-First Institutions",
    copy:
      "Adopt custody, multisig governance, wallet controls, permissions, and reporting before deploying the full tokenization stack.",
    layers: ["Custody", "Multisigs", "Approvals", "Audit trails"],
  },
  {
    name: "Fintechs",
    copy:
      "Embed compliant issuance and lifecycle workflows into investor-facing products through API-led rails.",
    layers: ["APIs", "Investor gating", "Settlement", "White label"],
  },
  {
    name: "Broker-Dealers",
    copy:
      "Operate permissioned orderbook and transfer workflows with eligibility checks before assets move.",
    layers: ["Orderbook", "Transfer rules", "Custody", "Redemptions"],
  },
  {
    name: "Family Offices",
    copy:
      "Coordinate custody, reporting, controlled transfers, and access to tokenized private-market products.",
    layers: ["Custody", "Reporting", "Controlled transfers", "Strategy rails"],
  },
  {
    name: "Institutional Strategy Teams",
    copy:
      "Run tokenized asset and treasury workflows with custody controls, risk policies, reporting, and settlement records.",
    layers: ["Custody", "Policy controls", "Execution controls", "Settlement records"],
  },
];

const stackLayers = [
  {
    title: "Custody + Wallet Controls",
    detail:
      "Role-based wallets, multisig approval paths, recovery design, and controlled operations for institutional teams.",
    control: "Multisig approvals, recovery roles, treasury permissions",
    record: "Wallet policy dossier",
    outcome: "Teams can operate assets without losing institutional oversight.",
  },
  {
    title: "Compliance + Transfer Rules",
    detail:
      "Investor eligibility, jurisdiction controls, holding restrictions, and permissioned transfer logic.",
    control: "Eligibility, jurisdiction, holding, and transfer constraints",
    record: "Transfer-control log",
    outcome: "Unqualified transfers fail before ownership records move.",
  },
  {
    title: "Tokenization Engine",
    detail:
      "Tokenized funds, debt, fixed income, private credit, and structured products with controls legal, operations, and investor teams can audit.",
    control: "Product terms, ownership registers, issuer controls",
    record: "Issuance register",
    outcome: "Products launch with auditable ownership and lifecycle files.",
  },
  {
    title: "Subscriptions + Settlement",
    detail:
      "Primary subscriptions, payment coordination, allocation workflows, settlement records, and lifecycle reporting.",
    control: "Subscriptions, allocations, payment coordination",
    record: "Subscription book",
    outcome: "Primary capital movement is traceable from order to record.",
  },
  {
    title: "Marketplace + Redemptions",
    detail:
      "Controlled secondary transfers, redemption workflows, orderbook constraints, and issuer-approved exits.",
    control: "Issuer-approved exits and secondary-transfer constraints",
    record: "Redemption queue",
    outcome: "Liquidity workflows stay permissioned and reviewable.",
  },
  {
    title: "Institutional Strategy Infrastructure",
    detail:
      "Institutional strategy workflows governed by custody, reporting, settlement, and risk controls.",
    control: "Custody policy, risk thresholds, settlement reporting",
    record: "Strategy operating file",
    outcome: "On-chain strategies operate inside institutional guardrails.",
  },
];

const ledgerRows = [
  {
    id: "01",
    useCase: "Tokenized Funds",
    institution: "Asset managers",
    layers: "Custody, compliance, subscriptions, redemptions",
    outcome: "Launch fund units with investor eligibility and lifecycle controls.",
  },
  {
    id: "02",
    useCase: "Fixed-Income Products",
    institution: "Issuers and arrangers",
    layers: "Tokenization, transfer rules, settlement",
    outcome: "Operate permissioned debt or yield products with auditable ownership records.",
  },
  {
    id: "03",
    useCase: "Private Credit Products",
    institution: "Credit managers",
    layers: "Product rules, reporting, subscriptions",
    outcome: "Distribute private credit exposure through controlled investor rails.",
  },
  {
    id: "04",
    useCase: "Custody-First Deployments",
    institution: "Banks and treasury teams",
    layers: "Wallet controls, multisigs, approvals, audit trails",
    outcome: "Adopt institutional custody before broader tokenization rollout.",
  },
  {
    id: "05",
    useCase: "Controlled Marketplaces",
    institution: "Broker-dealers and platforms",
    layers: "Marketplace, eligibility, redemptions",
    outcome: "Run orderbook workflows where only approved participants can transfer.",
  },
  {
    id: "06",
    useCase: "Institutional Strategy Workflows",
    institution: "Strategy and treasury teams",
    layers: "Custody, strategy controls, settlement",
    outcome: "Operate tokenized asset and treasury workflows with reporting and operational guardrails.",
  },
];

const standards = [
  {
    name: "ERC-3643",
    role: "Permissioned transfer logic",
    proof:
      "Eligibility checks and compliance rules can be enforced before transfer execution.",
  },
  {
    name: "CMTAT",
    role: "Swiss capital markets token framework",
    proof:
      "Recognized token architecture for securities-style products and issuer controls.",
  },
  {
    name: "VASP-ready",
    role: "Regional regulatory coverage",
    proof:
      "Deployment models can align with custody, reporting, and digital-asset service rules.",
  },
  {
    name: "Network coverage",
    role: "Public and private blockchain deployment",
    proof:
      "Supports all EVM-compatible chains, Solana, Canton, Bitcoin, IOTA, public networks, private chains, and ZKsync Prividium environments.",
  },
];

const issuerResponsibilities = [
  "Asset",
  "Disclosures",
  "Investor relationship",
  "Obligations",
  "Product economics and performance",
];

const sereelResponsibilities = [
  "Custody and multisig controls",
  "Tokenization",
  "Compliance controls",
  "Settlement",
  "Subscriptions / redemptions",
  "Controlled transfers",
];

const CapitalRailsMap = () => {
  return (
    <div className="capital-rails-map" aria-label="Capital rails map">
      <div className="rails-map-topline">
        <span>Capital rails map</span>
        <span>Permissioned flow</span>
      </div>
      <div className="rails-track" aria-hidden="true">
        <span className="rails-line"></span>
        <span className="rails-pulse pulse-one"></span>
        <span className="rails-pulse pulse-two"></span>
      </div>
      <ol className="rail-nodes">
        {railNodes.map((node) => (
          <li key={node}>
            <span className="node-pin"></span>
            <span>{node}</span>
          </li>
        ))}
      </ol>
      <div className="rails-control">
        <div>
          <span className="control-label">Sereel rail layer</span>
          <strong>Rules before movement</strong>
        </div>
        <img src="/assets/glowing-logo.png" alt="" aria-hidden="true" />
      </div>
    </div>
  );
};

export const Home = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);
  const segment = segments[activeSegment];
  const layer = stackLayers[activeLayer];

  return (
    <main className="marketing-page">
      <section className="marketing-hero wrap" aria-labelledby="home-hero-title">
        <div className="hero-copy">
          <p className="hero-kicker">Institutional tokenized finance</p>
          <h1 id="home-hero-title">
            Compliant rails for{" "}
            <br />
            tokenized capital markets.
          </h1>
          <p className="hero-subhead">
            Sereel helps institutions issue, custody, settle, distribute, and
            manage tokenized financial products and on-chain strategies across
            public and private blockchain environments.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <Link className="market-cta primary" to="/contact">
              Schedule consultation
            </Link>
            <a className="market-cta secondary" href="#platform">
              View control system
            </a>
          </div>
        </div>

        <CapitalRailsMap />
      </section>

      <section className="proof-strip" aria-label="Outcome proof points">
        <div className="wrap proof-row">
          {proofPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="trusted-rail" aria-labelledby="trusted-title">
        <div className="wrap trusted-rail-inner">
          <div>
            <span className="panel-label">Trusted by</span>
            <h2 id="trusted-title">Institutions building tokenized finance rails.</h2>
          </div>
          <div className="trusted-ledger" aria-label="Trusted partners">
            {trustedPartners.map((partner) => {
              const partnerMark = (
                <>
                  {partner.logo ? (
                    <img src={partner.logo} alt="" aria-hidden="true" />
                  ) : (
                    <strong className="trusted-wordmark">{partner.fallback}</strong>
                  )}
                  <span>{partner.name}</span>
                </>
              );

              return partner.href ? (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                >
                  {partnerMark}
                </a>
              ) : (
                <div
                  key={partner.name}
                  className="trusted-partner"
                  aria-label={partner.name}
                >
                  {partnerMark}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="marketing-section served-section wrap" id="served">
        <div className="section-copy compact">
          <h2>Deployment dossiers</h2>
          <p>
            Institutions enter the system from different operating points. Each
            dossier shows the controls, records, and workflows Sereel can carry.
          </p>
        </div>

        <div className="segment-selector">
          <div
            className="segment-tabs"
            role="tablist"
            aria-label="Deployment dossiers"
          >
            {segments.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                id={`segment-tab-${index}`}
                aria-selected={activeSegment === index}
                aria-controls="segment-panel"
                className={activeSegment === index ? "active" : ""}
                onClick={() => setActiveSegment(index)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div
            id="segment-panel"
            className="segment-panel"
            role="tabpanel"
            aria-labelledby={`segment-tab-${activeSegment}`}
          >
            <span className="panel-label">Deployment dossier</span>
            <h3>{segment.name}</h3>
            <p>{segment.copy}</p>
            <div className="segment-layer-list" aria-label="Rail controls included">
              {segment.layers.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section stack-section" id="platform">
        <div className="wrap">
          <div className="section-copy">
            <h2>The control system behind tokenized products.</h2>
            <p>
              Sereel can run as one operating layer or as specific rails for
              custody, compliance, tokenization, settlement, marketplace
              workflows, strategy controls, and public or private chain
              deployment.
            </p>
          </div>

          <div className="layer-system">
            <div className="layer-list" aria-label="Sereel stack layers">
              {stackLayers.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={activeLayer === index ? "active" : ""}
                  onClick={() => setActiveLayer(index)}
                  onFocus={() => setActiveLayer(index)}
                  onMouseEnter={() => setActiveLayer(index)}
                  aria-pressed={activeLayer === index}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </button>
              ))}
            </div>

            <div className="layer-detail" aria-live="polite">
              <div className="register-head">
                <span className="panel-label">Workflow register</span>
                <span className="register-index">
                  {String(activeLayer + 1).padStart(2, "0")} /{" "}
                  {String(stackLayers.length).padStart(2, "0")}
                </span>
              </div>
              <h3>{layer.title}</h3>
              <p>{layer.detail}</p>
              <div className="workflow-lines">
                <div className="workflow-line">
                  <span className="ledger-label">Control</span>
                  <p>{layer.control}</p>
                </div>
                <div className="workflow-line">
                  <span className="ledger-label">Record</span>
                  <p>{layer.record}</p>
                </div>
                <div className="workflow-line">
                  <span className="ledger-label">Buyer outcome</span>
                  <p>{layer.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section ledger-section wrap" id="use-cases">
        <div className="section-copy compact">
          <h2>Workflow ledger</h2>
          <p>
            Product dossiers for the capital-market workflows Sereel can power.
          </p>
        </div>

        <div className="use-case-ledger">
          {ledgerRows.map((row) => (
            <article key={row.id} className="ledger-row">
              <span className="ledger-id">{row.id}</span>
              <div>
                <h3>{row.useCase}</h3>
                <p>{row.institution}</p>
              </div>
              <div>
                <span className="ledger-label">Rail controls used</span>
                <p>{row.layers}</p>
              </div>
              <div>
                <span className="ledger-label">Outcome</span>
                <p>{row.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="marketing-section responsibility-section">
        <div className="wrap responsibility-grid">
          <div className="section-copy compact">
            <h2>Your asset. Your investors. Our rails.</h2>
            <p>
              Sereel provides the infrastructure layer for compliant issuance,
              custody, settlement, investor controls, subscriptions,
              redemptions, and controlled transfers. Issuers remain responsible
              for the asset, offering documents, disclosures, investor
              communications, obligations, product economics, and asset
              performance. Sereel does not originate, underwrite, recommend, or
              guarantee issuer assets or returns.
            </p>
          </div>

          <div className="responsibility-ledger">
            <div>
              <h3>Issuer owns</h3>
              <ul>
                {issuerResponsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Sereel powers</h3>
              <ul>
                {sereelResponsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section standards-proof wrap">
        <div className="section-copy">
          <h2>Standards where they matter. Invisible where they should be.</h2>
          <p>
            Sereel deploys recognized token standards and compliance frameworks
            so institutions can launch without rebuilding legal and technical
            rails from scratch across public and private networks.
          </p>
        </div>

        <div className="standards-ledger">
          {standards.map((standard) => (
            <article key={standard.name}>
              <strong>{standard.name}</strong>
              <span>{standard.role}</span>
              <p>{standard.proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="marketing-cta-band">
        <div className="wrap">
          <h2>Build the rails behind the product.</h2>
          <p>
            Bring Sereel into the architecture before legal, custody,
            distribution, and settlement workflows harden.
          </p>
          <Link className="market-cta primary" to="/contact">
            Schedule consultation
          </Link>
        </div>
      </section>
    </main>
  );
};
