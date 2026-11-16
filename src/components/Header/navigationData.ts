export type NavLink = {
  key: "issuers" | "about" | "contact";
  href: string;
};

/** Primary navigation. Labels come from nav.<key> in the locale files. */
export const NAV_LINKS: NavLink[] = [
  { key: "issuers", href: "/issuers" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];
