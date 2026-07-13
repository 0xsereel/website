export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="hairline-t w-full bg-[#0A0E13]">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/seree_footer.png" alt="" className="h-8 w-8 object-contain" />
              <span className="text-lg font-semibold tracking-tight text-[#F2F4F7]">
                Sereel
              </span>
            </div>
            <p className="mt-4 max-w-[320px] text-sm font-light leading-relaxed text-[#667085]">
              The compliant infrastructure layer for tokenized capital markets.
            </p>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#667085]">
                Company
              </span>
              <a href="#platform" className="text-sm font-light text-[#98A2B3] hover:text-[#F2F4F7]">
                Platform
              </a>
              <a href="#solutions" className="text-sm font-light text-[#98A2B3] hover:text-[#F2F4F7]">
                Solutions
              </a>
              <a href="#standards" className="text-sm font-light text-[#98A2B3] hover:text-[#F2F4F7]">
                Standards
              </a>
              <a href="#about" className="text-sm font-light text-[#98A2B3] hover:text-[#F2F4F7]">
                About
              </a>
            </nav>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#667085]">
                Contact
              </span>
              <a
                href="mailto:team@seree.xyz"
                data-testid="footer-contact-email"
                className="text-sm font-light text-[#98A2B3] hover:text-[#77DEAF]"
              >
                team@seree.xyz
              </a>
              <span className="text-sm font-light text-[#667085]">United States & Africa</span>
            </div>
          </div>
        </div>

        <div className="hairline-t mt-14 pt-8">
          <p className="text-xs font-light leading-relaxed text-[#667085]">
            Sereel provides infrastructure only. Sereel is not the issuer,
            promoter, guarantor, investment manager, or asset sponsor of any
            product built on its rails.
          </p>
          <p className="mt-4 text-xs font-light text-[#667085]">
            © 2025 Sereel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
