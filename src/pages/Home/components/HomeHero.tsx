import { Link } from "react-router-dom";
import { motion,useMotionValue,useReducedMotion,useScroll,useSpring,useTransform } from "framer-motion";

export const HomeHero=()=>{
 const reduceMotion=useReducedMotion(),pointerX=useMotionValue(0),pointerY=useMotionValue(0);
 const smoothX=useSpring(pointerX,{stiffness:55,damping:22}),smoothY=useSpring(pointerY,{stiffness:55,damping:22});
 const {scrollYProgress}=useScroll(),heroLift=useTransform(scrollYProgress,[0,.18],[0,-90]),heroFade=useTransform(scrollYProgress,[0,.16],[1,.15]);
 const reveal={hidden:{opacity:0,y:reduceMotion?0:34},visible:{opacity:1,y:0}};
 return <motion.section className="marketing-hero wrap" aria-labelledby="home-hero-title" onPointerMove={e=>{if(!reduceMotion){pointerX.set((e.clientX/window.innerWidth-.5)*34);pointerY.set((e.clientY/window.innerHeight-.5)*34)}}}>
  <div className="hero-motion-field" aria-hidden="true"><span className="hero-orbit orbit-one"/><span className="hero-orbit orbit-two"/><span className="hero-signal signal-one"/><span className="hero-signal signal-two"/></div>
  <motion.div className="hero-copy" style={reduceMotion?undefined:{y:heroLift,opacity:heroFade}}><h1 id="home-hero-title" aria-label="The rails behind tokenized capital markets.">{"The rails behind tokenized capital markets.".split(" ").map((word,index)=><motion.span className="hero-word" aria-hidden="true" key={word} initial={{y:reduceMotion?"0%":"115%",opacity:0}} animate={{y:"0%",opacity:1}} transition={{duration:.85,delay:.08+index*.055,ease:[.16,1,.3,1]}}>{word}&nbsp;</motion.span>)}</h1>
   <motion.p className="hero-subhead" initial="hidden" animate="visible" variants={reveal} transition={{duration:.75,delay:.48}}>Tokenization, custody, compliance, settlement, and market rails for issuer-owned financial products on public and private chains.</motion.p>
   <motion.div className="hero-actions" initial="hidden" animate="visible" variants={reveal} transition={{duration:.75,delay:.6}}><Link className="market-cta primary" to="/contact"><span>Schedule consultation</span></Link></motion.div>
  </motion.div>
  <motion.div className="logo-stage hero-logo-stage" aria-hidden="true" initial={{opacity:0,scale:reduceMotion?1:.82,rotate:reduceMotion?0:-5}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1.4,delay:.18,ease:[.16,1,.3,1]}} style={reduceMotion?undefined:{x:smoothX,y:smoothY}}><img src="/images/Hero/glowing_seree_logo_expanded.svg" alt=""/></motion.div>
 </motion.section>;
};
