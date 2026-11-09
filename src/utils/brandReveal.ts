/**
 * The home page's logo story flies the mark into the nav at the end of its
 * scroll. It reports how far the nav logo should be revealed (0 to 1) through
 * this event, and the header listens for it.
 */
export const BRAND_REVEAL_EVENT = "sereel:brand-reveal";

export const emitBrandReveal = (value: number) => {
  window.dispatchEvent(new CustomEvent<number>(BRAND_REVEAL_EVENT, { detail: value }));
};
