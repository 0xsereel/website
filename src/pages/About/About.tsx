export const About = () => {
  return (
    <main className="wrap">
      <section className="page-hero">
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
            We have established a presence in five countries across three
            continents, aligned with regulatory regimes that matter for
            institutional tokenization. Built for regulatory interoperability.
          </p>
        </div>
        <div className="locations five">
          <div className="loc">
            <div className="name lit" style={{ color: "var(--accent)" }}>
              Chicago
            </div>
            <div className="country mono">USA · Capital markets</div>
          </div>
          <div className="loc">
            <div className="name">Nairobi</div>
            <div className="country mono">Kenya · East Africa HQ</div>
          </div>
          <div className="loc">
            <div className="name">Zürich</div>
            <div className="country mono">CH · Standards &amp; banks</div>
          </div>
          <div className="loc">
            <div className="name">Kigali</div>
            <div className="country mono">Rwanda · VASP</div>
          </div>
          <div className="loc">
            <div className="name">Gaborone</div>
            <div className="country mono">Botswana · VASP</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ Team ]</div>
            <h2>
              The people <span className="lit">behind it.</span>
            </h2>
          </div>
          <p className="lede">
            Blockchain engineers and fintech operators advised by capital
            markets veterans. Builders who have shipped and contributed to the
            on-chain economy. Architects of next-gen finance.
          </p>
        </div>
        <img src="/images/team/image.png" alt="Sereel team" style={{ width: "100%", borderRadius: 18, border: "1px solid var(--rule-2)", marginTop: 48 }} />
      </section>
    </main>
  );
};
