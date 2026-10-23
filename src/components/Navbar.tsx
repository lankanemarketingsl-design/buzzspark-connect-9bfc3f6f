import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/buzz-logo.webp";
import { bb360IndustryDirectory } from "@/data/bb360IndustryRegistry";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Email Marketing", path: "/email-marketing" },
  { label: "SMS Marketing", path: "/sms-marketing" },
  { label: "WhatsApp Marketing", path: "/whatsapp-marketing" },
  { label: "Lead Generation", path: "/lead-generation-sri-lanka" },
  { label: "Multi Channel", path: "/multi-channel-marketing-sri-lanka" },
  { label: "SEO", path: "/seo-sri-lanka" },
  { label: "Graphic Design", path: "/graphic-designing-in-sri-lanka" },
];

const industryItems = [
  { label: "Hotel & Travel", path: "/hotel-marketing-sri-lanka" },
  { label: "Education", path: "/education-marketing-sri-lanka" },
  { label: "Finance & Credit", path: "/finance-marketing-sri-lanka" },
  { label: "Restaurant & Retail", path: "/restaurant-marketing-sri-lanka" },
  { label: "Real Estate", path: "/real-estate-marketing-sri-lanka" },
  { label: "Fashion & Clothing", path: "/fashion-marketing-sri-lanka" },
  { label: "Events & Conferences", path: "/event-marketing-sri-lanka" },
  { label: "Staff Recruitment", path: "/staff-recruitment-campaigns-sri-lanka" },
  { label: "Home Services & Construction", path: "/home-services-construction-marketing-sri-lanka" },
];

const BB360_PATH = "/brand-blast-360";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [bb360Open, setBb360Open] = useState(false);
  const [mobileBb360Open, setMobileBb360Open] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const bb360DropdownRef = useRef<HTMLDivElement>(null);

  const isIndustryActive =
    industryItems.some(item => location.pathname === item.path) ||
    bb360IndustryDirectory.some(item => location.pathname === item.path);

  const isBb360Active =
    location.pathname === BB360_PATH ||
    bb360IndustryDirectory.some(item => location.pathname === item.path);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustryOpen(false);
      }
      if (bb360DropdownRef.current && !bb360DropdownRef.current.contains(e.target as Node)) {
        setBb360Open(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileIndustryOpen(false);
    setIndustryOpen(false);
    setMobileBb360Open(false);
    setBb360Open(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-hero border-b border-navy-light/30 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Buzz Connect" className="h-10 sm:h-16 w-auto" loading="lazy" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.slice(0, 1).map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="nav"
                size="sm"
                className={location.pathname === item.path ? "text-accent" : ""}
              >
                {item.label}
              </Button>
            </Link>
          ))}

          {/* Brand Blast 360 Dropdown */}
          <div className="relative" ref={bb360DropdownRef}>
            <Button
              variant="nav"
              size="sm"
              className={`flex items-center gap-1 ${isBb360Active ? "text-accent" : ""}`}
              onClick={() => setBb360Open(!bb360Open)}
            >
              Brand Blast 360 <ChevronDown className={`w-3.5 h-3.5 transition-transform ${bb360Open ? "rotate-180" : ""}`} />
            </Button>
            {bb360Open && (
              <div className="absolute top-full left-0 mt-1 w-[26rem] rounded-lg gradient-hero border border-navy-light/30 shadow-xl py-3 px-3 z-50">
                <Link
                  to={BB360_PATH}
                  onClick={() => setBb360Open(false)}
                  className={`block px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    location.pathname === BB360_PATH
                      ? "text-accent bg-navy-light/50"
                      : "text-primary-foreground hover:text-accent hover:bg-navy-light/30"
                  }`}
                >
                  Brand Blast 360 Overview
                </Link>
                <div className="my-2 border-t border-navy-light/30" />
                <div className="grid grid-cols-2 gap-x-2">
                  {bb360IndustryDirectory.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setBb360Open(false)}
                      className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        location.pathname === item.path
                          ? "text-accent bg-navy-light/50"
                          : "text-primary-foreground/80 hover:text-accent hover:bg-navy-light/30"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navItems.slice(1).map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="nav"
                size="sm"
                className={location.pathname === item.path ? "text-accent" : ""}
              >
                {item.label}
              </Button>
            </Link>
          ))}

          {/* Industry Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <Button
              variant="nav"
              size="sm"
              className={`flex items-center gap-1 ${isIndustryActive ? "text-accent" : ""}`}
              onClick={() => setIndustryOpen(!industryOpen)}
            >
              Industries <ChevronDown className={`w-3.5 h-3.5 transition-transform ${industryOpen ? "rotate-180" : ""}`} />
            </Button>
            {industryOpen && (
              <div className="absolute top-full right-0 mt-1 w-[38rem] rounded-lg gradient-hero border border-navy-light/30 shadow-xl py-3 px-3 z-50 grid grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <p className="px-3 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground/50">
                    Industry Marketing
                  </p>
                  {industryItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIndustryOpen(false)}
                      className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        location.pathname === item.path
                          ? "text-accent bg-navy-light/50"
                          : "text-primary-foreground/80 hover:text-accent hover:bg-navy-light/30"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="px-3 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground/50">
                    Brand Blast 360 Campaigns
                  </p>
                  {bb360IndustryDirectory.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIndustryOpen(false)}
                      className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        location.pathname === item.path
                          ? "text-accent bg-navy-light/50"
                          : "text-primary-foreground/80 hover:text-accent hover:bg-navy-light/30"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden xl:block">
          <Link to="/contact-us">
            <Button variant="hero" size="sm">Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden gradient-hero border-t border-navy-light/30 pb-4 max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container mx-auto px-4 flex flex-col gap-1">
            {navItems.slice(0, 1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent bg-navy-light/50"
                    : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Brand Blast 360 Dropdown */}
            <button
              onClick={() => setMobileBb360Open(!mobileBb360Open)}
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                isBb360Active ? "text-accent bg-navy-light/50" : "text-primary-foreground/80 hover:text-accent"
              }`}
            >
              Brand Blast 360
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileBb360Open ? "rotate-180" : ""}`} />
            </button>
            {mobileBb360Open && (
              <div className="ml-4 flex flex-col gap-1">
                <Link
                  to={BB360_PATH}
                  onClick={() => { setMobileOpen(false); setMobileBb360Open(false); }}
                  className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === BB360_PATH
                      ? "text-accent bg-navy-light/50"
                      : "text-primary-foreground/80 hover:text-accent"
                  }`}
                >
                  Brand Blast 360 Overview
                </Link>
                {bb360IndustryDirectory.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setMobileOpen(false); setMobileBb360Open(false); }}
                    className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-accent bg-navy-light/50"
                        : "text-primary-foreground/80 hover:text-accent"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent bg-navy-light/50"
                    : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Industry Dropdown */}
            <button
              onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                isIndustryActive ? "text-accent bg-navy-light/50" : "text-primary-foreground/80 hover:text-accent"
              }`}
            >
              Industries
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustryOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileIndustryOpen && (
              <div className="ml-4 flex flex-col gap-1">
                {industryItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setMobileOpen(false); setMobileIndustryOpen(false); }}
                    className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-accent bg-navy-light/50"
                        : "text-primary-foreground/80 hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground/50">
                  Brand Blast 360 Campaigns
                </p>
                {bb360IndustryDirectory.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setMobileOpen(false); setMobileIndustryOpen(false); }}
                    className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-accent bg-navy-light/50"
                        : "text-primary-foreground/80 hover:text-accent"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/contact-us" onClick={() => setMobileOpen(false)}>
              <Button variant="hero" size="sm" className="mt-2 w-full">Get a Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
