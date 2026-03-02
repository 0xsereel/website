import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { Footer } from "../../components/Footer/Footer";

export const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-black text-white min-h-screen">
      <Header />
      <MobileMenu />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-3 mb-8 sm:mb-10">
          <p className="text-sm sm:text-base text-[#1CA36E] font-gilroy-medium">Last Updated: March 2, 2026</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-gilroy-bold">Privacy Policy</h1>
          <p className="text-lg text-[#D5D5D5] font-gilroy">Sereel Technologies Inc.</p>
        </div>

        <article className="blog-content space-y-8">
          <section className="space-y-4">
            <h2>1. Introduction</h2>
            <p>
              Sereel Technologies Inc. ("Sereel," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access our website at https://sereel.com, our digital asset management platform, APIs, and related services (collectively, the "Services").
            </p>
            <p>By using our Services, you consent to the practices described in this Privacy Policy. If you do not agree, please do not use the Services.</p>
          </section>

          <section className="space-y-4">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Account Information:</strong> Name, email address, company name, job title, and other registration details.</li>
              <li><strong>Business Information:</strong> Entity name, jurisdiction of incorporation, business registration details, and authorized representative information for institutional clients.</li>
              <li><strong>Communications:</strong> Information you provide when contacting us, submitting support requests, or communicating through the Services.</li>
              <li><strong>Transaction Data:</strong> Records of digital asset transactions, token issuance details, and related operational data processed through our platform.</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Usage Data:</strong> Pages visited, features used, timestamps, referral URLs, and interaction patterns within the Services.</li>
              <li><strong>Device and Technical Data:</strong> IP address, browser type and version, operating system, device identifiers, and general location information derived from your IP address.</li>
              <li><strong>Log Data:</strong> Server logs, error reports, and performance data related to your use of the Services.</li>
            </ul>

            <h3>2.3 Information from Third Parties</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Identity Verification Data:</strong> We use third-party Know Your Customer (KYC) and Know Your Business (KYB) providers to verify user and entity identities as required by applicable regulations. These providers collect and process sensitive identity information (such as government-issued ID documents, biometric data, proof of address, and sanctions screening results) directly. <strong>Sereel does not store sensitive identity documents or biometric data on our systems.</strong> We receive only verification status, risk scores, and summary results necessary to maintain compliance records.
              </li>
              <li><strong>Blockchain Data:</strong> Publicly available on-chain transaction data associated with wallet addresses used in connection with the Services.</li>
              <li><strong>Analytics Providers:</strong> Aggregated and anonymized usage data from third-party analytics services.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Providing the Services:</strong> To operate, maintain, and improve our digital asset infrastructure and platform.</li>
              <li><strong>Compliance and Regulatory Obligations:</strong> To meet applicable legal, regulatory, and licensing requirements, including anti-money laundering (AML), counter-terrorism financing (CTF), and sanctions screening obligations across the jurisdictions in which we operate.</li>
              <li><strong>Identity Verification:</strong> To coordinate with third-party KYC/KYB providers to verify the identity and eligibility of users and their organizations.</li>
              <li><strong>Security:</strong> To detect, prevent, and respond to fraud, unauthorized access, and other security incidents.</li>
              <li><strong>Communications:</strong> To respond to inquiries, send service-related notifications, and provide customer support.</li>
              <li><strong>Analytics and Improvement:</strong> To understand how the Services are used and to improve functionality, performance, and user experience.</li>
              <li><strong>Legal Purposes:</strong> To enforce our Terms of Use, comply with legal obligations, and protect our rights and the rights of others.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2>4. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your information in the following circumstances:</p>

            <h3>4.1 Third-Party Service Providers</h3>
            <p>We share information with trusted third-party providers who perform services on our behalf, including:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>KYC/KYB Verification Providers:</strong> To conduct identity verification and compliance screening. These providers operate under their own privacy policies and data processing agreements.</li>
              <li><strong>Cloud Infrastructure Providers:</strong> For hosting, data storage, and computing services.</li>
              <li><strong>Analytics Providers:</strong> For usage analytics and performance monitoring.</li>
              <li><strong>Communication Providers:</strong> For email delivery and customer support tools.</li>
            </ul>
            <p>All service providers are contractually obligated to use your information only for the purposes of providing services to Sereel and to maintain appropriate security measures.</p>

            <h3>4.2 Legal and Regulatory Disclosure</h3>
            <p>We may disclose your information where required by law, regulation, legal process, or governmental request, including:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Responding to subpoenas, court orders, or regulatory inquiries</li>
              <li>Complying with AML/CTF reporting obligations</li>
              <li>Cooperating with law enforcement or regulatory authorities in any jurisdiction where we operate</li>
            </ul>

            <h3>4.3 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.
            </p>

            <h3>4.4 With Your Consent</h3>
            <p>We may share your information with third parties when you have given us explicit consent to do so.</p>
          </section>

          <section className="space-y-4">
            <h2>5. Data Retention</h2>
            <p>We retain your information for as long as necessary to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide the Services and maintain your account</li>
              <li>Comply with legal, regulatory, and licensing obligations (including record-keeping requirements that may extend for several years after account closure)</li>
              <li>Resolve disputes and enforce our agreements</li>
            </ul>
            <p>When information is no longer needed for these purposes, we securely delete or anonymize it in accordance with our data retention policies.</p>
          </section>

          <section className="space-y-4">
            <h2>6. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your information, including:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security assessments and monitoring</li>
              <li>Incident response procedures</li>
              <li>Compliance with industry standards including SOC 2 and ISO 27001 frameworks</li>
            </ul>
            <p>
              While we strive to protect your information, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security, but we are committed to maintaining industry-standard protections.
            </p>
          </section>

          <section className="space-y-4">
            <h2>7. International Data Transfers</h2>
            <p>
              Sereel operates across multiple jurisdictions, including the United States, Kenya, Nigeria, the Netherlands, and Botswana. Your information may be transferred to and processed in countries other than your country of residence. When we transfer data internationally, we implement appropriate safeguards, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Standard contractual clauses or equivalent mechanisms approved by applicable data protection authorities</li>
              <li>Data processing agreements with all third-party providers</li>
              <li>Compliance with applicable data transfer regulations in each jurisdiction</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2>8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal and regulatory retention requirements.</li>
              <li><strong>Restriction:</strong> Request that we restrict processing of your information in certain circumstances.</li>
              <li><strong>Portability:</strong> Request a portable copy of your information in a structured, commonly used format.</li>
              <li><strong>Objection:</strong> Object to processing of your information for certain purposes.</li>
              <li><strong>Withdraw Consent:</strong> Where processing is based on consent, you may withdraw consent at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at privacy@sereel.com. We will respond to your request within the timeframe required by applicable law.
            </p>
            <p>
              Please note that certain rights may be limited where we have a legal obligation to retain data, particularly in connection with regulatory compliance, AML/CTF requirements, or ongoing investigations.
            </p>
          </section>

          <section className="space-y-4">
            <h2>9. Cookies and Tracking Technologies</h2>
            <p>We may use cookies and similar tracking technologies to collect usage data and improve the Services. These may include:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Essential Cookies:</strong> Required for the operation of the Services.</li>
              <li><strong>Analytics Cookies:</strong> Used to understand how visitors interact with the Services.</li>
              <li><strong>Preference Cookies:</strong> Used to remember your settings and preferences.</li>
            </ul>
            <p>You can manage cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of the Services.</p>
          </section>

          <section className="space-y-4">
            <h2>10. Children's Privacy</h2>
            <p>
              Our Services are not directed to individuals under the age of 18 (or the applicable age of majority in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2>11. Third-Party Links</h2>
            <p>
              The Services may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you access through our platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date. We may also provide additional notice for significant changes, such as email notification to account holders.
            </p>
            <p>Your continued use of the Services after changes are posted constitutes acceptance of the revised Privacy Policy.</p>
          </section>

          <section className="space-y-4">
            <h2>13. Data Protection Officer</h2>
            <p>For privacy-related inquiries, concerns, or to exercise your data protection rights, please contact:</p>
            <p><strong>Sereel Technologies Inc.</strong><br />Email: privacy@sereel.com<br />Website: https://sereel.com</p>
          </section>

          <section className="space-y-4">
            <h2>14. Jurisdiction-Specific Disclosures</h2>

            <h3>European Economic Area (EEA) and United Kingdom</h3>
            <p>If you are located in the EEA or UK, we process your personal data under the following legal bases as defined by the General Data Protection Regulation (GDPR):</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Contract Performance:</strong> Processing necessary to provide the Services you have requested.</li>
              <li><strong>Legal Obligation:</strong> Processing required to comply with applicable laws and regulations.</li>
              <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests, including security, fraud prevention, and service improvement, where these interests are not overridden by your rights.</li>
              <li><strong>Consent:</strong> Where you have provided explicit consent for specific processing activities.</li>
            </ul>

            <h3>Kenya</h3>
            <p>We comply with the Kenya Data Protection Act (2019) and process personal data in accordance with its principles, including lawfulness, data minimization, and purpose limitation.</p>

            <h3>Botswana</h3>
            <p>We comply with the Botswana Data Protection Act and applicable regulations governing data processing and protection.</p>

            <h3>United States</h3>
            <p>
              We comply with applicable U.S. federal and state privacy laws. Residents of certain states (including California, Virginia, Colorado, and Connecticut) may have additional rights under their respective state privacy laws. To exercise these rights, please contact us at privacy@sereel.com.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};
