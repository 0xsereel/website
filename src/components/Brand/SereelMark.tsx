import { type MotionValue, motion } from "framer-motion";

/**
 * The Sereel mark drawn inline so each petal can be addressed on its own.
 * The viewBox is centred on the centre circle, so a wrapper's
 * transform-origin of 50% 50% rotates the mark around its middle.
 *
 * Petal order follows the logo: 0 = top, 1 = lower left, 2 = lower right.
 */
export const MARK_VIEWBOX = "258.3 155.7 600 600";

const PETALS = [
  "M616.581 293.465C619.519 349.499 582.738 377.724 558.092 377.724L558.092 162.046C563.433 160.46 587.737 200.691 587.737 200.691C587.737 200.691 613.643 237.43 616.581 293.465ZM499.599 293.437C496.661 349.459 533.442 377.679 558.088 377.679L558.088 162.046C552.747 160.46 528.443 200.683 528.443 200.683C528.443 200.683 502.537 237.414 499.599 293.437Z",
  "M493.546 496.034C505.864 518.159 500.67 565.275 452.395 590.646C404.114 616.02 360.469 611.133 360.469 611.133C360.469 611.133 314.72 609.431 313.362 603.845C309.386 599.818 330.835 557.918 330.835 557.918C330.835 557.918 348.581 516.296 393.934 485.642C439.286 454.988 481.261 473.888 493.585 496.01L493.546 496.034Z",
  "M723.091 485.677C677.748 455.029 635.778 473.933 623.455 496.055L803.634 603.871C807.63 599.87 786.172 557.944 786.172 557.944C786.172 557.944 768.433 516.325 723.091 485.677ZM664.575 590.66C616.285 565.28 611.09 518.154 623.414 496.032L803.631 603.871C802.286 609.459 756.517 611.157 756.517 611.157C756.517 611.157 712.865 616.04 664.575 590.66Z",
] as const;

type Highlight = number | MotionValue<number>;

interface SereelMarkProps {
  className?: string;
  /** Opacity (0 to 1) of the accent fill on each petal: [top, lower left, lower right]. */
  highlight?: [Highlight, Highlight, Highlight];
  /** Draw the green halo behind the mark (the original logo glow). Off for small glyphs. */
  glow?: boolean;
}

/*
 * The halo is a pre-rendered image (public/images/Hero/mark-glow.webp) centred on the mark
 * and 2.5 times its size. A raster layer keeps the wide glow cheap while the mark spins;
 * a live SVG blur that wide would repaint every frame.
 */
export const SereelMark = ({ className, highlight = [0, 0, 0], glow = true }: SereelMarkProps) => (
  <span className={["sereel-mark", className].filter(Boolean).join(" ")} aria-hidden="true">
    {glow && <img className="sereel-mark-halo" src="/images/Hero/mark-glow.webp" alt="" decoding="async" draggable={false} />}
    <svg viewBox={MARK_VIEWBOX} fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
      {PETALS.map((d) => (
        <path key={d.slice(0, 12)} d={d} fillRule="evenodd" clipRule="evenodd" className="mark-shape" />
      ))}
      <ellipse
        cx="558.292"
        cy="455.655"
        rx="66.0781"
        ry="63.7554"
        transform="rotate(-90 558.292 455.655)"
        className="mark-shape"
      />
      {PETALS.map((d, index) => (
        <motion.path
          key={`hl-${d.slice(0, 12)}`}
          d={d}
          fillRule="evenodd"
          clipRule="evenodd"
          className="mark-petal-highlight"
          style={{ opacity: highlight[index] }}
        />
      ))}
    </svg>
  </span>
);
