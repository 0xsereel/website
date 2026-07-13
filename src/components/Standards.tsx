import { Reveal } from "./Reveal";

const STANDARDS = [
  { name: "ERC-3643", desc: "Permissioned token standard for regulated assets." },
  { name: "CMTAT", desc: "Swiss-grade framework for tokenized securities." },
  { name: "ACMS", desc: "African capital markets standards alignment." },
  { name: "Regional VASP frameworks", desc: "Licensing-aware operations by jurisdiction." },
];

export const Standards = () => {
  return (
    <section
      id="standards"
      data-testid="standards-section"
      className="hairline-t w-full bg-[#0E141B]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Standards</p>
          <h2 className="mt-6 text-3xl font-light leading-snug tracking-tight text-[#F2F4F7] md:text-4xl">
            Standards where they matter.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STANDARDS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <div
                data-testid={`standard-item-${i}`}
                className="border-l border-[rgba(152,162,179,0.26)] pl-5"
              >
                <h3 className="text-sm font-medium text-[#F2F4F7]">{s.name}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-[#98A2B3]">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
