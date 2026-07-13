import { BrandSeparation } from "../components/BrandSeparation";
import { CTABand } from "../components/CTABand";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Platform } from "../components/Platform";
import { ProofStrip } from "../components/ProofStrip";
import { Standards } from "../components/Standards";
import { UseCaseLedger } from "../components/UseCaseLedger";

export const Landing = () => {
  return (
    <main className="w-full bg-[#0A0E13]">
      <Header />
      <Hero />
      <ProofStrip />
      <Platform />
      <UseCaseLedger />
      <BrandSeparation />
      <Standards />
      <CTABand />
      <Footer />
    </main>
  );
};
