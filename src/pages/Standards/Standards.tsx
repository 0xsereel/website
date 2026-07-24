import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const standards = [
  { id: "01", code: "CMTAT", name: "Capital Markets & Technology Association", copy: "A Swiss capital-markets token framework for securities-style products, issuer controls, and recognized legal operating models.", controls: ["Transfer restrictions", "Snapshots and freeze", "Issuer controls", "Audited implementation"] },
  { id: "02", code: "ERC-3643", name: "Permissioned Token Standard / T-REX", copy: "An EVM standard for compliant assets with identity, eligibility, and modular transfer controls enforced at the contract layer.", controls: ["KYC and eligibility", "Jurisdiction rules", "Identity portability", "Recovery and forced transfer"] },
];
const networks = [["EVM-compatible chains","EVM"],["Solana","SVM"],["Canton Network","Privacy"],["Bitcoin","BTC"],["IOTA","DAG"],["ZKsync Prividium","Private rollup"],["Private environments","Permissioned"],["Public networks","Open"]];
const jurisdictions = [["Kenya VASP Act","KE"],["Botswana VASP Act","BW"],["Rwanda VASP Act","RW"],["Regulation S","Non-US"],["Regulation D","US"],["MiCA","EU"],["Swiss DLT","CH"],["MAS Guidelines","SG"]];

const StandardIllustration = ({ type }: { type: "CMTAT" | "ERC-3643" }) => (
  <svg className={`standard-card-art art-${type.toLowerCase()}`} viewBox="0 0 480 280" fill="none" aria-hidden="true">
    {type === "CMTAT" ? <>
      <g className="cmtat-document"><rect x="157" y="48" width="166" height="184" rx="12"/><path d="M184 83h112M184 105h78M184 151h112M184 173h92M184 195h55"/><circle cx="281" cy="192" r="22"/><path d="m270 193 8 8 15-20"/></g>
      <path className="standard-route" d="M34 140h72l51-40M323 100l51 40h72"/>
      <g className="standard-terminal"><rect x="31" y="122" width="36" height="36" rx="7"/><path d="M41 134h16M41 145h11"/><rect x="413" y="122" width="36" height="36" rx="7"/><path d="m422 140 7 7 12-15"/></g>
      <circle className="standard-packet cmtat-packet" cx="34" cy="140" r="6"/>
    </> : <>
      <path className="standard-route" d="M28 140h82c43 0 45-57 88-57h84c43 0 45 57 88 57h82"/>
      <g className="identity-node"><circle cx="114" cy="140" r="38"/><circle cx="114" cy="129" r="10"/><path d="M94 158c7-19 33-19 40 0"/></g>
      <g className="permission-core"><path d="m240 54 66 29v48c0 44-27 72-66 94-39-22-66-50-66-94V83l66-29Z"/><path d="m211 137 20 20 42-48"/></g>
      <g className="asset-node"><circle cx="366" cy="140" r="38"/><path d="M346 132h40M346 143h40M346 154h25"/></g>
      <circle className="standard-packet erc-packet" cx="28" cy="140" r="6"/>
    </>}
  </svg>
);

export const Standards = () => {
  const reduceMotion = useReducedMotion();
  const reveal = { hidden:{ opacity:0,y:reduceMotion?0:26 }, visible:{ opacity:1,y:0 } };
  return <main className="resource-page standards-page">
    <section className="resource-hero wrap"><motion.div initial="hidden" animate="visible" variants={reveal}><span className="resource-kicker">Standards & interoperability</span><h1>Recognized where it matters.<br/><em>Invisible in operation.</em></h1></motion.div><motion.p initial="hidden" animate="visible" variants={reveal} transition={{delay:.12}}>Sereel brings recognized token standards, compliance frameworks, and network support into one deployment architecture.</motion.p></section>
    <section className="standards-register wrap">
      <div className="standards-card-intro"><span>Core protocols</span><h2>Standards translated into operating controls.</h2><p>Each framework becomes an enforceable part of the product architecture—not a label added after deployment.</p></div>
      <div className="standard-card-grid">
      {standards.map((standard,index)=><motion.article className="standard-card" key={standard.code} initial="hidden" whileInView="visible" viewport={{once:true,amount:.25}} variants={reveal} transition={{delay:index*.08}}>
        <div className="standard-card-visual"><StandardIllustration type={standard.code as "CMTAT" | "ERC-3643"}/><span>Core standard</span></div>
        <div className="standard-card-copy"><div className="standard-card-heading"><div><h2>{standard.code}</h2><span>{standard.name}</span></div><i>Verified rail</i></div><p>{standard.copy}</p><ul>{standard.controls.map(control=><li key={control}>{control}</li>)}</ul></div>
      </motion.article>)}
      </div>
    </section>
    <section className="standards-matrix"><div className="wrap"><div className="resource-section-head"><span>Deployment coverage</span><h2>One control model.<br/>Multiple environments.</h2></div><div className="standards-matrix-grid"><div><h3>Networks</h3>{networks.map(([name,meta])=><p key={name}><span>{name}</span><small>{meta}</small></p>)}</div><div><h3>Jurisdictions</h3>{jurisdictions.map(([name,meta])=><p key={name}><span>{name}</span><small>{meta}</small></p>)}</div></div></div></section>
    <section className="resource-cta wrap"><div><span>Architecture review</span><h2>Choose standards around the product—not the other way around.</h2></div><Link to="/contact">Discuss a deployment <i>↗</i></Link></section>
  </main>;
};
