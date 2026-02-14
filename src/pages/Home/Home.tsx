import { GradientProvider } from "../../utils/gradient";
import { SereelV4 } from "./SereelV4";
import { SEO } from "../../components/SEO/SEO";

export const Home = () => {
  return (
    <>
      <SEO
        description="Leading RWA tokenization platform and institutional tokenization infrastructure. Security token issuance, CMTA tokenization, enterprise digital asset custody, bond tokenization, and Canton Network tokenization solutions for institutional DeFi infrastructure."
        canonical="/"
      />
      <GradientProvider>
        <SereelV4 />
      </GradientProvider>
    </>
  );
};
