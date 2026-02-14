import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";
import blogs from "./src/Blog Data/Blogs.json";

const dynamicBlogRoutes = blogs.map((blog) => `/blog/${blog.id}`);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://sereel.io",
      dynamicRoutes: dynamicBlogRoutes,
      robots: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    }),
  ],
});
