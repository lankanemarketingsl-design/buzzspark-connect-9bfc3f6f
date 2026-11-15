import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi, afterEach } from "vitest";
import OptIn from "./OptIn";
const { insert } = vi.hoisted(() => ({ insert: vi.fn() }));
vi.mock("@/integrations/supabase/client", () => ({ supabase: { from: () => ({ insert }) } }));
vi.mock("@/components/SEOHead", () => ({ default: () => null }));
afterEach(() => { cleanup(); vi.restoreAllMocks(); insert.mockReset(); });
function submit() {
  vi.spyOn(crypto, "randomUUID").mockReturnValue("12345678-0000-4000-8000-000000000000");
  render(<MemoryRouter><OptIn /></MemoryRouter>);
  fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Subscriber" } });
  fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "subscriber@example.com" } });
  fireEvent.click(screen.getByRole("checkbox", { name: /^Email$/ }));
  fireEvent.click(screen.getByRole("checkbox", { name: /I am 18 or older/ }));
  fireEvent.click(screen.getByRole("button", { name: "Request to join" }));
}
describe("saved opt-in requests", () => {
  it("confirms only after the request is saved with channel consent", async () => {
    let finish: ((value: { error: null }) => void) | undefined;
    insert.mockImplementation(() => new Promise(resolve => { finish = resolve; }));
    submit();
    expect(insert).toHaveBeenCalledWith(expect.objectContaining({ channels: ["email"], consent_confirmed: true, notice_version: "campaign-opt-in-v1" }));
    expect(screen.queryByRole("heading", { name: "Your opt-in request is saved" })).toBeNull();
    finish?.({ error: null });
    await waitFor(() => expect(screen.getByRole("heading", { name: "Your opt-in request is saved" })).toBeInTheDocument());
  });
  it("never confirms an unsuccessful save", async () => {
    insert.mockResolvedValue({ error: { message: "Rejected" } });
    submit();
    await screen.findByRole("alert");
    expect(screen.queryByRole("heading", { name: "Your opt-in request is saved" })).toBeNull();
  });
});