import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LogoCarousel from "@/components/home/LogoCarousel";

/**
 * Renders the "Our Clients" logo strip on any page that does not already
 * show a client-logo section of its own (detected via [data-client-logos]).
 */
const GlobalClientLogos = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const frame = requestAnimationFrame(() => {
      setShow(!document.querySelector("[data-client-logos]"));
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  if (!show) return null;
  return <LogoCarousel />;
};

export default GlobalClientLogos;
