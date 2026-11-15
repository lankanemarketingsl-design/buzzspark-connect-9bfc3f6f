import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function OptOutNotificationBell() {
  const [count, setCount] = useState(0);
  const [failed, setFailed] = useState(false);
  const [recent, setRecent] = useState<{ reference: string; created_at: string }[]>([]);

  useEffect(() => {
    let active = true;
    let busy = false;
    const refresh = async () => {
      if (busy || document.visibilityState !== "visible") return;
      busy = true;
      try {
        const { data, count: total, error } = await supabase
          .from("opt_out_requests")
          .select("reference, created_at", { count: "exact" })
          .eq("status", "new")
          .order("created_at", { ascending: false })
          .limit(5);
        if (!active) return;
        setFailed(Boolean(error));
        if (!error) {
          setCount(total ?? 0);
          setRecent(data ?? []);
        }
      } catch {
        if (active) setFailed(true);
      } finally {
        busy = false;
      }
    };
    const onFocus = () => void refresh();
    void refresh();
    const timer = window.setInterval(onFocus, 15000);
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onFocus);
    return () => {
      active = false;
      window.clearInterval(timer);
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onFocus);
    };
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative shrink-0" aria-label={`Unsubscribe notifications: ${count} new requests`} title="Unsubscribe notifications">
          <Bell className="h-5 w-5" />
          {count > 0 && <span aria-live="polite" className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1 text-xs font-bold text-destructive-foreground">{count > 99 ? "99+" : count}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 max-w-[calc(100vw-2rem)]">
        <h2 className="font-semibold">Unsubscribe requests</h2>
        <p className="mt-1 text-sm text-muted-foreground">{failed ? "Notifications couldn't update. Open requests to check." : `${count} new ${count === 1 ? "request" : "requests"}`}</p>
        <ul className="my-3 divide-y divide-border">
          {recent.map((request) => <li key={request.reference} className="py-2"><Link to={`/admin/opt-outs?reference=${encodeURIComponent(request.reference)}`} className="block text-sm hover:text-accent"><span className="font-mono font-semibold">{request.reference}</span><span className="mt-1 block text-xs text-muted-foreground">{new Date(request.created_at).toLocaleString()}</span></Link></li>)}
        </ul>
        <Button asChild variant="outline" className="w-full"><Link to="/admin/opt-outs">View all requests</Link></Button>
      </PopoverContent>
    </Popover>
  );
}