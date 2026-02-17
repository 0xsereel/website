import { GradientProvider } from "../../utils/gradient";
import { Sereel } from "./Sereel";
import { SEO } from "../../components/SEO/SEO";

export const Home = () => {
  return (
    <>
      <SEO
        description="Sereel provides institutional-grade tokenization infrastructure for asset managers, banks, exchanges, and family offices. CMTA-compliant. Multi-chain. Production-ready."
        keywords={[
          "RWA tokenization platform",
          "Institutional tokenization infrastructure",
          "Security token issuance",
          "CMTA tokenization",
          "Enterprise digital asset custody",
          "Bond tokenization platform",
          "Regulation S/D token issuance",
          "Multi-chain tokenization",
          "Canton Network tokenization",
          "Institutional DeFi infrastructure",
          "Real world asset tokenization",
          "Private credit tokenization",
          "Treasury tokenization",
          "Stablecoin issuance platform",
          "Tokenized securities platform",
        ]}
        canonical="/"
      />
      <GradientProvider>
        <Sereel />
      </GradientProvider>
    </>
  );
};
