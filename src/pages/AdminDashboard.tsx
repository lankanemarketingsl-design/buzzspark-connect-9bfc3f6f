import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

type Inquiry = {
  id: string;
  created_at: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  business: string | null;
  service: string | null;
  message: string | null;
  source_page: string | null;
  source_url: string | null;
  placement: string | null;
  whatsapp_number: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  status: string;
  inquiry_type: string;
};

const PAGE_LABELS: Record<string, string> = {
  "/": "Home",
  "/about-us": "About Us",
  "/contact-us": "Contact Us",
  "/email-marketing": "Email Marketing",
  "/sms-marketing": "SMS Marketing",
  "/whatsapp-marketing": "WhatsApp Marketing",
  "/social-media-marketing": "Social Media Marketing",
  "/seo-services": "SEO Services",
  "/google-ads-sri-lanka": "Google Ads",
  "/online-advertising": "Online Advertising",
  "/website-design": "Website Design",
  "/graphic-design": "Graphic Design",
  "/lead-generation": "Lead Generation",
  "/special-packages": "Special Packages",
  "/why-choose-us": "Why Choose Us",
  "/careers": "Careers",
  "/resources": "Resources",
  "/staff-recruitment": "Staff Recruitment",
  "/hotel-marketing": "Hotel Marketing",
  "/restaurant-marketing": "Restaurant Marketing",
  "/real-estate-marketing": "Real Estate Marketing",
  "/fashion-marketing": "Fashion Marketing",
  "/finance-marketing": "Finance Marketing",
  "/education-marketing": "Education Marketing",
  "/event-marketing": "Event Marketing",
};

const TYPE_LABELS: Record<string, string> = {
  form_submission: "Form",
  whatsapp_click: "WhatsApp",
  call_click: "Call",
  email_click: "Email",
  quote_open: "Quote Open",
  page_view: "Page View",
};


const prettyPage = (path: string | null): string => {
  if (!path) return "—";
  if (PAGE_LABELS[path]) return PAGE_LABELS[path];
  const last = path.split("/").filter(Boolean).pop() || "Home";
  return last
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};


const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState<string>("all");
  const [pageFilter, setPageFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

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
      setIsAdmin(true);
      await loadInquiries();
      setLoading(false);
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadInquiries = async () => {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000);
    if (error) {
      toast({ title: "Load failed", description: error.message, variant: "destructive" });
      return;
    }
    setInquiries((data || []) as Inquiry[]);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    const { error } = await supabase.from("inquiries").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
      return;
    }
    setInquiries((prev) => prev.filter((x) => x.id !== id));
  };

  const handleStatusToggle = async (inq: Inquiry) => {
    const next = inq.status === "new" ? "contacted" : inq.status === "contacted" ? "closed" : "new";
    const { error } = await supabase.from("inquiries").update({ status: next }).eq("id", inq.id);
    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
      return;
    }
    setInquiries((prev) => prev.map((x) => (x.id === inq.id ? { ...x, status: next } : x)));
  };

  const services = useMemo(() => {
    const s = new Set<string>();
    inquiries.forEach((i) => i.service && s.add(i.service));
    return Array.from(s).sort();
  }, [inquiries]);

  const pages = useMemo(() => {
    const s = new Set<string>();
    inquiries.forEach((i) => i.source_page && s.add(i.source_page));
    return Array.from(s).sort();
  }, [inquiries]);

  const filtered = useMemo(() => {
    return inquiries.filter((i) => {
      if (serviceFilter !== "all" && i.service !== serviceFilter) return false;
      if (pageFilter !== "all" && i.source_page !== pageFilter) return false;
      if (typeFilter !== "all" && i.inquiry_type !== typeFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        const hay = [i.name, i.phone, i.email, i.business, i.message, i.service, i.source_page]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [inquiries, search, serviceFilter, pageFilter, typeFilter]);

  const exportCsv = () => {
    const headers = [
      "created_at",
      "inquiry_type",
      "status",
      "name",
      "phone",
      "email",
      "business",
      "service",
      "source_page",
      "placement",
      "whatsapp_number",
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "message",
    ];
    const rows = filtered.map((i) =>
      headers
        .map((h) => `"${String((i as unknown as Record<string, unknown>)[h] ?? "").replace(/"/g, '""')}"`)
        .join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading…</div>;
  }
  if (!isAdmin) return null;

  const stats = {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    forms: inquiries.filter((i) => i.inquiry_type === "form_submission").length,
    whatsapp: inquiries.filter((i) => i.inquiry_type === "whatsapp_click").length,
    calls: inquiries.filter((i) => i.inquiry_type === "call_click").length,
    emails: inquiries.filter((i) => i.inquiry_type === "email_click").length,
    quotes: inquiries.filter((i) => i.inquiry_type === "quote_open").length,
  };


  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Inquiry Admin Panel</h1>
            <p className="text-sm text-muted-foreground">All inquiries from the website</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={loadInquiries}>Refresh</Button>
            <Button variant="outline" onClick={exportCsv}>Export CSV</Button>
            <Button variant="ghost" onClick={handleSignOut}>Sign out</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          {[
            { label: "Total", value: stats.total },
            { label: "New", value: stats.new },
            { label: "Form Submissions", value: stats.forms },
            { label: "Quote Opens", value: stats.quotes },
          ].map((s) => (
            <div key={s.label} className="border border-border rounded-xl p-4 bg-card">
              <div className="text-xs uppercase text-muted-foreground">{s.label}</div>
              <div className="text-2xl font-bold">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {[
            { label: "WhatsApp Clicks", value: stats.whatsapp },
            { label: "Call Clicks", value: stats.calls },
            { label: "Email Clicks", value: stats.emails },
          ].map((s) => (
            <div key={s.label} className="border border-border rounded-xl p-4 bg-card">
              <div className="text-xs uppercase text-muted-foreground">{s.label}</div>
              <div className="text-2xl font-bold">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Brand Blast 360 — dedicated tracking */}
        <BrandBlast360Panel inquiries={inquiries} onPick={() => setPageFilter("/brand-blast-360")} />



        {/* Today */}
        <PeriodInquiries range="today" inquiries={inquiries} onPick={(p) => setPageFilter(p)} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <PeriodServices range="today" inquiries={inquiries} onPick={(s) => setServiceFilter(s)} />
          <PeriodSources range="today" inquiries={inquiries} />
        </div>

        {/* This week */}
        <PeriodInquiries range="week" inquiries={inquiries} onPick={(p) => setPageFilter(p)} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <PeriodServices range="week" inquiries={inquiries} onPick={(s) => setServiceFilter(s)} />
          <PeriodSources range="week" inquiries={inquiries} />
        </div>

        {/* Top pages — overall */}
        <PageLeaderboard inquiries={inquiries} onPick={(p) => setPageFilter(p)} />

        {/* Top pages — per channel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <TopPagesByType
            title="Top pages — Inquiries"
            subtitle="Pages that drove form submissions"
            inquiries={inquiries.filter((i) => i.inquiry_type === "form_submission")}
            emptyText="No form submissions yet."
            onPick={(p) => setPageFilter(p)}
          />
          <TopPagesByType
            title="Top pages — WhatsApp clicks"
            subtitle="Pages where visitors tap WhatsApp"
            inquiries={inquiries.filter((i) => i.inquiry_type === "whatsapp_click")}
            emptyText="No WhatsApp clicks tracked yet."
            onPick={(p) => setPageFilter(p)}
          />
          <TopPagesByType
            title="Top pages — Call clicks"
            subtitle="Pages where visitors tap to call"
            inquiries={inquiries.filter((i) => i.inquiry_type === "call_click")}
            emptyText="No call clicks tracked yet."
            onPick={(p) => setPageFilter(p)}
          />
          <TopPagesByType
            title="Top pages — Email clicks"
            subtitle="Pages where visitors tap email"
            inquiries={inquiries.filter((i) => i.inquiry_type === "email_click")}
            emptyText="No email clicks tracked yet."
            onPick={(p) => setPageFilter(p)}
          />
        </div>




        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          <Input placeholder="Search name, phone, email…" value={search} onChange={(e) => setSearch(e.target.value)} />
          <select className="h-10 rounded-md border border-input bg-background px-3 text-sm" value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)}>
            <option value="all">All services</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select className="h-10 rounded-md border border-input bg-background px-3 text-sm" value={pageFilter} onChange={(e) => setPageFilter(e.target.value)}>
            <option value="all">All pages</option>
            {pages.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          <select className="h-10 rounded-md border border-input bg-background px-3 text-sm" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="all">All types</option>
            <option value="form_submission">Form Submissions</option>
            <option value="quote_open">Quote Opens</option>
            <option value="whatsapp_click">WhatsApp Clicks</option>
            <option value="call_click">Call Clicks</option>
            <option value="email_click">Email Clicks</option>
          </select>

        </div>

        <div className="overflow-x-auto border border-border rounded-xl bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <th className="p-3">Date</th>
                <th className="p-3">Type</th>
                <th className="p-3">Name / Contact</th>
                <th className="p-3">Service</th>
                <th className="p-3">Page</th>
                <th className="p-3">UTM</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={8} className="p-8 text-center text-muted-foreground">No inquiries yet.</td></tr>
              ) : filtered.map((i) => (
                <tr key={i.id} className="border-t border-border align-top">
                  <td className="p-3 whitespace-nowrap">{new Date(i.created_at).toLocaleString()}</td>
                  <td className="p-3">
                    <Badge variant={i.inquiry_type === "form_submission" ? "default" : "secondary"}>
                      {TYPE_LABELS[i.inquiry_type] || i.inquiry_type}
                    </Badge>

                  </td>
                  <td className="p-3">
                    <div className="font-medium">{i.name || "—"}</div>
                    {i.phone && <div className="text-xs text-muted-foreground">{i.phone}</div>}
                    {i.email && <div className="text-xs text-muted-foreground">{i.email}</div>}
                    {i.business && <div className="text-xs text-muted-foreground">{i.business}</div>}
                    {i.message && <div className="text-xs mt-1 max-w-xs whitespace-pre-wrap">{i.message}</div>}
                  </td>
                  <td className="p-3">
                    <div className="font-medium">{i.service || "—"}</div>
                    {i.utm_campaign && (
                      <div className="text-xs text-muted-foreground">Campaign: {i.utm_campaign}</div>
                    )}
                  </td>
                  <td className="p-3">
                    <div className="font-medium">{prettyPage(i.source_page)}</div>
                    {i.source_page && (
                      <div className="text-xs text-muted-foreground break-all">{i.source_page}</div>
                    )}
                    {i.source_url && (
                      <a
                        href={i.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary underline break-all"
                      >
                        Open page ↗
                      </a>
                    )}
                    {i.placement && (
                      <div className="text-xs text-muted-foreground mt-1">Clicked: {i.placement}</div>
                    )}
                  </td>
                  <td className="p-3 text-xs">
                    {i.utm_source && <div>src: {i.utm_source}</div>}
                    {i.utm_medium && <div>med: {i.utm_medium}</div>}
                    {i.utm_campaign && <div>camp: {i.utm_campaign}</div>}
                    {!i.utm_source && !i.utm_medium && !i.utm_campaign && <span className="text-muted-foreground">—</span>}
                  </td>
                  <td className="p-3">
                    <button onClick={() => handleStatusToggle(i)} className="text-xs">
                      <Badge variant={i.status === "new" ? "destructive" : i.status === "contacted" ? "default" : "outline"}>
                        {i.status}
                      </Badge>
                    </button>
                  </td>
                  <td className="p-3">
                    <Button size="sm" variant="ghost" onClick={() => handleDelete(i.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

type PageStat = {
  page: string;
  total: number;
  whatsapp: number;
  forms: number;
  last: string;
};

const PageLeaderboard = ({
  inquiries,
  onPick,
}: {
  inquiries: Inquiry[];
  onPick: (page: string) => void;
}) => {
  const rows = useMemo<PageStat[]>(() => {
    const map = new Map<string, PageStat>();
    inquiries.forEach((i) => {
      const page = i.source_page || "(unknown)";
      const cur = map.get(page) || { page, total: 0, whatsapp: 0, forms: 0, last: i.created_at };
      cur.total += 1;
      if (i.inquiry_type === "whatsapp_click") cur.whatsapp += 1;
      if (i.inquiry_type === "form_submission") cur.forms += 1;
      if (new Date(i.created_at) > new Date(cur.last)) cur.last = i.created_at;
      map.set(page, cur);
    });
    return Array.from(map.values()).sort((a, b) => b.total - a.total);
  }, [inquiries]);

  if (rows.length === 0) return null;

  const max = rows[0].total || 1;

  return (
    <div className="border border-border rounded-xl bg-card mb-6">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">Top Pages for Sales</h2>
          <p className="text-xs text-muted-foreground">
            Total inquiries per page (form submissions + WhatsApp clicks). Click a row to filter.
          </p>
        </div>
        <Badge variant="outline">{rows.length} pages</Badge>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Page</th>
              <th className="p-3">Total</th>
              <th className="p-3">WhatsApp</th>
              <th className="p-3">Forms</th>
              <th className="p-3 w-48">Share</th>
              <th className="p-3">Last inquiry</th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 15).map((r, idx) => (
              <tr
                key={r.page}
                onClick={() => onPick(r.page)}
                className="border-t border-border cursor-pointer hover:bg-muted/30"
              >
                <td className="p-3 text-muted-foreground">{idx + 1}</td>
                <td className="p-3">
                  <div className="font-medium">{prettyPage(r.page)}</div>
                  <div className="text-xs text-muted-foreground break-all">{r.page}</div>
                </td>
                <td className="p-3 font-semibold">{r.total}</td>
                <td className="p-3">{r.whatsapp}</td>
                <td className="p-3">{r.forms}</td>
                <td className="p-3">
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${(r.total / max) * 100}%` }}
                    />
                  </div>
                </td>
                <td className="p-3 whitespace-nowrap text-xs text-muted-foreground">
                  {new Date(r.last).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TopPagesByType = ({
  title,
  subtitle,
  inquiries,
  emptyText,
  onPick,
}: {
  title: string;
  subtitle: string;
  inquiries: Inquiry[];
  emptyText: string;
  onPick: (page: string) => void;
}) => {
  const rows = useMemo(() => {
    const map = new Map<string, { page: string; count: number; last: string }>();
    inquiries.forEach((i) => {
      const page = i.source_page || "(unknown)";
      const cur = map.get(page) || { page, count: 0, last: i.created_at };
      cur.count += 1;
      if (new Date(i.created_at) > new Date(cur.last)) cur.last = i.created_at;
      map.set(page, cur);
    });
    return Array.from(map.values()).sort((a, b) => b.count - a.count).slice(0, 8);
  }, [inquiries]);

  const max = rows[0]?.count || 1;

  return (
    <div className="border border-border rounded-xl bg-card">
      <div className="p-4 border-b border-border">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      {rows.length === 0 ? (
        <div className="p-6 text-center text-sm text-muted-foreground">{emptyText}</div>
      ) : (
        <ul className="divide-y divide-border">
          {rows.map((r) => (
            <li
              key={r.page}
              onClick={() => onPick(r.page)}
              className="p-3 cursor-pointer hover:bg-muted/30"
            >
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm truncate">{prettyPage(r.page)}</div>
                  <div className="text-xs text-muted-foreground truncate">{r.page}</div>
                </div>
                <div className="text-sm font-bold tabular-nums">{r.count}</div>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${(r.count / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;

type TodayRow = {
  page: string;
  total: number;
  forms: number;
  whatsapp: number;
  calls: number;
  emails: number;
  quotes: number;
  ctas: Map<string, number>;
  last: string;
};

const PeriodInquiries = ({
  range,
  inquiries,
  onPick,
}: {
  range: "today" | "week";
  inquiries: Inquiry[];
  onPick: (page: string) => void;
}) => {
  const { rows, totals, label } = useMemo(() => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    if (range === "week") {
      // Last 7 days including today
      start.setDate(start.getDate() - 6);
    }
    const scoped = inquiries.filter((i) => new Date(i.created_at) >= start);

    const map = new Map<string, TodayRow>();
    scoped.forEach((i) => {
      const page = i.source_page || "(unknown)";
      const cur =
        map.get(page) ||
        { page, total: 0, forms: 0, whatsapp: 0, calls: 0, emails: 0, quotes: 0, ctas: new Map<string, number>(), last: i.created_at };
      cur.total += 1;
      if (i.inquiry_type === "form_submission") cur.forms += 1;
      if (i.inquiry_type === "whatsapp_click") cur.whatsapp += 1;
      if (i.inquiry_type === "call_click") cur.calls += 1;
      if (i.inquiry_type === "email_click") cur.emails += 1;
      if (i.inquiry_type === "quote_open") cur.quotes += 1;
      const cta = `${TYPE_LABELS[i.inquiry_type] || i.inquiry_type}${i.placement ? ` · ${i.placement}` : ""}`;
      cur.ctas.set(cta, (cur.ctas.get(cta) || 0) + 1);
      if (new Date(i.created_at) > new Date(cur.last)) cur.last = i.created_at;
      map.set(page, cur);
    });

    const rows = Array.from(map.values()).sort((a, b) => b.total - a.total);
    const totals = {
      total: scoped.length,
      forms: scoped.filter((i) => i.inquiry_type === "form_submission").length,
      whatsapp: scoped.filter((i) => i.inquiry_type === "whatsapp_click").length,
      calls: scoped.filter((i) => i.inquiry_type === "call_click").length,
      emails: scoped.filter((i) => i.inquiry_type === "email_click").length,
      quotes: scoped.filter((i) => i.inquiry_type === "quote_open").length,
    };
    const label =
      range === "today"
        ? new Date().toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : `${start.toLocaleDateString(undefined, { month: "short", day: "numeric" })} – ${new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}`;
    return { rows, totals, label };
  }, [inquiries, range]);

  const max = rows[0]?.total || 1;
  const title = range === "today" ? "Today's Inquiries" : "This Week's Inquiries (last 7 days)";
  const subtitle =
    range === "today"
      ? `${label} — which pages & CTAs are driving leads today`
      : `${label} — which pages have the most demand this week`;

  return (
    <div className="border border-border rounded-xl bg-card mb-6">
      <div className="p-4 border-b border-border flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold">{title}</h2>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <Badge variant="default">Total {totals.total}</Badge>
          <Badge variant="secondary">Forms {totals.forms}</Badge>
          <Badge variant="secondary">WhatsApp {totals.whatsapp}</Badge>
          <Badge variant="secondary">Calls {totals.calls}</Badge>
          <Badge variant="secondary">Emails {totals.emails}</Badge>
          <Badge variant="secondary">Quote Opens {totals.quotes}</Badge>
        </div>
      </div>
      {rows.length === 0 ? (
        <div className="p-8 text-center text-sm text-muted-foreground">
          No inquiries yet for this period.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Page</th>
                <th className="p-3">Total</th>
                <th className="p-3">CTAs used (clicks)</th>
                <th className="p-3 w-40">Share</th>
                <th className="p-3">Last</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => {
                const ctaList = Array.from(r.ctas.entries()).sort((a, b) => b[1] - a[1]);
                return (
                  <tr
                    key={r.page}
                    onClick={() => onPick(r.page)}
                    className="border-t border-border cursor-pointer hover:bg-muted/30"
                  >
                    <td className="p-3 text-muted-foreground">{idx + 1}</td>
                    <td className="p-3">
                      <div className="font-medium">{prettyPage(r.page)}</div>
                      <div className="text-xs text-muted-foreground break-all">{r.page}</div>
                    </td>
                    <td className="p-3 font-bold">{r.total}</td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {ctaList.map(([lab, count]) => (
                          <Badge key={lab} variant="outline" className="text-xs">
                            {lab} · {count}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${(r.total / max) * 100}%` }}
                        />
                      </div>
                    </td>
                    <td className="p-3 whitespace-nowrap text-xs text-muted-foreground">
                      {range === "today"
                        ? new Date(r.last).toLocaleTimeString()
                        : new Date(r.last).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const scopeByRange = (inquiries: Inquiry[], range: "today" | "week") => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  if (range === "week") start.setDate(start.getDate() - 6);
  const label =
    range === "today"
      ? new Date().toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })
      : `${start.toLocaleDateString(undefined, { month: "short", day: "numeric" })} – ${new Date().toLocaleDateString(undefined, { month: "short", day: "numeric" })}`;
  return { scoped: inquiries.filter((i) => new Date(i.created_at) >= start), label };
};

const PeriodServices = ({
  range,
  inquiries,
  onPick,
}: {
  range: "today" | "week";
  inquiries: Inquiry[];
  onPick: (service: string) => void;
}) => {
  const { rows, label } = useMemo(() => {
    const { scoped, label } = scopeByRange(inquiries, range);
    const map = new Map<string, { service: string; total: number; forms: number; whatsapp: number; calls: number; emails: number }>();
    scoped.forEach((i) => {
      const service = i.service || prettyPage(i.source_page) || "(unknown)";
      const cur = map.get(service) || { service, total: 0, forms: 0, whatsapp: 0, calls: 0, emails: 0 };
      cur.total += 1;
      if (i.inquiry_type === "form_submission") cur.forms += 1;
      if (i.inquiry_type === "whatsapp_click") cur.whatsapp += 1;
      if (i.inquiry_type === "call_click") cur.calls += 1;
      if (i.inquiry_type === "email_click") cur.emails += 1;
      map.set(service, cur);
    });
    return { rows: Array.from(map.values()).sort((a, b) => b.total - a.total).slice(0, 10), label };
  }, [inquiries, range]);

  const max = rows[0]?.total || 1;
  const title = range === "today" ? "Top Services — Today" : "Top Services — This Week";

  return (
    <div className="border border-border rounded-xl bg-card">
      <div className="p-4 border-b border-border">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-muted-foreground">{label} — which services get the most inquiries</p>
      </div>
      {rows.length === 0 ? (
        <div className="p-6 text-center text-sm text-muted-foreground">No service inquiries yet.</div>
      ) : (
        <ul className="divide-y divide-border">
          {rows.map((r) => (
            <li key={r.service} onClick={() => onPick(r.service)} className="p-3 cursor-pointer hover:bg-muted/30">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="font-medium text-sm truncate flex-1">{r.service}</div>
                <div className="text-sm font-bold tabular-nums">{r.total}</div>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {r.forms > 0 && <Badge variant="outline" className="text-xs">Forms · {r.forms}</Badge>}
                {r.whatsapp > 0 && <Badge variant="outline" className="text-xs">WhatsApp · {r.whatsapp}</Badge>}
                {r.calls > 0 && <Badge variant="outline" className="text-xs">Calls · {r.calls}</Badge>}
                {r.emails > 0 && <Badge variant="outline" className="text-xs">Emails · {r.emails}</Badge>}
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${(r.total / max) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const PeriodSources = ({
  range,
  inquiries,
}: {
  range: "today" | "week";
  inquiries: Inquiry[];
}) => {
  const { rows, label } = useMemo(() => {
    const { scoped, label } = scopeByRange(inquiries, range);
    const map = new Map<string, { source: string; total: number; forms: number; whatsapp: number; calls: number; emails: number }>();
    scoped.forEach((i) => {
      let source = i.utm_source ? `${i.utm_source}${i.utm_medium ? ` / ${i.utm_medium}` : ""}` : "";
      if (!source) source = "Direct / Organic";
      const cur = map.get(source) || { source, total: 0, forms: 0, whatsapp: 0, calls: 0, emails: 0 };
      cur.total += 1;
      if (i.inquiry_type === "form_submission") cur.forms += 1;
      if (i.inquiry_type === "whatsapp_click") cur.whatsapp += 1;
      if (i.inquiry_type === "call_click") cur.calls += 1;
      if (i.inquiry_type === "email_click") cur.emails += 1;
      map.set(source, cur);
    });
    return { rows: Array.from(map.values()).sort((a, b) => b.total - a.total).slice(0, 10), label };
  }, [inquiries, range]);

  const max = rows[0]?.total || 1;
  const title = range === "today" ? "Top Sources — Today" : "Top Sources — This Week";

  return (
    <div className="border border-border rounded-xl bg-card">
      <div className="p-4 border-b border-border">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-muted-foreground">{label} — where inquiry traffic is coming from</p>
      </div>
      {rows.length === 0 ? (
        <div className="p-6 text-center text-sm text-muted-foreground">No source data yet.</div>
      ) : (
        <ul className="divide-y divide-border">
          {rows.map((r) => (
            <li key={r.source} className="p-3">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="font-medium text-sm truncate flex-1">{r.source}</div>
                <div className="text-sm font-bold tabular-nums">{r.total}</div>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {r.forms > 0 && <Badge variant="outline" className="text-xs">Forms · {r.forms}</Badge>}
                {r.whatsapp > 0 && <Badge variant="outline" className="text-xs">WhatsApp · {r.whatsapp}</Badge>}
                {r.calls > 0 && <Badge variant="outline" className="text-xs">Calls · {r.calls}</Badge>}
                {r.emails > 0 && <Badge variant="outline" className="text-xs">Emails · {r.emails}</Badge>}
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${(r.total / max) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};



