import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import OptOutNotificationBell from "./OptOutNotificationBell";

const { select, eq, limit } = vi.hoisted(() => ({ select: vi.fn(), eq: vi.fn(), limit: vi.fn() }));
vi.mock("@/integrations/supabase/client", () => ({
  supabase: { from: () => ({ select }) },
}));
afterEach(() => { cleanup(); vi.clearAllMocks(); });

describe("unsubscribe notifications", () => {
  it("counts only new persisted requests using the exact total, not the preview size", async () => {
    select.mockReturnValue({ eq });
    eq.mockReturnValue({ order: () => ({ limit }) });
    limit.mockResolvedValue({ data: [{ reference: "BC-TEST01", created_at: "2026-11-15T03:45:00Z" }], count: 12, error: null });
    render(<MemoryRouter><OptOutNotificationBell /></MemoryRouter>);
    await waitFor(() => expect(screen.getByRole("button", { name: "Unsubscribe notifications: 12 new requests" })).toBeInTheDocument());
    expect(eq).toHaveBeenCalledWith("status", "new");
    expect(select).toHaveBeenCalledWith("reference, created_at", { count: "exact" });
    expect(limit).toHaveBeenCalledWith(5);
  });
});