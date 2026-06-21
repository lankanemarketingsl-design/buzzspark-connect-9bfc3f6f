import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Flame,
  Target,
  DollarSign,
  Trophy,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Send,
  CalendarCheck,
} from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  resolveServiceName,
  resolveTrafficSource,
  prettyPath,
  TREND_SERVICES,
  type TrafficSource,
} from "@/lib/serviceNames";

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

type RangeKey = "today" | "7d" | "30d" | "all";

const RANGES: { key: RangeKey; label: string }[] = [
  { key: "today", label: "Today" },
  { key: "7d", label: "Last 7 Days" },
  { key: "30d", label: "Last 30 Days" },
  { key: "all", label: "All Time" },
];

const rangeStart = (key: RangeKey): Date => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  if (key === "today") return d;
  if (key === "7d") {
    d.setDate(d.getDate() - 6);
    return d;
  }
  if (key === "30d") {
    d.setDate(d.getDate() - 29);
    return d;
  }
  return new Date(0);
};

const previousRangeBounds = (key: RangeKey): { start: Date; end: Date } => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  if (key === "today") {
    const end = new Date(now);
    const start = new Date(now);
    start.setDate(start.getDate() - 1);
    return { start, end };
  }
  if (key === "7d") {
    const end = new Date(now);
    end.setDate(end.getDate() - 6);
    const start = new Date(end);
    start.setDate(start.getDate() - 7);
    return { start, end };
  }
  if (key === "30d") {
    const end = new Date(now);
    end.setDate(end.getDate() - 29);
    const start = new Date(end);
    start.setDate(start.getDate() - 30);
    return { start, end };
  }
  return { start: new Date(0), end: new Date(0) };
};

type ServiceMetrics = {
  service: string;
  views: number;
  ctas: number;
  inquiries: number;
  whatsapp: number;
  calls: number;
  emails: number;
  forms: number;
  quotes: number;
  demand: number;
  conversion: number;
  leadScore: number;
};

const buildServiceMetrics = (rows: Inquiry[]): ServiceMetrics[] => {
  const map = new Map<string, ServiceMetrics>();
  rows.forEach((r) => {
    const svc = resolveServiceName(r.source_page);
    if (!svc) return;
    const cur =
      map.get(svc) ||
      {
        service: svc,
        views: 0,
        ctas: 0,
        inquiries: 0,
        whatsapp: 0,
        calls: 0,
        emails: 0,
        forms: 0,
        quotes: 0,
        demand: 0,
        conversion: 0,
        leadScore: 0,
      };
    switch (r.inquiry_type) {
      case "page_view":
        cur.views += 1;
        break;
      case "whatsapp_click":
        cur.ctas += 1;
        cur.whatsapp += 1;
        break;
      case "call_click":
        cur.ctas += 1;
        cur.calls += 1;
        break;
      case "email_click":
        cur.ctas += 1;
        cur.emails += 1;
        break;
      case "quote_open":
        cur.ctas += 1;
        cur.quotes += 1;
        break;
      case "form_submission":
        cur.ctas += 1;
        cur.inquiries += 1;
        cur.forms += 1;
        break;
    }
    map.set(svc, cur);
  });
  map.forEach((m) => {
    m.demand = m.views * 0.2 + m.ctas * 0.4 + m.inquiries * 0.4;
    m.conversion = m.views > 0 ? (m.ctas / m.views) * 100 : 0;
    m.leadScore = m.whatsapp * 5 + m.calls * 10 + m.forms * 15 + m.quotes * 20;
  });
  return Array.from(map.values());
};

const trendDelta = (current: number, previous: number): number => {
  if (previous === 0) return current > 0 ? 100 : 0;
  return ((current - previous) / previous) * 100;
};

const TrendPill = ({ delta }: { delta: number }) => {
  if (!isFinite(delta) || Math.abs(delta) < 0.5) {
    return (
      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
        <Minus className="w-3 h-3" /> 0%
      </span>
    );
  }
  const up = delta > 0;
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-medium ${
        up ? "text-emerald-600" : "text-rose-600"
      }`}
    >
      {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
      {up ? "+" : ""}
      {delta.toFixed(0)}% vs prev
    </span>
  );
};

const KpiCard = ({
  icon,
  label,
  service,
  value,
  unit,
  delta,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  service: string;
  value: string;
  unit?: string;
  delta: number;
  accent: string;
}) => (
  <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm">
    <div className={`absolute inset-x-0 top-0 h-1 ${accent}`} />
    <div className="flex items-start justify-between gap-3 mb-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
        <span className="rounded-lg bg-muted p-1.5">{icon}</span>
        {label}
      </div>
      <TrendPill delta={delta} />
    </div>
    <div className="text-xl font-bold text-foreground mb-1 truncate" title={service}>
      {service}
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-bold tabular-nums">{value}</span>
      {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
    </div>
  </div>
);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [range, setRange] = useState<RangeKey>("7d");
  const [search, setSearch] = useState("");

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
      .limit(5000);
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

  // ----- scoped data -----
  const scoped = useMemo(() => {
    const start = rangeStart(range);
    return inquiries.filter((i) => new Date(i.created_at) >= start);
  }, [inquiries, range]);

  const previousScoped = useMemo(() => {
    if (range === "all") return [];
    const { start, end } = previousRangeBounds(range);
    return inquiries.filter((i) => {
      const t = new Date(i.created_at);
      return t >= start && t < end;
    });
  }, [inquiries, range]);

  const serviceMetrics = useMemo(() => buildServiceMetrics(scoped), [scoped]);
  const prevServiceMetrics = useMemo(() => buildServiceMetrics(previousScoped), [previousScoped]);

  // ----- KPI picks -----
  const topDemand = [...serviceMetrics].sort((a, b) => b.demand - a.demand)[0];
  const topConv = [...serviceMetrics]
    .filter((m) => m.views >= 1)
    .sort((a, b) => b.conversion - a.conversion)[0];
  const topRevenue = [...serviceMetrics].sort((a, b) => b.leadScore - a.leadScore)[0];

  const findPrev = (svc: string | undefined) =>
    svc ? prevServiceMetrics.find((p) => p.service === svc) : undefined;

  // ----- CTA matrix -----
  const ctaTypes: { key: string; label: string; icon: React.ReactNode }[] = [
    { key: "whatsapp_click", label: "WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" /> },
    { key: "call_click", label: "Call", icon: <Phone className="w-3.5 h-3.5" /> },
    { key: "form_submission", label: "Contact Form", icon: <FileText className="w-3.5 h-3.5" /> },
    { key: "quote_open", label: "Get Proposal", icon: <Send className="w-3.5 h-3.5" /> },
    { key: "email_click", label: "Email", icon: <Mail className="w-3.5 h-3.5" /> },
    { key: "book_consultation", label: "Book Consultation", icon: <CalendarCheck className="w-3.5 h-3.5" /> },
  ];

  const ctaMatrix = useMemo(() => {
    const buckets: Record<RangeKey, Inquiry[]> = {
      today: inquiries.filter((i) => new Date(i.created_at) >= rangeStart("today")),
      "7d": inquiries.filter((i) => new Date(i.created_at) >= rangeStart("7d")),
      "30d": inquiries.filter((i) => new Date(i.created_at) >= rangeStart("30d")),
      all: inquiries,
    };
    return ctaTypes.map((t) => ({
      ...t,
      today: buckets.today.filter((i) => i.inquiry_type === t.key).length,
      "7d": buckets["7d"].filter((i) => i.inquiry_type === t.key).length,
      "30d": buckets["30d"].filter((i) => i.inquiry_type === t.key).length,
      all: buckets.all.filter((i) => i.inquiry_type === t.key).length,
    }));
  }, [inquiries]);

  // ----- Traffic sources -----
  const sourceRows = useMemo(() => {
    const map = new Map<TrafficSource, { source: TrafficSource; visitors: number; ctas: number; inquiries: number }>();
    const all: TrafficSource[] = [
      "Google Organic",
      "Facebook",
      "LinkedIn",
      "Direct",
      "Referral",
      "Email Campaign",
    ];
    all.forEach((s) => map.set(s, { source: s, visitors: 0, ctas: 0, inquiries: 0 }));
    scoped.forEach((r) => {
      const src = resolveTrafficSource(r.utm_source, r.utm_medium);
      if (!map.has(src)) map.set(src, { source: src, visitors: 0, ctas: 0, inquiries: 0 });
      const cur = map.get(src)!;
      if (r.inquiry_type === "page_view") cur.visitors += 1;
      else if (r.inquiry_type === "form_submission") {
        cur.inquiries += 1;
        cur.ctas += 1;
      } else if (["whatsapp_click", "call_click", "email_click", "quote_open"].includes(r.inquiry_type)) {
        cur.ctas += 1;
      }
    });
    return Array.from(map.values()).map((r) => ({
      ...r,
      conversion: r.visitors > 0 ? (r.ctas / r.visitors) * 100 : 0,
    }));
  }, [scoped]);

  // ----- Trend chart -----
  const trendData = useMemo(() => {
    const start = rangeStart(range === "all" ? "30d" : range);
    const end = new Date();
    end.setHours(0, 0, 0, 0);
    const days: { date: string; key: string }[] = [];
    const cursor = new Date(start);
    while (cursor <= end) {
      const key = cursor.toISOString().slice(0, 10);
      days.push({ key, date: cursor.toLocaleDateString(undefined, { month: "short", day: "numeric" }) });
      cursor.setDate(cursor.getDate() + 1);
    }
    return days.map((d) => {
      const row: Record<string, string | number> = { date: d.date };
      TREND_SERVICES.forEach((svc) => {
        row[svc.label] = inquiries.filter((i) => {
          if (!i.source_page) return false;
          if (i.created_at.slice(0, 10) !== d.key) return false;
          return svc.paths.includes(i.source_page);
        }).length;
      });
      return row;
    });
  }, [inquiries, range]);

  const trendColors = ["#3b82f6", "#ef4444", "#10b981", "#a855f7", "#f59e0b", "#06b6d4"];

  // ----- Insights -----
  const insights = useMemo(() => {
    const growth = serviceMetrics
      .map((m) => {
        const prev = findPrev(m.service);
        const delta = trendDelta(m.demand, prev?.demand ?? 0);
        return { service: m.service, delta };
      })
      .sort((a, b) => b.delta - a.delta)[0];
    const bestSource = [...sourceRows].sort((a, b) => b.ctas - a.ctas)[0];
    return {
      growth,
      bestSource,
    };
  }, [serviceMetrics, prevServiceMetrics, sourceRows]); // eslint-disable-line react-hooks/exhaustive-deps

  // ----- inquiry table filter -----
  const filteredInquiries = useMemo(() => {
    return scoped.filter((i) => {
      if (i.inquiry_type === "page_view") return false; // hide PV noise from table
      if (!search) return true;
      const q = search.toLowerCase();
      const hay = [i.name, i.phone, i.email, i.business, i.message, i.service, i.source_page]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [scoped, search]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading…</div>;
  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-muted/30 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Executive Revenue Intelligence
            </h1>
            <p className="text-sm text-muted-foreground">
              Demand, conversion & revenue signals across every service page.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={loadInquiries}>Refresh</Button>
            <Button variant="ghost" onClick={handleSignOut}>Sign out</Button>
          </div>
        </div>

        {/* Date filter pills */}
        <div className="inline-flex rounded-xl border border-border bg-card p-1 mb-6 shadow-sm">
          {RANGES.map((r) => (
            <button
              key={r.key}
              onClick={() => setRange(r.key)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                range === r.key
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <KpiCard
            icon={<Flame className="w-4 h-4 text-orange-500" />}
            label="Highest Demand Service"
            service={topDemand?.service || "No data yet"}
            value={topDemand ? topDemand.demand.toFixed(1) : "0"}
            unit="demand score"
            delta={trendDelta(topDemand?.demand ?? 0, findPrev(topDemand?.service)?.demand ?? 0)}
            accent="bg-gradient-to-r from-orange-400 to-rose-500"
          />
          <KpiCard
            icon={<Target className="w-4 h-4 text-blue-500" />}
            label="Highest Converting Service"
            service={topConv?.service || "No data yet"}
            value={topConv ? topConv.conversion.toFixed(1) : "0"}
            unit="%"
            delta={trendDelta(topConv?.conversion ?? 0, findPrev(topConv?.service)?.conversion ?? 0)}
            accent="bg-gradient-to-r from-blue-400 to-indigo-500"
          />
          <KpiCard
            icon={<DollarSign className="w-4 h-4 text-emerald-500" />}
            label="Highest Revenue Opportunity"
            service={topRevenue?.service || "No data yet"}
            value={topRevenue ? topRevenue.leadScore.toString() : "0"}
            unit="lead score"
            delta={trendDelta(topRevenue?.leadScore ?? 0, findPrev(topRevenue?.service)?.leadScore ?? 0)}
            accent="bg-gradient-to-r from-emerald-400 to-teal-500"
          />
        </div>

        {/* Service demand analytics */}
        <section className="mb-8">
          <SectionHeader title="Service Demand Analytics" subtitle="Ranked by demand score" />
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="p-3">Service</th>
                  <th className="p-3 text-right">Page Views</th>
                  <th className="p-3 text-right">CTA Clicks</th>
                  <th className="p-3 text-right">Inquiries</th>
                  <th className="p-3 text-right">Conv. Rate</th>
                  <th className="p-3 text-right">Demand Score</th>
                </tr>
              </thead>
              <tbody>
                {serviceMetrics.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-muted-foreground">
                      No service activity in this period yet.
                    </td>
                  </tr>
                ) : (
                  [...serviceMetrics]
                    .sort((a, b) => b.demand - a.demand)
                    .map((m) => (
                      <tr key={m.service} className="border-t border-border">
                        <td className="p-3 font-medium">{m.service}</td>
                        <td className="p-3 text-right tabular-nums">{m.views}</td>
                        <td className="p-3 text-right tabular-nums">{m.ctas}</td>
                        <td className="p-3 text-right tabular-nums">{m.inquiries}</td>
                        <td className="p-3 text-right tabular-nums">{m.conversion.toFixed(1)}%</td>
                        <td className="p-3 text-right font-bold tabular-nums">{m.demand.toFixed(1)}</td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA performance */}
        <section className="mb-8">
          <SectionHeader title="CTA Performance" subtitle="Click counts per call-to-action across periods" />
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="p-3">CTA Type</th>
                  <th className="p-3 text-right">Today</th>
                  <th className="p-3 text-right">7 Days</th>
                  <th className="p-3 text-right">30 Days</th>
                  <th className="p-3 text-right">All Time</th>
                </tr>
              </thead>
              <tbody>
                {ctaMatrix.map((row) => (
                  <tr key={row.key} className="border-t border-border">
                    <td className="p-3">
                      <span className="inline-flex items-center gap-2 font-medium">
                        <span className="rounded-md bg-muted p-1.5">{row.icon}</span>
                        {row.label}
                      </span>
                    </td>
                    <td className="p-3 text-right tabular-nums">{row.today}</td>
                    <td className="p-3 text-right tabular-nums">{row["7d"]}</td>
                    <td className="p-3 text-right tabular-nums">{row["30d"]}</td>
                    <td className="p-3 text-right font-semibold tabular-nums">{row.all}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Traffic source */}
        <section className="mb-8">
          <SectionHeader title="Traffic Source Analytics" subtitle="Visitors, CTA clicks & conversion by origin" />
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="p-3">Source</th>
                  <th className="p-3 text-right">Visitors</th>
                  <th className="p-3 text-right">CTA Clicks</th>
                  <th className="p-3 text-right">Inquiries</th>
                  <th className="p-3 text-right">Conv. Rate</th>
                </tr>
              </thead>
              <tbody>
                {sourceRows.map((s) => (
                  <tr key={s.source} className="border-t border-border">
                    <td className="p-3 font-medium">{s.source}</td>
                    <td className="p-3 text-right tabular-nums">{s.visitors}</td>
                    <td className="p-3 text-right tabular-nums">{s.ctas}</td>
                    <td className="p-3 text-right tabular-nums">{s.inquiries}</td>
                    <td className="p-3 text-right tabular-nums">{s.conversion.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Trend chart */}
        <section className="mb-8">
          <SectionHeader
            title="Service Demand Trend"
            subtitle="Daily inquiry volume by service over the selected period"
          />
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <RTooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                {TREND_SERVICES.map((s, idx) => (
                  <Line
                    key={s.label}
                    type="monotone"
                    dataKey={s.label}
                    stroke={trendColors[idx % trendColors.length]}
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Insights */}
        <section className="mb-10">
          <SectionHeader title="Executive Insights" subtitle="What to prioritise this week" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <InsightCard
              emoji="🔥"
              title="Fastest Growing Service"
              value={insights.growth?.service || "—"}
              detail={
                insights.growth
                  ? `${insights.growth.delta > 0 ? "+" : ""}${insights.growth.delta.toFixed(0)}% vs prev period`
                  : "No movement yet"
              }
            />
            <InsightCard
              emoji="📈"
              title="Highest Conversion Service"
              value={topConv?.service || "—"}
              detail={topConv ? `${topConv.conversion.toFixed(1)}% click rate` : "Awaiting page-view data"}
            />
            <InsightCard
              emoji="💰"
              title="Highest Revenue Opportunity"
              value={topRevenue?.service || "—"}
              detail={topRevenue ? `Lead score ${topRevenue.leadScore}` : "No leads yet"}
            />
            <InsightCard
              emoji="🏆"
              title="Best Traffic Source"
              value={insights.bestSource?.source || "—"}
              detail={
                insights.bestSource
                  ? `${insights.bestSource.ctas} CTA clicks · ${insights.bestSource.visitors} visitors`
                  : "No source data"
              }
            />
          </div>
        </section>

        {/* Inquiry table (preserved) */}
        <section>
          <SectionHeader title="All Inquiries" subtitle="Form submissions + CTA clicks (page views hidden)" />
          <div className="mb-3">
            <Input
              placeholder="Search name, phone, email, service…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-md"
            />
          </div>
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="p-3">Date</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Name / Contact</th>
                  <th className="p-3">Service</th>
                  <th className="p-3">Page</th>
                  <th className="p-3">Source</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-muted-foreground">
                      No inquiries in this period.
                    </td>
                  </tr>
                ) : (
                  filteredInquiries.map((i) => (
                    <tr key={i.id} className="border-t border-border align-top">
                      <td className="p-3 whitespace-nowrap text-xs">
                        {new Date(i.created_at).toLocaleString()}
                      </td>
                      <td className="p-3">
                        <Badge variant={i.inquiry_type === "form_submission" ? "default" : "secondary"}>
                          {i.inquiry_type.replace(/_/g, " ")}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="font-medium">{i.name || "—"}</div>
                        {i.phone && <div className="text-xs text-muted-foreground">{i.phone}</div>}
                        {i.email && <div className="text-xs text-muted-foreground">{i.email}</div>}
                        {i.business && <div className="text-xs text-muted-foreground">{i.business}</div>}
                        {i.message && (
                          <div className="text-xs mt-1 max-w-xs whitespace-pre-wrap">{i.message}</div>
                        )}
                      </td>
                      <td className="p-3">
                        <div className="font-medium">
                          {i.service || resolveServiceName(i.source_page) || "—"}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-medium">{prettyPath(i.source_page)}</div>
                      </td>
                      <td className="p-3 text-xs">
                        {resolveTrafficSource(i.utm_source, i.utm_medium)}
                      </td>
                      <td className="p-3">
                        <button onClick={() => handleStatusToggle(i)} className="text-xs">
                          <Badge
                            variant={
                              i.status === "new"
                                ? "destructive"
                                : i.status === "contacted"
                                ? "default"
                                : "outline"
                            }
                          >
                            {i.status}
                          </Badge>
                        </button>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          {i.phone && (
                            <a
                              href={`https://wa.me/${i.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                                `Hi ${i.name || "there"}, this is Buzz Connect. We received your inquiry about ${
                                  i.service || resolveServiceName(i.source_page) || "our services"
                                }. How can we help you today?`,
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 font-medium"
                            >
                              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                            </a>
                          )}
                          <Button size="sm" variant="ghost" onClick={() => handleDelete(i.id)}>
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-3 flex items-end justify-between gap-3">
    <div>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

const InsightCard = ({
  emoji,
  title,
  value,
  detail,
}: {
  emoji: string;
  title: string;
  value: string;
  detail: string;
}) => (
  <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
    <div className="text-2xl mb-2">{emoji}</div>
    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{title}</div>
    <div className="text-lg font-bold text-foreground truncate" title={value}>
      {value}
    </div>
    <div className="text-xs text-muted-foreground mt-1">{detail}</div>
  </div>
);

export default AdminDashboard;
