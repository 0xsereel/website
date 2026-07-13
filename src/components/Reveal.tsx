import { useEffect, useRef } from "react";

export const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0 }
    );
    io.observe(el);
    const t = setTimeout(() => {
      if (!el.classList.contains("in")) el.classList.add("in");
    }, 80);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};
