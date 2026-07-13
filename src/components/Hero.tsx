import { ButtonLink } from "./ButtonLink";
import { HeroRailCore } from "./HeroRailCore";
import { Reveal } from "./Reveal";
import { CONTACT_URL } from "../lib/config";

const CAPABILITIES = ["Issue", "Custody", "Control", "Settle", "Distribute", "Report"];

export const Hero = () => {
  return (
    <section data-testid="hero-section" className="w-full pt-[72px]">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-12 pt-20 pb-16 md:flex-row md:gap-8 md:pt-28 md:pb-24">
          <div className="w-full md:w-[54%]">
            <Reveal>
              <p className="eyebrow" data-testid="hero-eyebrow">
                Infrastructure for tokenized capital markets
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                data-testid="hero-headline"
                className="mt-6 text-[2.5rem] leading-[1.12] font-light tracking-tight text-[#F2F4F7] md:text-[3.4rem]"
              >
                The rails behind tokenized capital&nbsp;markets.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p
                data-testid="hero-subheadline"
                className="mt-7 max-w-[540px] text-base font-light leading-relaxed text-[#98A2B3]"
              >
                Sereel powers issuer-owned financial products with custody,
                compliance, tokenization, settlement, and controlled market
                infrastructure.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <ButtonLink href={CONTACT_URL} testId="hero-cta-primary">
                  Schedule consultation
                </ButtonLink>
                <ButtonLink href="#platform" variant="secondary" testId="hero-cta-secondary">
                  View platform
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <p
                data-testid="hero-trust-line"
                className="mt-9 text-xs font-normal tracking-wide text-[#667085]"
              >
                Issuer-owned products. Sereel-powered rails.
              </p>
            </Reveal>
          </div>

          <div className="w-full md:w-[46%]">
            <Reveal delay={0.2}>
              <HeroRailCore />
            </Reveal>
          </div>
        </div>

        <div
          data-testid="hero-capability-strip"
          className="hairline-t no-scrollbar flex items-center gap-0 overflow-x-auto py-6"
        >
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap}
              className={`flex shrink-0 items-center px-6 first:pl-0 md:flex-1 md:justify-center ${
                i > 0 ? "border-l border-[rgba(152,162,179,0.14)]" : ""
              }`}
            >
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#98A2B3]">
                {cap}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
