import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface ClusterLinkItem {
  label: string;
  to: string;
}

interface Props {
  title?: string;
  intro?: string;
  links: ClusterLinkItem[];
}

/** Compact contextual link block used on supporting social media content. */
const SocialClusterLinks = ({ title = "Where to go next", intro, links }: Props) => (
  <section className="my-12 p-6 sm:p-8 rounded-2xl bg-card border border-border">
    <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">{title}</h2>
    {intro && <p className="text-sm text-muted-foreground mb-5 max-w-3xl">{intro}</p>}
    <ul className="grid sm:grid-cols-2 gap-2.5">
      {links.map((l) => (
        <li key={l.to}>
          <Link
            to={l.to}
            className="flex items-center justify-between gap-3 p-3 rounded-xl border border-border hover:border-accent/50 transition-colors text-sm"
          >
            <span>{l.label}</span>
            <ArrowRight className="w-4 h-4 text-accent shrink-0" />
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default SocialClusterLinks;
