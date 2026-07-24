import { motion, useReducedMotion } from "framer-motion";
import { stackLayers } from "../homeData";

type ControlSystemSectionProps = {
  active: number;
  onSelect: (index: number) => void;
};

const ControlGlyph = ({ index }: { index: number }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.35 };

  return (
    <svg viewBox="0 0 240 120" aria-hidden="true">
      {index === 0 && (
        <g {...common}>
          <rect x="74" y="27" width="92" height="66" rx="9" />
          <path d="M91 27v-8h58v8M94 49h52M94 64h32M94 79h44" />
          <circle className="control-glyph-pulse" cx="151" cy="64" r="8" />
        </g>
      )}
      {index === 1 && (
        <g {...common}>
          <path d="m120 19 48 19v27c0 24-17 36-48 45-31-9-48-21-48-45V38z" />
          <path className="control-glyph-check" d="m96 62 16 16 34-37" />
          <circle cx="120" cy="62" r="31" strokeDasharray="3 5" />
        </g>
      )}
      {index === 2 && (
        <g {...common}>
          <path d="m120 18 47 24v40l-47 23-47-23V42zM73 42l47 24 47-24M120 66v39" />
          <path className="control-glyph-scan" d="M58 60h124" />
          <circle cx="120" cy="66" r="8" />
        </g>
      )}
      {index === 3 && (
        <g {...common}>
          <circle cx="75" cy="60" r="27" />
          <circle cx="165" cy="60" r="27" />
          <path d="M102 48h49l-10-10M138 72H89l10 10" />
          <circle className="control-glyph-token" cx="120" cy="48" r="6" />
        </g>
      )}
      {index === 4 && (
        <g {...common}>
          <path d="M48 87h144M58 87V53h32v34M104 87V35h32v52M150 87V62h32v25" />
          <path className="control-glyph-chart" d="m58 43 36-17 31 18 57-29" />
          <circle cx="58" cy="43" r="4" />
          <circle cx="94" cy="26" r="4" />
          <circle cx="125" cy="44" r="4" />
          <circle cx="182" cy="15" r="4" />
        </g>
      )}
      {index === 5 && (
        <g {...common}>
          <rect x="51" y="34" width="59" height="53" rx="7" />
          <rect x="130" y="34" width="59" height="53" rx="7" />
          <path d="M70 51h21M70 64h21M149 51h21M149 64h21M110 60h20" />
          <circle className="control-glyph-token" cx="120" cy="60" r="7" />
        </g>
      )}
      {index === 6 && (
        <g {...common}>
          <circle cx="120" cy="60" r="36" />
          <circle cx="120" cy="60" r="19" />
          <path d="M120 9v19M120 92v19M69 60h19M152 60h19M84 24l14 14M142 82l14 14M156 24l-14 14M98 82 84 96" />
          <path className="control-glyph-radar" d="M120 60 157 27" />
        </g>
      )}
    </svg>
  );
};

export const ControlSystemSection = ({
  active,
  onSelect,
}: ControlSystemSectionProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="marketing-section stack-section control-matrix-section" id="platform">
      <div className="wrap">
        <motion.div
          className="control-matrix"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.06 } } }}
        >
          <motion.header
            className="control-matrix-intro"
            variants={{
              hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="panel-label">Sereel operating layer</span>
            <h2>The control system behind tokenized products.</h2>
            <p>
              One connected operating layer for custody, compliance, issuance,
              settlement, liquidity, lending, and strategy controls.
            </p>
            <span className="control-matrix-count">07 integrated controls</span>
          </motion.header>

          {stackLayers.map((layer, index) => (
            <motion.button
              type="button"
              id={layer.slug}
              key={layer.slug}
              className={`control-matrix-card ${active === index ? "is-active" : ""}`}
              aria-pressed={active === index}
              onClick={() => onSelect(index)}
              onFocus={() => onSelect(index)}
              onMouseEnter={() => onSelect(index)}
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="control-card-copy">
                <strong>{layer.title}</strong>
                <span>{layer.detail}</span>
              </span>
              <span className="control-card-action" aria-hidden="true">
                <svg viewBox="0 0 20 20">
                  <path d="M4 10h11M11 6l4 4-4 4" />
                </svg>
              </span>
              <span className="control-card-visual" aria-hidden="true">
                <ControlGlyph index={index} />
                <span className="control-card-register">
                  <i />
                  <span>{layer.record}</span>
                  <em>Live</em>
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
