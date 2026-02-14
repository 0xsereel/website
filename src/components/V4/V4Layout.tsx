import { V4Nav } from "./V4Nav";
import { V4Footer } from "./V4Footer";
import { C } from "./theme";
import { NewsLetter } from "../Home/NewsLetter";
import { FinalCTA } from "../Home/FinalCTA";

interface V4LayoutProps {
    children: React.ReactNode;
    excludeNewsletter?: boolean;
    excludeCTA?: boolean;
}

export function V4Layout({ children, excludeNewsletter = false, excludeCTA = false }: V4LayoutProps) {
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
            <V4Nav />
            {children}
            {!excludeCTA && <FinalCTA />}
            {!excludeNewsletter && <NewsLetter />}
            <V4Footer />
        </div>
    );
}
