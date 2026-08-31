import blogsJson from "../Blog Data/Blogs.json";

export interface BlogEntry {
  id: number;
  date: string;
  title: string;
  image: string;
  summary?: string;
  content: string;
  /** SEO fields — required for every post, see AGENTS.md "Blog authoring" */
  slug: string;
  description: string;
  tags: string[];
  author: string;
  imageAlt: string;
}

// Blogs.json is maintained newest-first.
export const blogEntries = blogsJson as BlogEntry[];

export const normalizeImagePath = (path: string): string => {
  const cleaned = path.replace(/\\/g, "/");
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
};

/** Canonical route for a post. Slug URLs are canonical; numeric IDs redirect. */
export const getBlogPath = (post: { id: number; slug?: string }): string =>
  `/blog/${post.slug ?? post.id}`;

/** Resolve a /blog/:slug param — accepts a slug or a legacy numeric id. */
export const findBlogByParam = (
  param: string | undefined,
): BlogEntry | undefined => {
  if (!param) return undefined;
  const bySlug = blogEntries.find((post) => post.slug === param);
  if (bySlug) return bySlug;
  if (/^\d+$/.test(param)) {
    return blogEntries.find((post) => post.id === Number(param));
  }
  return undefined;
};

/** Posts sharing the most tags with the given post, newest first on ties. */
export const getRelatedPosts = (post: BlogEntry, count = 3): BlogEntry[] =>
  blogEntries
    .filter((candidate) => candidate.id !== post.id)
    .map((candidate) => ({
      candidate,
      overlap:
        candidate.tags?.filter((tag) => post.tags?.includes(tag)).length ?? 0,
    }))
    .sort((a, b) => b.overlap - a.overlap || b.candidate.id - a.candidate.id)
    .slice(0, count)
    .map(({ candidate }) => candidate);
