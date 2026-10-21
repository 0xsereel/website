import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogs from "../../Blog Data/Blogs.json";
import { SEO } from "../../components/SEO";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../components/SEO/StructuredData";
import { getBlogPath, normalizeImagePath } from "../../utils/blog";
import { useLang } from "../../i18n/LanguageProvider";

type JournalPost = {
  id: number;
  title: string;
  image: string;
  content: string;
  summary?: string;
  date?: string;
  slug?: string;
  description?: string;
  imageAlt?: string;
};

// Blogs.json is maintained newest-first, matching the journal index.
const latestPost = (blogs as JournalPost[])[0];

const EXCERPT_MAX = 190;

// Most summaries in Blogs.json are hard-truncated mid-word, so they are only
// used when they end on a complete sentence. Otherwise the excerpt is rebuilt
// from the article body and cut on a sentence break, never inside a word.
const postExcerpt = (post: JournalPost) => {
  if (post.description) return post.description;
  const summary = post.summary?.trim() ?? "";
  if (/[.!?]$/.test(summary)) return summary;

  const body = post.content.replace(/\s+/g, " ").trim();
  if (body.length <= EXCERPT_MAX) return body;

  const head = body.slice(0, EXCERPT_MAX);
  const sentenceEnd = Math.max(
    head.lastIndexOf(". "),
    head.lastIndexOf("! "),
    head.lastIndexOf("? "),
  );
  if (sentenceEnd > 90) return head.slice(0, sentenceEnd + 1);

  return `${head.slice(0, head.lastIndexOf(" "))}…`;
};

type Segment = {
  slug: string;
  name: string;
  copy: string;
  layers: string[];
};

type StackLayer = {
  slug: string;
  aliases?: string[];
  title: string;
  detail: string;
  control: string;
  record: string;
  outcome: string;
};

type SegmentMeta = { slug: string; key: string };

type StackLayerMeta = { slug: string; aliases?: string[]; key: string };

type StandardMeta = { key: string; name: string; href: string };

const segmentMeta: SegmentMeta[] = [
  { slug: "solution-asset-managers", key: "assetManagers" },
  { slug: "solution-issuers-arrangers", key: "issuersArrangers" },
  { slug: "solution-banks-custodians", key: "banksCustodians" },
  { slug: "solution-fintechs", key: "fintechs" },
  { slug: "solution-broker-dealers-platforms", key: "brokerDealersPlatforms" },
  { slug: "solution-family-offices-treasuries", key: "familyOfficesTreasuries" },
  { slug: "solution-institutional-strategy-teams", key: "institutionalStrategyTeams" },
];

const stackLayerMeta: StackLayerMeta[] = [
  { slug: "product-custody", key: "custody" },
  { slug: "product-compliance", key: "compliance" },
  { slug: "product-tokenization", key: "tokenization" },
  {
    slug: "product-settlement",
    aliases: ["product-marketplace-settlement", "product-lifecycle-reporting"],
    key: "settlement",
  },
  {
    slug: "product-marketplace",
    aliases: ["product-controlled-distribution"],
    key: "marketplace",
  },
  { slug: "product-rwa-lending", key: "rwaLending" },
  { slug: "product-strategy", key: "strategy" },
];

const standardMeta: StandardMeta[] = [
  { key: "erc3643", name: "ERC-3643", href: "/standards" },
  { key: "cmtat", name: "CMTAT", href: "/standards" },
  { key: "vaspReady", name: "VASP-ready", href: "/standards" },
];

export const Home = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);

  const segments: Segment[] = useMemo(
    () =>
      segmentMeta.map((meta) => ({
        slug: meta.slug,
        name: t(`home.useCases.segments.${meta.key}.name`),
        copy: t(`home.useCases.segments.${meta.key}.copy`),
        layers: t(`home.useCases.segments.${meta.key}.layers`, {
          returnObjects: true,
        }) as string[],
      })),
    [t],
  );

  const stackLayers: StackLayer[] = useMemo(
    () =>
      stackLayerMeta.map((meta) => ({
        slug: meta.slug,
        aliases: meta.aliases,
        title: t(`home.platform.layers.${meta.key}.title`),
        detail: t(`home.platform.layers.${meta.key}.detail`),
        control: t(`home.platform.layers.${meta.key}.control`),
        record: t(`home.platform.layers.${meta.key}.record`),
        outcome: t(`home.platform.layers.${meta.key}.outcome`),
      })),
    [t],
  );

  const standards = useMemo(
    () =>
      standardMeta.map((meta) => ({
        name: meta.name,
        role: t(`home.standards.items.${meta.key}.role`),
        proof: t(`home.standards.items.${meta.key}.proof`),
        href: meta.href,
      })),
    [t],
  );

  const issuerResponsibilities = t("home.responsibility.issuerItems", {
    returnObjects: true,
  }) as string[];
  const sereelResponsibilities = t("home.responsibility.sereelItems", {
    returnObjects: true,
  }) as string[];

  const segment = segments[activeSegment];
  const layer = stackLayers[activeLayer];

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const segmentIndex = segments.findIndex((item) => item.slug === hash);
      const layerIndex = stackLayers.findIndex(
        (item) => item.slug === hash || item.aliases?.includes(hash)
      );
      const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (!section) return;

        window.requestAnimationFrame(() => {
          section.scrollIntoView({ block: "start" });
        });
      };

      if (segmentIndex >= 0) {
        setActiveSegment(segmentIndex);
        scrollToSection("served");
      }

      if (layerIndex >= 0) {
        setActiveLayer(layerIndex);
        scrollToSection("platform");
      }

      if (hash === "standards") {
        scrollToSection("standards");
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [segments, stackLayers]);

  const selectSegment = (index: number) => {
    setActiveSegment(index);
    window.history.replaceState(null, "", `#${segments[index].slug}`);
  };

  const selectLayer = (index: number) => {
    setActiveLayer(index);
    window.history.replaceState(null, "", `#${stackLayers[index].slug}`);
  };

  return (
    <main className="marketing-page">
      <SEO
        canonical={localize("/")}
        hreflangPath="/"
        structuredData={[generateOrganizationSchema(), generateWebSiteSchema()]}
      />
      <section className="marketing-hero wrap" aria-labelledby="home-hero-title">
        <div className="hero-copy">
          <h1 id="home-hero-title">{t("home.hero.title")}</h1>
          <p className="hero-subhead">{t("home.hero.subhead")}</p>
          <div className="hero-actions" aria-label={t("home.hero.primaryActionLabel")}>
            <Link className="market-cta primary" to={localize("/contact")}>
              {t("home.cta.scheduleConsultation")}
            </Link>
          </div>
        </div>

        <div className="logo-stage hero-logo-stage" aria-hidden="true">
          <img src="/images/Hero/glowing_seree_logo_expanded.svg" alt="" />
        </div>
      </section>

      <section className="marketing-section served-section wrap" id="served">
        <div className="section-copy compact">
          <h2>{t("home.useCases.heading")}</h2>
          <p>{t("home.useCases.description")}</p>
        </div>

        <div className="segment-selector">
          <div
            className="segment-tabs"
            role="tablist"
            aria-label={t("home.useCases.heading")}
          >
            {segments.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                role="tab"
                id={item.slug}
                aria-selected={activeSegment === index}
                aria-controls="segment-panel"
                className={activeSegment === index ? "active" : ""}
                onClick={() => selectSegment(index)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div
            id="segment-panel"
            className="segment-panel"
            role="tabpanel"
            aria-labelledby={segment.slug}
          >
            <span className="panel-label">{t("home.useCases.panelLabel")}</span>
            <h3>{segment.name}</h3>
            <p>{segment.copy}</p>
            <div className="segment-layer-list" aria-label={t("home.useCases.railLabel")}>
              {segment.layers.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section stack-section" id="platform">
        <div className="wrap">
          <div className="section-copy">
            <h2>{t("home.platform.heading")}</h2>
            <p>{t("home.platform.description")}</p>
          </div>

          <div className="layer-system">
            <div className="layer-list" aria-label={t("home.platform.layerListLabel")}>
              {stackLayers.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  id={item.slug}
                  className={activeLayer === index ? "active" : ""}
                  onClick={() => selectLayer(index)}
                  onFocus={() => setActiveLayer(index)}
                  onMouseEnter={() => setActiveLayer(index)}
                  aria-pressed={activeLayer === index}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </button>
              ))}
            </div>

            <div className="layer-detail" aria-live="polite">
              <h3>{layer.title}</h3>
              <p>{layer.detail}</p>
              <div className="workflow-lines">
                <div className="workflow-line">
                  <span className="ledger-label">{t("home.platform.controlLabel")}</span>
                  <p>{layer.control}</p>
                </div>
                <div className="workflow-line">
                  <span className="ledger-label">{t("home.platform.recordLabel")}</span>
                  <p>{layer.record}</p>
                </div>
                <div className="workflow-line">
                  <span className="ledger-label">{t("home.platform.outcomeLabel")}</span>
                  <p>{layer.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section responsibility-section">
        <div className="wrap responsibility-grid">
          <div className="section-copy compact">
            <h2>{t("home.responsibility.heading")}</h2>
            <p>{t("home.responsibility.description")}</p>
          </div>

          <div className="responsibility-ledger">
            <div>
              <h3>{t("home.responsibility.issuerHeading")}</h3>
              <ul>
                {issuerResponsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{t("home.responsibility.sereelHeading")}</h3>
              <ul>
                {sereelResponsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section standards-proof wrap" id="standards">
        <div className="section-copy">
          <h2>{t("home.standards.heading")}</h2>
          <p>{t("home.standards.description")}</p>
        </div>

        <div className="standards-ledger">
          {standards.map((standard) => (
            <article key={standard.name}>
              <strong>
                <Link to={localize(standard.href)}>{standard.name}</Link>
              </strong>
              <span>{standard.role}</span>
              <p>{standard.proof}</p>
            </article>
          ))}
        </div>
      </section>

      {latestPost && (
        <section
          className="marketing-section journal-section wrap"
          id="journal"
          aria-labelledby="home-journal-title"
        >
          <div className="section-copy compact">
            <h2 id="home-journal-title">{t("home.journal.heading")}</h2>
            <p>{t("home.journal.description")}</p>
          </div>

          <article className="journal-feature">
            <Link
              className="journal-cover"
              to={getBlogPath(latestPost)}
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                src={normalizeImagePath(latestPost.image)}
                alt={latestPost.imageAlt ?? ""}
                loading="lazy"
              />
            </Link>

            <div className="journal-body">
              <div className="journal-meta">
                <span className="ledger-label">{t("home.journal.latestLabel")}</span>
                {latestPost.date && <span>{latestPost.date}</span>}
              </div>
              <h3>
                <Link to={getBlogPath(latestPost)}>{latestPost.title}</Link>
              </h3>
              <p>{postExcerpt(latestPost)}</p>
              <div className="journal-actions">
                <Link className="market-cta secondary" to={getBlogPath(latestPost)}>
                  {t("home.journal.readArticle")}
                </Link>
                <Link className="journal-all" to="/blog">
                  {t("home.journal.allArticles")}
                </Link>
              </div>
            </div>
          </article>
        </section>
      )}

      <section className="marketing-cta-band">
        <div className="wrap">
          <h2>{t("home.ctaBand.heading")}</h2>
          <Link className="market-cta primary" to={localize("/contact")}>
            {t("home.cta.scheduleConsultation")}
          </Link>
        </div>
      </section>
    </main>
  );
};
