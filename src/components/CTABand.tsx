import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";
import { CONTACT_URL } from "../lib/config";

export const CTABand = () => {
  return (
    <section data-testid="cta-band" className="w-full">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 py-28 text-center md:py-36">
        <Reveal>
          <h2 className="max-w-[640px] text-3xl font-light leading-snug tracking-tight text-[#F2F4F7] md:text-4xl">
            Build your next product on institutional rails.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10">
            <ButtonLink href={CONTACT_URL} testId="cta-band-button">
              Schedule consultation
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
