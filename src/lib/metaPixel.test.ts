import { beforeEach, describe, expect, it, vi } from "vitest";

describe("Facebook pixel privacy", () => {
  beforeEach(() => {
    vi.resetModules(); localStorage.clear(); vi.unstubAllGlobals();
    vi.stubGlobal("AbortSignal", { timeout: () => new AbortController().signal });
    delete window.fbq; delete window._fbq;
    Object.defineProperty(navigator, "globalPrivacyControl", { configurable: true, value: false });
    window.history.replaceState({}, "", "/");
  });
  const region = (country: string) => vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, text: async () => `h=${location.hostname}\nloc=${country}` }));
  it("uses supplied pixel 3633453313468476 and reports one PageView per visit", async () => {
    region("LK"); const { trackMetaPageView } = await import("./metaPixel");
    await trackMetaPageView("/", "", ""); await trackMetaPageView("/", "", "");
    expect(window.fbq?.queue).toContainEqual(["init", "3633453313468476", {}, { agent: "lovable" }]);
    expect(window.fbq?.queue.filter(x => x[0] === "trackSingle")).toEqual([["trackSingle", "3633453313468476", "PageView"]]);
  });
  it.each(["GB", "CA", "DE", "CH", "XX", "T1"])("blocks an unanswered visitor from %s", async country => {
    region(country); const { trackMetaPageView } = await import("./metaPixel");
    await trackMetaPageView("/", "", ""); expect(window.fbq).toBeUndefined();
  });
  it("blocks unknown location lookup", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const { trackMetaPageView } = await import("./metaPixel"); await trackMetaPageView("/", "", ""); expect(window.fbq).toBeUndefined();
  });
  it("blocks a refusal even outside consent regions", async () => {
    region("LK"); const { saveChoices } = await import("./consent"); saveChoices({ advertising: "denied" });
    const { trackMetaPageView } = await import("./metaPixel"); await trackMetaPageView("/", "", ""); expect(window.fbq).toBeUndefined();
  });
  it("global privacy control overrides saved acceptance", async () => {
    region("LK"); Object.defineProperty(navigator, "globalPrivacyControl", { configurable: true, value: true });
    const { saveChoices } = await import("./consent"); saveChoices({ advertising: "granted" });
    const { trackMetaPageView } = await import("./metaPixel"); await trackMetaPageView("/", "", ""); expect(window.fbq).toBeUndefined();
  });
  it("revokes a running pixel immediately after withdrawal", async () => {
    region("LK"); const { trackMetaPageView } = await import("./metaPixel"); await trackMetaPageView("/", "", "");
    const { saveChoices } = await import("./consent"); saveChoices({ advertising: "denied" }); await trackMetaPageView("/", "", "");
    expect(window.fbq?.queue.at(-1)).toEqual(["consent", "revoke"]);
  });
  it("does not treat analytics acceptance as advertising acceptance", async () => {
    region("GB"); const { saveChoices } = await import("./consent"); saveChoices({ analytics: "granted" });
    const { trackMetaPageView } = await import("./metaPixel"); await trackMetaPageView("/", "", ""); expect(window.fbq).toBeUndefined();
  });
  it("excludes private, sensitive and identifying URLs", async () => {
    const { isPixelPageAllowed } = await import("./metaPixel");
    for (const path of ["/admin", "/careers/example", "/finance-marketing-sri-lanka", "/healthcare-email-marketing-engagement-sri-lanka"]) expect(isPixelPageAllowed(path, "", "")).toBe(false);
    expect(isPixelPageAllowed("/", "?email=example", "")).toBe(false);
    expect(isPixelPageAllowed("/", "", "#phone")).toBe(false);
  });
});