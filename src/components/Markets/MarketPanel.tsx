import { useTranslation } from "react-i18next";
import { useLang } from "../../i18n/LanguageProvider";
import { type FigureId, type Market, formatAsOf, formatValue, markets } from "../../data/markets";
import { Sparkline } from "./Sparkline";

interface MarketPanelProps {
  /** "full" shows every figure with sparklines and sources; "compact" shows three key figures. */
  variant?: "full" | "compact";
  compactFigures?: FigureId[];
}

const MarketCard = ({ market, variant, compactFigures }: { market: Market } & Required<MarketPanelProps>) => {
  const { t } = useTranslation();
  const { lang } = useLang();
  const figures =
    variant === "compact"
      ? compactFigures
          .map((id) => market.figures.find((figure) => figure.id === id))
          .filter((figure): figure is NonNullable<typeof figure> => Boolean(figure))
      : market.figures;

  return (
    <article className={`market-card is-${variant}`} aria-labelledby={`market-${market.id}-${variant}`}>
      <header className="market-card-head">
        <h3 id={`market-${market.id}-${variant}`}>{t(`markets.countries.${market.id}`)}</h3>
        <span className="mono">{market.currency}</span>
      </header>
      <dl className="market-figures">
        {figures.map((figure) => (
          <div className="market-figure" key={figure.id}>
            <dt>{t(`markets.figures.${figure.id}`)}</dt>
            <dd>
              <span className="market-value">{formatValue(figure, lang)}</span>
              {figure.unit !== "%" && <span className="market-unit">{figure.unit}</span>}
              {variant === "full" && figure.series && (
                <Sparkline series={figure.series} stepped={figure.id === "policyRate"} />
              )}
              <a className="market-source" href={figure.sourceUrl ?? undefined} target="_blank" rel="noopener noreferrer">
                {figure.source} · {formatAsOf(figure, lang)}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
};

export const MarketPanel = ({ variant = "full", compactFigures = ["policyRate", "inflation", "fxUsd"] }: MarketPanelProps) => (
  <div className={`market-panel is-${variant}`}>
    {markets.map((market) => (
      <MarketCard key={market.id} market={market} variant={variant} compactFigures={compactFigures} />
    ))}
  </div>
);
