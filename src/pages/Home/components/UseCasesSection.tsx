import { useRef } from "react";
import { motion,useReducedMotion } from "framer-motion";
import { ArrowLeft,ArrowRight } from "lucide-react";
import { segments } from "../homeData";
import { UseCaseIllustration } from "./UseCaseIllustration";

export const UseCasesSection=({active,onSelect}:{active:number;onSelect:(index:number)=>void})=>{
 const rail=useRef<HTMLDivElement|null>(null),reduceMotion=useReducedMotion();
 const scroll=(direction:number)=>rail.current?.scrollBy({left:direction*Math.min(520,window.innerWidth*.72),behavior:"smooth"});
 return <motion.section className="marketing-section served-section wrap" id="served" initial={{opacity:0,y:reduceMotion?0:34}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.14}} transition={{duration:.8}}>
  <div className="use-case-section-head"><div className="section-copy compact"><h2>Built for every side of the market.</h2><p>Purpose-built infrastructure for institutions issuing, holding, distributing, and operating tokenized financial products.</p></div><div className="use-case-rail-controls" aria-label="Scroll use cases"><button type="button" onClick={()=>scroll(-1)} aria-label="Previous use cases"><ArrowLeft size={17}/></button><button type="button" onClick={()=>scroll(1)} aria-label="Next use cases"><ArrowRight size={17}/></button></div></div>
  <div className="use-case-card-rail" ref={rail} aria-label="Sereel use cases">{segments.map((item,index)=><motion.article key={item.name} id={item.slug} className={`use-case-card ${active===index?"active":""}`} onClick={()=>onSelect(index)} initial={{opacity:0,y:reduceMotion?0:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.55,delay:(index%3)*.05}}><div className="use-case-card-art"><UseCaseIllustration index={index}/></div><div className="use-case-card-body"><h3>{item.name}</h3><p>{item.copy}</p><div className="use-case-card-layers">{item.layers.map(value=><span key={value}>{value}</span>)}</div></div></motion.article>)}</div>
 </motion.section>;
};
