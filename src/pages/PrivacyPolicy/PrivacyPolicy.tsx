import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";

export const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  return (
    <main className="wrap">
      <SEO
        title={t("privacy.seo.title")}
        description={t("privacy.seo.description")}
        canonical={localize("/privacy-policy")}
        hreflangPath="/privacy-policy"
      />
      <section className="page-hero">
        <div className="mono eyebrow lit">[ {t("privacy.eyebrow")} ]</div>
        <h1>{t("privacy.heading")}</h1>
        <p className="lede">{t("privacy.lastUpdated")}</p>
      </section>

      <section className="section">
        <article className="blog-content">
          <section>
            <h2>{t("privacy.sections.introduction.heading")}</h2>
            <p>{t("privacy.sections.introduction.body1")}</p>
            <p>{t("privacy.sections.introduction.body2")}</p>
          </section>

          <section>
            <h2>{t("privacy.sections.collection.heading")}</h2>
            <h3>{t("privacy.sections.collection.provided.heading")}</h3>
            <ul>
              <li><strong>{t("privacy.sections.collection.provided.items.account.label")}</strong> {t("privacy.sections.collection.provided.items.account.text")}</li>
              <li><strong>{t("privacy.sections.collection.provided.items.business.label")}</strong> {t("privacy.sections.collection.provided.items.business.text")}</li>
              <li><strong>{t("privacy.sections.collection.provided.items.communications.label")}</strong> {t("privacy.sections.collection.provided.items.communications.text")}</li>
              <li><strong>{t("privacy.sections.collection.provided.items.transaction.label")}</strong> {t("privacy.sections.collection.provided.items.transaction.text")}</li>
            </ul>

            <h3>{t("privacy.sections.collection.automatic.heading")}</h3>
            <ul>
              <li><strong>{t("privacy.sections.collection.automatic.items.usage.label")}</strong> {t("privacy.sections.collection.automatic.items.usage.text")}</li>
              <li><strong>{t("privacy.sections.collection.automatic.items.device.label")}</strong> {t("privacy.sections.collection.automatic.items.device.text")}</li>
              <li><strong>{t("privacy.sections.collection.automatic.items.log.label")}</strong> {t("privacy.sections.collection.automatic.items.log.text")}</li>
            </ul>

            <h3>{t("privacy.sections.collection.thirdParty.heading")}</h3>
            <ul>
              <li>
                <strong>{t("privacy.sections.collection.thirdParty.items.identity.label")}</strong> {t("privacy.sections.collection.thirdParty.items.identity.text1")} <strong>{t("privacy.sections.collection.thirdParty.items.identity.boldNote")}</strong> {t("privacy.sections.collection.thirdParty.items.identity.text2")}
              </li>
              <li><strong>{t("privacy.sections.collection.thirdParty.items.blockchain.label")}</strong> {t("privacy.sections.collection.thirdParty.items.blockchain.text")}</li>
              <li><strong>{t("privacy.sections.collection.thirdParty.items.analytics.label")}</strong> {t("privacy.sections.collection.thirdParty.items.analytics.text")}</li>
            </ul>
          </section>

          <section>
            <h2>{t("privacy.sections.use.heading")}</h2>
            <p>{t("privacy.sections.use.intro")}</p>
            <ul>
              <li><strong>{t("privacy.sections.use.items.providing.label")}</strong> {t("privacy.sections.use.items.providing.text")}</li>
              <li><strong>{t("privacy.sections.use.items.compliance.label")}</strong> {t("privacy.sections.use.items.compliance.text")}</li>
              <li><strong>{t("privacy.sections.use.items.identityVerification.label")}</strong> {t("privacy.sections.use.items.identityVerification.text")}</li>
              <li><strong>{t("privacy.sections.use.items.security.label")}</strong> {t("privacy.sections.use.items.security.text")}</li>
              <li><strong>{t("privacy.sections.use.items.communications.label")}</strong> {t("privacy.sections.use.items.communications.text")}</li>
              <li><strong>{t("privacy.sections.use.items.analytics.label")}</strong> {t("privacy.sections.use.items.analytics.text")}</li>
              <li><strong>{t("privacy.sections.use.items.legal.label")}</strong> {t("privacy.sections.use.items.legal.text")}</li>
            </ul>
          </section>

          <section>
            <h2>{t("privacy.sections.sharing.heading")}</h2>
            <p>{t("privacy.sections.sharing.intro")}</p>

            <h3>{t("privacy.sections.sharing.serviceProviders.heading")}</h3>
            <p>{t("privacy.sections.sharing.serviceProviders.intro")}</p>
            <ul>
              <li><strong>{t("privacy.sections.sharing.serviceProviders.items.kyc.label")}</strong> {t("privacy.sections.sharing.serviceProviders.items.kyc.text")}</li>
              <li><strong>{t("privacy.sections.sharing.serviceProviders.items.cloud.label")}</strong> {t("privacy.sections.sharing.serviceProviders.items.cloud.text")}</li>
              <li><strong>{t("privacy.sections.sharing.serviceProviders.items.analytics.label")}</strong> {t("privacy.sections.sharing.serviceProviders.items.analytics.text")}</li>
              <li><strong>{t("privacy.sections.sharing.serviceProviders.items.communication.label")}</strong> {t("privacy.sections.sharing.serviceProviders.items.communication.text")}</li>
            </ul>
            <p>{t("privacy.sections.sharing.serviceProviders.footer")}</p>

            <h3>{t("privacy.sections.sharing.legalDisclosure.heading")}</h3>
            <p>{t("privacy.sections.sharing.legalDisclosure.intro")}</p>
            <ul>
              <li>{t("privacy.sections.sharing.legalDisclosure.items.subpoenas")}</li>
              <li>{t("privacy.sections.sharing.legalDisclosure.items.amlCtf")}</li>
              <li>{t("privacy.sections.sharing.legalDisclosure.items.lawEnforcement")}</li>
            </ul>

            <h3>{t("privacy.sections.sharing.businessTransfers.heading")}</h3>
            <p>{t("privacy.sections.sharing.businessTransfers.body")}</p>

            <h3>{t("privacy.sections.sharing.consent.heading")}</h3>
            <p>{t("privacy.sections.sharing.consent.body")}</p>
          </section>

          <section>
            <h2>{t("privacy.sections.retention.heading")}</h2>
            <p>{t("privacy.sections.retention.intro")}</p>
            <ul>
              <li>{t("privacy.sections.retention.items.provide")}</li>
              <li>{t("privacy.sections.retention.items.comply")}</li>
              <li>{t("privacy.sections.retention.items.resolve")}</li>
            </ul>
            <p>{t("privacy.sections.retention.footer")}</p>
          </section>

          <section>
            <h2>{t("privacy.sections.security.heading")}</h2>
            <p>{t("privacy.sections.security.intro")}</p>
            <ul>
              <li>{t("privacy.sections.security.items.encryption")}</li>
              <li>{t("privacy.sections.security.items.access")}</li>
              <li>{t("privacy.sections.security.items.assessments")}</li>
              <li>{t("privacy.sections.security.items.incident")}</li>
              <li>{t("privacy.sections.security.items.standards")}</li>
            </ul>
            <p>{t("privacy.sections.security.footer")}</p>
          </section>

          <section>
            <h2>{t("privacy.sections.internationalTransfers.heading")}</h2>
            <p>{t("privacy.sections.internationalTransfers.intro")}</p>
            <ul>
              <li>{t("privacy.sections.internationalTransfers.items.scc")}</li>
              <li>{t("privacy.sections.internationalTransfers.items.dpa")}</li>
              <li>{t("privacy.sections.internationalTransfers.items.compliance")}</li>
            </ul>
          </section>

          <section>
            <h2>{t("privacy.sections.rights.heading")}</h2>
            <p>{t("privacy.sections.rights.intro")}</p>
            <ul>
              <li><strong>{t("privacy.sections.rights.items.access.label")}</strong> {t("privacy.sections.rights.items.access.text")}</li>
              <li><strong>{t("privacy.sections.rights.items.correction.label")}</strong> {t("privacy.sections.rights.items.correction.text")}</li>
              <li><strong>{t("privacy.sections.rights.items.deletion.label")}</strong> {t("privacy.sections.rights.items.deletion.text")}</li>
              <li><strong>{t("privacy.sections.rights.items.restriction.label")}</strong> {t("privacy.sections.rights.items.restriction.text")}</li>
              <li><strong>{t("privacy.sections.rights.items.portability.label")}</strong> {t("privacy.sections.rights.items.portability.text")}</li>
              <li><strong>{t("privacy.sections.rights.items.objection.label")}</strong> {t("privacy.sections.rights.items.objection.text")}</li>
              <li><strong>{t("privacy.sections.rights.items.withdrawConsent.label")}</strong> {t("privacy.sections.rights.items.withdrawConsent.text")}</li>
            </ul>
            <p>{t("privacy.sections.rights.contact")}</p>
            <p>{t("privacy.sections.rights.limitation")}</p>
          </section>

          <section>
            <h2>{t("privacy.sections.cookies.heading")}</h2>
            <p>{t("privacy.sections.cookies.intro")}</p>
            <ul>
              <li><strong>{t("privacy.sections.cookies.items.essential.label")}</strong> {t("privacy.sections.cookies.items.essential.text")}</li>
              <li><strong>{t("privacy.sections.cookies.items.analytics.label")}</strong> {t("privacy.sections.cookies.items.analytics.text")}</li>
              <li><strong>{t("privacy.sections.cookies.items.preference.label")}</strong> {t("privacy.sections.cookies.items.preference.text")}</li>
            </ul>
            <p>{t("privacy.sections.cookies.footer")}</p>
          </section>

          <section>
            <h2>{t("privacy.sections.childrensPrivacy.heading")}</h2>
            <p>{t("privacy.sections.childrensPrivacy.body")}</p>
          </section>

          <section>
            <h2>{t("privacy.sections.thirdPartyLinks.heading")}</h2>
            <p>{t("privacy.sections.thirdPartyLinks.body")}</p>
          </section>

          <section>
            <h2>{t("privacy.sections.changes.heading")}</h2>
            <p>{t("privacy.sections.changes.body1")}</p>
            <p>{t("privacy.sections.changes.body2")}</p>
          </section>

          <section>
            <h2>{t("privacy.sections.dpo.heading")}</h2>
            <p>{t("privacy.sections.dpo.intro")}</p>
            <p><strong>Sereel Technologies Inc.</strong><br />{t("privacy.sections.dpo.emailLabel")} privacy@sereel.com<br />{t("privacy.sections.dpo.websiteLabel")} https://sereel.com</p>
          </section>

          <section>
            <h2>{t("privacy.sections.jurisdictional.heading")}</h2>

            <h3>{t("privacy.sections.jurisdictional.eeaUk.heading")}</h3>
            <p>{t("privacy.sections.jurisdictional.eeaUk.intro")}</p>
            <ul>
              <li><strong>{t("privacy.sections.jurisdictional.eeaUk.items.contract.label")}</strong> {t("privacy.sections.jurisdictional.eeaUk.items.contract.text")}</li>
              <li><strong>{t("privacy.sections.jurisdictional.eeaUk.items.legalObligation.label")}</strong> {t("privacy.sections.jurisdictional.eeaUk.items.legalObligation.text")}</li>
              <li><strong>{t("privacy.sections.jurisdictional.eeaUk.items.legitimateInterests.label")}</strong> {t("privacy.sections.jurisdictional.eeaUk.items.legitimateInterests.text")}</li>
              <li><strong>{t("privacy.sections.jurisdictional.eeaUk.items.consent.label")}</strong> {t("privacy.sections.jurisdictional.eeaUk.items.consent.text")}</li>
            </ul>

            <h3>{t("privacy.sections.jurisdictional.kenya.heading")}</h3>
            <p>{t("privacy.sections.jurisdictional.kenya.body")}</p>

            <h3>{t("privacy.sections.jurisdictional.botswana.heading")}</h3>
            <p>{t("privacy.sections.jurisdictional.botswana.body")}</p>

            <h3>{t("privacy.sections.jurisdictional.unitedStates.heading")}</h3>
            <p>{t("privacy.sections.jurisdictional.unitedStates.body")}</p>
          </section>
        </article>
      </section>
    </main>
  );
};
