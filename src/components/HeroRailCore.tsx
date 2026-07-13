import { useEffect, useState } from "react";
import { SPLINE_HERO_URL } from "../lib/config";

const RailCoreSVG = () => (
  <svg
    viewBox="0 0 640 640"
    role="img"
    aria-label="Sereel settlement core — capital rails converging on a custody and settlement system"
    className="h-full w-full"
    data-testid="hero-railcore-svg"
  >
    <defs>
      <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1AA16C" stopOpacity="0.22" />
        <stop offset="55%" stopColor="#1AA16C" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#1AA16C" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="railIn" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#98A2B3" stopOpacity="0" />
        <stop offset="100%" stopColor="#98A2B3" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="railOut" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#98A2B3" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#98A2B3" stopOpacity="0" />
      </linearGradient>
    </defs>

    <circle cx="320" cy="320" r="290" fill="url(#coreGlow)" className="rail-core-glow" />

    {/* inbound rails */}
    <g strokeWidth="1">
      <line x1="8" y1="272" x2="176" y2="272" stroke="url(#railIn)" />
      <line x1="8" y1="320" x2="160" y2="320" stroke="url(#railIn)" />
      <line x1="8" y1="368" x2="176" y2="368" stroke="url(#railIn)" />
      <line x1="464" y1="272" x2="632" y2="272" stroke="url(#railOut)" />
      <line x1="480" y1="320" x2="632" y2="320" stroke="url(#railOut)" />
      <line x1="464" y1="368" x2="632" y2="368" stroke="url(#railOut)" />
    </g>

    {/* rail pulses */}
    <circle cx="20" cy="272" r="2.5" fill="#77DEAF" className="rail-pulse" />
    <circle cx="12" cy="320" r="2.5" fill="#77DEAF" className="rail-pulse" style={{ animationDelay: "1.4s" }} />
    <circle cx="20" cy="368" r="2.5" fill="#77DEAF" className="rail-pulse" style={{ animationDelay: "2.6s" }} />
    <circle cx="470" cy="272" r="2.5" fill="#77DEAF" className="rail-pulse" style={{ animationDelay: "0.8s" }} />
    <circle cx="482" cy="320" r="2.5" fill="#77DEAF" className="rail-pulse" style={{ animationDelay: "2s" }} />
    <circle cx="470" cy="368" r="2.5" fill="#77DEAF" className="rail-pulse" style={{ animationDelay: "3.2s" }} />

    {/* tick ring (custody dial) */}
    <circle
      cx="320"
      cy="320"
      r="150"
      fill="none"
      stroke="#1AA16C"
      strokeOpacity="0.55"
      strokeWidth="9"
      strokeDasharray="1.5 11"
      className="rail-ring-outer"
    />
    {/* dashed control ring */}
    <circle
      cx="320"
      cy="320"
      r="118"
      fill="none"
      stroke="#98A2B3"
      strokeOpacity="0.3"
      strokeWidth="1"
      strokeDasharray="52 26"
      className="rail-ring-mid"
    />
    {/* structural ring */}
    <circle cx="320" cy="320" r="92" fill="none" stroke="rgba(152,162,179,0.22)" strokeWidth="1" />

    {/* core */}
    <circle cx="320" cy="320" r="64" fill="#0E141B" stroke="rgba(152,162,179,0.28)" strokeWidth="1" />
    <circle
      cx="320"
      cy="320"
      r="64"
      fill="none"
      stroke="#1AA16C"
      strokeWidth="1.5"
      strokeDasharray="110 292"
      strokeLinecap="round"
      className="rail-arc"
    />

    {/* stacked ledger layers */}
    <g>
      <rect x="290" y="298" width="60" height="7" rx="3.5" fill="#1AA16C" />
      <rect x="290" y="314" width="60" height="7" rx="3.5" fill="#77DEAF" fillOpacity="0.55" />
      <rect x="290" y="330" width="42" height="7" rx="3.5" fill="#98A2B3" fillOpacity="0.4" />
    </g>

    {/* connection nodes */}
    <circle cx="176" cy="272" r="2" fill="#98A2B3" fillOpacity="0.6" />
    <circle cx="160" cy="320" r="2" fill="#98A2B3" fillOpacity="0.6" />
    <circle cx="176" cy="368" r="2" fill="#98A2B3" fillOpacity="0.6" />
    <circle cx="464" cy="272" r="2" fill="#98A2B3" fillOpacity="0.6" />
    <circle cx="480" cy="320" r="2" fill="#98A2B3" fillOpacity="0.6" />
    <circle cx="464" cy="368" r="2" fill="#98A2B3" fillOpacity="0.6" />
  </svg>
);

export const HeroRailCore = () => {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  );
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const useSpline = Boolean(SPLINE_HERO_URL) && isDesktop && !reducedMotion;

  return (
    <div
      data-testid="hero-railcore"
      className="relative mx-auto aspect-square w-full max-w-[560px]"
    >
      {useSpline ? (
        <iframe
          src={SPLINE_HERO_URL}
          title="Sereel settlement core"
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
          data-testid="hero-spline-embed"
        />
      ) : (
        <RailCoreSVG />
      )}
    </div>
  );
};
