import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import footerLogo from "@/assets/buzz-footer-logo.webp";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={footerLogo} alt="Buzz Connect" className="h-24 w-auto" loading="lazy" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Sri Lanka's No.1 Email Marketing, WhatsApp Marketing &amp; SMS Marketing company providing cost-effective digital marketing solutions since 2014.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.facebook.com/buzzconnect/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/buzzconnect/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/buzz-connect-93330ba1/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-accent mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/email-marketing" className="hover:text-accent transition-colors">Email Marketing</Link></li>
              <li><Link to="/sms-marketing" className="hover:text-accent transition-colors">SMS Marketing</Link></li>
              <li><Link to="/whatsapp-marketing" className="hover:text-accent transition-colors">WhatsApp Marketing</Link></li>
              <li><Link to="/lead-generation-sri-lanka" className="hover:text-accent transition-colors">Lead Generation</Link></li>
              <li><Link to="/social-media-marketing-sri-lanka" className="hover:text-accent transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/linkedin-marketing-sri-lanka" className="hover:text-accent transition-colors">LinkedIn Marketing</Link></li>
              <li><Link to="/tiktok-marketing-sri-lanka" className="hover:text-accent transition-colors">TikTok Marketing</Link></li>
              <li><Link to="/advertising-sri-lanka" className="hover:text-accent transition-colors">Advertising Sri Lanka</Link></li>
              <li><Link to="/online-advertising-sri-lanka" className="hover:text-accent transition-colors">Online Advertising</Link></li>
              <li><Link to="/seo-sri-lanka" className="hover:text-accent transition-colors">SEO Services</Link></li>
              <li><Link to="/website-design-sri-lanka" className="hover:text-accent transition-colors">Website Design</Link></li>
              <li><Link to="/graphic-designing-in-sri-lanka" className="hover:text-accent transition-colors">Graphic Design</Link></li>
              <li><Link to="/web-banner-advertising-sri-lanka" className="hover:text-accent transition-colors">Web Banner Advertising</Link></li>
              <li><Link to="/google-ads-sri-lanka" className="hover:text-accent transition-colors">Google Ads</Link></li>
              <li><Link to="/brand-blast-360" className="hover:text-accent transition-colors font-semibold text-accent">⚡ Brand Blast 360</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-accent mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/hotel-marketing-sri-lanka" className="hover:text-accent transition-colors">Hotel & Travel</Link></li>
              <li><Link to="/education-marketing-sri-lanka" className="hover:text-accent transition-colors">Education</Link></li>
              <li><Link to="/finance-marketing-sri-lanka" className="hover:text-accent transition-colors">Finance & Credit</Link></li>
              <li><Link to="/restaurant-marketing-sri-lanka" className="hover:text-accent transition-colors">Restaurant & Retail</Link></li>
              <li><Link to="/real-estate-marketing-sri-lanka" className="hover:text-accent transition-colors">Real Estate</Link></li>
              <li><Link to="/fashion-marketing-sri-lanka" className="hover:text-accent transition-colors">Fashion & Clothing</Link></li>
              <li><Link to="/event-marketing-sri-lanka" className="hover:text-accent transition-colors">Events & Conferences</Link></li>
              <li><Link to="/staff-recruitment-campaigns-sri-lanka" className="hover:text-accent transition-colors">Staff Recruitment</Link></li>
            </ul>
            <h4 className="font-heading font-semibold text-accent mb-4 mt-6">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about-us" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-accent transition-colors">Why Choose Us</Link></li>
              <li><Link to="/multi-channel-marketing-sri-lanka" className="hover:text-accent transition-colors">Multi Channel Marketing</Link></li>
              <li><Link to="/special-advertising-packages" className="hover:text-accent transition-colors">Special Packages</Link></li>
              <li><Link to="/resources" className="hover:text-accent transition-colors">Resources</Link></li>
              <li><Link to="/contact-us" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading font-semibold text-accent mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <a href="mailto:infobuzzconnect@gmail.com" className="hover:text-accent transition-colors">infobuzzconnect@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <a href="tel:+94771437707" className="hover:text-accent transition-colors">+94 77 143 7707</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <a href="tel:+94771976351" className="hover:text-accent transition-colors">+94 77 197 6351</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p className="mb-3">
            <a href="https://buzzconnect.lk/" className="hover:text-accent transition-colors">Email Marketing Sri Lanka</a>
            {" · "}
            <a href="https://buzzconnect.lk/sms-marketing" className="hover:text-accent transition-colors">SMS Marketing Sri Lanka</a>
            {" · "}
            <a href="https://buzzconnect.lk/whatsapp-marketing" className="hover:text-accent transition-colors">WhatsApp Marketing Sri Lanka</a>
          </p>
          <p>&copy; 2014 Buzz Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
