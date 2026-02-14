import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import blogsData from "../../Blog Data/Blogs.json";
import { C, grd, grdT } from "../../components/V4/theme";
import { MeshBg, Gc, Rv, useCt, ChainBar } from "../../components/V4/shared";

/* ═══════════════════════════════════════════
   SEREEL v4 — Cinematic Institutional Design
   ═══════════════════════════════════════════ */

interface BlogPost {
    id: number;
    title: string;
    image: string;
    summary: string;
    date?: string;
    content?: string;
}

/* ─── Hero Word Morph ─── */
function WordMorph() {
    const w = ["Tokenization", "Custody", "Settlement", "Compliance"];
    const [i, setI] = useState(0);
    const [sh, setSh] = useState(true);
    useEffect(() => {
        const iv = setInterval(() => { setSh(false); setTimeout(() => { setI(p => (p + 1) % w.length); setSh(true); }, 280); }, 2800);
        return () => clearInterval(iv);
    }, [w.length]);
    return <span style={{ display: "inline-block", ...grdT, opacity: sh ? 1 : 0, transform: sh ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.98)", transition: "all 0.28s cubic-bezier(0.16,1,0.3,1)" }}>{w[i]}</span>;
}

/* ═══════════ MAIN ═══════════ */
export function SereelV4() {
    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const fn = () => setNavBg(window.scrollY > 30);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const s1 = useCt(2); const s2 = useCt(16); const s3 = useCt(80); const s4 = useCt(24);

    const pillars = [
        { num: "01", ico: "🔐", t: "Custody & Key Management", d: "Enterprise EOA wallets and multisig with MPC recovery, audit trails, and role-based access.", tags: ["Multi-sig", "MPC", "HSM", "RBAC", "Audit Trails"] },
        { num: "02", ico: "🪙", t: "Multi-Chain Tokenization", d: "CMTA-compliant token issuance across EVM, Solana, IOTA, Starknet, and Canton Network.", tags: ["CMTAT", "ERC3643", "Multi-chain", "Privacy", "CCIP"] },
        { num: "03", ico: "📋", t: "Any Asset. Any Jurisdiction.", d: "Securities, bonds, private credit, stablecoins, and structured products across global regulatory frameworks.", tags: ["Reg S/D", "MiCA", "Swiss DLT", "MAS", "Custom"] },
        { num: "04", ico: "📊", t: "Market Infrastructure", d: "Primary issuance, secondary trading, T+0 settlement, and OTC connectivity for institutional liquidity.", tags: ["Issuance", "OTC", "T+0", "Exchange", "Clearing"] },
    ];

    const segments = [
        { ico: "📈", t: "Fund Managers", d: "Tokenize fund shares. Automate NAV and dividends. 24/7 subscriptions with programmable compliance." },
        { ico: "🏛", t: "Exchanges", d: "Launch digital asset venues. Tokenized securities integration. T+0 and around-the-clock trading." },
        { ico: "⚖️", t: "Clearing Houses", d: "Atomic settlement. Real-time collateral. Smart contract clearing. Zero failed trades." },
        { ico: "🏦", t: "Banks", d: "Tokenization-as-a-service. Digital bond programs. Blockchain treasury for corporate clients." },
        { ico: "💎", t: "Family Offices", d: "Tokenized alternatives. Multi-gen custody. Fractional ownership of illiquid assets." },
    ];

    const latestBlogs = useMemo(() => blogsData.slice(0, 3), []);

    return (
        <div style={{ background: C.bg, color: C.w, minHeight: "100vh", fontFamily: "var(--body)", overflowX: "hidden" }}>
            <style>{`
        :root { --body: 'Gilroy', sans-serif; --display: 'Gilroy-Bold', sans-serif; --mono: monospace; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }
        @keyframes morph { 0%{border-radius:30% 70% 60% 40%/50% 30% 70% 50%} 33%{border-radius:50% 50% 30% 70%/40% 60% 50% 50%} 66%{border-radius:40% 60% 50% 50%/60% 40% 60% 40%} 100%{border-radius:30% 70% 60% 40%/50% 30% 70% 50%} }
        @keyframes pulse { 0%,100%{opacity:.25} 50%{opacity:1} }
        @keyframes lineGrow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes ringRotate { 0%{transform:translate(-50%,-50%) rotate(0deg)} 100%{transform:translate(-50%,-50%) rotate(360deg)} }
        * { margin:0; padding:0; box-sizing:border-box; }
        ::selection { background:${C.g}; color:#010201; }
        html { scroll-behavior:smooth; }
        .sb {
          background: ${C.g}; color: #010201; border: none;
          padding: 14px 36px; border-radius: 8px; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          font-family: var(--body); letter-spacing: 0.2px;
        }
        .sb:hover { background: ${C.gL}; transform: translateY(-2px); box-shadow: 0 12px 40px ${C.g}30; }
        .so {
          background: transparent; color: ${C.w}; border: 1px solid ${C.border};
          padding: 14px 36px; border-radius: 8px; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.35s ease; font-family: var(--body);
        }
        .so:hover { border-color: ${C.g}35; background: ${C.gU}; transform: translateY(-2px); }
        .sl { font-size: 11px; letter-spacing: 3.5px; text-transform: uppercase; color: ${C.g}; font-weight: 500; margin-bottom: 18px; font-family: var(--mono); }
      `}</style>

            {/* ═══ NAV ═══ */}
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 64,
                padding: "0 clamp(16px,4vw,56px)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: navBg ? C.bg + "f2" : "transparent",
                backdropFilter: navBg ? "blur(28px) saturate(1.4)" : "none",
                borderBottom: navBg ? `1px solid ${C.border}` : "1px solid transparent",
                transition: "all 0.4s ease",
            }}>
                <Link to="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", color: "inherit" }}>
                    <img src='/images/Hero/glowing_seree_logo.svg' alt='Sereel' style={{ width: 30, height: 30 }} />
                    <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.3px", fontFamily: "var(--display)" }}>sereel</span>
                </Link>
                <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                    {["Platform", "Solutions", "Developers", "Advisory"].map(l => (
                        <button key={l} style={{ color: C.m, background: "none", border: "none", fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "color 0.2s", fontFamily: "var(--body)" }}
                                onMouseEnter={e => (e.target as HTMLElement).style.color = C.w} onMouseLeave={e => (e.target as HTMLElement).style.color = C.m}>{l}</button>
                    ))}
                    <div style={{ width: 1, height: 16, background: C.border, margin: "0 4px" }} />
                    <button className="sb" style={{ padding: "9px 22px", fontSize: 12.5 }}>Schedule Consultation</button>
                </div>
            </nav>

            {/* ═══ HERO ═══ */}
            <section style={{
                minHeight: "100vh", display: "flex", alignItems: "center",
                padding: "100px clamp(16px,4vw,56px) 40px", position: "relative",
            }}>
                <MeshBg />
                <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%",
                    display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 48, alignItems: "center",
                }}>
                    <div>
                        <Rv>
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: 10,
                                border: `1px solid ${C.g}20`, borderRadius: 100, padding: "7px 18px",
                                background: C.gU, marginBottom: 32,
                            }}>
                                <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.g, animation: "pulse 2s ease-in-out infinite", boxShadow: `0 0 8px ${C.g}` }} />
                                <span style={{ fontSize: 11, color: C.g, fontWeight: 500, fontFamily: "var(--mono)", letterSpacing: "2px", textTransform: "uppercase" }}>Live Infrastructure</span>
                            </div>
                        </Rv>
                        <Rv d={0.06}>
                            <h1 style={{
                                fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.0,
                                letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
                            }}>
                                Institutional<br />Digital Asset<br /><WordMorph />
                            </h1>
                        </Rv>
                        <Rv d={0.12}>
                            <p style={{ fontSize: 16, color: C.m, maxWidth: 480, lineHeight: 1.8, marginBottom: 40 }}>
                                End-to-end tokenization, custody, and market infrastructure
                                for asset managers, banks, exchanges, and family offices.
                            </p>
                        </Rv>
                        <Rv d={0.18}>
                            <div style={{ display: "flex", gap: 12 }}>
                                <button className="sb">Schedule Consultation</button>
                                <button className="so">Download Overview</button>
                            </div>
                        </Rv>
                    </div>

                    {/* Right side: live-looking data card */}
                    <Rv d={0.25}>
                        <div style={{
                            background: C.card, border: `1px solid ${C.border}`,
                            borderRadius: 16, padding: "28px 24px", position: "relative",
                            boxShadow: `0 40px 80px -20px ${C.bg}`,
                        }}>
                            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: `linear-gradient(90deg, transparent, ${C.g}30, transparent)` }} />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                                <span style={{ fontSize: 11, color: C.d, fontFamily: "var(--mono)", letterSpacing: "2px", textTransform: "uppercase" }}>Platform Status</span>
                                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.g, animation: "pulse 2s infinite", boxShadow: `0 0 10px ${C.g}60` }} />
                                    <span style={{ fontSize: 11, color: C.g, fontFamily: "var(--mono)" }}>Operational</span>
                                </div>
                            </div>

                            {/* Mini stat rows */}
                            {[
                                { l: "Networks Active", v: "10", bar: 85 },
                                { l: "Tokens Deployed", v: "47", bar: 62 },
                                { l: "Settlement Uptime", v: "99.97%", bar: 99 },
                                { l: "Avg. Finality", v: "< 2s", bar: 45 },
                            ].map((row, i) => (
                                <div key={i} style={{ padding: "14px 0", borderBottom: i < 3 ? `1px solid ${C.border}` : "none" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                        <span style={{ fontSize: 12.5, color: C.m }}>{row.l}</span>
                                        <span style={{ fontSize: 12.5, color: C.w, fontWeight: 600, fontFamily: "var(--mono)" }}>{row.v}</span>
                                    </div>
                                    <div style={{ height: 2, background: C.border, borderRadius: 1, overflow: "hidden" }}>
                                        <div style={{
                                            height: "100%", width: `${row.bar}%`, borderRadius: 1,
                                            background: grd, transition: "width 1.5s ease",
                                            boxShadow: `0 0 8px ${C.g}30`,
                                        }} />
                                    </div>
                                </div>
                            ))}

                            {/* Bottom row */}
                            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                                {["EVM", "Solana", "IOTA", "Canton"].map(t => (
                                    <span key={t} style={{
                                        fontSize: 10, color: C.d, fontFamily: "var(--mono)", letterSpacing: "1px",
                                        padding: "5px 10px", borderRadius: 6, background: C.gU,
                                        border: `1px solid ${C.border}`,
                                    }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </Rv>
                </div>
            </section>

            {/* ═══ CHAINS ═══ */}
            <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
                <div style={{ textAlign: "center", paddingTop: 14, fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: C.dd, fontFamily: "var(--mono)" }}>Supported Networks</div>
                <ChainBar />
            </div>

            {/* ═══ STATS ═══ */}
            <section style={{ padding: "64px clamp(16px,4vw,56px)", maxWidth: 1120, margin: "0 auto" }}>
                <Rv>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: C.border, borderRadius: 14, overflow: "hidden" }}>
                        {[
                            { r: s1.r, n: s1.n, s: "T+", l: "RWA Market 2030" },
                            { r: s2.r, n: s2.n, s: "T+", l: "Tokenizable Assets" },
                            { r: s3.r, n: s3.n, s: "%", l: "Cost Reduction" },
                            { r: s4.r, n: s4.n, s: "/7", l: "Settlement" },
                        ].map((s, i) => (
                            <div key={i} ref={s.r} style={{ textAlign: "center", padding: "36px 12px", background: C.card }}>
                                <div style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, fontFamily: "var(--display)", ...grdT, lineHeight: 1 }}>{s.n}{s.s}</div>
                                <div style={{ fontSize: 10, color: C.d, marginTop: 10, letterSpacing: "2.5px", textTransform: "uppercase", fontFamily: "var(--mono)" }}>{s.l}</div>
                            </div>
                        ))}
                    </div>
                </Rv>
            </section>

            {/* ═══ ABOUT — Full bleed split ═══ */}
            <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
                <Rv>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 56, alignItems: "start" }}>
                        <div style={{ position: "sticky", top: 100 }}>
                            <div className="sl">About</div>
                            <h2 style={{ fontSize: "clamp(30px,3.8vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.04, fontFamily: "var(--display)" }}>
                                Where TradFi<br />meets <span style={{ color: C.m }}>DeFi.</span>
                            </h2>
                        </div>
                        <div>
                            <p style={{ fontSize: 17, color: C.m, lineHeight: 1.9, marginBottom: 32 }}>
                                Sereel delivers the complete institutional stack: from secure wallet infrastructure
                                and compliant tokenization engines to market connectivity and strategic advisory.
                            </p>
                            <p style={{ fontSize: 17, color: C.m, lineHeight: 1.9 }}>
                                We operate where traditional finance meets digital assets—enabling institutions to
                                tokenize, custody, and trade any asset class across any blockchain network.
                            </p>
                            <div style={{ marginTop: 32, height: 2, width: 80, background: grd, borderRadius: 1 }} />
                        </div>
                    </div>
                </Rv>
            </section>

            {/* ═══ BENTO GRID — Platform Pillars ═══ */}
            <section style={{ padding: "60px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
                <Rv>
                    <div className="sl">Core Platform</div>
                    <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.02, fontFamily: "var(--display)", marginBottom: 40, maxWidth: 500 }}>
                        One platform. <span style={{ color: C.m }}>Every operation.</span>
                    </h2>
                </Rv>

                {/* Bento layout: 2 large + 2 medium */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 16 }}>
                    {pillars.map((p, i) => (
                        <Rv key={i} d={i * 0.06}>
                            <Gc style={{ height: "100%", cursor: "pointer" }} p="32px 28px">
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                                    <span style={{ fontSize: 10, color: C.g, fontFamily: "var(--mono)", letterSpacing: "3px" }}>{p.num}</span>
                                    <span style={{ fontSize: 22 }}>{p.ico}</span>
                                </div>
                                <h3 style={{ fontSize: 20, fontWeight: 700, color: C.w, lineHeight: 1.2, marginBottom: 12, fontFamily: "var(--body)" }}>{p.t}</h3>
                                <p style={{ fontSize: 14, color: C.m, lineHeight: 1.75, marginBottom: 20 }}>{p.d}</p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                    {p.tags.map(t => (
                                        <span key={t} style={{
                                            fontSize: 10, color: C.d, fontFamily: "var(--mono)", letterSpacing: "0.5px",
                                            padding: "5px 10px", borderRadius: 6, background: C.gU, border: `1px solid ${C.border}`,
                                        }}>{t}</span>
                                    ))}
                                </div>
                            </Gc>
                        </Rv>
                    ))}
                </div>
            </section>

            {/* ═══ CLIENT SEGMENTS — Horizontal Cards ═══ */}
            <section style={{ padding: "100px clamp(16px,4vw,56px)", background: C.surface, position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.g}12, transparent)` }} />
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    <Rv>
                        <div className="sl">Solutions</div>
                        <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 48 }}>
                            For every <span style={{ color: C.m }}>institutional player.</span>
                        </h2>
                    </Rv>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12 }}>
                        {segments.map((s, i) => (
                            <Rv key={i} d={i * 0.05}>
                                <Gc style={{ height: "100%", cursor: "pointer" }} p="24px 20px">
                                    <div style={{ fontSize: 22, marginBottom: 14 }}>{s.ico}</div>
                                    <h4 style={{ fontSize: 14, fontWeight: 700, color: C.w, marginBottom: 10 }}>{s.t}</h4>
                                    <p style={{ fontSize: 12.5, color: C.m, lineHeight: 1.7 }}>{s.d}</p>
                                </Gc>
                            </Rv>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ B2B + MARKETPLACE — Asymmetric Split ═══ */}
            <section style={{ padding: "100px clamp(16px,4vw,56px)", maxWidth: 1120, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 16 }}>
                    <Rv>
                        <Gc style={{ height: "100%" }} p="40px 32px">
                            <div className="sl">Developer APIs</div>
                            <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-1px", lineHeight: 1.08, marginBottom: 16, fontFamily: "var(--display)" }}>
                                B2B APIs for <span style={grdT}>seamless integration</span>
                            </h3>
                            <p style={{ fontSize: 14, color: C.m, lineHeight: 1.8, marginBottom: 28 }}>
                                RESTful APIs and SDKs. Custody, token issuance, wallet management, and settlement—all accessible programmatically with enterprise auth.
                            </p>
                            <div style={{ background: C.bg, borderRadius: 10, padding: "16px 18px", border: `1px solid ${C.border}` }}>
                                <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
                                    {["#ff5f57", "#febc2e", "#28c840"].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.8 }} />)}
                                </div>
                                <pre style={{ fontFamily: "var(--mono)", fontSize: 11.5, lineHeight: 1.9, color: C.m, margin: 0 }}>
{`const bond = await sereel.tokenize({
  asset: 'corporate-bond',
  standard: 'CMTAT',
  chain: 'ethereum',
  supply: 1_000_000,
  compliance: ['RegS', 'MiCA'],
})`}
                </pre>
                            </div>
                        </Gc>
                    </Rv>
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 16 }}>
                        <Rv d={0.08}>
                            <Gc style={{ height: "100%" }} p="24px 22px">
                                <div className="sl" style={{ color: "#18d4a0", marginBottom: 12 }}>Marketplace</div>
                                <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>Institutional Venue</h4>
                                <p style={{ fontSize: 13, color: C.m, lineHeight: 1.7 }}>
                                    Primary issuance, secondary trading, OTC—all in one regulated marketplace with built-in compliance.
                                </p>
                            </Gc>
                        </Rv>
                        <Rv d={0.14}>
                            <Gc style={{ height: "100%" }} p="24px 22px">
                                <div className="sl" style={{ color: "#c9a84c", marginBottom: 12 }}>Settlement</div>
                                <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>T+0 Atomic</h4>
                                <p style={{ fontSize: 13, color: C.m, lineHeight: 1.7 }}>
                                    Instant settlement with smart contract clearing. Multi-chain DVP across custody integrations.
                                </p>
                            </Gc>
                        </Rv>
                    </div>
                </div>
            </section>

            {/* ═══ ADVISORY ═══ */}
            <section style={{ padding: "100px clamp(16px,4vw,56px)", background: C.surface, position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.g}10, transparent)` }} />
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    <Rv>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "center" }}>
                            <div>
                                <div className="sl">Advisory</div>
                                <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 800, letterSpacing: "-1px", lineHeight: 1.08, marginBottom: 20, fontFamily: "var(--display)" }}>
                                    Tokenization Strategy <span style={{ color: C.m }}>& Consulting</span>
                                </h2>
                                <p style={{ fontSize: 15, color: C.m, lineHeight: 1.8, marginBottom: 32 }}>
                                    From tokenomics design to network selection, regulatory mapping to go-to-market—our team guides you from concept to launch.
                                </p>
                                <button className="sb">Explore Advisory</button>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                                {["Tokenomics design", "Protocol selection", "Regulatory mapping", "Go-to-market", "Liquidity planning", "Architecture design"].map((s, i) => (
                                    <Rv key={i} d={i * 0.04}>
                                        <Gc p="16px 14px" style={{}}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                                <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.g, flexShrink: 0, boxShadow: `0 0 6px ${C.g}50` }} />
                                                <span style={{ fontSize: 12.5, color: C.m }}>{s}</span>
                                            </div>
                                        </Gc>
                                    </Rv>
                                ))}
                            </div>
                        </div>
                    </Rv>
                </div>
            </section>

            {/* ═══ WHY SEREEL ═══ */}
            <section style={{ padding: "100px clamp(16px,4vw,56px)", maxWidth: 1120, margin: "0 auto" }}>
                <Rv>
                    <div className="sl">The Difference</div>
                    <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 48 }}>
                        Built different. <span style={{ color: C.m }}>Not retrofitted.</span>
                    </h2>
                </Rv>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[
                        { n: "01", t: "Standards-Based", d: "Built on CMTA — adopted by Swiss banks, validated by Project Guardian, 40+ institutional members. Portable, not locked in." },
                        { n: "02", t: "True Multi-Chain", d: "Native deployments across EVM, Solana, IOTA, Starknet, Canton. Not bridges. Not wrapped. Native issuance, full parity." },
                        { n: "03", t: "Privacy-Preserving", d: "Canton Network integration for institutional confidentiality without sacrificing regulatory transparency." },
                        { n: "04", t: "Production-Ready", d: "Live clients tokenizing bonds, securities, stablecoins. Real capital flows, not proofs of concept." },
                    ].map((w, i) => (
                        <Rv key={i} d={i * 0.06}>
                            <Gc style={{ cursor: "pointer" }} p="32px 28px">
                                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <span style={{
                      fontSize: 11, fontWeight: 600, color: C.g, fontFamily: "var(--mono)",
                      width: 32, height: 32, borderRadius: 8, background: C.gD,
                      display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{w.n}</span>
                                    <h4 style={{ fontSize: 17, fontWeight: 700, color: C.w }}>{w.t}</h4>
                                </div>
                                <p style={{ fontSize: 14, color: C.m, lineHeight: 1.75, paddingLeft: 46 }}>{w.d}</p>
                            </Gc>
                        </Rv>
                    ))}
                </div>
            </section>

            {/* ═══ PARTNERS ═══ */}
            <section style={{ padding: "100px clamp(16px,4vw,56px)", background: C.surface, position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, #c9a84c15, transparent)` }} />
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    <Rv>
                        <div style={{ textAlign: "center", marginBottom: 48 }}>
                            <div className="sl" style={{ color: "#c9a84c" }}>Trusted Partners</div>
                            <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, letterSpacing: "-1px", fontFamily: "var(--display)", maxWidth: 480, margin: "0 auto" }}>
                                Powering the future of <span style={{ color: C.m }}>sustainable finance</span>
                            </h2>
                        </div>
                    </Rv>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                        {[
                            { nm: "Future Wealth Group", url: "futurewealthgroup.ch", d: "Swiss-based investment group empowering global investments across tokenized assets and sustainable finance.", lt: "FW" },
                            { nm: "GrowTokens", url: "growtokens.io", d: "Impact-driven ESG platform tokenizing solar energy projects powering African communities. Accessible, transparent, scalable.", lt: "GT" },
                            { nm: "Future Energy Global", url: "fe.global", d: "Accelerating SAF markets through innovative financial ecosystems. Climate meets capital — integrity led, profit driven.", lt: "FE" },
                        ].map((p, i) => (
                            <Rv key={i} d={i * 0.08}>
                                <Gc style={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }} p="32px 24px">
                                    <div style={{
                                        width: 44, height: 44, borderRadius: 10,
                                        background: `linear-gradient(135deg, ${C.gD}, ${C.gU})`,
                                        border: `1px solid ${C.g}15`, display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: 15, fontWeight: 800, color: C.g, fontFamily: "var(--display)",
                                        marginBottom: 18,
                                    }}>{p.lt}</div>
                                    <h4 style={{ fontSize: 16, fontWeight: 700, color: C.w, marginBottom: 4 }}>{p.nm}</h4>
                                    <p style={{ fontSize: 11.5, color: C.d, fontFamily: "var(--mono)", marginBottom: 14 }}>{p.url}</p>
                                    <p style={{ fontSize: 13.5, color: C.m, lineHeight: 1.7, flex: 1 }}>{p.d}</p>
                                    <div style={{ marginTop: 18, fontSize: 12, color: C.g, fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
                                        Visit <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                                    </div>
                                </Gc>
                            </Rv>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ BLOG ═══ */}
            <section style={{ padding: "100px clamp(16px,4vw,56px)", maxWidth: 1120, margin: "0 auto" }}>
                <Rv>
                    <div className="sl">Latest Insights</div>
                    <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 48 }}>
                        From the <span style={{ color: C.m }}>Blog</span>
                    </h2>
                </Rv>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                    {latestBlogs.map((post: BlogPost, i: number) => (
                        <Rv key={post.id} d={i * 0.08}>
                            <Gc style={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }} p="24px 20px">
                                <img src={post.image} alt={post.title} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10, marginBottom: 16, border: `1px solid ${C.border}` }} />
                                <h4 style={{ fontSize: 16, fontWeight: 700, color: C.w, marginBottom: 10, lineHeight: 1.3 }}>{post.title}</h4>
                                <p style={{ fontSize: 13, color: C.m, lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{post.summary}</p>
                                <Link to={`/blog/${post.id}`} style={{ fontSize: 13, color: C.g, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                                    Read More <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </Link>
                            </Gc>
                        </Rv>
                    ))}
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section style={{ padding: "160px clamp(16px,4vw,56px)", textAlign: "center", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${C.g}06, transparent 45%)` }} />
                {/* Rotating ring */}
                <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    width: 440, height: 440, borderRadius: "50%",
                    border: `1px solid ${C.g}06`, animation: "ringRotate 60s linear infinite",
                }}>
                    <div style={{ position: "absolute", top: -3, left: "50%", width: 6, height: 6, borderRadius: "50%", background: C.g, opacity: 0.4 }} />
                </div>
                <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 640, height: 640, borderRadius: "50%",
                    border: `1px solid ${C.g}03`,
                }} />
                <Rv>
                    <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
                        <h2 style={{ fontSize: "clamp(38px,5vw,60px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.0, marginBottom: 24, fontFamily: "var(--display)" }}>
                            Ready to <span style={grdT}>Tokenize?</span>
                        </h2>
                        <p style={{ fontSize: 16, color: C.m, marginBottom: 44, lineHeight: 1.8, maxWidth: 460, margin: "0 auto 44px" }}>
                            Launching a tokenized fund, digitizing bonds, or building exchange infrastructure — we architect the solution.
                        </p>
                        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                            <button className="sb" style={{ padding: "16px 44px", fontSize: 15 }}>Schedule Consultation</button>
                            <button className="so" style={{ padding: "16px 44px", fontSize: 15 }}>Platform Overview</button>
                        </div>
                        <button style={{ marginTop: 16, background: "none", border: "none", color: C.g, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "var(--body)" }}>
                            View Documentation →
                        </button>
                    </div>
                </Rv>
            </section>

            {/* ═══ FOOTER ═══ */}
            <footer style={{ borderTop: `1px solid ${C.border}`, padding: "48px clamp(16px,4vw,56px) 28px" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", gap: 28 }}>
                    <div>
                        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, textDecoration: "none", color: "inherit" }}>
                            <img src='/images/Hero/glowing_seree_logo.svg' alt='Sereel' style={{ width: 24, height: 24 }} />
                            <span style={{ fontSize: 16, fontWeight: 800, fontFamily: "var(--display)" }}>sereel</span>
                        </Link>
                        <p style={{ fontSize: 12.5, color: C.d, lineHeight: 1.7, maxWidth: 220 }}>Where Traditional Finance Meets Digital Assets.</p>
                    </div>
                    {[
                        { t: "Platform", l: ["Custody", "Tokenization", "Marketplace", "APIs", "Settlement"] },
                        { t: "Solutions", l: ["Fund Managers", "Exchanges", "Banks", "Family Offices"] },
                        { t: "Resources", l: ["Docs", "API Reference", "Blog", "Whitepapers"] },
                        { t: "Company", l: ["About", "Advisory", "Careers", "Contact"] },
                    ].map(c => (
                        <div key={c.t}>
                            <h4 style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 18, color: C.w, fontFamily: "var(--mono)" }}>{c.t}</h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                                {c.l.map(l => <span key={l} style={{ fontSize: 13, color: C.d, cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => (e.target as HTMLElement).style.color = C.w} onMouseLeave={e => (e.target as HTMLElement).style.color = C.d}>{l}</span>)}
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
        </div>
    );
}

export default SereelV4;
