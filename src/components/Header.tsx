import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT_URL } from "../lib/config";

const NAV = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Standards", href: "#standards" },
  { label: "About", href: "#about" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 left-0 z-50 w-full border-b border-[rgba(152,162,179,0.14)] bg-[rgba(10,14,19,0.82)] backdrop-blur-md"
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-6">
        <a href="/" data-testid="header-logo" className="flex items-center gap-2.5">
          <img
            src="/New Logo Transparent.png"
            alt="Sereel"
            className="h-9 w-9 object-contain"
          />
          <span className="text-lg font-semibold tracking-tight text-[#F2F4F7]">
            Sereel
          </span>
        </a>

        <nav
          data-testid="header-nav"
          className="hidden items-center gap-9 md:flex"
        >
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
              className="text-sm font-normal text-[#98A2B3] transition-colors duration-200 hover:text-[#F2F4F7]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={CONTACT_URL}
            data-testid="header-cta"
            className="rounded-full border border-[#1AA16C] px-5 py-2 text-sm font-medium text-[#77DEAF] transition-colors duration-200 hover:bg-[#1AA16C] hover:text-[#0A0E13]"
          >
            Schedule consultation
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-[#F2F4F7] md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="border-t border-[rgba(152,162,179,0.14)] bg-[#0A0E13] px-6 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-[#98A2B3] hover:text-[#F2F4F7]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CONTACT_URL}
              className="mt-2 w-fit rounded-full border border-[#1AA16C] px-5 py-2 text-sm font-medium text-[#77DEAF]"
            >
              Schedule consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
