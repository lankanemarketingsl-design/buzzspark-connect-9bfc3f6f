import { describe, expect, it } from "vitest";
import { tuitionPackages, tuitionWhatsAppHref, TUITION_PATH } from "./tuitionPackages";
import { getWhatsAppNumber } from "../lib/whatsappTracking";

describe("tuition package rules", () => {
  it.each([
    ["Class Starter", 1, 15000, 15000],
    ["Term Booster", 3, 40500, 13500],
    ["Full Batch", 6, 76500, 12750],
    ["Institute Dominator", 10, 112500, 11250],
  ])("%s has the supplied campaign count and pricing", (name, campaigns, price, perCampaign) => {
    expect(tuitionPackages.find(p => p.name === name)).toMatchObject({ campaigns, price, perCampaign });
  });
  it("preserves the dedicated tuition WhatsApp destination and campaign", () => {
    const url = new URL(tuitionWhatsAppHref("Subject: Maths Grade: A/L Area: Colombo", "hero_main"));
    expect(url.pathname).toBe("/94760317477");
    expect(url.searchParams.get("utm_campaign")).toBe("tuition_class_marketing");
    expect(url.searchParams.get("text")).toBe("Subject: Maths Grade: A/L Area: Colombo");
    expect(getWhatsAppNumber(TUITION_PATH)).toBe("94760317477");
    expect(getWhatsAppNumber("/brand-blast-360")).toBe("94771976351");
    expect(getWhatsAppNumber("/")).toBe("94771437707");
  });
  it("keeps six-month validity in Term Booster only", () => {
    expect(tuitionPackages[1].extras).toContain("6-month campaign validity");
  });
  it("includes priority 12-hour launch in Full Batch", () => {
    expect(tuitionPackages[2].extras).toContain("Priority 12-hour launch");
  });
  it("includes featured tutor placement in Institute Dominator", () => {
    expect(tuitionPackages[3].extras).toContain("Featured Premium Tutor placement");
  });
  it.each(["Class Starter", "Term Booster", "Full Batch", "Institute Dominator"])("includes remarketing in %s", (name) => {
    expect(tuitionPackages.find(p => p.name === name)?.remarketing).toBe(true);
  });
});