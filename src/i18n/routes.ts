export type Lang = "en" | "fr";

export const DEFAULT_LANG: Lang = "en";

/**
 * Routes with a French version at /fr<path>. Keep in sync with the /fr
 * routes registered in routes/AppRoutes.tsx and the sitemap in vite.config.ts.
 * Blog and the dev-only Editor are intentionally English-only.
 */
export const TRANSLATED_PATHS: readonly string[] = [
  "/",
  "/verticals",
  "/sereel-verified",
  "/listings",
  "/issuers",
  "/about",
  "/contact",
  "/faq",
  "/terms",
  "/privacy-policy",
];

export function langFromPathname(pathname: string): Lang {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : DEFAULT_LANG;
}

/** "/fr/about" -> "/about", "/fr" -> "/", "/about" -> "/about" (unchanged). */
export function stripLangPrefix(pathname: string): string {
  if (pathname === "/fr") return "/";
  if (pathname.startsWith("/fr/")) return pathname.slice(3);
  return pathname;
}

function hasFrenchVersion(basePath: string): boolean {
  return TRANSLATED_PATHS.includes(basePath);
}

/**
 * Localizes an internal href for the given language, preserving any hash
 * fragment (e.g. "/#product-tokenization"). Hrefs without a French version
 * (blog, repositories, external links, assets) pass through unchanged.
 */
export function localizePath(href: string, lang: Lang): string {
  if (lang === DEFAULT_LANG) return href;
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : href.slice(hashIndex);
  const base = path === "" ? "/" : path;

  if (!hasFrenchVersion(base)) return href;
  return `${base === "/" ? "/fr" : `/fr${base}`}${hash}`;
}

/**
 * Builds the href for switching the CURRENT page to targetLang. Falls back
 * to the French home page if the current page has no French version.
 */
export function switchLangHref(
  pathname: string,
  search: string,
  hash: string,
  targetLang: Lang
): string {
  const base = stripLangPrefix(pathname);
  if (targetLang === DEFAULT_LANG) return `${base}${search}${hash}`;
  if (!hasFrenchVersion(base)) return "/fr";
  return `${base === "/" ? "/fr" : `/fr${base}`}${search}${hash}`;
}
