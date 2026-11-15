import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, X, Download, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Database } from "@/integrations/supabase/types";
import { canReviewOptIn } from "@/data/campaignOptIn";
type Request = Database["public"]["Tables"]["opt_in_requests"]["Row"];

export default function AdminOptIns() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [rows, setRows] = useState<Request[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("new");
  const [selected, setSelected] = useState<Request | null>(null);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const load = useCallback(async () => {
    const { data, error } = await supabase.from("opt_in_requests").select("*").order("created_at", { ascending: false });
    if (error) { setError("Could not load opt-in requests."); return; }
    setRows(data ?? []); setError("");
  }, []);
  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) { navigate("/admin/login", { replace: true }); return; }
      const { data: role } = await supabase.from("user_roles").select("role").eq("user_id", data.session.user.id).eq("role", "admin").maybeSingle();
      if (!role) { navigate("/admin/login", { replace: true }); return; }
      setUserId(data.session.user.id); await load(); setLoading(false);
    };
    void init();
  }, [load, navigate]);
  useEffect(() => {
    if (!userId) return;
    const refresh = () => { if (document.visibilityState === "visible") void load(); };
    const timer = window.setInterval(refresh, 15000);
    window.addEventListener("focus", refresh);
    return () => { window.clearInterval(timer); window.removeEventListener("focus", refresh); };
  }, [userId, load]);
  const review = async (status: "approved" | "rejected") => {
    if (!selected || saving || !canReviewOptIn(selected.status)) return;
    setSaving(true);
    const { data, error } = await supabase.from("opt_in_requests").update({ status, admin_notes: notes, reviewed_at: new Date().toISOString(), reviewed_by: userId }).eq("id", selected.id).eq("status", "new").select("*").single();
    setSaving(false);
    if (error || !data) { setError("Review could not be saved. Refresh and try again."); return; }
    setSelected(data); await load();
  };
  const filtered = rows.filter(r => (filter === "all" || r.status === filter) && [r.full_name, r.email, r.phone, r.reference].join(" ").toLowerCase().includes(search.toLowerCase()));
  const exportRows = () => {
    const csv = [["Reference", "Requested at", "Name", "Email", "Phone", "Channels", "Status", "Consent text", "Notice version", "Reviewed at"], ...filtered.map(r => [r.reference, r.created_at, r.full_name, r.email ?? "", r.phone ?? "", r.channels.join("|"), r.status, r.consent_text, r.notice_version, r.reviewed_at ?? ""])].map(row => row.map(v => `"${(/^[=+@-]/.test(v) ? "'" : "") + v.replace(/"/g, '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a"); a.href = url; a.download = "campaign-opt-in-requests.csv"; a.click(); URL.revokeObjectURL(url);
  };
  if (loading) return <p className="p-8 text-muted-foreground">Loading…</p>;
  if (!userId) return null;
  return <div className="container mx-auto px-4 py-8 max-w-6xl">
    <header className="flex flex-wrap justify-between items-center gap-3 mb-6"><h1 className="font-heading text-2xl font-bold">Opt-in requests</h1><div className="flex flex-wrap gap-2"><Button asChild variant="outline"><Link to="/admin">Dashboard</Link></Button><Button asChild variant="outline"><Link to="/admin/opt-outs">Opt-out requests</Link></Button><Button variant="outline" onClick={load} aria-label="Refresh requests"><RefreshCw className="w-4 h-4" /></Button><Button variant="outline" onClick={exportRows}><Download className="w-4 h-4 mr-2" />Export CSV</Button></div></header>
    <div className="flex flex-wrap gap-2 mb-5">{["new", "approved", "rejected", "all"].map(status => <Button key={status} variant={filter === status ? "default" : "outline"} onClick={() => setFilter(status)} className="capitalize">{status} ({rows.filter(r => status === "all" || r.status === status).length})</Button>)}</div>
    <Input aria-label="Search opt-in requests" placeholder="Search name, contact or reference" value={search} onChange={e => setSearch(e.target.value)} className="mb-5" />
    {error && <p role="alert" className="text-destructive mb-4">{error}</p>}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><div className="space-y-3">{filtered.length === 0 && <p className="text-muted-foreground">No matching requests.</p>}{filtered.map(r => <article key={r.id} className="border border-border rounded-lg p-4 bg-card break-words"><div className="flex justify-between gap-3"><h2 className="font-semibold">{r.full_name}</h2><span className="text-sm capitalize">{r.status}</span></div><p className="text-sm text-muted-foreground mt-2">{r.reference} · {new Date(r.created_at).toLocaleString()}</p><p className="mt-2">{r.email}</p><p>{r.phone}</p><p className="text-sm uppercase my-2">{r.channels.join(" · ")}</p><Button variant="outline" onClick={() => { setSelected(r); setNotes(r.admin_notes); }}>Review request</Button></article>)}</div>
    {selected && <section className="border-t border-border pt-5 space-y-4 min-w-0"><h2 className="font-heading text-xl font-semibold">{selected.reference}</h2><p className="text-muted-foreground">Contact ownership has not been verified. Approval records your review only; add contacts to your sending tools manually and check prior opt-outs before doing so.</p><p className="text-sm">{selected.consent_text}</p><p className="text-sm text-muted-foreground">Consent recorded: {new Date(selected.created_at).toLocaleString()} · {selected.notice_version}</p><label htmlFor="review-notes" className="block font-semibold">Admin notes</label><Textarea id="review-notes" maxLength={2000} value={notes} onChange={e => setNotes(e.target.value)} disabled={!canReviewOptIn(selected.status)} /><div className="flex flex-wrap gap-2"><Button disabled={saving || !canReviewOptIn(selected.status)} onClick={() => review("approved")}><Check className="w-4 h-4 mr-2" />Approve request</Button><Button variant="outline" disabled={saving || !canReviewOptIn(selected.status)} onClick={() => review("rejected")}><X className="w-4 h-4 mr-2" />Reject request</Button></div><p className="text-sm capitalize" role="status">Status: {selected.status}</p></section>}</div>
  </div>;
}