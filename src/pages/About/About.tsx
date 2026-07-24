import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const capabilities = [
  { index: "01", title: "Institutional by design", copy: "Custody controls, investor permissions, transfer rules, and audit-ready records are designed into every workflow." },
  { index: "02", title: "Issuer-owned", copy: "Institutions retain the asset, investor relationship, product economics, and obligations. Sereel provides the operating rails." },
  { index: "03", title: "Network flexible", copy: "Deploy financial products across public and private chains without rebuilding the control environment for every network." },
];

const infrastructure = [
  "Tokenization", "Custody", "Compliance", "Settlement",
  "Subscriptions", "Redemptions", "Marketplace", "Reporting",
  "ERC-3643", "CMTAT", "Public chains", "Private chains",
  "Wallet controls", "Audit trails", "RWA lending", "Strategy rails",
];

const journey = [
  { title: "Define", copy: "Product, jurisdiction, participants" },
  { title: "Control", copy: "Custody, compliance, permissions" },
  { title: "Issue", copy: "Tokenization and investor records" },
  { title: "Operate", copy: "Subscriptions, transfers, settlement" },
  { title: "Scale", copy: "Reporting, distribution, new markets" },
];

export const About = () => {
  const reduceMotion = useReducedMotion();
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 28 }, visible: { opacity: 1, y: 0 } };

  return (
    <main className="about-redesign">
      <motion.section className="about-overview wrap" initial="hidden" animate="visible" variants={reveal} transition={{ duration: .75 }}>
        <div className="about-overview-copy">
          <span className="about-label">Overview</span>
          <h1>Infrastructure for tokenized capital markets.</h1>
          <p>Sereel is the operating layer between financial institutions and on-chain markets. We bring issuance, custody, compliance, settlement, and controlled distribution into one institutional system.</p>
        </div>
        <div className="about-thesis-list">
          <article><span>01</span><div><h2>Mission</h2><p>Make programmable financial infrastructure usable by institutions without compromising control, compliance, or ownership.</p></div></article>
          <article><span>02</span><div><h2>Operating thesis</h2><p>Tokenization succeeds when the complete lifecycle—not only the asset—is programmable, auditable, and connected.</p></div></article>
        </div>
      </motion.section>

      <motion.section className="about-quote" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .35 }} variants={reveal} transition={{ duration: .8 }}>
        <div className="wrap">
          <img src="/images/Hero/glowing_seree_logo.svg" alt="" />
          <blockquote>“The future of capital markets is not simply on-chain. It is institutionally controlled, globally connected, and operational from end to end.”</blockquote>
          <span>Sereel operating principle</span>
        </div>
      </motion.section>

      <section className="about-principles wrap">
        <motion.div className="about-section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <span className="about-label">Principles</span>
          <h2>Where institutional discipline meets programmable infrastructure.</h2>
        </motion.div>
        <div className="about-principle-grid">
          {capabilities.map((item, index) => (
            <motion.article key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .5 }} variants={reveal} transition={{ delay: index * .08 }}>
              <span>{item.index}</span><h3>{item.title}</h3><p>{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-system">
        <div className="wrap">
          <motion.div className="about-section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <span className="about-label">The system</span>
            <h2>One infrastructure layer. Every critical control.</h2>
          </motion.div>
          <div className="about-system-grid">
            {infrastructure.map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, scale: reduceMotion ? 1 : .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .4, delay: (index % 4) * .04 }}>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-journey wrap">
        <motion.div className="about-section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <span className="about-label">Deployment</span>
          <h2>Supporting institutions at every stage of the journey.</h2>
          <p>From product architecture to ongoing market operations.</p>
        </motion.div>
        <div className="about-journey-steps">
          {journey.map((step, index) => (
            <motion.article key={step.title} initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }}>
              <span>0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-presence">
        <div className="wrap about-presence-inner">
          <div><span className="about-label">Presence</span><h2>Built across markets.</h2></div>
          <div className="about-location-list"><span>Chicago <small>USA</small></span><span>Nairobi <small>Kenya</small></span><span>Zürich <small>Switzerland</small></span></div>
        </div>
      </section>

      <section className="about-cta">
        <div className="wrap">
          <span className="about-label">Build with Sereel</span>
          <h2>Bring the full product lifecycle on-chain.</h2>
          <p>Design the custody, compliance, issuance, and settlement architecture before workflows harden.</p>
          <Link to="/contact" className="market-cta primary"><span>Schedule consultation</span></Link>
        </div>
        <div className="about-cta-signal" aria-hidden="true" />
      </section>
    </main>
  );
};
