import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CookieConsent, { openCookieSettings } from "./CookieConsent";
import { readChoice } from "@/lib/consent";

describe("Cookie permission choices", () => {
  beforeEach(() => { localStorage.clear(); vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false })); });
  it("accepts analytics and advertising explicitly despite failed location detection", async () => {
    render(<MemoryRouter><CookieConsent /></MemoryRouter>);
    fireEvent.click(await screen.findByRole("button", { name: "Accept all" }));
    expect(readChoice("analytics")).toBe("granted");
    expect(readChoice("advertising")).toBe("granted");
  });
  it("rejects both purposes and allows withdrawal through permanent settings", async () => {
    render(<MemoryRouter><CookieConsent /></MemoryRouter>);
    fireEvent.click(await screen.findByRole("button", { name: "Reject all" }));
    expect(readChoice("analytics")).toBe("denied");
    expect(readChoice("advertising")).toBe("denied");
    act(() => openCookieSettings());
    await waitFor(() => expect(screen.getByRole("button", { name: "Save choices" })).toBeTruthy());
    fireEvent.click(screen.getByRole("button", { name: "Save choices" }));
    expect(readChoice("advertising")).toBe("denied");
  });
});