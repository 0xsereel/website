import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { generateOrganizationSchema, generateWebSiteSchema } from "../../components/SEO/StructuredData";
import { useLang } from "../../i18n/LanguageProvider";
import { LogoStory } from "../../components/Home/LogoStory";
import { Benefits, ListingsBand, ReportingSection } from "../../components/Home/HomeSections";

export const Home = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  return (
    <main className="marketing-page home-page">
      <SEO
        title={t("home.seo.title")}
        description={t("home.seo.description")}
        canonical={localize("/")}
        hreflangPath="/"
        structuredData={[generateOrganizationSchema(), generateWebSiteSchema()]}
      />
      <LogoStory />
      <Benefits />
      <ReportingSection />
      <ListingsBand />
    </main>
  );
};
