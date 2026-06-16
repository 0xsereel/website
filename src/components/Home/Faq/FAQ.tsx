import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  category: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    category: "About Sereel",
    items: [
      {
        question: "What is Sereel?",
        answer:
          "Sereel provides institutional-grade infrastructure for the issuance, management, distribution and lifecycle administration of tokenised real-world assets and investment products. It helps regulated institutions, asset managers, issuers and investment platforms bring traditional financial products onto blockchain infrastructure while maintaining compliance, governance and investor protections. Sereel does not change the underlying asset — it modernises how ownership, transfers, reporting and settlement are managed.",
      },
      {
        question: "What is tokenisation?",
        answer:
          "Tokenisation is the process of representing ownership rights in a real-world asset or investment product as a secure digital record on blockchain infrastructure. Examples include real estate, private credit, money market funds, infrastructure projects, commodities, fixed income products, structured products and private equity interests. The underlying asset remains unchanged — tokenisation creates a more efficient framework for ownership and distribution.",
      },
      {
        question: "Does tokenisation change the value of an asset?",
        answer:
          "No. Tokenisation does not create value by itself. The value of a tokenised asset remains linked to the underlying asset, investment product or cash flow it represents. What changes is how ownership is recorded, transferred, administered and reported.",
      },
      {
        question: "Is Sereel a cryptocurrency platform?",
        answer:
          "No. Sereel is infrastructure for regulated financial products and real-world assets. While blockchain is used as the underlying technology, the focus is institutional investment infrastructure — not speculative cryptocurrency trading.",
      },
      {
        question: "Who is Sereel built for?",
        answer:
          "Sereel is designed for asset managers, fund managers, banks, issuers, investment platforms, family offices, institutional investors, real estate developers, private credit managers, distribution partners and compliance teams.",
      },
    ],
  },
  {
    category: "Why Blockchain?",
    items: [
      {
        question: "Why use blockchain for investment products?",
        answer:
          "Traditional financial infrastructure can be slow, fragmented and heavily dependent on manual reconciliation. Blockchain enables faster settlement, better transparency, immutable ownership records, automated corporate actions, reduced administrative burden, stronger audit trails and broader accessibility. Sereel uses blockchain to improve infrastructure, not to replace legal and regulatory frameworks.",
      },
      {
        question: "Why not simply use a traditional database?",
        answer:
          "Traditional databases depend on a central party to maintain trust and reconcile records. Blockchain provides a shared source of truth that can be independently verified by multiple stakeholders — issuers, investors, custodians, administrators and regulators — all needing consistent records.",
      },
      {
        question: "What is the benefit of instant settlement?",
        answer:
          "Traditional securities settlement often takes multiple days. Blockchain-based settlement can allow ownership and payment to move together, reducing delay and counterparty risk. This improves capital efficiency, liquidity management, investor onboarding, operational speed and settlement certainty.",
      },
    ],
  },
  {
    category: "Multi-Chain Infrastructure",
    items: [
      {
        question: "Why is Sereel multi-chain?",
        answer:
          "No single blockchain fits every institution, market or use case. Sereel's multi-chain approach gives issuers access to different ecosystems, liquidity pools and investor communities while keeping the same compliance and governance logic across deployments.",
      },
      {
        question: "Why does multi-chain deployment matter for RWAs?",
        answer:
          "Multi-chain deployment helps issuers avoid dependence on one network and supports broader distribution and interoperability. It helps with investor reach, liquidity access, network resilience, ecosystem flexibility and future-proofing — especially as the tokenisation market continues to develop.",
      },
      {
        question: "Why does Sereel use BSV?",
        answer:
          "Sereel uses BSV for its low transaction costs, scalability and predictable network economics — making it suitable for enterprise issuance, settlement and recordkeeping where throughput and cost stability matter.",
      },
    ],
  },
  {
    category: "Security, Custody & Recovery",
    items: [
      {
        question: "How are tokenised assets secured?",
        answer:
          "Security is built in layers and may include institutional custody, multi-signature controls, multi-party computation (MPC), hardware security modules, role-based permissions, audit trails and governance controls. The design is intended to meet institutional expectations, not retail crypto standards.",
      },
      {
        question: "What is multi-signature security?",
        answer:
          "Multi-signature security requires more than one authorised approval before a transaction can proceed. This reduces single-point failure risk, internal fraud risk, operational errors and key compromise exposure.",
      },
      {
        question: "What is MPC custody?",
        answer:
          "MPC (multi-party computation) distributes cryptographic control without exposing a full private key in one place. That strengthens security while supporting controlled operations and recovery processes.",
      },
      {
        question: "What happens if a private key is lost?",
        answer:
          "Recovery procedures can be built into the custody and governance model, including multi-signature recovery, MPC recovery, backup signers, governance-approved recovery workflows and institutional custody support. Recovery terms should always be defined before issuance.",
      },
      {
        question: "Does Sereel custody client assets?",
        answer:
          "No. Custody remains with approved custodians, regulated providers or the designated legal structure for the product. Sereel provides infrastructure rather than taking ownership of investor assets.",
      },
      {
        question: "What happens if Sereel ceases operations?",
        answer:
          "Token records remain on-chain. Investor rights continue to be governed by the legal structure, transaction documents and the asset's governing terms — rather than by one software provider alone.",
      },
    ],
  },
  {
    category: "Compliance & Legal Structure",
    items: [
      {
        question: "Are tokenised assets legal?",
        answer:
          "In many jurisdictions, tokenised assets are recognised under existing securities, trust, property or investment laws. Tokenisation usually updates the ownership record and transfer process — it does not replace the legal rights attached to the asset.",
      },
      {
        question: "How does Sereel support compliance?",
        answer:
          "Sereel can support KYC checks, AML controls, investor whitelisting, jurisdiction restrictions, transfer restrictions, investor eligibility checks and compliance reporting. These controls can be embedded into the issuance and transfer process.",
      },
      {
        question: "Can investor eligibility rules be enforced?",
        answer:
          "Yes. Issuers can define rules such as accredited investor only, institutional only, geographic restrictions, holding period restrictions and investor concentration limits. Transfers can then be restricted automatically to qualified wallets and approved investors.",
      },
      {
        question: "Who determines the governing jurisdiction?",
        answer:
          "The issuer does. The legal structure, governing law and investor terms are established during issuance and remain enforceable independent of the blockchain layer.",
      },
    ],
  },
  {
    category: "Tokenised Assets & Products",
    items: [
      {
        question: "What kinds of assets can be tokenised?",
        answer:
          "Sereel may support a wide range of asset classes including real estate, private credit, funds, fixed income products, commodities, infrastructure assets, structured products, private equity interests, revenue-linked instruments and alternative investment products.",
      },
      {
        question: "Can traditional funds be tokenised?",
        answer:
          "Yes. Traditional funds, including private funds and other collective investment structures, can be represented through tokenised ownership records.",
      },
      {
        question: "Can tokenisation improve liquidity?",
        answer:
          "Potentially, yes. Tokenisation can support fractional ownership, smaller ticket sizes, broader investor access and secondary market participation. However, liquidity still depends on market demand, investor participation and the availability of compliant trading venues.",
      },
      {
        question: "What is fractional ownership?",
        answer:
          "Fractional ownership means an asset is divided into smaller ownership units. This can lower entry thresholds and make it easier for more investors to participate.",
      },
    ],
  },
  {
    category: "Institutional Infrastructure",
    items: [
      {
        question: "What makes Sereel institutional-grade?",
        answer:
          "Sereel is designed around compliance-first architecture, secure custody integrations, governance controls, institutional settlement standards, API-based integrations, auditability, scalability and regulatory adaptability. The platform is intended for professional market participants and regulated use cases.",
      },
      {
        question: "How does Sereel integrate with existing systems?",
        answer:
          "Sereel can connect through APIs to existing systems such as fund administration platforms, transfer agents, custodians, banking systems, reporting tools, treasury systems and investment platforms — helping institutions adopt tokenisation without replacing their entire operating stack.",
      },
      {
        question: "Can Sereel be white-labelled?",
        answer:
          "Yes. Institutions can launch products under their own brand while Sereel provides the infrastructure behind the scenes.",
      },
      {
        question: "How are corporate actions managed?",
        answer:
          "Corporate actions can be automated through programmable workflows covering coupon payments, dividend distributions, interest payments, redemptions, maturity events and investor notifications — reducing manual work and improving consistency.",
      },
    ],
  },
  {
    category: "Risk & Governance",
    items: [
      {
        question: "What are the main risks users should understand?",
        answer:
          "Like any financial infrastructure, tokenisation carries risks including regulatory change, market liquidity limitations, technology failure, custody risk, smart contract risk and jurisdictional complexity. These risks should be clearly disclosed in offering and legal documents.",
      },
      {
        question: "How are upgrades handled?",
        answer:
          "Where applicable, upgrades should be governed through a clear approval process. Critical compliance and ownership rules should remain tightly controlled, with changes made only under defined governance procedures.",
      },
      {
        question: "Are tokens still valid if the platform changes?",
        answer:
          "Yes, provided the legal structure and issuance terms remain in place. The token is a record of ownership, but the enforceable rights come from the legal documentation behind the product.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        question: "What does an issuer need to launch a tokenised product?",
        answer:
          "Typically, an issuer will need a defined asset or fund structure, legal and regulatory review, investor eligibility rules, custody and recovery design, a distribution plan, a reporting framework, governance approvals and a technical integration plan.",
      },
      {
        question: "Can Sereel support both simple and complex products?",
        answer:
          "Yes. Sereel can support simpler products such as single-asset issuance, as well as more complex structures involving fund administration, distribution rules, compliance logic and lifecycle events.",
      },
      {
        question: "What is Sereel building?",
        answer:
          "Sereel is building the institutional infrastructure layer for tokenised capital markets — connecting traditional finance and blockchain-based market infrastructure in a way that is compliant, secure and practical for real-world use.",
      },
    ],
  },
];

export const FAQ = () => {
  return (
    <>
      <main className="wrap">
        <section className="page-hero">
          <div className="mono eyebrow lit">[ Primer ]</div>
          <h1>
            Questions
            <br />
            <span className="lit">Answered</span>.
          </h1>
          <p className="lede">
            A short primer for institutional teams evaluating tokenisation
            infrastructure.
          </p>
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
                Still Have <br />
                <span className="lit">Questions?</span>
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
                  Our team is ready to help you understand how Sereel can
                  transform your institution's tokenisation strategy.
                </p>
                <a href="/contact" className="pill lg">
                  <span className="dot" />
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};