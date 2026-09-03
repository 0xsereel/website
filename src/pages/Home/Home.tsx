import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogs from "../../Blog Data/Blogs.json";

type JournalPost = {
  id: number;
  title: string;
  image: string;
  content: string;
  summary?: string;
  date?: string;
};

// Blogs.json is maintained newest-first, matching the journal index.
const latestPost = (blogs as JournalPost[])[0];

const normalizeImagePath = (path: string) => {
  const cleaned = path.replace(/\\/g, "/");
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
};

const EXCERPT_MAX = 190;

// Most summaries in Blogs.json are hard-truncated mid-word, so they are only
// used when they end on a complete sentence. Otherwise the excerpt is rebuilt
// from the article body and cut on a sentence break, never inside a word.
const postExcerpt = (post: JournalPost) => {
  const summary = post.summary?.trim() ?? "";
  if (/[.!?]$/.test(summary)) return summary;

  const body = post.content.replace(/\s+/g, " ").trim();
  if (body.length <= EXCERPT_MAX) return body;

  const head = body.slice(0, EXCERPT_MAX);
  const sentenceEnd = Math.max(
    head.lastIndexOf(". "),
    head.lastIndexOf("! "),
    head.lastIndexOf("? "),
  );
  if (sentenceEnd > 90) return head.slice(0, sentenceEnd + 1);

  return `${head.slice(0, head.lastIndexOf(" "))}…`;
};

type Segment = {
  slug: string;
  name: string;
  copy: string;
  layers: string[];
};

type StackLayer = {
  slug: string;
  aliases?: string[];
  title: string;
  detail: string;
  control: string;
  record: string;
  outcome: string;
};

const segments: Segment[] = [
  {
    slug: "solution-asset-managers",
    name: "Asset Managers",
    copy:
      "Launch tokenized funds with investor gating, custody workflows, subscriptions, redemptions, and controlled secondary transfers.",
    layers: ["Tokenization", "Compliance", "Subscriptions", "Marketplace"],
  },
  {
    slug: "solution-issuers-arrangers",
    name: "Issuers & Arrangers",
    copy:
      "Launch tokenized debt, private credit, fixed-income, and structured products through permissioned rails.",
    layers: ["Product rules", "Tokenization", "Settlement", "Reporting"],
  },
  {
    slug: "solution-banks-custodians",
    name: "Banks & Custodians",
    copy:
      "Adopt custody, multisig governance, wallet controls, permissions, and reporting before deploying the full tokenization stack.",
    layers: ["Custody", "Multisigs", "Approvals", "Audit trails"],
  },
  {
    slug: "solution-fintechs",
    name: "Fintechs",
    copy:
      "Enable access to regulated funds and tokenized products through Sereel's seamless SDK.",
    layers: ["APIs", "Investor gating", "Settlement", "White label"],
  },
  {
    slug: "solution-broker-dealers-platforms",
    name: "Broker-Dealers & Platforms",
    copy:
      "Operate permissioned orderbook and transfer workflows with eligibility checks before assets move.",
    layers: ["Orderbook", "Transfer rules", "Custody", "Redemptions"],
  },
  {
    slug: "solution-family-offices-treasuries",
    name: "Family Offices & Treasuries",
    copy:
      "Coordinate custody, reporting, controlled transfers, and access to tokenized private-market products.",
    layers: ["Custody", "Reporting", "Controlled transfers", "Strategy rails"],
  },
  {
    slug: "solution-institutional-strategy-teams",
    name: "Institutional Strategy Teams",
    copy:
      "Run compliant DeFi strategies with custody controls, risk policies, reporting, and settlement records.",
    layers: ["Custody", "DeFi strategy rails", "Risk controls", "Settlement records"],
  },
];

const stackLayers: StackLayer[] = [
  {
    slug: "product-custody",
    title: "Custody + Wallet Controls",
    detail:
      "Role-based wallets, multisig approval paths, recovery design, and controlled operations for institutional teams.",
    control: "Multisig approvals, recovery roles, treasury permissions",
    record: "Wallet policy dossier",
    outcome: "Teams can operate assets without losing institutional oversight.",
  },
  {
    slug: "product-compliance",
    title: "Compliance + Transfer Rules",
    detail:
      "Issuer-defined investor eligibility, jurisdiction controls, holding restrictions, and permissioned transfer logic.",
    control: "Eligibility, jurisdiction, holding, and transfer constraints",
    record: "Transfer-control log",
    outcome: "Unqualified transfers fail before ownership records move.",
  },
  {
    slug: "product-tokenization",
    title: "Tokenization Engine",
    detail:
      "Issuers launch tokenized funds, debt, fixed income, private credit, and structured products with controls their legal, operations, and investor teams can audit.",
    control: "Product terms, ownership registers, issuer controls",
    record: "Issuance register",
    outcome: "Products launch with auditable ownership and lifecycle files.",
  },
  {
    slug: "product-settlement",
    aliases: ["product-marketplace-settlement", "product-lifecycle-reporting"],
    title: "Subscriptions + Settlement",
    detail:
      "Fund managers run primary subscriptions, payment coordination, allocation workflows, settlement records, and lifecycle reporting through Sereel.",
    control: "Subscriptions, allocations, payment coordination",
    record: "Subscription book",
    outcome: "Primary capital movement is traceable from order to record.",
  },
  {
    slug: "product-marketplace",
    aliases: ["product-controlled-distribution"],
    title: "Marketplace + Redemptions",
    detail:
      "Controlled secondary transfers, redemption workflows, orderbook constraints, and issuer-approved exits.",
    control: "Issuer-approved exits and secondary-transfer constraints",
    record: "Redemption queue",
    outcome: "Liquidity workflows stay permissioned and reviewable.",
  },
  {
    slug: "product-rwa-lending",
    title: "Tokenized RWA Lending",
    detail:
      "Borrowing and lending rails for eligible tokenized real-world assets with custody, eligibility, collateral, and settlement controls.",
    control: "Borrower eligibility, lender access, collateral permissions",
    record: "Tokenized lending activity file",
    outcome: "Institutions can run RWA credit workflows inside permissioned infrastructure.",
  },
  {
    slug: "product-strategy",
    title: "Institutional Strategy Infrastructure",
    detail:
      "Institutional strategy workflows governed by custody, reporting, settlement, and risk controls.",
    control: "Custody policy, risk thresholds, settlement reporting",
    record: "Strategy operating file",
    outcome: "On-chain strategies operate inside institutional guardrails.",
  },
];


const standards = [
  {
    name: "ERC-3643",
    role: "Permissioned transfer logic",
    proof:
      "Eligibility checks and compliance rules can be enforced before transfer execution.",
    href: "/standards",
  },
  {
    name: "CMTAT",
    role: "Swiss capital markets token framework",
    proof:
      "Recognized token architecture for securities-style products and issuer controls.",
    href: "/standards",
  },
  {
    name: "VASP-ready",
    role: "Regional regulatory coverage",
    proof:
      "Deployment models can align with custody, reporting, and digital-asset service rules.",
    href: "/standards",
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
];

export const Home = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);
  const segment = segments[activeSegment];
  const layer = stackLayers[activeLayer];

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const segmentIndex = segments.findIndex((item) => item.slug === hash);
      const layerIndex = stackLayers.findIndex(
        (item) => item.slug === hash || item.aliases?.includes(hash)
      );
      const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (!section) return;

        window.requestAnimationFrame(() => {
          section.scrollIntoView({ block: "start" });
        });
      };

      if (segmentIndex >= 0) {
        setActiveSegment(segmentIndex);
        scrollToSection("served");
      }

      if (layerIndex >= 0) {
        setActiveLayer(layerIndex);
        scrollToSection("platform");
      }

      if (hash === "standards") {
        scrollToSection("standards");
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const selectSegment = (index: number) => {
    setActiveSegment(index);
    window.history.replaceState(null, "", `#${segments[index].slug}`);
  };

  const selectLayer = (index: number) => {
    setActiveLayer(index);
    window.history.replaceState(null, "", `#${stackLayers[index].slug}`);
  };

  return (
    <main className="marketing-page">
      <section className="marketing-hero wrap" aria-labelledby="home-hero-title">
        <div className="hero-copy">
          <h1 id="home-hero-title">The rails behind tokenized capital markets.</h1>
          <p className="hero-subhead">
            Tokenization, custody, compliance, settlement, and market rails for
            issuer-owned financial products on public and private chains.
          </p>
          <div className="hero-actions" aria-label="Primary action">
            <Link className="market-cta primary" to="/contact">
              Schedule consultation
            </Link>
          </div>
        </div>

        <div className="logo-stage hero-logo-stage" aria-hidden="true">
          <img src="/images/Hero/glowing_seree_logo_expanded.svg" alt="" />
        </div>
      </section>

      <section className="marketing-section served-section wrap" id="served">
        <div className="section-copy compact">
          <h2>Use cases</h2>
          <p>
            Institutions enter the system from different operating points. Each
            use case shows the controls, records, and workflows institutions run
            through Sereel.
          </p>
        </div>

        <div className="segment-selector">
          <div
            className="segment-tabs"
            role="tablist"
            aria-label="Use cases"
          >
            {segments.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                id={item.slug}
                aria-selected={activeSegment === index}
                aria-controls="segment-panel"
                className={activeSegment === index ? "active" : ""}
                onClick={() => selectSegment(index)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div
            id="segment-panel"
            className="segment-panel"
            role="tabpanel"
            aria-labelledby={segment.slug}
          >
            <span className="panel-label">Use case</span>
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
                  id={item.slug}
                  className={activeLayer === index ? "active" : ""}
                  onClick={() => selectLayer(index)}
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

      <section className="marketing-section responsibility-section">
        <div className="wrap responsibility-grid">
          <div className="section-copy compact">
            <h2>Your asset. Your investors. Sereel infrastructure.</h2>
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

      <section className="marketing-section standards-proof wrap" id="standards">
        <div className="section-copy">
          <h2>Standards where they matter. Invisible where they should be.</h2>
          <p>
            Sereel deploys recognized token standards and compliance frameworks
            so institutions can launch without rebuilding legal and technical
            rails from scratch.
          </p>
        </div>

        <div className="standards-ledger">
          {standards.map((standard) => (
            <article key={standard.name}>
              <strong>
                <Link to={standard.href}>{standard.name}</Link>
              </strong>
              <span>{standard.role}</span>
              <p>{standard.proof}</p>
            </article>
          ))}
        </div>
      </section>

      {latestPost && (
        <section
          className="marketing-section journal-section wrap"
          id="journal"
          aria-labelledby="home-journal-title"
        >
          <div className="section-copy compact">
            <h2 id="home-journal-title">Latest from the journal</h2>
            <p>
              Regulatory analysis, infrastructure notes, and market perspective
              for institutional on-chain finance.
            </p>
          </div>

          <article className="journal-feature">
            <Link
              className="journal-cover"
              to={`/blog/${latestPost.id}`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                src={normalizeImagePath(latestPost.image)}
                alt=""
                loading="lazy"
              />
            </Link>

            <div className="journal-body">
              <div className="journal-meta">
                <span className="ledger-label">Latest</span>
                {latestPost.date && <span>{latestPost.date}</span>}
              </div>
              <h3>
                <Link to={`/blog/${latestPost.id}`}>{latestPost.title}</Link>
              </h3>
              <p>{postExcerpt(latestPost)}</p>
              <div className="journal-actions">
                <Link className="market-cta secondary" to={`/blog/${latestPost.id}`}>
                  Read article
                </Link>
                <Link className="journal-all" to="/blog">
                  All articles
                </Link>
              </div>
            </div>
          </article>
        </section>
      )}

      <section className="marketing-cta-band">
        <div className="wrap">
          <h2>Sereel helps you safely &amp; compliantly manage tokenized assets.</h2>
          <Link className="market-cta primary" to="/contact">
            Schedule consultation
          </Link>
        </div>
      </section>
    </main>
  );
};
