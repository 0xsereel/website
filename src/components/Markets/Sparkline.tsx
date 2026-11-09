import type { SeriesPoint } from "../../data/markets";

interface SparklineProps {
  series: SeriesPoint[];
  width?: number;
  height?: number;
  /** Draw steps instead of a line, for rates set at meetings. */
  stepped?: boolean;
}

/** A small trend line. Purely visual: the value and its source sit beside it as text. */
export const Sparkline = ({ series, width = 120, height = 36, stepped = false }: SparklineProps) => {
  if (series.length < 3) return null;

  const values = series.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  // Floor the range at 1% of the level so tiny moves (an exchange rate) don't look volatile.
  const span = Math.max(max - min, Math.abs(max) * 0.01) || 1;
  const base = min - (span - (max - min)) / 2;
  const pad = 3;
  const x = (index: number) => pad + (index / (series.length - 1)) * (width - pad * 2);
  const y = (value: number) => height - pad - ((value - base) / span) * (height - pad * 2);

  const points = series.map((point, index) => [x(index), y(point.value)] as const);
  const path = stepped
    ? points.map(([px, py], index) => (index === 0 ? `M${px} ${py}` : `H${px} V${py}`)).join(" ")
    : points.map(([px, py], index) => `${index === 0 ? "M" : "L"}${px} ${py}`).join(" ");
  const [lastX, lastY] = points[points.length - 1];

  return (
    <svg className="sparkline" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <path d={path} fill="none" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={lastX} cy={lastY} r="2.6" />
    </svg>
  );
};
