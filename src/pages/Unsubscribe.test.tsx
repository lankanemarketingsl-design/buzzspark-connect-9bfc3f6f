import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Unsubscribe from "./Unsubscribe";

const { insert } = vi.hoisted(() => ({ insert: vi.fn() }));
vi.mock("@/integrations/supabase/client", () => ({
  supabase: { from: () => ({ insert }) },
}));
vi.mock("@/components/SEOHead", () => ({ default: () => null }));

describe("unsubscribe persistence", () => {
  beforeEach(() => {
    localStorage.clear();
    insert.mockReset();
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    vi.spyOn(crypto, "randomUUID").mockReturnValue("00000000-0000-4000-8000-000000000001");
  });
  afterEach(() => { cleanup(); vi.restoreAllMocks(); });

  const submit = () => {
    render(<MemoryRouter><Unsubscribe /></MemoryRouter>);
    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "unsubscribe-test@example.com" } });
    fireEvent.click(screen.getByRole("checkbox", { name: /^Email$/ }));
    fireEvent.click(screen.getByRole("checkbox", { name: /This email address/ }));
    fireEvent.click(screen.getByRole("button", { name: "Remove me" }));
  };

  it("waits for a saved request before confirming", async () => {
    let finish: ((value: { error: null }) => void) | undefined;
    insert.mockImplementation(() => new Promise((resolve) => { finish = resolve; }));
    submit();
    expect(insert).toHaveBeenCalledWith(expect.objectContaining({ email: "unsubscribe-test@example.com", channels: ["email"], consent_confirmed: true }));
    expect(screen.queryByRole("heading", { name: "Thank you, we've got your request" })).toBeNull();
    finish?.({ error: null });
    await waitFor(() => expect(screen.getByRole("heading", { name: "Thank you, we've got your request" })).toBeInTheDocument());
  });

  it("does not confirm a failed save", async () => {
    insert.mockResolvedValue({ error: { message: "Save failed" } });
    submit();
    await waitFor(() => expect(screen.getByText(/Something went wrong while sending/)).toBeInTheDocument());
    expect(screen.queryByRole("heading", { name: "Thank you, we've got your request" })).toBeNull();
  });
});