import { useEffect,useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { HomeHero } from "./components/HomeHero";
import { UseCasesSection } from "./components/UseCasesSection";
import { ControlSystemSection } from "./components/ControlSystemSection";
import { WorkflowLedgerSection } from "./components/WorkflowLedgerSection";
import { ResponsibilitySection } from "./components/ResponsibilitySection";
import { StandardsProofSection } from "./components/StandardsProofSection";
import { HomeFinalCta } from "./components/HomeFinalCta";
import { segments,stackLayers } from "./homeData";

export const Home=()=>{
 const [activeSegment,setActiveSegment]=useState(0);
 const [activeLayer,setActiveLayer]=useState(0);
 const reduceMotion=useReducedMotion();
 const {scrollYProgress}=useScroll();
 const smoothProgress=useSpring(scrollYProgress,{stiffness:110,damping:28,mass:.35});

 useEffect(()=>{
  if(reduceMotion)return;

  const lenis=new Lenis({
   autoRaf:true,
   lerp:.085,
   smoothWheel:true,
   syncTouch:false,
   wheelMultiplier:.9,
  });

  return()=>lenis.destroy();
 },[reduceMotion]);

 useEffect(()=>{
  const syncFromHash=()=>{
   const hash=window.location.hash.replace("#","");
   const segmentIndex=segments.findIndex(item=>item.slug===hash);
   const layerIndex=stackLayers.findIndex(item=>item.slug===hash||item.aliases?.includes(hash));
   const scrollTo=(id:string)=>window.requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({block:"start"}));
   if(segmentIndex>=0){setActiveSegment(segmentIndex);scrollTo("served")}
   if(layerIndex>=0){setActiveLayer(layerIndex);scrollTo("platform")}
   if(hash==="standards")scrollTo("standards");
  };
  syncFromHash();
  window.addEventListener("hashchange",syncFromHash);
  return()=>window.removeEventListener("hashchange",syncFromHash);
 },[]);

 const selectSegment=(index:number)=>{setActiveSegment(index);window.history.replaceState(null,"",`#${segments[index].slug}`)};
 const selectLayer=(index:number)=>{setActiveLayer(index);window.history.replaceState(null,"",`#${stackLayers[index].slug}`)};

 return <main className="marketing-page">
  <div className="marketing-scroll-progress" aria-hidden="true">
   <span className="marketing-scroll-track"/>
   <motion.span
    className="marketing-scroll-value"
    style={{scaleY:reduceMotion?scrollYProgress:smoothProgress}}
   />
   <i className="marketing-scroll-start">01</i>
   <i className="marketing-scroll-end">07</i>
  </div>
  <HomeHero/>
  <UseCasesSection active={activeSegment} onSelect={selectSegment}/>
  <ControlSystemSection active={activeLayer} onSelect={selectLayer}/>
  <WorkflowLedgerSection/>
  <ResponsibilitySection/>
  <StandardsProofSection/>
  <HomeFinalCta/>
 </main>;
};
