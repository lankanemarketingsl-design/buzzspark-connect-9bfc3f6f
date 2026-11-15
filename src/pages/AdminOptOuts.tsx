import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Copy, Download, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import type { Database } from "@/integrations/supabase/types";

type OptOutRequest = Database["public"]["Tables"]["opt_out_requests"]["Row"];

const STATUS_LABELS: Record<string, string> = {
  new: "New",
  in_progress: "In progress",
  done: "Done",
  not_from_us: "Not from us",
  rejected: "Rejected",
};

const SENDER_CHECK_LABELS: Record<string, string> = {
  unchecked: "Unchecked",
  ours: "Ours",
  not_ours: "Not from us",
  unclear: "Unclear",
};

const csvEscape = (value: string | null | undefined) => {
  const v = value ?? "";
  return /[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
};

const downloadCsv = (filename: string, rows: string[][]) => {
  const csv = rows.map((r) => r.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

const AdminOptOuts = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [requests, setRequests] = useState<OptOutRequest[]>([]);
  const [selected, setSelected] = useState<OptOutRequest | null>(null);
  const [signedUrls, setSignedUrls] = useState<Record<string, string>>({});
  const [statusFilter, setStatusFilter] = useState("all");
  const [channelFilter, setChannelFilter] = useState("all");
  const [senderFilter, setSenderFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate("/admin/login", { replace: true });
        return;
      }
      const uid = sessionData.session.user.id;
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      if (!roleData) {
        toast({ title: "Access denied", description: "Admin access only.", variant: "destructive" });
        await supabase.auth.signOut();
        navigate("/admin/login", { replace: true });
        return;
      }
      setUserId(uid);
      setIsAdmin(true);
      await loadRequests();
      setLoading(false);
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadRequests = async () => {
    const { data, error } = await supabase
      .from("opt_out_requests")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Could not load requests", description: error.message, variant: "destructive" });
      return;
    }
    setRequests(data ?? []);
  };

  useEffect(() => {
    if (!isAdmin) return;
    const refresh = () => {
      if (document.visibilityState === "visible") void loadRequests();
    };
    const timer = window.setInterval(refresh, 15000);
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refresh);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return requests.filter((r) => {
      if (statusFilter !== "all" && r.status !== statusFilter) return false;
      if (channelFilter !== "all" && !r.channels.includes(channelFilter)) return false;
      if (senderFilter !== "all" && r.sender_check !== senderFilter) return false;
      if (q) {
        const hay = [r.reference, r.email, r.phone].filter(Boolean).join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [requests, statusFilter, channelFilter, senderFilter, search]);

  const counters = useMemo(() => {
    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);
    return {
      new: requests.filter((r) => r.status === "new").length,
      inProgress: requests.filter((r) => r.status === "in_progress").length,
      doneThisMonth: requests.filter((r) => r.status === "done" && new Date(r.created_at) >= monthStart).length,
      notFromUs: requests.filter((r) => r.status === "not_from_us").length,
    };
  }, [requests]);

  const previousCount = useMemo(() => {
    if (!selected) return 0;
    return requests.filter(
      (r) =>
        r.id !== selected.id &&
        ((selected.email && r.email === selected.email) || (selected.phone && r.phone === selected.phone))
    ).length;
  }, [selected, requests]);

  const openDetail = async (r: OptOutRequest) => {
    setSelected(r);
    setNotes(r.admin_notes ?? "");
    const urls: Record<string, string> = {};
    for (const path of r.screenshot_paths) {
      const { data } = await supabase.storage.from("opt-out-screenshots").createSignedUrl(path, 300);
      if (data?.signedUrl) urls[path] = data.signedUrl;
    }
    setSignedUrls(urls);
  };

  const updateRequest = async (id: string, patch: Partial<OptOutRequest>) => {
    setSaving(true);
    const { error } = await supabase.from("opt_out_requests").update(patch).eq("id", id);
    setSaving(false);
    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
      return false;
    }
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
    setSelected((prev) => (prev && prev.id === id ? { ...prev, ...patch } : prev));
    return true;
  };

  const setSenderCheck = (value: string) => selected && updateRequest(selected.id, { sender_check: value });

  const setStatus = (value: string) => {
    if (!selected) return;
    const patch: Partial<OptOutRequest> = { status: value };
    if (value === "done") {
      patch.processed_at = new Date().toISOString();
      patch.processed_by = userId;
    }
    updateRequest(selected.id, patch);
  };

  const saveNotes = () => selected && updateRequest(selected.id, { admin_notes: notes });

  const copyReply = (kind: "done" | "not_from_us") => {
    if (!selected) return;
    const channelList = selected.channels.includes("all") ? "email, SMS and WhatsApp" : selected.channels.join(", ");
    const text =
      kind === "done"
        ? `Hi, your preferences have been updated and you won't receive ${channelList} messages from Buzz Connect any more. Reference: ${selected.reference}. Thank you, and you're always welcome to explore findit.lk and StudyWay.lk (https://studyway.lk). – The Buzz Connect team`
        : `Hi, thank you for letting us know. We checked, and this message didn't come from Buzz Connect, so we're unable to stop it ourselves. You may be able to block the sender or contact the company named in the message. We've also made sure your details aren't on our lists. Reference: ${selected.reference}. – The Buzz Connect team`;
    navigator.clipboard.writeText(text);
    toast({ title: "Reply copied", description: "Paste it into your email reply." });
  };

  const exportFiltered = () => {
    downloadCsv(`opt-out-requests-${new Date().toISOString().slice(0, 10)}.csv`, [
      ["Reference", "Date", "Email", "Phone", "Channels", "Sender check", "Status", "Screenshots"],
      ...filtered.map((r) => [
        r.reference,
        new Date(r.created_at).toLocaleString(),
        r.email ?? "",
        r.phone ?? "",
        r.channels.join("|"),
        r.sender_check,
        r.status,
        String(r.screenshot_paths.length),
      ]),
    ]);
  };

  const exportDoNotContact = async () => {
    const { data, error } = await supabase.from("do_not_contact_list").select("*");
    if (error) {
      toast({ title: "Export failed", description: error.message, variant: "destructive" });
      return;
    }
    downloadCsv(`do-not-contact-${new Date().toISOString().slice(0, 10)}.csv`, [
      ["Email", "Phone", "Channels", "Processed at"],
      ...(data ?? []).map((r) => [r.email ?? "", r.phone ?? "", (r.channels ?? []).join("|"), r.processed_at ?? ""]),
    ]);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</div>;
  }
  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Opt-out Requests</h1>
            <p className="text-sm text-muted-foreground">
              Manage your messages / unsubscribe requests from buzzconnect.lk/unsubscribe
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => navigate("/admin")}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Dashboard
            </Button>
            <Button variant="outline" onClick={loadRequests}>Refresh</Button>
            <Button variant="outline" onClick={exportFiltered}>
              <Download className="w-4 h-4 mr-1" /> Export CSV
            </Button>
            <Button variant="outline" onClick={exportDoNotContact}>
              <Download className="w-4 h-4 mr-1" /> Export do-not-contact list
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">New</div>
            <div className="text-2xl font-bold tabular-nums">{counters.new}</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">In progress</div>
            <div className="text-2xl font-bold tabular-nums">{counters.inProgress}</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Done this month</div>
            <div className="text-2xl font-bold tabular-nums">{counters.doneThisMonth}</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Not from us</div>
            <div className="text-2xl font-bold tabular-nums">{counters.notFromUs}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option value="all">All statuses</option>
            {Object.entries(STATUS_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
          <select value={channelFilter} onChange={(e) => setChannelFilter(e.target.value)} className="rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option value="all">All channels</option>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
          <select value={senderFilter} onChange={(e) => setSenderFilter(e.target.value)} className="rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option value="all">All sender checks</option>
            {Object.entries(SENDER_CHECK_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
          <Input
            placeholder="Search reference, email or phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
        </div>

        <div className="rounded-xl border border-border bg-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="p-3">Reference</th>
                <th className="p-3">Date</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Channels</th>
                <th className="p-3">Screenshots</th>
                <th className="p-3">Sender check</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-6 text-center text-muted-foreground">
                    No requests match.
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr
                    key={r.id}
                    onClick={() => openDetail(r)}
                    className="border-b border-border last:border-0 hover:bg-muted/50 cursor-pointer"
                  >
                    <td className="p-3 font-mono font-semibold">{r.reference}</td>
                    <td className="p-3 whitespace-nowrap">{new Date(r.created_at).toLocaleString()}</td>
                    <td className="p-3">{r.email ?? "—"}</td>
                    <td className="p-3">{r.phone ?? "—"}</td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {r.channels.map((c) => (
                          <Badge key={c} variant="secondary" className="capitalize">{c}</Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-3 tabular-nums">{r.screenshot_paths.length}</td>
                    <td className="p-3">{SENDER_CHECK_LABELS[r.sender_check] ?? r.sender_check}</td>
                    <td className="p-3">
                      <Badge variant={r.status === "new" ? "default" : "outline"}>
                        {STATUS_LABELS[r.status] ?? r.status}
                      </Badge>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end" onClick={() => setSelected(null)}>
          <div
            className="w-full max-w-lg h-full bg-card border-l border-border overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl font-bold font-mono">{selected.reference}</h2>
              <button onClick={() => setSelected(null)} aria-label="Close" className="p-1 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <dl className="space-y-2 text-sm mb-6">
              <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Date</dt><dd>{new Date(selected.created_at).toLocaleString()}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Email</dt><dd className="text-right break-all">{selected.email ?? "—"}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Phone</dt><dd>{selected.phone ?? "—"}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Channels</dt><dd className="capitalize">{selected.channels.join(", ")}</dd></div>
              {previousCount > 0 && (
                <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Previous requests</dt><dd>{previousCount}</dd></div>
              )}
            </dl>

            {selected.screenshot_paths.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-sm mb-2">Screenshots</h3>
                <div className="flex flex-wrap gap-3">
                  {selected.screenshot_paths.map((path, i) =>
                    signedUrls[path] ? (
                      <a key={path} href={signedUrls[path]} target="_blank" rel="noopener noreferrer">
                        <img src={signedUrls[path]} alt={`Screenshot ${i + 1}`} className="w-24 h-24 object-cover rounded-lg border border-border" />
                      </a>
                    ) : (
                      <div key={path} className="w-24 h-24 rounded-lg border border-border bg-muted animate-pulse" />
                    )
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Links expire after 5 minutes. Click to enlarge.</p>
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-semibold text-sm mb-2">Sender check</h3>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant={selected.sender_check === "ours" ? "default" : "outline"} disabled={saving} onClick={() => setSenderCheck("ours")}>Ours</Button>
                <Button size="sm" variant={selected.sender_check === "not_ours" ? "default" : "outline"} disabled={saving} onClick={() => setSenderCheck("not_ours")}>Not from us</Button>
                <Button size="sm" variant={selected.sender_check === "unclear" ? "default" : "outline"} disabled={saving} onClick={() => setSenderCheck("unclear")}>Unclear</Button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-sm mb-2">Status</h3>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant={selected.status === "in_progress" ? "default" : "outline"} disabled={saving} onClick={() => setStatus("in_progress")}>In progress</Button>
                <Button size="sm" variant={selected.status === "done" ? "default" : "outline"} disabled={saving} onClick={() => setStatus("done")}>Done</Button>
                <Button size="sm" variant={selected.status === "not_from_us" ? "default" : "outline"} disabled={saving} onClick={() => setStatus("not_from_us")}>Not from us</Button>
                <Button size="sm" variant={selected.status === "rejected" ? "default" : "outline"} disabled={saving} onClick={() => setStatus("rejected")}>Reject</Button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-sm mb-2">Admin notes</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Internal notes…"
              />
              <Button size="sm" variant="outline" className="mt-2" disabled={saving} onClick={saveNotes}>Save notes</Button>
            </div>

            {selected.email && (
              <div className="mb-6">
                <h3 className="font-semibold text-sm mb-2">Copy reply</h3>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" onClick={() => copyReply("done")}>
                    <Copy className="w-3.5 h-3.5 mr-1" /> Done reply
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => copyReply("not_from_us")}>
                    <Copy className="w-3.5 h-3.5 mr-1" /> Not-from-us reply
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOptOuts;
