import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";

export const Terms = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  return (
    <main className="wrap">
      <SEO
        title={t("terms.seo.title")}
        description={t("terms.seo.description")}
        canonical={localize("/terms")}
        hreflangPath="/terms"
      />
      <section className="page-hero">
        <div className="mono eyebrow lit">[ {t("terms.eyebrow")} ]</div>
        <h1>{t("terms.hero.title")}</h1>
        <p className="lede">{t("terms.hero.lastUpdated")}</p>
      </section>

      <section className="section">
        <article className="blog-content">
          <section>
            <h2>{t("terms.sections.introduction.heading")}</h2>
            <p>{t("terms.sections.introduction.body1")}</p>
            <p>{t("terms.sections.introduction.body2")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.aboutServices.heading")}</h2>
            <p>{t("terms.sections.aboutServices.intro")}</p>
            <ul>
              <li>{t("terms.sections.aboutServices.bullets.tokenization")}</li>
              <li>{t("terms.sections.aboutServices.bullets.issuance")}</li>
              <li>{t("terms.sections.aboutServices.bullets.compliance")}</li>
              <li>{t("terms.sections.aboutServices.bullets.api")}</li>
            </ul>
            <p>{t("terms.sections.aboutServices.outro")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.eligibility.heading")}</h2>
            <p>{t("terms.sections.eligibility.intro")}</p>
            <ul>
              <li>{t("terms.sections.eligibility.bullets.age")}</li>
              <li>{t("terms.sections.eligibility.bullets.authority")}</li>
              <li>{t("terms.sections.eligibility.bullets.jurisdiction")}</li>
              <li>{t("terms.sections.eligibility.bullets.sanctions")}</li>
            </ul>
            <p>{t("terms.sections.eligibility.outro")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.accountSecurity.heading")}</h2>
            <p>{t("terms.sections.accountSecurity.intro")}</p>
            <ul>
              <li>{t("terms.sections.accountSecurity.bullets.accurateInfo")}</li>
              <li>{t("terms.sections.accountSecurity.bullets.confidentiality")}</li>
              <li>{t("terms.sections.accountSecurity.bullets.notify")}</li>
              <li>{t("terms.sections.accountSecurity.bullets.responsibility")}</li>
            </ul>
            <p>{t("terms.sections.accountSecurity.outro")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.acceptableUse.heading")}</h2>
            <p>{t("terms.sections.acceptableUse.intro")}</p>
            <ul>
              <li>{t("terms.sections.acceptableUse.bullets.violateLaw")}</li>
              <li>{t("terms.sections.acceptableUse.bullets.financialCrime")}</li>
              <li>{t("terms.sections.acceptableUse.bullets.circumvent")}</li>
              <li>{t("terms.sections.acceptableUse.bullets.reverseEngineer")}</li>
              <li>{t("terms.sections.acceptableUse.bullets.malware")}</li>
              <li>{t("terms.sections.acceptableUse.bullets.unauthorizedIssuance")}</li>
              <li>{t("terms.sections.acceptableUse.bullets.interfere")}</li>
              <li>{t("terms.sections.acceptableUse.bullets.unauthorizedAccess")}</li>
              <li>{t("terms.sections.acceptableUse.bullets.automatedMeans")}</li>
            </ul>
          </section>

          <section>
            <h2>{t("terms.sections.intellectualProperty.heading")}</h2>
            <p>{t("terms.sections.intellectualProperty.body1")}</p>
            <p>{t("terms.sections.intellectualProperty.body2")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.thirdPartyServices.heading")}</h2>
            <p>{t("terms.sections.thirdPartyServices.intro")}</p>
            <ul>
              <li>{t("terms.sections.thirdPartyServices.bullets.kyc")}</li>
              <li>{t("terms.sections.thirdPartyServices.bullets.blockchain")}</li>
              <li>{t("terms.sections.thirdPartyServices.bullets.cloud")}</li>
              <li>{t("terms.sections.thirdPartyServices.bullets.payment")}</li>
            </ul>
            <p>{t("terms.sections.thirdPartyServices.outro")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.digitalAssetRisks.heading")}</h2>
            <p>{t("terms.sections.digitalAssetRisks.intro")}</p>
            <ul>
              <li>
                <strong>{t("terms.sections.digitalAssetRisks.bullets.irreversible.lead")}</strong>{" "}
                {t("terms.sections.digitalAssetRisks.bullets.irreversible.body")}
              </li>
              <li>
                <strong>{t("terms.sections.digitalAssetRisks.bullets.volatile.lead")}</strong>{" "}
                {t("terms.sections.digitalAssetRisks.bullets.volatile.body")}
              </li>
              <li>
                <strong>{t("terms.sections.digitalAssetRisks.bullets.regulatory.lead")}</strong>{" "}
                {t("terms.sections.digitalAssetRisks.bullets.regulatory.body")}
              </li>
              <li>
                <strong>{t("terms.sections.digitalAssetRisks.bullets.smartContracts.lead")}</strong>{" "}
                {t("terms.sections.digitalAssetRisks.bullets.smartContracts.body")}
              </li>
              <li>
                <strong>{t("terms.sections.digitalAssetRisks.bullets.network.lead")}</strong>{" "}
                {t("terms.sections.digitalAssetRisks.bullets.network.body")}
              </li>
            </ul>
            <p>{t("terms.sections.digitalAssetRisks.outro")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.feesAndPayment.heading")}</h2>
            <p>{t("terms.sections.feesAndPayment.intro")}</p>
            <ul>
              <li>{t("terms.sections.feesAndPayment.bullets.currency")}</li>
              <li>{t("terms.sections.feesAndPayment.bullets.nonRefundable")}</li>
              <li>{t("terms.sections.feesAndPayment.bullets.modify")}</li>
            </ul>
          </section>

          <section>
            <h2>{t("terms.sections.disclaimers.heading")}</h2>
            <p>{t("terms.sections.disclaimers.body")}</p>
            <p>{t("terms.sections.disclaimers.intro")}</p>
            <ul>
              <li>{t("terms.sections.disclaimers.bullets.uninterrupted")}</li>
              <li>{t("terms.sections.disclaimers.bullets.defects")}</li>
              <li>{t("terms.sections.disclaimers.bullets.requirements")}</li>
              <li>{t("terms.sections.disclaimers.bullets.accuracy")}</li>
            </ul>
          </section>

          <section>
            <h2>{t("terms.sections.liability.heading")}</h2>
            <p>{t("terms.sections.liability.body1")}</p>
            <p>{t("terms.sections.liability.body2")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.indemnification.heading")}</h2>
            <p>{t("terms.sections.indemnification.intro")}</p>
            <ul>
              <li>{t("terms.sections.indemnification.bullets.use")}</li>
              <li>{t("terms.sections.indemnification.bullets.violationTerms")}</li>
              <li>{t("terms.sections.indemnification.bullets.violationLaw")}</li>
              <li>{t("terms.sections.indemnification.bullets.content")}</li>
            </ul>
          </section>

          <section>
            <h2>{t("terms.sections.termination.heading")}</h2>
            <p>{t("terms.sections.termination.intro")}</p>
            <ul>
              <li>{t("terms.sections.termination.bullets.cease")}</li>
              <li>{t("terms.sections.termination.bullets.retainData")}</li>
              <li>{t("terms.sections.termination.bullets.survive")}</li>
            </ul>
            <p>{t("terms.sections.termination.outro")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.modifications.heading")}</h2>
            <p>{t("terms.sections.modifications.body")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.governingLaw.heading")}</h2>
            <p>{t("terms.sections.governingLaw.body1")}</p>
            <p>{t("terms.sections.governingLaw.body2")}</p>
          </section>

          <section>
            <h2>{t("terms.sections.generalProvisions.heading")}</h2>
            <ul>
              <li>
                <strong>{t("terms.sections.generalProvisions.bullets.entireAgreement.lead")}</strong>{" "}
                {t("terms.sections.generalProvisions.bullets.entireAgreement.body")}
              </li>
              <li>
                <strong>{t("terms.sections.generalProvisions.bullets.severability.lead")}</strong>{" "}
                {t("terms.sections.generalProvisions.bullets.severability.body")}
              </li>
              <li>
                <strong>{t("terms.sections.generalProvisions.bullets.waiver.lead")}</strong>{" "}
                {t("terms.sections.generalProvisions.bullets.waiver.body")}
              </li>
              <li>
                <strong>{t("terms.sections.generalProvisions.bullets.assignment.lead")}</strong>{" "}
                {t("terms.sections.generalProvisions.bullets.assignment.body")}
              </li>
              <li>
                <strong>{t("terms.sections.generalProvisions.bullets.forceMajeure.lead")}</strong>{" "}
                {t("terms.sections.generalProvisions.bullets.forceMajeure.body")}
              </li>
            </ul>
          </section>

          <section>
            <h2>{t("terms.sections.contact.heading")}</h2>
            <p>{t("terms.sections.contact.intro")}</p>
            <p>
              <strong>Sereel Technologies Inc.</strong>
              <br />
              {t("terms.sections.contact.email")}
              <br />
              {t("terms.sections.contact.website")}
            </p>
          </section>
        </article>
      </section>
    </main>
  );
};
