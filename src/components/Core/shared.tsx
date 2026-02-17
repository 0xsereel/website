import { useState, useEffect, useRef } from "react";
import { C } from "./theme";

/* ─── Animated Mesh Gradient Hero Background ─── */
export function MeshBg() {
    return (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            {/* Large morphing blob */}
            <div style={{
                position: "absolute", top: "-10%", right: "-5%",
                width: "60vw", height: "60vw", maxWidth: 800, maxHeight: 800,
                borderRadius: "30% 70% 60% 40% / 50% 30% 70% 50%",
                background: `radial-gradient(ellipse at 30% 40%, ${C.g}08, ${C.g}03 50%, transparent 70%)`,
                animation: "morph 20s ease-in-out infinite",
                filter: "blur(40px)",
            }} />
            {/* Secondary blob */}
            <div style={{
                position: "absolute", bottom: "5%", left: "-10%",
                width: "45vw", height: "45vw", maxWidth: 600, maxHeight: 600,
                borderRadius: "60% 40% 30% 70% / 40% 60% 40% 60%",
                background: `radial-gradient(ellipse at 60% 60%, ${C.g}05, transparent 60%)`,
                animation: "morph 25s ease-in-out infinite reverse",
                filter: "blur(50px)",
            }} />
            {/* Dot matrix grid */}
            <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.25 }}>
                <defs>
                    <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="0.5" fill={C.g} opacity="0.15" />
                    </pattern>
                    <radialGradient id="dotMask">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="60%" stopColor="white" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <mask id="dm"><rect width="100%" height="100%" fill="url(#dotMask)" /></mask>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" mask="url(#dm)" />
            </svg>
            {/* Horizon glow */}
            <div style={{
                position: "absolute", bottom: 0, left: "10%", right: "10%", height: 1,
                background: `linear-gradient(90deg, transparent, ${C.g}15, transparent)`,
            }} />
        </div>
    );
}

/* ─── Hooks ─── */
export function useVis(th = 0.1) {
    const r = useRef<HTMLDivElement>(null);
    const [v, setV] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => e.isIntersecting && setV(true), { threshold: th });
        if (r.current) {
            o.observe(r.current);
        }
        return () => o.disconnect();
    }, [th]);
    return { r, v };
}

export function useCt(end: number, dur = 2200) {
    const [n, setN] = useState(0);
    const [go, setGo] = useState(false);
    const r = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => e.isIntersecting && setGo(true), { threshold: 0.3 });
        if (r.current) {
            o.observe(r.current);
        }
        return () => o.disconnect();
    }, []);
    useEffect(() => {
        if (!go) return;
        let v = 0; const s = end / (dur / 16);
        const t = setInterval(() => { v += s; if (v >= end) { setN(end); clearInterval(t); } else setN(Math.floor(v)); }, 16);
        return () => clearInterval(t);
    }, [go, end, dur]);
    return { n, r };
}

interface RvProps {
    children: React.ReactNode;
    d?: number;
    s?: React.CSSProperties;
}

export function Rv({ children, d = 0, s = {} }: RvProps) {
    const { r, v } = useVis();
    return <div ref={r} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)", transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${d}s`, ...s }}>{children}</div>;
}

/* ─── Marquee ─── */
export function ChainBar() {
    const c = ["Ethereum", "Arbitrum", "Base", "Polygon", "Optimism", "Solana", "IOTA", "Starknet", "Canton Network", "Chainlink CCIP"];
    return (
        <div style={{ overflow: "hidden", position: "relative", padding: "16px 0" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: `linear-gradient(90deg, ${C.bg}, transparent)`, zIndex: 2 }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: `linear-gradient(-90deg, ${C.bg}, transparent)`, zIndex: 2 }} />
            <div style={{ display: "flex", gap: 44, animation: "marquee 40s linear infinite", width: "max-content" }}>
                {[...c, ...c, ...c].map((n, i) => (
                    <div key={i} style={{ color: C.d, fontSize: 11, fontFamily: "var(--mono)", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 500, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 3, height: 3, borderRadius: "50%", background: C.g, opacity: 0.4 }} />{n}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─── Glow Card ─── */
interface GcProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    p?: string;
}

export function Gc({ children, style = {}, p = "32px" }: GcProps) {
    const [h, setH] = useState(false);
    return (
        <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
            background: h ? C.cardHi : C.card, border: `1px solid ${h ? C.g + "25" : C.border}`,
            borderRadius: 14, padding: p, position: "relative", overflow: "hidden",
            transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
            transform: h ? "translateY(-2px)" : "none",
            boxShadow: h ? `0 24px 64px -16px ${C.g}12` : "none",
            ...style,
        }}>
            <div style={{
                position: "absolute", top: 0, left: "15%", right: "15%", height: 1,
                background: h ? `linear-gradient(90deg, transparent, ${C.g}40, transparent)` : "transparent",
                transition: "all 0.5s ease",
            }} />
            {children}
        </div>
    );
}
