declare global {
  interface Window {
    Countly?: {
      q?: unknown[];
    };
  }
}

/**
 * Fires a custom Countly event. Countly already auto-collects pageviews,
 * clicks, scrolls and form data (see index.html, collect_from_forms) — these
 * are additive, named events on top of that. No-ops safely if Countly hasn't
 * loaded (e.g. blocked by an ad-blocker, or in a dev environment).
 */
export function track(key: string, segmentation?: Record<string, unknown>): void {
  window.Countly?.q?.push(["add_event", { key, count: 1, segmentation }]);
}
