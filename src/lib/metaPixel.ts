import { canTrack } from "./consent";

export const META_PIXEL_ID = "3633453313468476";
type Pixel = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Pixel;
  loaded: boolean;
  version: string;
};
declare global {
  interface Window { fbq?: Pixel; _fbq?: Pixel }
}

let initialized = false;
let lastPage: string | undefined;

export function isPixelPageAllowed(pathname: string, search: string, hash: string) {
  // Never share private routes, sensitive context or URL-carried customer data.
  return !search && !hash && !/admin|careers|finance|healthcare|privacy/i.test(pathname);
}

export async function trackMetaPageView(pathname: string, search: string, hash: string) {
  const permitted = await canTrack("advertising");
  const pageAllowed = isPixelPageAllowed(pathname, search, hash);
  if (!permitted || !pageAllowed) {
    window.fbq?.("consent", "revoke");
    return;
  }
  // The region lookup can finish after navigation; never replay an old visit.
  if (location.pathname !== pathname || location.search !== search || location.hash !== hash) return;
  if (!window.fbq) {
    const pixel: Pixel = Object.assign(function (...args: unknown[]) {
      if (pixel.callMethod) pixel.callMethod.apply(pixel, args);
      else pixel.queue.push(args);
    }, { queue: [] as unknown[][], loaded: true, version: "2.0", push: undefined as unknown as Pixel });
    pixel.push = pixel;
    window.fbq = pixel;
    window._fbq = pixel;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  if (!initialized) {
    window.fbq("set", "autoConfig", false, META_PIXEL_ID);
    window.fbq("init", META_PIXEL_ID, {}, { agent: "lovable" });
    initialized = true;
  }
  window.fbq("consent", "grant");
  if (lastPage === pathname) return;
  window.fbq("trackSingle", META_PIXEL_ID, "PageView");
  lastPage = pathname;
}