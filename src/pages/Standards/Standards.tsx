import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";

export const Standards = () => {
  const { t } = useTranslation();
  const { localize } = useLang();

  return (
    <main className="wrap">
      <SEO
        title={t("standards.seo.title")}
        description={t("standards.seo.description")}
        canonical={localize("/standards")}
        hreflangPath="/standards"
      />
      <section className="page-hero">
        <div className="mono eyebrow lit">[ {t("standards.eyebrow")} ]</div>
        <h1>
          {t("standards.hero.titleStart")}
          <br />
          <span className="lit">{t("standards.hero.titleHighlight")}</span> {t("standards.hero.titleEnd")}
        </h1>
        <p className="lede">{t("standards.hero.lede")}</p>
      </section>

      <section className="section">
        <div className="spec-grid">
          <div className="spec-card large">
            <span className="badge">● {t("standards.cards.cmtat.badge")}</span>
            <h3>
              CMTA
              <br />
              <span className="glow-text">CMTAT</span>
            </h3>
            <div className="sub">{t("standards.cards.cmtat.sub")}</div>
            <p>{t("standards.cards.cmtat.body")}</p>
            <ul>
              <li>{t("standards.cards.cmtat.bullets.referenceImplementation")}</li>
              <li>{t("standards.cards.cmtat.bullets.members")}</li>
              <li>{t("standards.cards.cmtat.bullets.complianceModules")}</li>
              <li>{t("standards.cards.cmtat.bullets.composable")}</li>
              <li>{t("standards.cards.cmtat.bullets.audited")}</li>
            </ul>
          </div>
          <div className="spec-card large">
            <span className="badge">● {t("standards.cards.erc3643.badge")}</span>
            <h3>
              ERC
              <br />
              <span className="glow-text">3643</span>
            </h3>
            <div className="sub">{t("standards.cards.erc3643.sub")}</div>
            <p>{t("standards.cards.erc3643.body")}</p>
            <ul>
              <li>{t("standards.cards.erc3643.bullets.eligibilityChecks")}</li>
              <li>{t("standards.cards.erc3643.bullets.onchainid")}</li>
              <li>{t("standards.cards.erc3643.bullets.backers")}</li>
              <li>{t("standards.cards.erc3643.bullets.hybrid")}</li>
              <li>{t("standards.cards.erc3643.bullets.hooks")}</li>
            </ul>
          </div>
        </div>

        <div className="twocol large" style={{ marginTop: 60 }}>
          <div className="col">
            <h3>{t("standards.networks.heading")}</h3>
            <ul>
              <li>
                <div className="left">
                  <span className="glyph"></span>{t("standards.networks.items.evm")}
                </div>
                <span className="meta">EVM</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Solana
                </div>
                <span className="meta">SVM</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Canton Network
                </div>
                <span className="meta">{t("standards.networks.items.privacy")}</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Bitcoin
                </div>
                <span className="meta">BTC</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>IOTA
                </div>
                <span className="meta">DAG</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>ZKsync Prividium
                </div>
                <span className="meta">{t("standards.networks.items.privateRollup")}</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>{t("standards.networks.items.privateBlockchain")}
                </div>
                <span className="meta">{t("standards.networks.items.permissioned")}</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>{t("standards.networks.items.publicBlockchain")}
                </div>
                <span className="meta">{t("standards.networks.items.open")}</span>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>{t("standards.jurisdictions.heading")}</h3>
            <ul>
              <li>
                <div className="left">
                  <span className="glyph"></span>{t("standards.jurisdictions.items.kenya")}
                </div>
                <span className="meta">KE</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>{t("standards.jurisdictions.items.botswana")}
                </div>
                <span className="meta">BW</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>{t("standards.jurisdictions.items.rwanda")}
                </div>
                <span className="meta">RW</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Regulation S
                </div>
                <span className="meta">{t("standards.jurisdictions.items.nonUs")}</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>Regulation D
                </div>
                <span className="meta">{t("standards.jurisdictions.items.usAccredited")}</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>MiCA
                </div>
                <span className="meta">EU</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>{t("standards.jurisdictions.items.swissDlt")}
                </div>
                <span className="meta">CH</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>{t("standards.jurisdictions.items.masGuidelines")}
                </div>
                <span className="meta">SG</span>
              </li>
              <li>
                <div className="left">
                  <span className="glyph"></span>{t("standards.jurisdictions.items.customCounsel")}
                </div>
                <span className="meta">{t("standards.jurisdictions.items.bespoke")}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
