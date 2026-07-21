import { useEffect,useState } from "react";
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
  <HomeHero/>
  <UseCasesSection active={activeSegment} onSelect={selectSegment}/>
  <ControlSystemSection active={activeLayer} onSelect={selectLayer}/>
  <WorkflowLedgerSection/>
  <ResponsibilitySection/>
  <StandardsProofSection/>
  <HomeFinalCta/>
 </main>;
};
