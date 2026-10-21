import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SEO } from "../../SEO";
import { useLang } from "../../../i18n/LanguageProvider";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  category: string;
  items: FAQItem[];
}

export const FAQ = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  const faqSections: FAQSection[] = [
    {
      category: t("faq.sections.aboutSereel.title"),
      items: [
        {
          question: t("faq.sections.aboutSereel.items.whatIsSereel.question"),
          answer: t("faq.sections.aboutSereel.items.whatIsSereel.answer"),
        },
        {
          question: t("faq.sections.aboutSereel.items.whatIsTokenisation.question"),
          answer: t("faq.sections.aboutSereel.items.whatIsTokenisation.answer"),
        },
        {
          question: t("faq.sections.aboutSereel.items.doesTokenisationChangeValue.question"),
          answer: t("faq.sections.aboutSereel.items.doesTokenisationChangeValue.answer"),
        },
        {
          question: t("faq.sections.aboutSereel.items.isCryptocurrencyPlatform.question"),
          answer: t("faq.sections.aboutSereel.items.isCryptocurrencyPlatform.answer"),
        },
        {
          question: t("faq.sections.aboutSereel.items.isIssuerOrSponsor.question"),
          answer: t("faq.sections.aboutSereel.items.isIssuerOrSponsor.answer"),
        },
        {
          question: t("faq.sections.aboutSereel.items.whoIsBuiltFor.question"),
          answer: t("faq.sections.aboutSereel.items.whoIsBuiltFor.answer"),
        },
      ],
    },
    {
      category: t("faq.sections.whyBlockchain.title"),
      items: [
        {
          question: t("faq.sections.whyBlockchain.items.whyBlockchainForInvestments.question"),
          answer: t("faq.sections.whyBlockchain.items.whyBlockchainForInvestments.answer"),
        },
        {
          question: t("faq.sections.whyBlockchain.items.whyNotDatabase.question"),
          answer: t("faq.sections.whyBlockchain.items.whyNotDatabase.answer"),
        },
        {
          question: t("faq.sections.whyBlockchain.items.benefitOfInstantSettlement.question"),
          answer: t("faq.sections.whyBlockchain.items.benefitOfInstantSettlement.answer"),
        },
      ],
    },
    {
      category: t("faq.sections.multiChain.title"),
      items: [
        {
          question: t("faq.sections.multiChain.items.whyMultiChain.question"),
          answer: t("faq.sections.multiChain.items.whyMultiChain.answer"),
        },
        {
          question: t("faq.sections.multiChain.items.whyMultiChainMattersForRwa.question"),
          answer: t("faq.sections.multiChain.items.whyMultiChainMattersForRwa.answer"),
        },
        {
          question: t("faq.sections.multiChain.items.whichNetworksSupported.question"),
          answer: t("faq.sections.multiChain.items.whichNetworksSupported.answer"),
        },
      ],
    },
    {
      category: t("faq.sections.securityCustodyRecovery.title"),
      items: [
        {
          question: t("faq.sections.securityCustodyRecovery.items.howAssetsSecured.question"),
          answer: t("faq.sections.securityCustodyRecovery.items.howAssetsSecured.answer"),
        },
        {
          question: t("faq.sections.securityCustodyRecovery.items.whatIsMultiSig.question"),
          answer: t("faq.sections.securityCustodyRecovery.items.whatIsMultiSig.answer"),
        },
        {
          question: t("faq.sections.securityCustodyRecovery.items.whatIsMpcCustody.question"),
          answer: t("faq.sections.securityCustodyRecovery.items.whatIsMpcCustody.answer"),
        },
        {
          question: t("faq.sections.securityCustodyRecovery.items.whatIfKeyLost.question"),
          answer: t("faq.sections.securityCustodyRecovery.items.whatIfKeyLost.answer"),
        },
        {
          question: t("faq.sections.securityCustodyRecovery.items.doesSereelCustodyAssets.question"),
          answer: t("faq.sections.securityCustodyRecovery.items.doesSereelCustodyAssets.answer"),
        },
        {
          question: t("faq.sections.securityCustodyRecovery.items.whatIfSereelCeasesOperations.question"),
          answer: t("faq.sections.securityCustodyRecovery.items.whatIfSereelCeasesOperations.answer"),
        },
      ],
    },
    {
      category: t("faq.sections.complianceLegal.title"),
      items: [
        {
          question: t("faq.sections.complianceLegal.items.areTokenisedAssetsLegal.question"),
          answer: t("faq.sections.complianceLegal.items.areTokenisedAssetsLegal.answer"),
        },
        {
          question: t("faq.sections.complianceLegal.items.howSereelSupportsCompliance.question"),
          answer: t("faq.sections.complianceLegal.items.howSereelSupportsCompliance.answer"),
        },
        {
          question: t("faq.sections.complianceLegal.items.canEligibilityBeEnforced.question"),
          answer: t("faq.sections.complianceLegal.items.canEligibilityBeEnforced.answer"),
        },
        {
          question: t("faq.sections.complianceLegal.items.whoDeterminesJurisdiction.question"),
          answer: t("faq.sections.complianceLegal.items.whoDeterminesJurisdiction.answer"),
        },
      ],
    },
    {
      category: t("faq.sections.tokenisedAssetsProducts.title"),
      items: [
        {
          question: t("faq.sections.tokenisedAssetsProducts.items.whatAssetsCanBeTokenised.question"),
          answer: t("faq.sections.tokenisedAssetsProducts.items.whatAssetsCanBeTokenised.answer"),
        },
        {
          question: t("faq.sections.tokenisedAssetsProducts.items.canFundsBeTokenised.question"),
          answer: t("faq.sections.tokenisedAssetsProducts.items.canFundsBeTokenised.answer"),
        },
        {
          question: t("faq.sections.tokenisedAssetsProducts.items.canTokenisationImproveLiquidity.question"),
          answer: t("faq.sections.tokenisedAssetsProducts.items.canTokenisationImproveLiquidity.answer"),
        },
        {
          question: t("faq.sections.tokenisedAssetsProducts.items.whatIsFractionalOwnership.question"),
          answer: t("faq.sections.tokenisedAssetsProducts.items.whatIsFractionalOwnership.answer"),
        },
      ],
    },
    {
      category: t("faq.sections.institutionalInfrastructure.title"),
      items: [
        {
          question: t("faq.sections.institutionalInfrastructure.items.whatMakesInstitutionalGrade.question"),
          answer: t("faq.sections.institutionalInfrastructure.items.whatMakesInstitutionalGrade.answer"),
        },
        {
          question: t("faq.sections.institutionalInfrastructure.items.howIntegratesWithExistingSystems.question"),
          answer: t("faq.sections.institutionalInfrastructure.items.howIntegratesWithExistingSystems.answer"),
        },
        {
          question: t("faq.sections.institutionalInfrastructure.items.canBeWhiteLabelled.question"),
          answer: t("faq.sections.institutionalInfrastructure.items.canBeWhiteLabelled.answer"),
        },
        {
          question: t("faq.sections.institutionalInfrastructure.items.howCorporateActionsManaged.question"),
          answer: t("faq.sections.institutionalInfrastructure.items.howCorporateActionsManaged.answer"),
        },
      ],
    },
    {
      category: t("faq.sections.riskGovernance.title"),
      items: [
        {
          question: t("faq.sections.riskGovernance.items.mainRisks.question"),
          answer: t("faq.sections.riskGovernance.items.mainRisks.answer"),
        },
        {
          question: t("faq.sections.riskGovernance.items.howUpgradesHandled.question"),
          answer: t("faq.sections.riskGovernance.items.howUpgradesHandled.answer"),
        },
        {
          question: t("faq.sections.riskGovernance.items.areTokensValidIfPlatformChanges.question"),
          answer: t("faq.sections.riskGovernance.items.areTokensValidIfPlatformChanges.answer"),
        },
      ],
    },
    {
      category: t("faq.sections.gettingStarted.title"),
      items: [
        {
          question: t("faq.sections.gettingStarted.items.whatIssuerNeedsToLaunch.question"),
          answer: t("faq.sections.gettingStarted.items.whatIssuerNeedsToLaunch.answer"),
        },
        {
          question: t("faq.sections.gettingStarted.items.canSupportSimpleAndComplex.question"),
          answer: t("faq.sections.gettingStarted.items.canSupportSimpleAndComplex.answer"),
        },
        {
          question: t("faq.sections.gettingStarted.items.whatIsSereelBuilding.question"),
          answer: t("faq.sections.gettingStarted.items.whatIsSereelBuilding.answer"),
        },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections
      .flatMap((section) => section.items)
      .map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
  };

  return (
    <>
      <SEO
        title={t("faq.seo.title")}
        description={t("faq.seo.description")}
        canonical={localize("/faq")}
        hreflangPath="/faq"
        structuredData={faqSchema}
      />
      <main className="wrap">
        <section className="page-hero">
          <div className="mono eyebrow lit">[ {t("faq.eyebrow")} ]</div>
          <h1>
            {t("faq.heading.line1")}
            <br />
            <span className="lit">{t("faq.heading.highlight")}</span>.
          </h1>
          <p className="lede">{t("faq.lede")}</p>
        </section>

        {faqSections.map((section, sectionIndex) => (
          <section
            key={sectionIndex}
            className="faq"
            style={{ paddingTop: sectionIndex === 0 ? "64px" : "0" }}
          >
            {/* Category heading */}
            <motion.div
              className="mono eyebrow"
              style={{ marginBottom: "0", paddingBottom: "0" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="lit">[ {section.category} ]</span>
            </motion.div>

            <div className="list">
              {section.items.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <summary>
                    {faq.question}
                    <span className="plus">+</span>
                  </summary>
                  <div className="a">{faq.answer}</div>
                </motion.details>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="end">
            <div className="card">
              <h2>
                {t("faq.cta.heading.line1")} <br />
                <span className="lit">{t("faq.cta.heading.highlight")}</span>
              </h2>
              <div className="row">
                <p
                  style={{
                    color: "var(--ink-2)",
                    fontSize: "17px",
                    lineHeight: "1.6",
                    maxWidth: "48ch",
                  }}
                >
                  {t("faq.cta.description")}
                </p>
                <Link to={localize("/contact")} className="pill lg">
                  <span className="dot" />
                  {t("faq.cta.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
