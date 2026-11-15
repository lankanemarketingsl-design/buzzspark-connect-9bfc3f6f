import { describe, expect, it } from "vitest";
import { UNSUBSCRIBE_REMOVAL_DAYS, unsubscribeMailto } from "./privacyPolicy";

describe("unsubscribe policy", () => {
  it("allows seven days to remove contacts from sending lists", () => {
    expect(UNSUBSCRIBE_REMOVAL_DAYS).toBe(7);
  });
  it("routes email removal requests to the dedicated inbox with the requested sample", () => {
    const link = new URL(unsubscribeMailto);
    expect(link.pathname).toBe("buzzunsubscribe@gmail.com");
    expect(link.searchParams.get("subject")).toBe("Please unsubscribe me");
    expect(link.searchParams.get("body")).toBe("Hi Buzz Connect,\n\nPlease remove me from your messages.\n\nEmail: \nMobile: \nPlease stop: Email / SMS / WhatsApp / All messages\n\nThank you.");
  });
});