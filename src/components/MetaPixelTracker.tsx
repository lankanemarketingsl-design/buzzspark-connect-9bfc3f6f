import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { onConsentChange } from "@/lib/consent";
import { trackMetaPageView } from "@/lib/metaPixel";

export default function MetaPixelTracker() {
  const { pathname, search, hash } = useLocation();
  useEffect(() => {
    const sync = () => { void trackMetaPageView(pathname, search, hash); };
    sync();
    return onConsentChange(sync);
  }, [pathname, search, hash]);
  return null;
}