import { V4Layout } from "../../components/V4/V4Layout";
import AboutHero from "../../components/About/AboutHero";
import { SEO } from "../../components/SEO/SEO";

export const About = () => {
  return (
    <>
      <SEO
        title="About Sereel | Institutional Infrastructure Across Global Markets"
        description="Sereel connects underserved and well-served global markets with institutional-grade tokenization, custody, compliance, and settlement infrastructure."
        keywords={['RWA tokenization platform', 'institutional tokenization infrastructure', 'security token issuance', 'CMTA tokenization', 'enterprise digital asset custody', 'bond tokenization platform', 'Canton Network tokenization', 'institutional DeFi infrastructure', 'multi-chain tokenization', 'tokenized securities platform']}
        canonical="/about"
      />
      <V4Layout>
        <AboutHero />
      </V4Layout>
    </>
  );
};
