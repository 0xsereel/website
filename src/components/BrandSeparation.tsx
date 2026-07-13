import { Reveal } from "./Reveal";

const ISSUER_OWNS = ["Asset", "Disclosures", "Investor relationship", "Obligations", "Performance"];
const SEREEL_POWERS = [
  "Custody",
  "Tokenization",
  "Compliance controls",
  "Settlement",
  "Subscriptions / redemptions",
  "Controlled transfers",
];

export const BrandSeparation = () => {
  return (
    <section id="about" data-testid="separation-section" className="w-full">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-28 md:py-36">
        <Reveal>
          <p className="eyebrow">The operating model</p>
          <h2 className="mt-6 text-3xl font-light leading-snug tracking-tight text-[#F2F4F7] md:text-4xl">
            Your product. Your investors. Our&nbsp;rails.
          </h2>
          <p className="mt-6 max-w-[640px] text-sm font-light leading-relaxed text-[#98A2B3]">
            Issuers own the asset, disclosures, obligations, investor
            relationship, and performance. Sereel provides the infrastructure
            for custody, issuance, compliance, settlement, subscriptions,
            redemptions, and controlled transfers.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col md:flex-row">
          <Reveal className="md:w-1/2 md:pr-16" delay={0.05}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#667085]">
              Issuer owns
            </p>
            <ul data-testid="issuer-owns-list" className="mt-6">
              {ISSUER_OWNS.map((item) => (
                <li key={item} className="hairline-b flex items-center gap-4 py-4">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#667085]" />
                  <span className="text-sm font-light text-[#98A2B3]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="my-10 h-px w-full bg-[rgba(152,162,179,0.14)] md:my-0 md:h-auto md:w-px" />

          <Reveal className="md:w-1/2 md:pl-16" delay={0.12}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#77DEAF]">
              Sereel powers
            </p>
            <ul data-testid="sereel-powers-list" className="mt-6">
              {SEREEL_POWERS.map((item) => (
                <li key={item} className="hairline-b flex items-center gap-4 py-4">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#1AA16C]" />
                  <span className="text-sm font-light text-[#F2F4F7]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
