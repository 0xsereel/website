import { Link } from "react-router-dom";
import { C } from "./theme";

export function V4Footer() {
    return (
        <footer style={{ borderTop: `1px solid ${C.border}`, padding: "48px clamp(16px,4vw,56px) 28px" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", gap: 28 }}>
                <div>
                    <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, textDecoration: "none" }}>
                        <img src='/images/Hero/glowing_seree_logo.svg' alt='Sereel' style={{ width: 24, height: 24 }} />
                        <span style={{ fontSize: 16, fontWeight: 800, fontFamily: "var(--display)", color: C.w }}>sereel</span>
                    </Link>
                    <p style={{ fontSize: 12.5, color: C.d, lineHeight: 1.7, maxWidth: 220 }}>Where Traditional Finance Meets Digital Assets.</p>
                </div>
                {[
                    { 
                        t: "Platform", 
                        l: [
                            { label: "Custody", to: "/platform/custody" },
                            { label: "Tokenization", to: "/platform/tokenization" },
                            { label: "Marketplace", to: "/platform/marketplace" },
                            { label: "APIs", to: "/platform/apis" },
                            { label: "Settlement", to: "/platform/settlement" }
                        ] 
                    },
                    { 
                        t: "Solutions", 
                        l: [
                            { label: "Fund Managers", to: "/solutions/fund-managers" },
                            { label: "Exchanges", to: "/solutions/exchanges" },
                            { label: "Banks", to: "/solutions/banks" },
                            { label: "Family Offices", to: "/solutions/family-offices" }
                        ] 
                    },
                    { 
                        t: "Resources", 
                        l: [
                            { label: "Blog", to: "/blog" },
                            { label: "Whitepapers", to: "/resources/whitepapers" }
                        ] 
                    },
                    { 
                        t: "Company", 
                        l: [
                            { label: "About", to: "/about" },
                            { label: "Advisory", to: "/advisory" },
                            { label: "Careers", to: "/careers" },
                            { label: "Contact", to: "/contact" }
                        ] 
                    },
                ].map(c => (
                    <div key={c.t}>
                        <h4 style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 18, color: C.w, fontFamily: "var(--mono)" }}>{c.t}</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                            {c.l.map(item => (
                                <Link key={item.label} to={item.to} style={{ fontSize: 13, color: C.d, textDecoration: "none", transition: "color 0.2s" }} 
                                    onMouseEnter={e => (e.target as HTMLElement).style.color = C.w} 
                                    onMouseLeave={e => (e.target as HTMLElement).style.color = C.d}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ maxWidth: 1120, margin: "32px auto 0", paddingTop: 16, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: C.dd }}>© 2025 Sereel. All rights reserved.</span>
                <div style={{ display: "flex", gap: 18 }}>
                    {["Twitter", "LinkedIn", "GitHub"].map(s => <span key={s} style={{ fontSize: 11, color: C.d, cursor: "pointer" }} onMouseEnter={e => (e.target as HTMLElement).style.color = C.w} onMouseLeave={e => (e.target as HTMLElement).style.color = C.d}>{s}</span>)}
                </div>
            </div>
        </footer>
    );
}
