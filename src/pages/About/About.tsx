import { SEO } from "../../components/SEO";

export const About = () => {
  return (
    <main className="wrap">
      <SEO
        title="About — Tokenized Finance Infrastructure"
        description="Sereel builds compliant rails for issuance, custody, settlement, and lifecycle management of tokenized financial products, operating from Chicago, Nairobi, and Zürich."
        canonical="/about"
      />
      <section className="page-hero about-hero">
        <div>
          <div className="mono eyebrow lit">[ About ]</div>
          <h1>
            The infrastructure layer
            <br />
            behind <span className="lit">tokenized</span> finance.
          </h1>
          <p className="lede">
            Sereel provides compliant rails for issuance, custody, settlement,
            investor controls, subscriptions, redemptions, and controlled
            transfers.
          </p>
        </div>

        <div className="logo-stage hero-logo-stage" aria-hidden="true">
          <img src="/images/Hero/glowing_seree_logo_expanded.svg" alt="" />
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ Mission ]</div>
            <h2>
              Why we <span className="lit">build.</span>
            </h2>
          </div>
        </div>

        <div className="about-body">
          <p>
            Sereel operates where traditional finance meets digital assets. We
            help institutions issue, custody, settle, and manage tokenized
            financial products with{" "}
            <span className="lit">compliance enforced at the contract layer</span>.
          </p>
          <p>
            Issuers own the asset, documents, investor relationship,
            obligations, and performance. Sereel owns the rails that make the
            operating model programmable, controlled, and auditable.
          </p>
        </div>

        <div className="stat-grid">
          <div className="cell">
            <div className="k display">
              $<span className="lit">30</span>B+
            </div>
            <div className="v mono">Tokenized RWA market</div>
          </div>
          <div className="cell">
            <div className="k display">
              <span className="lit">8</span>
            </div>
            <div className="v mono">Chain ecosystems</div>
          </div>
          <div className="cell">
            <div className="k display">
              T<span className="lit">+0</span>
            </div>
            <div className="v mono">Settlement target</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ Footprint ]</div>
            <h2>
              Where we <span className="lit">operate.</span>
            </h2>
          </div>
          <p className="lede">
            We have established a presence in three countries across three
            continents, aligned with regulatory regimes that matter for
            institutional tokenization. Built for regulatory interoperability.
          </p>
        </div>
        <div className="locations three">
          <div className="loc">
            <div className="name">Chicago</div>
            <div className="country mono">USA</div>
          </div>
          <div className="loc">
            <div className="name">Nairobi</div>
            <div className="country mono">Kenya</div>
          </div>
          <div className="loc">
            <div className="name">Zürich</div>
            <div className="country mono">Switzerland</div>
          </div>
        </div>
      </section>
    </main>
  );
};
