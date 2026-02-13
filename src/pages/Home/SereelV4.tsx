import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../../Blog Data/Blogs.json';

const C = {
  bg: '#000000',
  surface: '#0A0A0A',
  border: '#1A1A1A',
  text: '#E5E5E5',
  textMuted: '#999999',
  green: '#00FFB2',
  greenDark: '#1CA36E',
  greenGlow: 'rgba(0, 255, 178, 0.2)',
};

const grd = (from: string, to: string) => `linear-gradient(135deg, ${from}, ${to})`;

const MeshBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const blobs = [
      { x: 0.2, y: 0.3, r: 0.3, dx: 0.0003, dy: 0.0002 },
      { x: 0.8, y: 0.6, r: 0.25, dx: -0.0002, dy: 0.0003 },
      { x: 0.5, y: 0.8, r: 0.2, dx: 0.0002, dy: -0.0002 },
    ];

    const draw = () => {
      ctx.fillStyle = C.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < 0 || b.x > 1) b.dx *= -1;
        if (b.y < 0 || b.y > 1) b.dy *= -1;

        const grad = ctx.createRadialGradient(
          b.x * canvas.width,
          b.y * canvas.height,
          0,
          b.x * canvas.width,
          b.y * canvas.height,
          b.r * canvas.width
        );
        grad.addColorStop(0, 'rgba(0, 255, 178, 0.08)');
        grad.addColorStop(1, 'rgba(0, 255, 178, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      requestAnimationFrame(draw);
    };
    draw();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <svg className="fixed inset-0 pointer-events-none z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill={C.border} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>
      <div
        className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-0"
        style={{
          background: `linear-gradient(to top, ${C.greenGlow}, transparent)`,
        }}
      />
    </>
  );
};

const useVis = (ref: React.RefObject<HTMLElement | HTMLDivElement | null>, threshold = 0.1) => {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return vis;
};

const useCt = (end: number, dur = 2000, start = 0) => {
  const [val, setVal] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    const st = Date.now();
    const tick = () => {
      const elapsed = Date.now() - st;
      const progress = Math.min(elapsed / dur, 1);
      setVal(Math.floor(start + (end - start) * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [hasStarted, end, dur, start]);

  return [val, () => setHasStarted(true)] as const;
};

const Rv: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useVis(ref);
  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const WordMorph = () => {
  const words = ['Tokenization', 'Custody', 'Settlement', 'Compliance'];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(int);
  }, [words.length]);

  return (
    <span className="inline-block relative" style={{ minWidth: '280px' }}>
      {words.map((w, i) => (
        <span
          key={w}
          className="absolute left-0 top-0 transition-all duration-500"
          style={{
            opacity: i === idx ? 1 : 0,
            transform: i === idx ? 'translateY(0)' : 'translateY(-10px)',
            color: C.green,
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
};

const ChainBar = () => {
  const chains = [
    'Ethereum',
    'Polygon',
    'Avalanche',
    'Arbitrum',
    'Optimism',
    'Base',
    'BNB Chain',
    'Solana',
    'Sui',
    'Canton',
  ];
  return (
    <div className="relative overflow-hidden" style={{ background: C.surface }}>
      <div className="marquee flex gap-12 py-4">
        {[...chains, ...chains].map((ch, i) => (
          <span key={i} className="text-sm font-medium whitespace-nowrap" style={{ color: C.textMuted }}>
            {ch}
          </span>
        ))}
      </div>
    </div>
  );
};

const Gc: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      className={`relative rounded-2xl p-6 transition-all duration-300 ${className}`}
      style={{
        background: hov ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hov ? C.green : C.border}`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  );
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        background: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
        borderBottom: scrolled ? `1px solid ${C.border}` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold" style={{ color: C.text }}>
          Sereel
        </div>
        <div className="flex gap-8 items-center">
          <a href="#about" className="text-sm hover:opacity-70 transition" style={{ color: C.textMuted }}>
            About
          </a>
          <a href="#platform" className="text-sm hover:opacity-70 transition" style={{ color: C.textMuted }}>
            Platform
          </a>
          <a href="#partners" className="text-sm hover:opacity-70 transition" style={{ color: C.textMuted }}>
            Partners
          </a>
          <button className="sb">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6" style={{ color: C.text }}>
      <div className="max-w-7xl mx-auto w-full grid gap-12" style={{ gridTemplateColumns: '1.15fr 0.85fr' }}>
        <div className="flex flex-col justify-center gap-6">
          <Rv>
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium w-fit"
              style={{ background: grd(C.greenGlow, 'transparent'), border: `1px solid ${C.green}` }}
            >
              <span
                className="w-2 h-2 rounded-full pulse"
                style={{ background: C.green, boxShadow: `0 0 8px ${C.green}` }}
              />
              Live Infrastructure
            </span>
          </Rv>
          <Rv delay={100}>
            <h1 className="text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--display)' }}>
              Enterprise <WordMorph />
              <br />
              Infrastructure
            </h1>
          </Rv>
          <Rv delay={200}>
            <p className="text-lg leading-relaxed" style={{ color: C.textMuted }}>
              Institutional-grade tokenization platform powering compliant digital assets across global networks.
              Security, custody, and settlement designed for scale.
            </p>
          </Rv>
          <Rv delay={300}>
            <div className="flex gap-4 mt-4">
              <button className="sb">Start Building</button>
              <button className="so">View Documentation</button>
            </div>
          </Rv>
        </div>

        <Rv delay={400}>
          <Gc className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium" style={{ color: C.textMuted }}>
                Platform Status
              </h3>
              <span className="text-xs px-2 py-1 rounded" style={{ background: C.greenGlow, color: C.green }}>
                Operational
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1" style={{ color: C.textMuted }}>
                  <span>API Uptime</span>
                  <span>99.9%</span>
                </div>
                <div className="w-full h-1.5 rounded-full" style={{ background: C.border }}>
                  <div className="h-full rounded-full" style={{ width: '99.9%', background: C.green }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1" style={{ color: C.textMuted }}>
                  <span>Network Health</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-1.5 rounded-full" style={{ background: C.border }}>
                  <div className="h-full rounded-full" style={{ width: '100%', background: C.green }} />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Ethereum', 'Polygon', 'Avalanche'].map((n) => (
                <span
                  key={n}
                  className="text-xs px-2 py-1 rounded"
                  style={{ background: C.surface, color: C.textMuted }}
                >
                  {n}
                </span>
              ))}
            </div>
          </Gc>
        </Rv>
      </div>
    </section>
  );
};

const ChainsSection = () => {
  return (
    <section className="relative py-2">
      <ChainBar />
    </section>
  );
};

const Stats = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const vis1 = useVis(ref1);
  const vis2 = useVis(ref2);
  const vis3 = useVis(ref3);
  const vis4 = useVis(ref4);

  const [val1, start1] = useCt(2);
  const [val2, start2] = useCt(16);
  const [val3, start3] = useCt(80);
  const [val4, start4] = useCt(24);

  useEffect(() => {
    if (vis1) start1();
  }, [vis1, start1]);

  useEffect(() => {
    if (vis2) start2();
  }, [vis2, start2]);

  useEffect(() => {
    if (vis3) start3();
  }, [vis3, start3]);

  useEffect(() => {
    if (vis4) start4();
  }, [vis4, start4]);

  const stats = [
    { label: 'Billion in TVL', value: `$${val1}B+`, ref: ref1 },
    { label: 'Supported Networks', value: val2.toString(), ref: ref2 },
    { label: 'Enterprise Clients', value: `${val3}+`, ref: ref3 },
    { label: '7 Availability', value: `${val4}/7`, ref: ref4 },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} ref={s.ref} className="text-center">
            <Rv delay={i * 100}>
              <div className="text-5xl font-bold mb-2" style={{ color: C.green, fontFamily: 'var(--display)' }}>
                {s.value}
              </div>
              <div className="text-sm" style={{ color: C.textMuted }}>
                {s.label}
              </div>
            </Rv>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto grid gap-12" style={{ gridTemplateColumns: '0.4fr 0.6fr' }}>
        <div className="sticky top-32 h-fit">
          <Rv>
            <span className="sl">About Sereel</span>
            <h2 className="text-4xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--display)', color: C.text }}>
              Built for the next generation of finance
            </h2>
          </Rv>
        </div>
        <div className="space-y-6" style={{ color: C.textMuted }}>
          <Rv delay={100}>
            <p className="text-lg leading-relaxed">
              Sereel provides institutional-grade infrastructure for tokenizing, managing, and settling digital assets.
              Our platform combines security, compliance, and operational efficiency to enable enterprises to operate
              confidently in the digital asset economy.
            </p>
          </Rv>
          <Rv delay={200}>
            <p className="text-lg leading-relaxed">
              From real-world asset tokenization to cross-chain settlement, we handle the complexity so you can focus on
              growth. Built on industry standards like CMTAT and ISO20022, Sereel ensures regulatory compliance without
              compromising on innovation.
            </p>
          </Rv>
          <Rv delay={300}>
            <p className="text-lg leading-relaxed">
              Trusted by global enterprises, financial institutions, and government entities, Sereel is redefining what's
              possible in digital finance infrastructure.
            </p>
          </Rv>
        </div>
      </div>
    </section>
  );
};

const Bento = () => {
  const items = [
    {
      num: '01',
      title: 'Tokenization',
      desc: 'CMTAT-compliant token issuance with embedded compliance logic',
      tags: ['ERC-3643', 'ISO20022', 'CMTAT'],
    },
    {
      num: '02',
      title: 'Custody',
      desc: 'Enterprise-grade multi-signature custody with institutional SLAs',
      tags: ['MPC', 'HSM', 'SOC 2'],
    },
    {
      num: '03',
      title: 'Settlement',
      desc: 'Atomic cross-chain settlement with T+0 finality',
      tags: ['DvP', 'Atomic Swap', 'Real-time'],
    },
    {
      num: '04',
      title: 'Compliance',
      desc: 'Built-in KYC/AML with automated regulatory reporting',
      tags: ['KYC', 'AML', 'MiCA'],
    },
  ];

  return (
    <section id="platform" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Rv>
          <div className="text-center mb-16">
            <span className="sl">Platform Pillars</span>
            <h2 className="text-4xl font-bold mt-4" style={{ fontFamily: 'var(--display)', color: C.text }}>
              Complete Infrastructure Stack
            </h2>
          </div>
        </Rv>
        <div className="grid grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Rv key={i} delay={i * 100}>
              <Gc>
                <div className="text-4xl font-bold mb-4" style={{ color: C.green, fontFamily: 'var(--mono)' }}>
                  {it.num}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: C.text }}>
                  {it.title}
                </h3>
                <p className="mb-4" style={{ color: C.textMuted }}>
                  {it.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {it.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded"
                      style={{ background: C.surface, color: C.textMuted }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Gc>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientSegments = () => {
  const segments = [
    { title: 'Asset Managers', desc: 'Tokenize and manage digital fund structures' },
    { title: 'Banks', desc: 'Issue compliant digital securities and bonds' },
    { title: 'Fintechs', desc: 'Build on institutional-grade infrastructure' },
    { title: 'Governments', desc: 'Deploy sovereign digital currency solutions' },
    { title: 'Enterprises', desc: 'Tokenize treasury and supply chain assets' },
  ];

  return (
    <section className="relative py-24 px-6" style={{ background: C.surface }}>
      <div className="max-w-7xl mx-auto">
        <Rv>
          <div className="text-center mb-16">
            <span className="sl">Client Segments</span>
            <h2 className="text-4xl font-bold mt-4" style={{ fontFamily: 'var(--display)', color: C.text }}>
              Trusted by Industry Leaders
            </h2>
          </div>
        </Rv>
        <div className="grid grid-cols-5 gap-6">
          {segments.map((seg, i) => (
            <Rv key={i} delay={i * 80}>
              <Gc>
                <h3 className="text-lg font-bold mb-2" style={{ color: C.text }}>
                  {seg.title}
                </h3>
                <p className="text-sm" style={{ color: C.textMuted }}>
                  {seg.desc}
                </p>
              </Gc>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
};

const B2BMarketplace = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto grid gap-8" style={{ gridTemplateColumns: '1.2fr 0.8fr' }}>
        <Rv>
          <Gc className="h-full flex flex-col justify-between">
            <div>
              <span className="sl">B2B Platform</span>
              <h2 className="text-3xl font-bold mt-4 mb-4" style={{ fontFamily: 'var(--display)', color: C.text }}>
                Developer-First APIs
              </h2>
              <p className="mb-6" style={{ color: C.textMuted }}>
                RESTful and GraphQL APIs with comprehensive SDKs for JavaScript, Python, Go, and Rust. Deploy in minutes,
                scale to billions.
              </p>
            </div>
            <div
              className="rounded-lg p-4 font-mono text-sm overflow-x-auto"
              style={{ background: C.bg, color: C.green }}
            >
              <pre>
                {`curl -X POST https://api.sereel.io/v1/tokens \\
  -H "Authorization: Bearer \${API_KEY}" \\
  -d '{
    "name": "Treasury Bond 2025",
    "symbol": "TB2025",
    "supply": 1000000,
    "compliance": "CMTAT"
  }'`}
              </pre>
            </div>
          </Gc>
        </Rv>
        <div className="space-y-6">
          <Rv delay={100}>
            <Gc>
              <h3 className="text-xl font-bold mb-2" style={{ color: C.text }}>
                White-Label Solutions
              </h3>
              <p className="text-sm" style={{ color: C.textMuted }}>
                Deploy branded tokenization platforms with your identity. Full UI customization and infrastructure
                control.
              </p>
            </Gc>
          </Rv>
          <Rv delay={200}>
            <Gc>
              <h3 className="text-xl font-bold mb-2" style={{ color: C.text }}>
                Marketplace Access
              </h3>
              <p className="text-sm" style={{ color: C.textMuted }}>
                Connect to our institutional marketplace for secondary trading and liquidity provision.
              </p>
            </Gc>
          </Rv>
        </div>
      </div>
    </section>
  );
};

const Advisory = () => {
  const services = [
    { title: 'Tokenization Strategy', desc: 'Asset selection, structure design, and compliance roadmap' },
    { title: 'Regulatory Guidance', desc: 'Navigate MiCA, MiFID II, and securities law frameworks' },
    { title: 'Technical Integration', desc: 'End-to-end implementation and system integration support' },
    { title: 'Custody Architecture', desc: 'Design secure multi-party custody solutions' },
    { title: 'Market Design', desc: 'Secondary market structure and liquidity strategies' },
    { title: 'Post-Launch Operations', desc: 'Ongoing compliance, reporting, and infrastructure support' },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Rv>
          <div className="text-center mb-16">
            <span className="sl">Advisory Services</span>
            <h2 className="text-4xl font-bold mt-4" style={{ fontFamily: 'var(--display)', color: C.text }}>
              Expert Guidance at Every Step
            </h2>
          </div>
        </Rv>
        <div className="grid grid-cols-2 gap-6">
          {services.map((srv, i) => (
            <Rv key={i} delay={i * 80}>
              <Gc>
                <h3 className="text-xl font-bold mb-2" style={{ color: C.text }}>
                  {srv.title}
                </h3>
                <p className="text-sm" style={{ color: C.textMuted }}>
                  {srv.desc}
                </p>
              </Gc>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhySereel = () => {
  const reasons = [
    {
      num: '01',
      title: 'Regulatory-First Design',
      desc: 'Built from the ground up with compliance embedded at the protocol level',
    },
    {
      num: '02',
      title: 'Battle-Tested Security',
      desc: 'SOC 2 Type II, ISO 27001, and regular third-party audits',
    },
    {
      num: '03',
      title: 'True Interoperability',
      desc: 'Cross-chain by default with support for all major networks',
    },
    {
      num: '04',
      title: 'Institutional SLAs',
      desc: '99.9% uptime guarantee with 24/7 dedicated support',
    },
  ];

  return (
    <section className="relative py-24 px-6" style={{ background: C.surface }}>
      <div className="max-w-7xl mx-auto">
        <Rv>
          <div className="text-center mb-16">
            <span className="sl">Why Sereel</span>
            <h2 className="text-4xl font-bold mt-4" style={{ fontFamily: 'var(--display)', color: C.text }}>
              The Institutional Choice
            </h2>
          </div>
        </Rv>
        <div className="grid grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <Rv key={i} delay={i * 100}>
              <Gc>
                <div className="text-3xl font-bold mb-4" style={{ color: C.green, fontFamily: 'var(--mono)' }}>
                  {r.num}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: C.text }}>
                  {r.title}
                </h3>
                <p style={{ color: C.textMuted }}>{r.desc}</p>
              </Gc>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = [
    { name: 'Firewall', desc: 'Security Infrastructure Partner' },
    { name: 'Gnosis', desc: 'Multi-Signature Technology' },
    { name: 'Fordefi', desc: 'Enterprise MPC Provider' },
  ];

  return (
    <section id="partners" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Rv>
          <div className="text-center mb-16">
            <span className="sl">Technology Partners</span>
            <h2 className="text-4xl font-bold mt-4" style={{ fontFamily: 'var(--display)', color: C.text }}>
              Built on Best-in-Class Infrastructure
            </h2>
          </div>
        </Rv>
        <div className="grid grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <Rv key={i} delay={i * 100}>
              <Gc className="text-center">
                <div className="text-2xl font-bold mb-2" style={{ color: C.green }}>
                  {p.name}
                </div>
                <p className="text-sm" style={{ color: C.textMuted }}>
                  {p.desc}
                </p>
              </Gc>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const latestBlogs = blogsData.slice(0, 3);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Rv>
          <div className="text-center mb-16">
            <span className="sl">Latest Insights</span>
            <h2 className="text-4xl font-bold mt-4" style={{ fontFamily: 'var(--display)', color: C.text }}>
              From the Blog
            </h2>
          </div>
        </Rv>
        <div className="grid grid-cols-3 gap-6">
          {latestBlogs.map((post, i) => (
            <Rv key={post.id} delay={i * 100}>
              <Gc className="h-full flex flex-col">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  style={{ border: `1px solid ${C.border}` }}
                />
                <h3 className="text-xl font-bold mb-2" style={{ color: C.text }}>
                  {post.title}
                </h3>
                <p className="text-sm mb-4 flex-grow" style={{ color: C.textMuted }}>
                  {post.summary}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-sm font-medium hover:opacity-70 transition"
                  style={{ color: C.green }}
                >
                  Read More →
                </Link>
              </Gc>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="relative py-32 px-6">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at center, ${C.greenGlow}, transparent 70%)`,
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="ringRotate w-32 h-32 mx-auto mb-8 rounded-full" style={{ border: `2px solid ${C.green}` }} />
        <Rv>
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--display)', color: C.text }}>
            Ready to Build the Future?
          </h2>
        </Rv>
        <Rv delay={100}>
          <p className="text-xl mb-8" style={{ color: C.textMuted }}>
            Join leading institutions leveraging Sereel's infrastructure to tokenize, custody, and settle digital assets
            at scale.
          </p>
        </Rv>
        <Rv delay={200}>
          <div className="flex gap-4 justify-center">
            <button className="sb">Schedule a Demo</button>
            <button className="so">Contact Sales</button>
          </div>
        </Rv>
      </div>
    </section>
  );
};

const Footer = () => {
  const footerLinks = {
    Product: ['Tokenization', 'Custody', 'Settlement', 'Compliance', 'APIs'],
    Resources: ['Documentation', 'Guides', 'Blog', 'Case Studies', 'Whitepaper'],
    Company: ['About', 'Careers', 'Partners', 'Press', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance', 'Licenses'],
  };

  const socials = [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'GitHub', href: '#' },
  ];

  return (
    <footer className="relative py-16 px-6" style={{ background: C.surface, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4" style={{ color: C.text }}>
              Sereel
            </div>
            <p className="text-sm" style={{ color: C.textMuted }}>
              Enterprise tokenization infrastructure for the digital economy.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold mb-4" style={{ color: C.text }}>
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:opacity-70 transition" style={{ color: C.textMuted }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="pt-8 flex items-center justify-between"
          style={{ borderTop: `1px solid ${C.border}`, color: C.textMuted }}
        >
          <p className="text-sm">© 2025 Sereel. All rights reserved.</p>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a key={s.name} href={s.href} className="text-sm hover:opacity-70 transition">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export const SereelV4 = () => {
  return (
    <div className="relative" style={{ background: C.bg, color: C.text, fontFamily: 'var(--body)' }}>
      <MeshBg />
      <Nav />
      <Hero />
      <ChainsSection />
      <Stats />
      <About />
      <Bento />
      <ClientSegments />
      <B2BMarketplace />
      <Advisory />
      <WhySereel />
      <Partners />
      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  );
};
