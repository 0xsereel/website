export const CONTACT_URL = "mailto:team@seree.xyz";

export const SPLINE_HERO_URL: string =
  (import.meta.env.VITE_SPLINE_HERO_URL as string) ||
  (import.meta.env.NEXT_PUBLIC_SPLINE_HERO_URL as string) ||
  "";
