import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CookieConsent, { openCookieSettings } from "./CookieConsent";
import { readChoice } from "@/lib/consent";

describe("Cookie permission choices", () => {
  beforeEach(() => { localStorage.clear(); vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false })); });
  it("leaves purposes unanswered until visitors open settings and explicitly grant them", async () => {
    render(<MemoryRouter><CookieConsent /></MemoryRouter>);
    expect(readChoice("analytics")).not.toBe("granted");
    expect(readChoice("advertising")).not.toBe("granted");
    act(() => openCookieSettings());
    fireEvent.click(await screen.findByRole("switch", { name: "Analytics permission" }));
    fireEvent.click(screen.getByRole("switch", { name: "Advertising permission" }));
    fireEvent.click(screen.getByRole("button", { name: "Save choices" }));
    expect(readChoice("analytics")).toBe("granted");
    expect(readChoice("advertising")).toBe("granted");
  });
  it("rejects both purposes and allows withdrawal through permanent settings", async () => {
    render(<MemoryRouter><CookieConsent /></MemoryRouter>);
    act(() => openCookieSettings());
    fireEvent.click(await screen.findByRole("button", { name: "Save choices" }));
    expect(readChoice("analytics")).toBe("denied");
    expect(readChoice("advertising")).toBe("denied");
    act(() => openCookieSettings());
    await waitFor(() => expect(screen.getByRole("button", { name: "Save choices" })).toBeTruthy());
    fireEvent.click(screen.getByRole("button", { name: "Save choices" }));
    expect(readChoice("advertising")).toBe("denied");
  });
});