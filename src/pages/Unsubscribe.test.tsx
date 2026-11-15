import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Unsubscribe from "./Unsubscribe";

const { insert, upload } = vi.hoisted(() => ({ insert: vi.fn(), upload: vi.fn() }));
vi.mock("@/integrations/supabase/client", () => ({
  supabase: { from: () => ({ insert }), storage: { from: () => ({ upload }) } },
}));
vi.mock("@/components/SEOHead", () => ({ default: () => null }));

describe("unsubscribe persistence", () => {
  beforeEach(() => {
    localStorage.clear();
    insert.mockReset();
    upload.mockReset();
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    vi.spyOn(crypto, "randomUUID").mockReturnValue("00000000-0000-4000-8000-000000000001");
  });
  afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

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

  it("does not silently drop a selected screenshot when upload fails", async () => {
    upload.mockResolvedValue({ error: { message: "Upload failed" } });
    class TestURL extends URL { static createObjectURL = vi.fn(() => "blob:test"); }
    vi.stubGlobal("URL", TestURL);
    render(<MemoryRouter><Unsubscribe /></MemoryRouter>);
    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "unsubscribe-test@example.com" } });
    fireEvent.click(screen.getByRole("checkbox", { name: /^Email$/ }));
    fireEvent.click(screen.getByRole("checkbox", { name: /This email address/ }));
    fireEvent.change(screen.getByLabelText(/Tap to add screenshots/), { target: { files: [new File(["image"], "test.png", { type: "image/png" })] } });
    fireEvent.click(screen.getByRole("button", { name: "Remove me" }));
    await waitFor(() => expect(screen.getByText(/Something went wrong while sending/)).toBeInTheDocument());
    expect(insert).not.toHaveBeenCalled();
    expect(screen.queryByRole("heading", { name: "Thank you, we've got your request" })).toBeNull();
  });
});