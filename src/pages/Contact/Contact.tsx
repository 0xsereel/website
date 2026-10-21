import { useTranslation } from "react-i18next";
import { ContactContent } from "../../components/Contact/ContactContent";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";

export const Contact = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  return (
    <>
      <SEO
        title={t("contact.seo.title")}
        description={t("contact.seo.description")}
        canonical={localize("/contact")}
        hreflangPath="/contact"
      />
      <ContactContent />
    </>
  );
};
