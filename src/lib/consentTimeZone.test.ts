import { describe, it, expect } from "vitest";
import { timeZoneRequiresConsent } from "./consent";
describe("time zone fallback", () => {
  it("Sri Lanka does not require consent", () => expect(timeZoneRequiresConsent("Asia/Colombo")).toBe(false));
  it("Europe requires consent", () => expect(timeZoneRequiresConsent("Europe/Berlin")).toBe(true));
  it("UK requires consent", () => expect(timeZoneRequiresConsent("Europe/London")).toBe(true));
  it("Canada requires consent", () => expect(timeZoneRequiresConsent("America/Toronto")).toBe(true));
});
