import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { C } from "./theme";

export function V4Nav() {
    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const fn = () => setNavBg(window.scrollY > 30);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 64,
            padding: "0 clamp(16px,4vw,56px)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: navBg ? C.bg + "f2" : "transparent",
            backdropFilter: navBg ? "blur(28px) saturate(1.4)" : "none",
            borderBottom: navBg ? `1px solid ${C.border}` : "1px solid transparent",
            transition: "all 0.4s ease",
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <img src='/images/Hero/glowing_seree_logo.svg' alt='Sereel' style={{ width: 30, height: 30 }} />
                <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.3px", fontFamily: "var(--display)" }}>sereel</span>
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                {[
                    { label: "Platform", to: "/platform" },
                    { label: "Solutions", to: "/solutions" },
                    { label: "Developers", to: "/developers" },
                    { label: "Advisory", to: "/advisory" },
                ].map(item => (
                    <Link key={item.label} to={item.to} style={{ color: C.m, textDecoration: "none", fontSize: 13, fontWeight: 500, transition: "color 0.2s", fontFamily: "var(--body)" }}
                        onMouseEnter={e => (e.target as HTMLElement).style.color = C.w} onMouseLeave={e => (e.target as HTMLElement).style.color = C.m}>{item.label}</Link>
                ))}
                <div style={{ width: 1, height: 16, background: C.border, margin: "0 4px" }} />
                <Link to="/contact" className="sb" style={{ padding: "9px 22px", fontSize: 12.5, textDecoration: "none" }}>Schedule Consultation</Link>
            </div>
        </nav>
    );
}
