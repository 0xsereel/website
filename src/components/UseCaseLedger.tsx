import { Reveal } from "./Reveal";

const ROWS = [
  {
    useCase: "Tokenized funds",
    builtFor: "Asset managers",
    layers: "Tokenization · Compliance · Settlement",
    outcome: "Faster subscriptions and redemptions",
  },
  {
    useCase: "Fixed-income products",
    builtFor: "Banks & issuers",
    layers: "Tokenization · Custody · Settlement",
    outcome: "Programmable coupons and lifecycle",
  },
  {
    useCase: "Private credit products",
    builtFor: "Credit funds",
    layers: "Tokenization · Compliance · Marketplace",
    outcome: "Broader distribution, controlled transfers",
  },
  {
    useCase: "Custody-first deployments",
    builtFor: "Institutions entering digital assets",
    layers: "Custody · Compliance",
    outcome: "Safekeeping before full tokenization",
  },
  {
    useCase: "Controlled marketplaces",
    builtFor: "Exchanges & platforms",
    layers: "Marketplace · Compliance · Settlement",
    outcome: "Eligible-investor secondary liquidity",
  },
  {
    useCase: "Institutional on-chain strategies",
    builtFor: "Treasuries & funds",
    layers: "Custody · Compliance · Strategies",
    outcome: "Compliant on-chain yield access",
  },
];

export const UseCaseLedger = () => {
  return (
    <section
      id="solutions"
      data-testid="usecase-section"
      className="hairline-t w-full bg-[#0E141B]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-28 md:py-36">
        <Reveal>
          <p className="eyebrow">Solutions</p>
          <h2 className="mt-6 max-w-[560px] text-3xl font-light leading-snug tracking-tight text-[#F2F4F7] md:text-4xl">
            Built for the products institutions actually run.
          </h2>
        </Reveal>

        {/* desktop ledger */}
        <div className="mt-16 hidden md:block" data-testid="usecase-ledger-desktop">
          <div className="hairline-b grid grid-cols-[1.2fr_1fr_1.3fr_1.2fr] gap-6 pb-4">
            {["Use case", "Built for", "Sereel layers", "Outcome"].map((h) => (
              <span key={h} className="text-xs font-medium uppercase tracking-[0.18em] text-[#667085]">
                {h}
              </span>
            ))}
          </div>
          {ROWS.map((row, i) => (
            <Reveal key={row.useCase} delay={i * 0.04}>
              <div
                data-testid={`usecase-row-${i}`}
                className="hairline-b group grid grid-cols-[1.2fr_1fr_1.3fr_1.2fr] gap-6 py-6 transition-colors duration-200 hover:bg-[rgba(26,161,108,0.04)]"
              >
                <span className="text-sm font-normal text-[#F2F4F7] group-hover:text-[#77DEAF]">
                  {row.useCase}
                </span>
                <span className="text-sm font-light text-[#98A2B3]">{row.builtFor}</span>
                <span className="text-sm font-light text-[#98A2B3]">{row.layers}</span>
                <span className="text-sm font-light text-[#98A2B3]">{row.outcome}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* mobile ledger */}
        <div className="mt-12 md:hidden" data-testid="usecase-ledger-mobile">
          {ROWS.map((row) => (
            <div key={row.useCase} className="hairline-b py-6">
              <h3 className="text-base font-normal text-[#F2F4F7]">{row.useCase}</h3>
              <dl className="mt-3 space-y-1.5">
                <div className="flex gap-2 text-sm font-light">
                  <dt className="w-24 shrink-0 text-[#667085]">Built for</dt>
                  <dd className="text-[#98A2B3]">{row.builtFor}</dd>
                </div>
                <div className="flex gap-2 text-sm font-light">
                  <dt className="w-24 shrink-0 text-[#667085]">Layers</dt>
                  <dd className="text-[#98A2B3]">{row.layers}</dd>
                </div>
                <div className="flex gap-2 text-sm font-light">
                  <dt className="w-24 shrink-0 text-[#667085]">Outcome</dt>
                  <dd className="text-[#98A2B3]">{row.outcome}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
