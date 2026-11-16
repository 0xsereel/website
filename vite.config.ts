import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import blogs from "./src/Blog Data/Blogs.json";

const HOSTNAME = "https://www.sereel.com";

// Every indexable route must be listed here or come from Blogs.json — the
// sitemap cannot discover React Router routes on its own. /editor is dev-only.
const staticRoutes = [
  "/",
  "/listings",
  "/issuers",
  "/about",
  "/contact",
  "/blog",
  "/faq",
  "/terms",
  "/privacy-policy",
];

// Routes with a French version at /fr<path>. Keep in sync with
// src/i18n/routes.ts TRANSLATED_PATHS and the /fr routes in AppRoutes.tsx.
const translatedRoutes = [
  "/",
  "/listings",
  "/issuers",
  "/about",
  "/contact",
  "/faq",
  "/terms",
  "/privacy-policy",
];
const frRoutes = translatedRoutes.map((path) => (path === "/" ? "/fr" : `/fr${path}`));

// Emit lastmod only where we honestly know it (blog post dates). Google
// ignores changefreq/priority and distrusts inaccurate lastmod, so static
// routes carry no lastmod rather than a fake build timestamp.
function sitemapPlugin(): Plugin {
  return {
    name: "sereel-sitemap",
    apply: "build",
    generateBundle() {
      const months: Record<string, string> = {
        January: "01", February: "02", March: "03", April: "04",
        May: "05", June: "06", July: "07", August: "08",
        September: "09", October: "10", November: "11", December: "12",
      };
      const blogUrls = (
        blogs as Array<{ id: number; slug?: string; date?: string }>
      ).map((post) => {
        // Parse "Month D, YYYY" directly — new Date() would parse in the
        // build machine's local timezone and shift lastmod by a day.
        const match = post.date?.match(/(\w+)\s+(\d+),\s+(\d{4})/);
        const lastmod =
          match && months[match[1]]
            ? `${match[3]}-${months[match[1]]}-${match[2].padStart(2, "0")}`
            : undefined;
        return { loc: `/blog/${post.slug ?? post.id}`, lastmod };
      });

      const urls = [
        ...staticRoutes.map((loc) => ({
          loc,
          lastmod: undefined as string | undefined,
        })),
        ...frRoutes.map((loc) => ({
          loc,
          lastmod: undefined as string | undefined,
        })),
        ...blogUrls,
      ];

      const xml =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        urls
          .map(
            (u) =>
              "  <url>\n" +
              `    <loc>${HOSTNAME}${u.loc}</loc>\n` +
              (u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : "") +
              "  </url>",
          )
          .join("\n") +
        "\n</urlset>\n";

      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: xml });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitemapPlugin()],
});
