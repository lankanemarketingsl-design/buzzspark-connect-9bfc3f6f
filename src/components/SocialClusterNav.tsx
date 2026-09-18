import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { socialHubLinks } from "@/data/socialClusterPages";

interface Props {
  heading?: string;
  intro?: string;
  /** Paths to leave out (usually the current page). */
  exclude?: string[];
}

/**
 * Hub-and-spoke navigation for the social media cluster.
 * Rendered on the pillar page and on supporting social media content so no
 * specialist page is left orphaned.
 */
const SocialClusterNav = ({ heading, intro, exclude = [] }: Props) => {
  const links = socialHubLinks.filter((l) => !exclude.includes(l.to));

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Social media services</span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
          {heading || "Explore our social media services"}
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm sm:text-base">
          {intro ||
            "Each service below has its own page explaining what it covers, how it runs and what you receive."}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="flex items-center justify-between gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
          >
            <span className="font-medium text-sm">{l.label}</span>
            <ArrowRight className="w-4 h-4 text-accent shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SocialClusterNav;
