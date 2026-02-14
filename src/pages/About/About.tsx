import { useEffect } from "react";
import { V4Layout } from "../../components/V4/V4Layout";
import AboutHero from "../../components/About/AboutHero";

export const About = () => {
  useEffect(() => {
    document.title = "About Sereel - RWA Tokenization Platform | Institutional Tokenization Infrastructure";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Learn about Sereel\'s RWA tokenization platform and institutional tokenization infrastructure. Leading provider of security token issuance, CMTA tokenization, enterprise digital asset custody, bond tokenization platform, and Canton Network tokenization for institutional DeFi infrastructure.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'RWA tokenization platform, institutional tokenization infrastructure, security token issuance, CMTA tokenization, enterprise digital asset custody, bond tokenization platform, Canton Network tokenization, institutional DeFi infrastructure, multi-chain tokenization, tokenized securities platform');
  }, []);

  return (
    <V4Layout>
      <AboutHero />
    </V4Layout>
  );
};
