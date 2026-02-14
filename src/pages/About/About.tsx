import { V4Layout } from "../../components/V4/V4Layout";
import AboutHero from "../../components/About/AboutHero";
import { SEO } from "../../components/SEO/SEO";

export const About = () => {
  return (
    <>
      <SEO
        title="About Sereel - RWA Tokenization Platform | Institutional Tokenization Infrastructure"
        description="Learn about Sereel's RWA tokenization platform and institutional tokenization infrastructure. Leading provider of security token issuance, CMTA tokenization, enterprise digital asset custody, bond tokenization platform, and Canton Network tokenization for institutional DeFi infrastructure."
        keywords={['RWA tokenization platform', 'institutional tokenization infrastructure', 'security token issuance', 'CMTA tokenization', 'enterprise digital asset custody', 'bond tokenization platform', 'Canton Network tokenization', 'institutional DeFi infrastructure', 'multi-chain tokenization', 'tokenized securities platform']}
        canonical="/about"
      />
      <V4Layout>
        <AboutHero />
      </V4Layout>
    </>
  );
};
