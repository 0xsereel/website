import raw from "./markets.json";

export type FigureId = "policyRate" | "tbill91" | "fxUsd" | "inflation";
export type MarketId = "kenya" | "rwanda";

export interface SeriesPoint {
  date: string;
  value: number;
}

export interface Figure {
  id: FigureId;
  value: number | null;
  unit: string;
  asOf: string | null;
  period?: string;
  source: string;
  sourceUrl: string | null;
  series?: SeriesPoint[];
}

export interface Market {
  id: MarketId;
  currency: string;
  figures: Figure[];
}

/** Only figures that carry a value, a date and a source link are shown. */
export const isPublishable = (figure: Figure): figure is Figure & { value: number; asOf: string; sourceUrl: string } =>
  figure.value !== null && figure.asOf !== null && figure.sourceUrl !== null;

export const markets: Market[] = (raw.markets as Market[]).map((market) => ({
  ...market,
  figures: market.figures.filter(isPublishable),
}));

export const findFigure = (market: Market, id: FigureId) => market.figures.find((figure) => figure.id === id);

const locale = (lang: string) => (lang === "fr" ? "fr-FR" : "en-GB");

export const formatValue = (figure: Figure, lang: string) => {
  if (figure.value === null) return "";
  const number = new Intl.NumberFormat(locale(lang), {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(figure.value);
  return figure.unit === "%" ? `${number}%` : number;
};

export const formatAsOf = (figure: Figure, lang: string) => {
  if (!figure.asOf) return "";
  const date = new Date(`${figure.asOf}T12:00:00Z`);
  // Monthly statistics read as a month; everything else as a day.
  const options: Intl.DateTimeFormatOptions = figure.period
    ? { month: "long", year: "numeric", timeZone: "UTC" }
    : { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" };
  return new Intl.DateTimeFormat(locale(lang), options).format(date);
};
