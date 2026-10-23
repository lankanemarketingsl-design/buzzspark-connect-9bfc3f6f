import { describe,it,expect } from "vitest";
import { industries } from "./bb360UseCases";
import { BB360_SITE_URL,bb360ConversionPages,bb360IndustryDirectory,industryRouteById } from "./bb360IndustryRegistry";
describe("Brand Blast industry URLs",()=>{
  it.each(industries.map(i=>[i.id,i.name]))("%s has its own campaign page",id=>{
    expect(industryRouteById[id]).toMatch(/^\/brand-blast-360\/[a-z-]+$/);
    expect(bb360IndustryDirectory.some(p=>p.path===industryRouteById[id])).toBe(true);
  });
  it("includes all fifteen industries plus tuition",()=>{
    expect(bb360IndustryDirectory).toHaveLength(16);
    expect(bb360IndustryDirectory.map(p=>p.path)).toContain("/tuition-class-marketing-sri-lanka");
  });
  it("has unique industry titles and descriptions",()=>{
    expect(new Set(bb360ConversionPages.map(p=>p.title)).size).toBe(bb360ConversionPages.length);
    expect(new Set(bb360ConversionPages.map(p=>p.description)).size).toBe(bb360ConversionPages.length);
  });
  it("uses the published site for canonicals",()=>expect(BB360_SITE_URL).toBe("https://buzzspark-connect.lovable.app"));
});