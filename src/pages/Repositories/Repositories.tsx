import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const papers = [
  { title:"Ethereum Whitepaper", link:"https://ethereum.org/en/whitepaper/", description:"The foundational specification for programmable blockchain and smart-contract applications.", category:"Blockchain Fundamentals", source:"Ethereum Foundation", year:"2013" },
  { title:"A Comprehensive Review of the TLSNotary Protocol", link:"https://arxiv.org/abs/2409.17670", description:"Analysis of TLS-based data verification systems and their role in verifiable asset data.", category:"Zero-Knowledge Proofs", source:"arXiv", year:"2024" },
  { title:"Programmable Cryptography", link:"https://0xparc.org/blog/programmable-cryptography-1", description:"An exploration of cryptography as programmable infrastructure for new coordination systems.", category:"Cryptographic Systems", source:"0xPARC", year:"2023" },
  { title:"The God Protocols", link:"https://nakamotoinstitute.org/library/the-god-protocols/", description:"Nick Szabo’s seminal examination of trusted third parties and trust-minimized systems.", category:"Cryptographic Theory", source:"Nakamoto Institute", year:"1997" },
  { title:"Web Data Authentication with Garble-Then-Prove", link:"https://eprint.iacr.org/2023/964", description:"Cryptographic techniques for authenticating web data inside privacy-preserving proofs.", category:"Zero-Knowledge Proofs", source:"IACR ePrint", year:"2023" },
];
const categories = ["All",...Array.from(new Set(papers.map(p=>p.category)))];

export const Repositories = () => {
  const [active,setActive]=useState("All");
  const reduceMotion=useReducedMotion();
  const filtered=active==="All"?papers:papers.filter(p=>p.category===active);
  return <main className="resource-page repository-page">
    <section className="resource-hero wrap"><div><span className="resource-kicker">Research repository</span><h1>Ideas behind the<br/><em>infrastructure.</em></h1></div><p>A curated index of protocols, papers, and cryptographic systems informing institutional on-chain markets.</p></section>
    <section className="repository-comparison">
      <div className="wrap repository-comparison-inner">
      <motion.div className="repository-section-intro" initial={{opacity:0,y:reduceMotion?0:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <span>Research index</span>
        <h2>Foundational thinking, organized.</h2>
        <p>Explore the protocols, cryptographic systems, and technical research that inform how Sereel approaches institutional market infrastructure.</p>
      </motion.div>
      <div className="repository-table-shell">
      <div className="repository-filter" aria-label="Research categories">{categories.map(category=><button key={category} className={active===category?"active":""} onClick={()=>setActive(category)}>{category}<span>{papers.filter(p=>category==="All"||p.category===category).length}</span></button>)}</div>
      <div className="repository-list"><div className="repository-list-head"><span>Year</span><span>Publication</span><span>Research area</span><span>Source</span></div><AnimatePresence mode="popLayout">{filtered.map(paper=><motion.a layout key={paper.title} href={paper.link} target="_blank" rel="noopener noreferrer" initial={{opacity:0,y:reduceMotion?0:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduceMotion?0:-8}}>
        <span className="repository-year">{paper.year}</span><div><h2>{paper.title}</h2><p>{paper.description}</p></div><span className="repository-category">{paper.category}</span><span className="repository-source">{paper.source}<ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.7} /></span>
      </motion.a>)}</AnimatePresence></div>
      </div>
      </div>
    </section>
    <section className="resource-cta wrap"><div><span>Sereel perspectives</span><h2>Research translated into market infrastructure.</h2></div><Link to="/blog">Read our articles <i>↗</i></Link></section>
  </main>;
};
