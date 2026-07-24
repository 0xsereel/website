import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { issuerResponsibilities, sereelResponsibilities } from "../homeData";

const BoundaryItems = ({ items }: { items: string[] }) => (
  <div className="boundary-card-items">
    {items.map((item, index) => (
      <span key={item}>
        <i>{String(index + 1).padStart(2, "0")}</i>
        <strong>{item}</strong>
      </span>
    ))}
  </div>
);

const BoundaryIllustration = ({ variant }: { variant: "issuer" | "sereel" }) => (
  <svg
    className={`boundary-illustration boundary-illustration-${variant}`}
    viewBox="0 0 340 150"
    fill="none"
    aria-hidden="true"
  >
    {variant === "issuer" ? (
      <>
        <path className="bi-route" d="M24 75h66M250 75h66M170 19v25M170 106v25" />
        <rect className="bi-frame" x="92" y="32" width="156" height="86" rx="12" />
        <path className="bi-document" d="M126 52h56l20 20v28h-76zM182 52v21h20M142 76h26M142 90h42" />
        <path className="bi-owner-key" d="M216 88a11 11 0 1 1 8 10l-8 8h-8v-8h-8v-8h7" />
        <g className="bi-investor investor-a"><rect x="12" y="61" width="24" height="28" rx="5" /><circle cx="24" cy="69" r="4" /><path d="M18 82c2-5 10-5 12 0" /></g>
        <g className="bi-investor investor-b"><rect x="304" y="61" width="24" height="28" rx="5" /><circle cx="316" cy="69" r="4" /><path d="M310 82c2-5 10-5 12 0" /></g>
        <g className="bi-investor investor-c"><rect x="158" y="7" width="24" height="24" rx="5" /><circle cx="170" cy="15" r="3" /><path d="M165 24c2-4 8-4 10 0" /></g>
        <circle className="bi-packet issuer-packet-a" cx="24" cy="75" r="4" />
        <circle className="bi-packet issuer-packet-b" cx="170" cy="19" r="4" />
      </>
    ) : (
      <>
        <path className="bi-route" d="M20 75h74M246 75h74M170 16v28M170 106v28M72 34l34 24M268 34l-34 24M72 116l34-24M268 116l-34-24" />
        <rect className="bi-frame" x="104" y="35" width="132" height="80" rx="14" />
        <path className="bi-engine" d="m170 48 40 18v28l-40 18-40-18V66zM146 75h48M146 88h48M158 62v40M182 62v40" />
        <path className="bi-check" d="m155 80 10 10 22-25" />
        <g className="bi-module"><rect x="8" y="62" width="30" height="26" rx="5" /><path d="M15 75h16M23 68v14" /></g>
        <g className="bi-module"><rect x="302" y="62" width="30" height="26" rx="5" /><path d="m310 75 6 6 10-13" /></g>
        <g className="bi-module"><rect x="157" y="3" width="26" height="24" rx="5" /><path d="M164 11h12M164 18h8" /></g>
        <g className="bi-module"><rect x="157" y="123" width="26" height="24" rx="5" /><path d="M164 131h12M164 138h12" /></g>
        <circle className="bi-packet sereel-packet-a" cx="20" cy="75" r="4" />
        <circle className="bi-packet sereel-packet-b" cx="170" cy="16" r="4" />
        <circle className="bi-packet sereel-packet-c" cx="320" cy="75" r="4" />
      </>
    )}
  </svg>
);

export const ResponsibilitySection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const issuerScale = useTransform(scrollYProgress, [0.28, 0.62], [1, 0.955]);
  const issuerY = useTransform(scrollYProgress, [0.28, 0.62], [0, -14]);
  const issuerOpacity = useTransform(scrollYProgress, [0.34, 0.68], [1, 0.72]);

  return (
    <section
      ref={sectionRef}
      className="marketing-section responsibility-section boundary-section boundary-stack-section"
    >
      <div className="boundary-stack-atmosphere" aria-hidden="true">
        <span /><span /><span />
      </div>

      <div className="wrap boundary-stack-layout">
        <header className="boundary-stack-heading">
          <motion.h2
            initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            Your asset. Your investors. Sereel infrastructure.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Sereel provides the infrastructure layer for compliant issuance,
            custody, settlement, investor controls, subscriptions, redemptions,
            and controlled transfers. Issuers remain responsible for the asset,
            offering documents, disclosures, investor communications,
            obligations, product economics, and asset performance. Sereel does
            not originate, underwrite, recommend, or guarantee issuer assets or
            returns.
          </motion.p>
        </header>

        <div className="boundary-card-stack">
          <motion.article
            className="boundary-stack-card boundary-issuer-card"
            style={
              reduceMotion
                ? undefined
                : { scale: issuerScale, y: issuerY, opacity: issuerOpacity }
            }
          >
            <div className="boundary-card-topline">
              <span>01 / Ownership domain</span>
            </div>
            <div className="boundary-card-body">
              <div className="boundary-card-title">
                <span>Issuer mandate</span>
                <h3>The institution retains ownership.</h3>
                <p>Asset decisions, investor relationships, disclosures, and product obligations stay with the issuer.</p>
                <BoundaryIllustration variant="issuer" />
              </div>
              <BoundaryItems items={issuerResponsibilities} />
            </div>
            <div className="boundary-card-rail" aria-hidden="true">
              <i /><i /><i />
            </div>
          </motion.article>

          <motion.article
            className="boundary-stack-card boundary-sereel-card"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="boundary-card-topline">
              <span>02 / Operating domain</span>
            </div>
            <div className="boundary-card-body">
              <div className="boundary-card-title">
                <span>Sereel control layer</span>
                <h3>Infrastructure executes the mandate.</h3>
                <p>Programmable controls coordinate issuance, custody, compliance, settlement, and lifecycle operations.</p>
                <BoundaryIllustration variant="sereel" />
              </div>
              <BoundaryItems items={sereelResponsibilities} />
            </div>
            <div className="boundary-execution-track" aria-hidden="true">
              <span>Policy verified</span>
              <div><i /><i /><i /></div>
              <span>Execution ready</span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
