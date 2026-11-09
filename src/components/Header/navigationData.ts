export type NavLink = {
  key: "verticals" | "verified" | "markets" | "about" | "contact";
  href: string;
};

/** Primary navigation. Labels come from nav.<key> in the locale files. */
export const NAV_LINKS: NavLink[] = [
  { key: "verticals", href: "/verticals" },
  { key: "verified", href: "/sereel-verified" },
  { key: "markets", href: "/markets" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];
