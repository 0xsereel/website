import { ContactContent } from "../../components/Contact/ContactContent";
import { SEO } from "../../components/SEO";

export const Contact = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Talk to the Sereel team about tokenization, custody, compliance, and settlement infrastructure for your institution. Offices in Chicago, Nairobi, and Zürich."
        canonical="/contact"
      />
      <ContactContent />
    </>
  );
};
