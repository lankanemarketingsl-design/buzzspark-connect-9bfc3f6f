import { describe, expect, it } from "vitest";
import { optInSchema, canReviewOptIn } from "./campaignOptIn";
const base = { full_name: "Campaign subscriber", email: "subscriber@example.com", phone: "", channels: ["email"], consent_confirmed: true };
describe("campaign opt-in rules", () => {
  it("requires explicit consent", () => expect(optInSchema.safeParse({ ...base, consent_confirmed: false }).success).toBe(false));
  it("requires selected channels", () => expect(optInSchema.safeParse({ ...base, channels: [] }).success).toBe(false));
  it("requires email for email updates", () => expect(optInSchema.safeParse({ ...base, email: "" }).success).toBe(false));
  it.each(["sms", "whatsapp"])("requires a phone number for %s", channel => expect(optInSchema.safeParse({ ...base, channels: [channel] }).success).toBe(false));
  it("normalizes Sri Lankan mobile numbers", () => expect(optInSchema.parse({ ...base, channels: ["whatsapp"], phone: "0771234567" }).phone).toBe("+94771234567"));
  it("requires review before approval", () => { expect(canReviewOptIn("new")).toBe(true); expect(canReviewOptIn("approved")).toBe(false); expect(canReviewOptIn("rejected")).toBe(false); });
});