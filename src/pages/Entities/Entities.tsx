import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Building2 } from "lucide-react";

const entities = [
  {
    city: "Chicago",
    country: "United States",
    region: "Americas",
    name: "Sereel Technologies, Inc.",
    code: "US / IL",
    image: "/images/entities/Chicago.jpg",
  },
  {
    city: "Gaborone",
    country: "Botswana",
    region: "Southern Africa",
    name: "Sereel Technologies Botswana",
    code: "BW / GA",
    image: "/images/entities/Gaborone.jpg",
  },
  {
    city: "Nairobi",
    country: "Kenya",
    region: "East Africa",
    name: "Sereel Technologies Kenya",
    code: "KE / NRB",
    image: "/images/entities/Nairobi.jpg",
  },
];

export const Entities = () => {
  const reduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="entities-v2">
      <section className="entities-v2-hero">
        <div className="wrap entities-v2-hero-inner">
          <motion.div
            className="entities-v2-heading"
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: .8, ease: [.16, 1, .3, 1] }}
          >
            <h1>Built globally.<br /><em>Operated locally.</em></h1>
          </motion.div>

          <motion.aside
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: .75, delay: .14 }}
          >
            <p>Sereel maintains a growing international presence designed to support institutions across markets and jurisdictions.</p>
            <a href="#entity-locations" aria-label="Explore Sereel entities">
              <span>Explore entities</span><ArrowDown size={16} />
            </a>
          </motion.aside>
        </div>
        <div className="entities-v2-word" aria-hidden="true">SEREEL</div>
      </section>

      <section className="entities-v2-presence" id="entity-locations">
        <div className="wrap">
          <div className="entities-v2-section-head">
            <span>Presence / 03</span>
            <p>One operating system across three strategic locations.</p>
          </div>

          <div className="entities-v2-cards">
            {entities.map((entity, index) => (
              <motion.article
                key={entity.city}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .3 }}
                variants={reveal}
                transition={{ duration: .65, delay: index * .09 }}
              >
                <div className="entities-v2-card-image" aria-hidden="true">
                  <img src={entity.image} alt="" />
                </div>
                <div className="entities-v2-card-top">
                  <span>{entity.code.split(" / ")[0]}</span>
                  <span>{entity.region}</span>
                </div>
                <div className="entities-v2-card-copy">
                  <span>{entity.region}</span>
                  <h2>{entity.city}</h2>
                  <p>{entity.country}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="entities-v2-registry">
        <div className="wrap entities-v2-registry-inner">
          <div className="entities-v2-registry-title">
            <h2>A clear structure for a global operation.</h2>
          </div>
          <div className="entities-v2-rows">
            {entities.map((entity) => (
              <motion.div
                key={entity.name}
                initial={{ opacity: 0, x: reduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .5 }}
                transition={{ duration: .55 }}
              >
                <span className="entities-v2-jurisdiction">{entity.code.split(" / ")[0]}</span>
                <Building2 aria-hidden="true" />
                <strong>{entity.name}</strong>
                <small>{entity.city}, {entity.country}</small>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="entities-v2-note">
        <div className="wrap">
          <span>Jurisdictional scope</span>
          <p>Sereel provides technology infrastructure. Entity availability, services, and contracting arrangements may vary by jurisdiction.</p>
        </div>
      </section>
    </main>
  );
};
