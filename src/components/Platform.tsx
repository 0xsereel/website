import { Reveal } from "./Reveal";

const LAYERS = [
  { name: "Custody", desc: "Institution-grade safekeeping for digital assets and tokenized instruments." },
  { name: "Compliance", desc: "Investor eligibility and transfer rules, enforced at the asset level." },
  { name: "Tokenization", desc: "Issue tokenized financial products on compliant standards." },
  { name: "Settlement", desc: "Faster settlement with controlled, auditable finality." },
  { name: "Marketplace", desc: "Controlled orderbook and secondary market workflows." },
  { name: "On-chain strategies", desc: "Compliant access to on-chain and DeFi strategies where appropriate." },
];

export const Platform = () => {
  return (
    <section id="platform" data-testid="platform-section" className="w-full">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-14 px-6 py-28 md:flex-row md:gap-20 md:py-36">
        <div className="md:w-[38%]">
          <div className="md:sticky md:top-32">
            <Reveal>
              <p className="eyebrow">Platform</p>
              <h2 className="mt-6 text-3xl font-light leading-snug tracking-tight text-[#F2F4F7] md:text-4xl">
                One infrastructure layer. Deploy only what you need.
              </h2>
              <p className="mt-6 max-w-[380px] text-sm font-light leading-relaxed text-[#98A2B3]">
                Each layer runs standalone or as part of the full stack.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="md:w-[62%]">
          {LAYERS.map((layer, i) => (
            <Reveal key={layer.name} delay={i * 0.05}>
              <div
                data-testid={`platform-layer-${i}`}
                className="group hairline-b flex items-baseline gap-6 py-7 first:pt-0 md:gap-10"
              >
                <span className="w-8 shrink-0 text-xs font-light text-[#667085]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-normal text-[#F2F4F7] transition-colors duration-200 group-hover:text-[#77DEAF]">
                    {layer.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-[#98A2B3]">
                    {layer.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
